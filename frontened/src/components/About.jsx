import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-900 flex justify-center items-center px-6">
        <div className="max-w-3xl bg-gray-800 p-10 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-yellow-500 text-center mb-6">
            About Study App 📚
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Study App is a modern learning platform designed to help students
            learn anytime and anywhere. Our goal is to provide high-quality
            educational content in a simple and user-friendly way.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Whether you are preparing for exams, learning new skills, or
            improving your knowledge, Study App brings courses, notes, and
            practice questions all in one place.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            This application is built using the <span className="text-yellow-400">MERN Stack</span>
            {" "}with a focus on performance, security, and scalability.
          </p>

          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Developed by{" "}
              <span className="text-yellow-500 font-semibold">
                Deepak Kewat
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
