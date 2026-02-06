import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate()

  const submitForm = async (e) => {
    e.preventDefault();

    await axios.post("/api/callback", {
      name,
      phone,
      message,
    });

    alert("✅ Request submitted. We will call you soon.");
    setName(""); setPhone(""); setMessage("");
    navigate("/home")

  };

  return (
    <div className="h-screen w-full">
      <Navbar/>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="w-lg mx-auto   bg-gray-800 p-6 rounded-xl">
          <h2 className="text-yellow-500 text-xl mb-4 text-center">Contact Us</h2>

          <form onSubmit={submitForm} className="flex flex-col gap-4">
            <input
              className="p-3 bg-gray-700 text-white rounded-lg"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              className="p-3 bg-gray-700 text-white rounded-lg"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <textarea
              className="p-3 bg-gray-700 text-white rounded-lg"
              placeholder="Message (optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button className="bg-yellow-500 text-black py-2 rounded-lg cursor-pointer">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;