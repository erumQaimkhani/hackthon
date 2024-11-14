"use client"; // Ye line zaroori hai

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ResumeForm = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [experience, setExperience] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState('');
  const [education, setEducation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const resumeData = {
      name,
      experience,
      email,
      skills,
      education,
    };

    localStorage.setItem(name, JSON.stringify(resumeData));

    router.push(`/resume?name=${name}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-pink-300 rounded-lg shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-center mb-4">Create Your Resume</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-blue-500  bg-pink-200  hover:bg-yellow-100"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Experience:</label>
          <input
            type="text"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-blue-500 bg-pink-200  hover:bg-yellow-100"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 p-2 border border-gray-500 rounded w-full focus:outline-none focus:ring focus:ring-blue-500  bg-pink-200  hover:bg-yellow-100"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Skills:</label>
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="mt-1 p-2 border border-gray-500 rounded w-full focus:outline-none focus:ring focus:ring-blue-500  bg-pink-200  hover:bg-yellow-100"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Education:</label>
          <input
            type="text"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            className="mt-1 p-2 border border-gray-500 rounded w-full focus:outline-none focus:ring focus:ring-blue-500  bg-pink-200 hover:bg-yellow-100"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-pink-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-200"
        >
          Create Resume
        </button>
      </form>
    </div>
  );
};

export default ResumeForm;
