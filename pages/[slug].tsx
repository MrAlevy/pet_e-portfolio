import leftArrowIcon from '@assets/icons/left-arrow.svg';
import Footer from '@components/Footer';
import { ModuleSection } from '@components/ModuleSection';
import { MODULES_LIST } from '@constants';
import { getMarkdownContent } from '@helpers';
import { IModule } from '@types';
import { motion, useAnimation } from 'framer-motion';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Module(props: {
    module: IModule;
    outcomes: string;
    artefacts: string;
    reflection: string;
    notes: string;
    pdp: string;
}) {
    // State to keep track of the active section
    const [activeSection, setActiveSection] = useState('');

    const mainBackButtonRef = useRef<HTMLElement>(null);

    const activeSectionRef = useRef<HTMLElement>(null);
    // Scroll to the section with the provided title
    const scrollToSection = (section: string) => {
        if (section === 'Learning Outcomes') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const sectionElement = document.getElementById(section);
        const activeNavElement = document.getElementById(`nav-item-${section}`);

        if (sectionElement) {
            activeSectionRef.current = activeNavElement;
        }

        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // style={{ backgroundColor: 'cadetblue' }}>
    return (
        <div className="bg-gray-100">
            <Head>
                <title>{props.module.title}</title>
                <meta name="description" content="Learning outcomes and artefacts for the module" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-white my-0 py-8">
                <div
                    style={{
                        position: 'fixed',
                        marginLeft: '-14rem',
                        top: '1rem',
                        transition: 'color 0.3s ease',
                    }}
                >
                    <motion.div
                        style={{
                            transition: 'color 0.3s ease',
                        }}
                        whileHover={{ scaleX: 1.02 }} // Add scaling animation on hover
                    >
                        <Link href="/">
                            <div
                                className="text-3xl font-bold text-gray-600 text-center"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontWeight: 700,
                                    fontSize: '23px',
                                    letterSpacing: '15px',
                                    fontStretch: 'extra-expanded',
                                }}
                                onMouseEnter={() => {
                                    if (mainBackButtonRef.current) {
                                        mainBackButtonRef.current.style.color = '#6f7a89';
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (mainBackButtonRef.current) {
                                        mainBackButtonRef.current.style.color = '#4b5563';
                                    }
                                }}
                            >
                                <Image
                                    priority
                                    src={leftArrowIcon}
                                    alt="Back"
                                    width={16}
                                    height={16}
                                />
                                <span
                                    className="pl-5"
                                    id="main-back-button"
                                    ref={mainBackButtonRef}
                                >
                                    Main
                                </span>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Add navigation */}
                    <nav>
                        <ActiveFrame sectionElementRef={activeSectionRef} height={30} />
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <NavItem
                                title="Learning Outcomes"
                                activeSection={activeSection}
                                scrollToSection={scrollToSection}
                                setActiveSection={setActiveSection}
                            />
                            <NavItem
                                title="Artefacts"
                                activeSection={activeSection}
                                scrollToSection={scrollToSection}
                                setActiveSection={setActiveSection}
                            />
                            <NavItem
                                title="Reflection"
                                activeSection={activeSection}
                                scrollToSection={scrollToSection}
                                setActiveSection={setActiveSection}
                            />
                            <NavItem
                                title="Meeting Notes"
                                activeSection={activeSection}
                                scrollToSection={scrollToSection}
                                setActiveSection={setActiveSection}
                            />
                            <NavItem
                                title="PDP and Action Plan"
                                activeSection={activeSection}
                                scrollToSection={scrollToSection}
                                setActiveSection={setActiveSection}
                            />
                        </ul>
                    </nav>
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
                        }}
                    >
                        {props.module.title}
                    </h1>
                </div>

                <ModuleSection
                    id="Learning Outcomes"
                    title="Learning Outcomes"
                    content={props.outcomes}
                />
                <ModuleSection id="Artefacts" title="Artefacts" content={props.artefacts} />
                <ModuleSection id="Reflection" title="Reflection" content={props.reflection} />
                <ModuleSection id="Meeting Notes" title="Meeting Notes" content={props.notes} />
                <ModuleSection
                    id="PDP and Action Plan"
                    title="PDP and Action Plan"
                    content={props.pdp}
                />

                <div className="border-t border-gray-300 mt-5 mb-5" />
                <Footer />
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

// Navigation item component with framer-motion animations
const NavItem = ({
    title,
    activeSection,
    scrollToSection,
    setActiveSection,
}: {
    title: string;
    activeSection: string;
    scrollToSection: (section: string) => void;
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const isActive = activeSection === title;
    const [frameOffset, setFrameOffset] = useState(0);

    return (
        <li
            style={{
                cursor: 'pointer',
                marginBottom: '10px',
            }}
            onClick={() => {
                scrollToSection(title);
                setActiveSection(title);
            }}
            id={`nav-item-${title}`}
        >
            <motion.span
                style={{
                    color: isActive ? '#4b5563' : '#818181',
                    fontWeight: isActive ? 700 : 400,
                }}
            >
                {title}
            </motion.span>
        </li>
    );
};

const ActiveFrame = (props: {
    sectionElementRef: React.RefObject<HTMLElement>;
    height: number;
}) => {
    const controls = useAnimation();

    if (props.sectionElementRef.current) {
        console.log(props.sectionElementRef);
        const rect = props.sectionElementRef.current.getBoundingClientRect();
        controls.start({ top: rect.y - rect.height / 2 });
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log(entry);
                        const rect = document
                            .getElementById(`nav-item-${entry.target.id}`)
                            ?.getBoundingClientRect();
                        controls.start({ top: rect.y - rect.height / 2 });
                    }
                });
            },
            { threshold: 0.3 }
        );

        const outcomes = document.getElementById('Learning Outcomes');
        const artefacts = document.getElementById('Artefacts');
        const reflection = document.getElementById('Reflection');
        const notes = document.getElementById('Meeting Notes');
        const pdp = document.getElementById('PDP and Action Plan');

        observer.observe(outcomes);
        observer.observe(artefacts);
        observer.observe(reflection);
        observer.observe(notes);
        observer.observe(pdp);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <motion.div
            style={{
                width: '100%',
                height: props.height,
                border: '1px solid #4b5563',
                position: 'absolute',
                left: 0,
            }}
            animate={controls}
            transition={{ duration: 0.3 }}
        />
    );
};

export const getServerSideProps = async ({
    params,
    res,
}: GetServerSidePropsContext<{ slug: string }>) => {
    if (!params?.slug) {
        return { props: {} };
    }

    const { slug } = params;

    const module = MODULES_LIST.find((e) => e.slug === slug);

    if (!module) {
        res.writeHead(302, { Location: '/e-portfolio' });
        res.end();
        return { props: {} };
    }

    const [outcomes, artefacts, reflection, notes, pdp] = getMarkdownContent({
        filenames: ['outcomes.md', 'artefacts.md', 'reflection.md', 'notes.md', 'pdp.md'],
        moduleId: module.id,
    });

    return {
        props: {
            module,
            outcomes,
            artefacts,
            reflection,
            notes,
            pdp,
        },
    };
};
