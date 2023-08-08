import leftArrowIcon from '@assets/icons/left-arrow.svg';
import { rootPath } from '@config';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function BackToMainButton() {
    const mainBackButtonRef = useRef<HTMLElement | null>(null);

    return (
        <motion.div
            style={{
                paddingTop: '2rem',
                transition: 'color 0.3s ease',
            }}
            whileHover={{ scaleX: 1.02 }}
        >
            <Link href={rootPath}>
                <div
                    className="text-3xl font-bold text-gray-600 text-center justify-end"
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
                    <Image priority src={leftArrowIcon} alt="Back" width={16} height={16} />
                    <span className="pl-5" id="main-back-button" ref={mainBackButtonRef}>
                        Main
                    </span>
                </div>
            </Link>
        </motion.div>
    );
}
