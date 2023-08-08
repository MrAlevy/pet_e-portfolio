import BackToMainButton from '@components/BackToMainButton';
import Footer from '@components/Footer';
import { ModuleSection } from '@components/ModuleSection';
import NavActiveItemFrame from '@components/NavActiveItemFrame';
import NavItem from '@components/NavItem';
import { rootPath } from '@config';
import { MODULES_LIST } from '@constants';
import { generateNavElementId, generateSectionElementId, getMarkdownContent } from '@helpers';
import { IModule, ISection } from '@types';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useRef, useState } from 'react';

export default function Module(props: {
    moduleMeta: IModule;
    moduleSections: ISection[] | undefined | [];
}) {
    console.log(props.moduleSections);
    const [activeSectionId, setActiveSectionId] = useState(props.moduleSections?.[0]?.id || '');
    const activeSectionRef = useRef<HTMLElement | null>(null);

    const scrollToSection = (sectionId: string) => {
        if (sectionId === activeSectionId || !global.window || !props.moduleSections?.length) {
            return;
        }

        if (sectionId === props.moduleSections[0]?.id) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const sectionElement = document.getElementById(generateSectionElementId({ sectionId }));
        const activeNavElement = document.getElementById(generateNavElementId({ sectionId }));

        if (sectionElement) {
            activeSectionRef.current = activeNavElement;
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-gray-100">
            <Head>
                <title>{props.moduleMeta.title}</title>
                <meta name="description" content="Learning outcomes and artefacts for the module" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-white my-0 py-8 min-h-screen">
                <div
                    style={{
                        position: 'fixed',
                        marginLeft: '-14rem',
                        top: '1rem',
                        transition: 'color 0.3s ease',
                    }}
                >
                    <BackToMainButton />

                    {props.moduleSections?.length && (
                        <nav>
                            <NavActiveItemFrame
                                sectionIds={props.moduleSections.map((e) => e.id)}
                                setActiveSectionId={setActiveSectionId}
                            />
                            <ul
                                className="flex items-end flex-col mt-20 text-xl pr-2 z-50 relative"
                                style={{ marginLeft: '-1rem' }}
                            >
                                {props.moduleSections.map(({ id, title }) => (
                                    <NavItem
                                        key={id}
                                        title={title}
                                        sectionId={id}
                                        isActive={id === activeSectionId}
                                        scrollToSection={scrollToSection}
                                        setActiveSectionId={setActiveSectionId}
                                    />
                                ))}
                            </ul>
                        </nav>
                    )}
                </div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'baseline',
                        textAlign: 'end',
                        color: '#818181',
                        fontWeight: 700,
                    }}
                >
                    <h1
                        style={{
                            margin: '0',
                            fontWeight: 'inherit',
                            color: '#ff8181',
                            transform: 'scaleY(2.5)',
                            zIndex: 100,
                            position: 'relative',
                        }}
                    >
                        {props.moduleMeta.title}
                    </h1>
                </div>

                {props.moduleSections?.map(({ id, title, content }) => (
                    <ModuleSection
                        key={id}
                        sectionId={id}
                        title={title}
                        content={content}
                        isFirst={id === props.moduleSections?.[0].id}
                    />
                ))}

                <div>
                    <div className="border-t border-gray-300 mt-5 mb-5" />
                    <Footer />
                </div>
            </main>

            <style jsx global>{`
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    line-height: 1.6;
                }
                main {
                    max-width: 800px;
                    margin: 40px auto;
                    padding: 0 20px;
                }
                h1 {
                    font-size: 36px;
                    margin-bottom: 20px;
                }
                h2 {
                    font-size: 24px;
                    margin-bottom: 10px;
                }
            `}</style>
        </div>
    );
}

export const getServerSideProps = async ({
    params,
    res,
}: GetServerSidePropsContext<{ slug: string }>) => {
    if (!params?.slug) {
        return { props: {} };
    }

    const { slug } = params;

    const moduleMeta = MODULES_LIST.find((e) => e.slug === slug);

    if (!moduleMeta) {
        res.writeHead(302, { Location: rootPath });
        res.end();
        return { props: {} };
    }

    const moduleSections =
        getMarkdownContent({
            moduleId: moduleMeta.id,
        })?.sort((a, b) => a.id.localeCompare(b.id)) || null;

    return {
        props: {
            moduleMeta,
            moduleSections,
        },
    };
};
