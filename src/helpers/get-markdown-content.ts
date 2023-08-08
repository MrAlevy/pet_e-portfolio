import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getMarkdownContent = (params: { moduleId: string }) => {
    const contentDir = path.join(process.cwd(), 'content', params.moduleId);

    if (!fs.existsSync(contentDir)) {
        fs.mkdirSync(contentDir);
    }

    let result;

    const filenames = fs.readdirSync(contentDir);

    for (const filename of filenames) {
        const fullPath = path.join(contentDir, filename);
        const [id, title] = filename.split('_');

        if (!id || !title) {
            continue;
        }

        const fileContent = fs.readFileSync(fullPath, 'utf8');
        const { content } = matter(fileContent);

        if (!result) {
            result = [];
        }

        result.push({ id, title: title?.slice(0, -3), content });
    }

    return result;
};
