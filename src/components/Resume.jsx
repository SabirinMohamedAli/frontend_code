import React from 'react';

function Resume({ language }) {
  return (
    <div className="p-8 text-white" style={{ backgroundColor: '#1E0236' }}>
      <h2 className="text-4xl font-bold mb-8 text-secondary">
        {language === 'en' ? 'My Resume' : 'CV-ga Aniga'}
      </h2>

      <section className="mb-12">
        <h3 className="text-3xl font-semibold mb-4">
          {language === 'en' ? 'Work Experience' : 'Khibradda Shaqo'}
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-bold">Full Stack Developer</h4>
            <p className="text-sm text-gray-400">Company Name | 2021 - Present</p>
            <p className="mt-2">
              {language === 'en'
                ? 'Developed and maintained web applications using React, Node.js, and MongoDB.'
                : 'Waxaan sameeyey una habeeyay codsiyada webka anigoo adeegsanaya React, Node.js, iyo MongoDB.'}
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold">Mobile App Developer</h4>
            <p className="text-sm text-gray-400">Another Company | 2019 - 2021</p>
            <p className="mt-2">
              {language === 'en'
                ? 'Designed and developed mobile applications for Android and iOS platforms.'
                : 'Waxaan naqshadeeyay oo sameeyay codsiyada mobile-ka ee Android iyo iOS.'}
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-3xl font-semibold mb-4">
          {language === 'en' ? 'Education' : 'Waxbarashada'}
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-bold">Bachelor of Science in Computer Science</h4>
            <p className="text-sm text-gray-400">Jamhuriya University | 2016 - 2020</p>
            <p className="mt-2">
              {language === 'en'
                ? 'Graduated with honors in Computer Science.'
                : 'Waxaan ku qaatay shahaado sharaf cilmiga kombiyuutarka.'}
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-3xl font-semibold mb-4">
          {language === 'en' ? 'Skills' : 'Xirfadaha'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-secondary p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-bold text-primary">React</h4>
            <p className="text-primary">{language === 'en' ? 'Advanced' : 'Sare'}</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-bold text-primary">Node.js</h4>
            <p className="text-primary">{language === 'en' ? 'Advanced' : 'Sare'}</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-bold text-primary">MongoDB</h4>
            <p className="text-primary">{language === 'en' ? 'Intermediate' : 'Dhexdhexaad'}</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-bold text-primary">Graphic Design</h4>
            <p className="text-primary">{language === 'en' ? 'Expert' : 'Khabiir'}</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-bold text-primary">Java Spring Boot</h4>
            <p className="text-primary">{language === 'en' ? 'Advanced' : 'Sare'}</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-bold text-primary">PostgreSQL</h4>
            <p className="text-primary">{language === 'en' ? 'Advanced' : 'Sare'}</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-2xl font-bold text-primary">Docker</h4>
            <p className="text-primary">{language === 'en' ? 'Intermediate' : 'Dhexdhexaad'}</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-3xl font-semibold mb-4">
          {language === 'en' ? 'Achievements' : 'Guulaha'}
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            {language === 'en'
              ? 'Won the Best Mobile App Developer award in 2021.'
              : 'Waxaan ku guuleystay abaalmarinta Horumariye Codsiyada Mobile-ka ugu fiican ee 2021.'}
          </li>
          <li>
            {language === 'en'
              ? 'Successfully led a team to develop a full-stack web application.'
              : 'Waxaan si guul leh u hogaamiyay koox si ay u horumariyaan codsiyo web oo buuxa.'}
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;
