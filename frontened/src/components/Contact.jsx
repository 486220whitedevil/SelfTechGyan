import React, { useState } from "react";
import Navbar from "./Navbar";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Contact Form Data:", form);
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-900 flex justify-center items-center">
                <div className="bg-gray-800 p-10 rounded-xl w-full max-w-md shadow-lg">
                    <h2 className="text-2xl font-bold text-white text-center mb-6">
                        Contact Us 📩
                    </h2>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="px-4 py-2 rounded bg-gray-700 text-white outline-none"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="px-4 py-2 rounded bg-gray-700 text-white outline-none"
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={form.message}
                            onChange={handleChange}
                            rows="4"
                            required
                            className="px-4 py-2 rounded bg-gray-700 text-white outline-none resize-none"
                        />

                        <button
                            type="submit"
                            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
