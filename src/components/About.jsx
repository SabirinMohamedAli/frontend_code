import React from 'react';
import MyImage from '../images/4.png'; // Ku dar sawirkaaga halkan
import { motion } from 'framer-motion';

function About({ language }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 space-y-8 md:space-y-0 md:space-x-12">
      <motion.div 
        className="md:w-1/2"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={MyImage}
          alt="About Me"
          className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
      </motion.div>
      <motion.div 
        className="md:w-1/2"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-secondary">
          {language === 'en' ? 'About Me' : 'Ku Saabsan Aniga'}
        </h2>
        <p className="text-lg mb-6">
          {language === 'en'
            ? 'I am a passionate Full Stack Developer, Mobile App Developer, and Graphic Designer with a keen eye for detail and a love for creating visually appealing and user-friendly designs. My goal is to bring your ideas to life through code and design, ensuring a seamless user experience and aesthetic appeal.'
            : 'Anigu waxaan ahay Horumariye Full Stack ah, Horumariye Mobile App ah, iyo Naqshadeeye Sawireed oo leh dareen qoto dheer iyo jacayl uu u qabo abuurista naqshado soo jiidasho leh oo sahlan in la isticmaalo. Ujeedkeygu waa inaan fikradahaaga ku soo nooleeyo koodh iyo naqshad, anigoo hubinaya waayo-aragnimo isticmaal iyo soo jiidasho muuqaalka.'}
        </p>
        <button className="bg-secondary text-primary px-6 py-3 rounded hover:bg-accent transition-colors duration-300">
          {language === 'en' ? 'Learn More' : 'Wax Dheeraad Ah Baro'}
        </button>
      </motion.div>
    </div>
  );
}

export default About;
