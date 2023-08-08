import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { generateNavElementId, generateSectionElementId } from '@helpers';

export default function NavActiveItemFrame(props: {
    sectionIds: string[];
    setActiveSectionId: React.Dispatch<React.SetStateAction<string>>;
}) {
    const controls = useAnimation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const rect = document
                            .getElementById(
                                generateNavElementId({ sectionId: entry.target.id.split('-')[2] })
                            )
                            ?.getBoundingClientRect();
                        if (!rect) {
                            return;
                        }

                        props.setActiveSectionId(entry.target.id.split('-')[2]);

                        controls.start({
                            top: rect.y - rect.height / 2 - 6,
                            transition: {
                                type: 'spring',
                                stiffness: 500,
                                damping: 20,
                            },
                        });
                    }
                });
            },
            { threshold: 0.3 }
        );

        props.sectionIds.forEach((sectionId) => {
            const element = document.getElementById(generateSectionElementId({ sectionId }));
            element && observer.observe(element);
        });

        return () => {
            observer.disconnect();
        };
    }, [controls, props]);

    return (
        <motion.div
            style={{
                height: 30,
                width: '142%',
                position: 'absolute',
                left: '-38%',
                padding: '19px 10px',
                backgroundColor: 'rgba(164, 255, 239, 0.38)',
                zIndex: 20,
                borderRadius: '30px',
                boxShadow: '0px 0px 6px 0px rgba(0,0,0,0.75)',
            }}
            initial={{ top: '6rem' }}
            animate={controls}
        />
    );
}
