import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getMarkdownContent = (params: { moduleId: string }) => {
  const contentDir = path.join(process.cwd(), "content", params.moduleId);

  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir);
  }

  let result;

  const filenames = fs.readdirSync(contentDir);

  for (const filename of filenames) {
    const fullPath = path.join(contentDir, filename);
    const [id, title] = filename.split("_");

    if (!id || !title) {
      continue;
    }

    const fileContent = fs.readFileSync(fullPath, "utf8");
    let { content } = matter(fileContent);

    // Replace relative image paths with absolute paths
    const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';

      content = content.replace(
        /!\[([^\]]+)\]\((\/images\/[^)]+)\)/g,
        (_, alt, src) => {
          const fullSrc = `${assetPrefix}${src}`;
          return `<div align="center"><img src="${fullSrc}" alt="${alt}"/></div>`;
        },
      );

    if (!result) {
      result = [];
    }

    result.push({ id, title: title?.slice(0, -3), content });
  }

  return result;
};
