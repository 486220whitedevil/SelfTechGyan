import { useState } from "react";
import axios from "axios";

const CallbackForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    await axios.post("/api/callback", {
      name,
      phone,
      message,
    });

    alert("✅ Request submitted. We will call you soon.");
    setName(""); setPhone(""); setMessage("");
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-xl">
      <h2 className="text-yellow-500 text-xl mb-4">Request a Callback</h2>

      <form onSubmit={submitForm} className="flex flex-col gap-4">
        <input
          className="p-2 bg-gray-700 text-white"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="p-2 bg-gray-700 text-white"
          placeholder="Mobile Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <textarea
          className="p-2 bg-gray-700 text-white"
          placeholder="Message (optional)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className="bg-yellow-500 text-black py-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CallbackForm;
