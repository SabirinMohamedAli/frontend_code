import React from 'react';

function Projects({ language }) {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">
        {language === 'en' ? 'My Projects' : 'Mashruucyada Aniga'}
      </h2>
      <p className="text-lg">
        {language === 'en'
          ? 'This is the projects section. Showcase your projects here.'
          : 'Kani waa qaybta mashruucyada. Soo bandhig mashruucyadaada halkan.'}
      </p>
    </div>
  );
}

export default Projects;
