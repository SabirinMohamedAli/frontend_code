import React from 'react';
import { motion } from 'framer-motion';

function Resume({ language }) {
  return (
    <div className="p-6 md:p-8 text-white" style={{ backgroundColor: '#1E0236' }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-secondary">
        {language === 'en' ? 'My Resume' : 'CV-ga Aniga'}
      </h2>

      <section className="mb-12">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          {language === 'en' ? 'Summary' : 'Dulmar'}
        </h3>
        <p className="text-base md:text-lg">
          {language === 'en'
            ? 'I am a highly motivated Full Stack Developer with a strong background in web and mobile application development. Skilled in JavaScript, React, and Node.js, I excel in building user-friendly interfaces and robust backend systems. My goal is to contribute to innovative projects that solve real-world problems, with a focus on delivering high-quality, scalable solutions.'
            : 'Waxaan ahay horumariye Full Stack oo leh asluub adag iyo waayo-aragnimo xooggan oo dhanka web iyo moobilka. Waxaan si fiican u isticmaalaa JavaScript, React, iyo Node.js, waxaan ku fiicanahay abuurista interfaces isticmaale oo sahlan iyo nidaamyo backend oo adag. Yoolkaygu waa in aan gacan ka geysto mashaariic cusub oo xalliya dhibaatooyinka dhabta ah, anigoo diiradda saaraya bixinta xalal tayo leh oo la cabbiri karo.'}
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          {language === 'en' ? 'Work Experience' : 'Khibradda Shaqo'}
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl md:text-2xl font-bold">
              {language === 'en' ? 'Build Projects for Self Education' : 'Mashruucyo Barashada Iska Leh'}
            </h4>
            <p className="text-sm text-gray-400">2023 - 2024</p>
            <p className="mt-2 text-base md:text-lg">
              {language === 'en'
                ? 'As part of self-directed education, I built various projects to strengthen my skills in React.js and Java Spring Boot. These projects focused on improving my frontend and backend development capabilities.'
                : 'Waxaan dhisay mashruucyo kala duwan si aan u xoojiyo xirfadahayga React.js iyo Java Spring Boot iyada oo qayb ka ah waxbarashadayda gaarka ah. Mashruucyadani waxay diiradda saarayeen horumarinta frontend iyo backend.'}
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          {language === 'en' ? 'Education' : 'Waxbarashada'}
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl md:text-2xl font-bold">
              {language === 'en' ? 'Bachelor of Science in Computer Science' : 'Bachelor-ka Sayniska Kombiyuutarka'}
            </h4>
            <p className="text-sm text-gray-400">
              Jamhuriya University of Science and Technology | 2021 - 2025
            </p>
            <p className="mt-2 text-base md:text-lg">
              {language === 'en'
                ? 'Currently pursuing a bachelor’s degree with a focus on full stack development and web/mobile application technologies.'
                : 'Waxaan ku guda jiraa barashada bachelor-ka anigoo diiradda saaray horumarinta full stack iyo teknoolojiyada web/moobilka.'}
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          {language === 'en' ? 'Skills' : 'Xirfadaha'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            className="bg-secondary p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-2xl font-bold text-primary">React</h4>
            <p className="text-primary">{language === 'en' ? 'Advanced' : 'Sare'}</p>
          </motion.div>
          <motion.div
            className="bg-secondary p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-2xl font-bold text-primary">Node.js</h4>
            <p className="text-primary">{language === 'en' ? 'Advanced' : 'Sare'}</p>
          </motion.div>
          <motion.div
            className="bg-secondary p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-2xl font-bold text-primary">MongoDB</h4>
            <p className="text-primary">{language === 'en' ? 'Intermediate' : 'Dhexdhexaad'}</p>
          </motion.div>
          <motion.div
            className="bg-secondary p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-2xl font-bold text-primary">Graphic Design</h4>
            <p className="text-primary">{language === 'en' ? 'Basic' : 'Aasaasi'}</p>
          </motion.div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          {language === 'en' ? 'Achievements' : 'Guulaha'}
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-base md:text-lg">
          <li>
            {language === 'en'
              ? 'Developed a fully functional e-commerce website using React.js and Java Spring Boot.'
              : 'Waxaan horumariyay website e-commerce ah oo buuxa oo la isticmaalayo React.js iyo Java Spring Boot.'}
          </li>
          <li>
            {language === 'en'
              ? 'Optimized website performance by reducing loading time by 40%, resulting in a 15% increase in user engagement and 10% increase in sales.'
              : 'Waxaan hagaajiyay waxqabadka website-ka oo aan hoos u dhigay waqtiga loading-ka 40%, taas oo horseeday korodh 15% isticmaalayaasha iyo 10% iibka.'}
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;
