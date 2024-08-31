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
    // Here you can add functionality to handle the form submission
    console.log('Form Data Submitted:', formData);
    alert(language === 'en' ? 'Message sent successfully!' : 'Fariinta waa la diray si guul leh!');
    // Reset the form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">
        {language === 'en' ? 'Contact Me' : 'La Xiriir Aniga'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">{language === 'en' ? 'Name' : 'Magaca'}</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded text-black"
            placeholder={language === 'en' ? 'Your Name' : 'Magacaaga'}
            required
          />
        </div>
        <div>
          <label className="block mb-1">{language === 'en' ? 'Email' : 'Email-ka'}</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded text-black"
            placeholder={language === 'en' ? 'Your Email' : 'Email-kaaga'}
            required
          />
        </div>
        <div>
          <label className="block mb-1">{language === 'en' ? 'Message' : 'Fariin'}</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded text-black"
            rows="5"
            placeholder={language === 'en' ? 'Your Message' : 'Fariintaada'}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-secondary text-primary px-4 py-2 rounded hover:bg-accent"
        >
          {language === 'en' ? 'Send Message' : 'Dir Fariin'}
        </button>
      </form>
    </div>
  );
}

export default Contact;
