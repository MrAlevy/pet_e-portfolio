import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getMarkdownContent = (params: { filenames: string[]; moduleId: string }) => {
    const contentDir = path.join(process.cwd(), 'content', params.moduleId);

    const contentList = [];

    for (const filename of params.filenames) {
        const fullPath = path.join(contentDir, filename);

        if (!fs.existsSync(contentDir)) {
            fs.mkdirSync(contentDir);
        }

        if (!fs.existsSync(fullPath)) {
            fs.writeFileSync(fullPath, '');
        }

        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const { content } = matter(fileContents);

        contentList.push(content);
    }

    return contentList;
};
