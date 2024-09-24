import React, { useState } from 'react';

function Contact({ language }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert(language === 'en' ? 'Message sent successfully!' : 'Fariinta waa la diray si guul leh!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-4xl font-bold mb-8 text-center text-primary">
        {language === 'en' ? 'Contact Me' : 'La Xiriir Aniga'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label className="text-lg mb-2">{language === 'en' ? 'Name' : 'Magaca'}</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
            placeholder={language === 'en' ? 'Your Name' : 'Magacaaga'}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg mb-2">{language === 'en' ? 'Email' : 'Email-ka'}</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
            placeholder={language === 'en' ? 'Your Email' : 'Email-kaaga'}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg mb-2">{language === 'en' ? 'Message' : 'Fariin'}</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
            rows="5"
            placeholder={language === 'en' ? 'Your Message' : 'Fariintaada'}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 text-white bg-secondary rounded hover:bg-accent transition-colors duration-300"
        >
          {language === 'en' ? 'Send Message' : 'Dir Fariin'}
        </button>
      </form>
    </div>
  );
}

export default Contact;
