import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Yahan API call ya aur processing kar sakte ho
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-black dark:text-white">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name */}
          <div>
            <label className="block text-black dark:text-white mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full py-2 px-4 border-2 rounded-md outline-none bg-white dark:bg-gray-700 text-black dark:text-white"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-black dark:text-white mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-2 px-4 border-2 rounded-md outline-none bg-white dark:bg-gray-700 text-black dark:text-white"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-black dark:text-white mb-1">Message</label>
            <textarea
              name="message"
              placeholder="Type your message..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full py-2 px-4 border-2 rounded-md outline-none bg-white dark:bg-gray-700 text-black dark:text-white"
              required
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
