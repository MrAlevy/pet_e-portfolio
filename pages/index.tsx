import Footer from '@components/Footer';
import ModuleTile from '@components/ModuleTile';
import { MODULES_LIST, TILES_PALETTE } from '@constants';

export default function ePortfolio() {
    const shuffledColors = TILES_PALETTE;

    for (let i = shuffledColors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledColors[i], shuffledColors[j]] = [shuffledColors[j], shuffledColors[i]];
    }

    return (
        <div className="min-h-screen py-10 px-4 flex flex-col justify-between bg-gray-100">
            <Title />

            <div className="max-w-3xl mx-auto mb-9">
                <AboutMe />
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {MODULES_LIST.map((e, index) => (
                        <ModuleTile
                            key={e.id}
                            index={index}
                            module={e}
                            disabled={false}
                            colors={shuffledColors}
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

const Title = () => {
    return (
        <div className="text-gray-600 text-center select-none">
            <h1
                className="text-3xl font-bold"
                style={{
                    letterSpacing: '15px',
                    fontStretch: 'extra-expanded',
                }}
            >
                E-Portfolio
            </h1>
            <p className="text-lg">MSc Computer Science • University of Essex</p>
        </div>
    );
};

const AboutMe = () => {
    return (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md mb-8">
            <h1 className="text-2xl font-bold mb-4">About me</h1>
            <p className="text-gray-600 mb-6">
                Hi there! I am a passionate web developer with a strong focus on creating clean and
                modern user interfaces. I love turning ideas into reality through code. Check out my
                projects and feel free to connect with me on LinkedIn!
            </p>
            <a
                href="https://www.linkedin.com/in/alex-vygodchikov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
            >
                Connect with me on LinkedIn
            </a>
        </div>
    );
};
