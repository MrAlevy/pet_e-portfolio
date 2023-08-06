import checkIcon from '@assets/icons/checkmark.svg';
import copyIcon from '@assets/icons/copy.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function CodeBlock({ inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');

    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [isCopyButtonVisible, setIsCopyButtonVisible] = useState(false);

    // Function to show tooltip and hide it after a delay
    const showTooltip = () => {
        setTooltipVisible(true);

        setTimeout(() => {
            setTooltipVisible(false);
        }, 500);
    };

    if (!inline && match) {
        return (
            <div
                className="code-block"
                style={{
                    position: 'relative',
                }}
                onMouseEnter={() => setIsCopyButtonVisible(true)}
                onMouseLeave={() => setIsCopyButtonVisible(false)}
            >
                {/* Use CopyToClipboard component from the library */}
                <div>
                    <div className="absolute z-50 w-full flex justify-end bg-transparent">
                        <CopyToClipboard
                            text={String(children).replace(/\n$/, '')}
                            onCopy={() => showTooltip()}
                        >
                            <button
                                className="copy-to-clipboard bg-gray-800 text-white rounded-md"
                                title="Copy to Clipboard"
                                style={{
                                    zIndex: 999,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    minWidth: '35px',
                                    minHeight: '35px',
                                    backgroundColor: 'transparent',
                                }}
                            >
                                <motion.div
                                    animate={{ opacity: isCopyButtonVisible ? 1 : 0 }}
                                    whileHover={{ scale: 1.1 }}
                                    className="flex justify-center items-center"
                                >
                                    {tooltipVisible ? (
                                        <Image
                                            priority
                                            src={checkIcon}
                                            alt="Copied"
                                            width={15}
                                            height={15}
                                        />
                                    ) : (
                                        <Image
                                            priority
                                            src={copyIcon}
                                            alt="Copy"
                                            width={20}
                                            height={20}
                                        />
                                    )}
                                </motion.div>
                            </button>
                        </CopyToClipboard>
                        <div
                            className="language-label flex items-center"
                            style={{
                                top: '0',
                                right: '0',
                                padding: '8px 14px 8px 5px',
                                backgroundColor: 'transparent',
                                color: '#ffffffe8',
                                fontSize: '13px',
                                zIndex: 999,
                            }}
                        >
                            {match[1]}
                        </div>
                    </div>
                </div>
                <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    language={match[1]}
                    showLineNumbers
                    lineNumberStyle={{
                        fontSize: '13px',
                        paddingRight: '1.2rem',
                    }}
                    style={styles.materialOceanic}
                    customStyle={{
                        borderRadius: '6px',
                        padding: '15px 12px',
                        fontSize: '14px',
                    }}
                    {...props}
                />
            </div>
        );
    } else {
        return (
            <code
                className="px-1 py-1"
                style={{
                    fontFamily: 'Roboto Mono, monospace',
                    fontSize: '14px',
                    borderRadius: '4px',
                    backgroundColor: '#e2f4ff',
                    color: '#003a51',
                }}
            >
                {children}
            </code>
        );
    }
}
