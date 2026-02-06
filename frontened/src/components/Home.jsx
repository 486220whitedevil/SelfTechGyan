import React from 'react'
import Navbar from './Navbar'
import { useEffect } from 'react';

const Home = () => {
 const speakText = (text) => {
  if (!window.speechSynthesis) return;

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";   // English (India)
  speech.rate = 0.85;
  speech.pitch = 0.6;

  window.speechSynthesis.speak(speech);
};


  useEffect(() => {
    const username = localStorage.getItem("username");

    if (username) {
      speakText(`Welcome ${username} to SelfTechGyan , Learn tech. Think smart. Grow fast.`);
    }
  }, []);

    return (
        < >
            <Navbar />
            <div className='flex justify-center items-center min-h-screen'>
                <div className='p-10 text-center'>
                    <h1 className='text-white font-bold text-2xl pb-6'>Welcome to Study App 📚</h1>
                    <p className='text-white'>
                        Learn anytime, anywhere. Access courses, notes and practice questions
                        at one place.
                    </p>

                    <div className='flex justify-center mt-6 gap-6'>
                        <div  className='bg-white px-5 py-10 rounded-lg'>
                            <h3>📘 Courses</h3>
                            <p>High quality video lectures</p>
                        </div>

                        <div  className='bg-white px-5 py-10 rounded-lg'>
                            <h3>📝 Notes</h3>
                            <p>Easy to understand notes</p>
                        </div>

                        <div className='bg-white px-5 py-10 rounded-lg'>
                            <h3>🧠 Practice</h3>
                            <p>MCQs & coding questions</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
