

import ResumeForm from "./component/ResumFrom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-200">
      <h1 className="text-3xl font-bold mb-4">Welcome to Milestone5</h1>
      <p className="mb-4 text-2xl font-mono text-orange-900">Made by Resume Erum Azeemi Qaimkhani.</p>
      <ResumeForm />
    </div>
  );
};

export default Home;
