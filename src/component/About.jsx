import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">About Our Book App 📚</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">📘 What We Offer</h2>
        <p className="text-gray-700">
          Our platform is designed for book lovers! Whether you're into fiction, non-fiction, self-help, or academic books — we have something for everyone.
          Browse a wide range of books across different categories and stay updated with new releases.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">🎯 About the App</h2>
        <p className="text-gray-700">
          This app is built to make discovering, reading, and managing books easy and accessible. You can view detailed info about each book, save your favorites,
          and even get personalized recommendations based on your interests.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">💰 Paid Courses</h2>
        <p className="text-gray-700">
          Want to go beyond reading? Check out our exclusive paid courses where you can learn:
        </p>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>How to write your own book</li>
          <li>Storytelling and creative writing</li>
          <li>Publishing tips and marketing strategies</li>
        </ul>
        <p className="mt-2 text-gray-700">
          These courses are created by industry experts and bestselling authors to help you take your passion to the next level.
        </p>
      </section>

      <section className="text-center mt-8">
        <p className="text-lg font-semibold text-blue-600">
          Thanks for being a part of our book-loving community! ❤️
        </p>
      </section>
    </div>
  );
};

export default About;
