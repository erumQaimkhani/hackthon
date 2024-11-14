"use client"; // This line is necessary for using client-side features

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Resume = () => {
  const router = useRouter();
  const [resumeData, setResumeData] = useState<{ name: string; experience: string } | null>(null); 

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const name = query.get('name'); // Get the name from URL query
    
    if (name) {
      const data = localStorage.getItem(name); // Retrieve data from local storage
      if (data) {
        setResumeData(JSON.parse(data)); // Parse and set the state
      }
    }
  }, [router]);

  if (!resumeData) {
    return <div>Loading...</div>; // Show loading message while data is being retrieved
  }

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold">{resumeData.name}'s Resume</h1>
      <h2 className="text-xl mt-4">Experience:</h2>
      <p>{resumeData.experience}</p>
    </div>
  );
};

export default Resume;
