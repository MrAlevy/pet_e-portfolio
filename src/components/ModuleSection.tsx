import { generateSectionElementId } from '@helpers';
import style from '@styles/e-portfolio/markdown-styles.module.css';
import Script from 'next/script';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import CodeBlock from './CodeBlock';

export const ModuleSection = (props: {
    sectionId: string;
    title: string;
    content: string;
    isFirst: boolean;
}) => {
    return (
        <div
            id={generateSectionElementId({ sectionId: props.sectionId })}
            className={`mb-16 ${!props.isFirst ? 'pt-5' : ''}`}
        >
            <div
                className="mb-6 border-4 border-b-8 border-r-8 border-gray-900 text-6xl p-4 pt-7 pb-7 font-mono relative z-50"
                style={{
                    backgroundColor: '#ffe2c6',
                }}
            >
                {props.title}
            </div>

            <div className="pl-4 pr-4 relative z-50">
                <ReactMarkdown
                    className={style.reactMarkDown}
                    rawSourcePos={true}
                    skipHtml={false}
                    remarkPlugins={[remarkBreaks, remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        code: CodeBlock,
                    }}
                >
                    {props.content}
                </ReactMarkdown>
                <Script
                    id="mermaid-parser-loader"
                    type="module"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                          import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@9/dist/mermaid.esm.min.mjs";
                          mermaid.initialize({startOnLoad: true});
                          mermaid.contentLoaded();`,
                    }}
                />
            </div>
        </div>
    );
};
