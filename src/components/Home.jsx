import React from 'react';
import About from './About'; // Import About page
import Resume from './Resume'; // Import Resume page
import Projects from './Projects'; // Import Projects page
import Contact from './Contact'; // Import Contact page
import MyImage from '../images/4.png';
import { TypeAnimation } from 'react-type-animation';

const Home = ({ language }) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <section id="intro" className="flex flex-col md:flex-row items-center justify-between py-16">
                <div className="md:w-1/2">
                    <h1 className="text-5xl font-bold mb-6">
                        {language === 'en' ? 'Hi, I am' : 'Salaan, Anigu waxaan ahay'}
                    </h1>
                    <h2 className="text-5xl font-bold mb-6 text-secondary">
                        {language === 'en' ? 'Sabirin Mohamed' : 'Sabirin Mohamed'}
                    </h2>
                    <h3 className="text-3xl font-semibold mb-4">
                        <TypeAnimation
                            sequence={[
                                'Full Stack Developer',
                                1000,
                                'Mobile App Developer',
                                1000,
                                'Graphic Designer',
                                1000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ display: 'inline-block' }}
                        />
                    </h3>
                    <p className="text-lg mb-6">
                        {language === 'en'
                            ? 'I specialize in building high-quality web and mobile applications with a keen eye for design and user experience. Whether it’s crafting dynamic user interfaces or creating captivating graphics, I bring your ideas to life.'
                            : 'Waxaan ku takhasusay dhismaha barnaamijyada webka iyo moobilka oo tayo sare leh, anigoo fiiro gaar ah u leh naqshadaha iyo waayo-aragnimada isticmaale. Haddii ay tahay in la abuuro interfaces isticmaale oo firfircoon ama in la sameeyo sawirro soo jiidasho leh, waxaan kuu keenayaa fikradahaaga nolol.'}
                    </p>
                    <button className="bg-secondary text-primary px-6 py-3 rounded hover:bg-accent text-lg">
                        {language === 'en' ? 'Download Resume' : 'Soo Dejiso CV'}
                    </button>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <img
                        src={MyImage}
                        alt="Sabirin"
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>
            </section>

            <section id="about" className="py-16">
                <About language={language} />
            </section>

            <section id="resume" className="py-16 bg-gray-100">
                <Resume language={language} />
            </section>

            <section id="projects" className="py-16">
                <Projects language={language} />
            </section>

            <section id="contact" className="py-16 bg-gray-100">
                <Contact language={language} />
            </section>

            {/* Add Footer if necessary */}
        </div>
    );
};

export default Home;
