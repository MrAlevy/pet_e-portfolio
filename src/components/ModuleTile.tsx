import { motion } from 'framer-motion';
import chroma from 'chroma-js';
import { useRouter } from 'next/dist/client/router';

export default function ModuleTile({
    index,
    module,
    disabled,
    colors,
}: {
    index: number;
    module: any;
    disabled: boolean;
    colors: string[];
}) {
    const router = useRouter();

    const tileClickHandler = () => {
        if (!disabled) {
            router.push(`/${module.slug}`);
        }
    };

    const getRandomColors = (colors: string[], index: number) => {
        const color = chroma(colors[index]);
        const randomSign = Math.random() >= 0.7 ? 1 : -1;
        const randomBool = Math.random() >= 0.5;
        const modifiedColor = chroma(colors[index])
            .set('hsl.h', `${(randomBool ? 1 : 3) * randomSign * 45}`)
            .darken(0.5);
        return chroma.scale([color, modifiedColor]).mode('lab').colors(2);
    };

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ scale: 1 }}
            animate={{ scale: 1, transition: { duration: 0.2 } }}
            className={`relative p-6 rounded-lg shadow-md ${
                disabled
                    ? 'cursor-not-allowed pointer-events-none bg-gray-50'
                    : 'cursor-pointer bg-white'
            }`}
            onClick={tileClickHandler}
            style={{ minHeight: '140px' }}
        >
            <a
                className={`text-xl font-semibold mb-4 ${disabled ? 'text-gray-400' : ''}`}
                style={{ zIndex: 200 }}
            >
                {module.title}
            </a>
            <motion.div
                className={`gradient-overlay relative p-6 rounded-lg shadow-md`}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: `linear-gradient(135deg, ${getRandomColors(colors, index).join(
                        ','
                    )})`,
                    boxShadow: `5px 5px 10px rgba(0, 0, 0, 0.5)`,
                    opacity: 0,
                    zIndex: 10,
                    mixBlendMode: 'multiply',
                }}
                whileHover={{ opacity: 1 }}
                animate={{ transition: { duration: 0.4 } }}
            />
        </motion.div>
    );
}
