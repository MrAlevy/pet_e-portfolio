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
        <div className="min-h-screen py-10 px-4 flex flex-col justify-between bg-gray-100 max-h-screen">
            <Title />

            <div className="max-w-3xl mx-auto mb-9">
                <AboutMe />

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {MODULES_LIST.map((e, index) => (
                        <ModuleTile
                            key={e.id}
                            index={index}
                            module={e}
                            disabled={!!e.disabled}
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
        <div className="text-gray-600 text-center select-none mb-5">
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
            <p className="text-gray-600 text-justify">
                {`Hey there! I'm a passionate web developer with experience in both frontend and
                backend. Recently, I've been working as a team lead, with a focus on utilizing AWS
                cloud services to build a scalable and reliable service that is used by millions of
                users all over the world. I'm continuously learning new technologies and enhancing
                my skills. Currently, I'm just about to start using Rust in production at work.
                Also, I'm studying for an MSc CS at the University of Essex Online.`}
                <br />
                <br /> Feel free to check out my CV and connect with me on{' '}
                <a
                    href="https://www.linkedin.com/in/alex-vygodchikov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                >
                    LinkedIn
                </a>
                ! Or check source on{' '}
                <a
                    href="https://github.com/MrAlevy/pet_e-portfolio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                >
                    GitHub
                </a>
                .
            </p>
        </div>
    );
};
