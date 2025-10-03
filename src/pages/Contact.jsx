import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Download, Mail, User, MessageSquare } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const phoneNumber = "201210238724";

  const handleSend = () => {
    if (!name || !email || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    const text = `Hello, my name is ${name}
Email: ${email}
Message: ${message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center mt-20 px-6"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl font-bold tracking-wide text-white"
      >
        Contact
      </motion.h2>

      <div className="container w-full flex flex-col lg:flex-row justify-center items-start gap-12 lg:gap-20">
        {/* Form Card */}
        <div className="p-8 flex flex-col bg-gray-900 shadow-xl rounded-2xl w-full max-w-lg">
          <div className="relative">
            <User className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
            <input
              onChange={(e) => setName(e.target.value)}
              className="bg-[#111827] rounded-xl mt-2 w-full h-[55px] pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              type="text"
              placeholder="Your Name"
            />
          </div>

          <div className="relative">
            <Mail className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#111827] rounded-xl mt-4 w-full h-[55px] pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              type="email"
              placeholder="Your Email"
            />
          </div>

          <div className="relative">
            <MessageSquare className="absolute top-5 left-4 text-gray-400" />
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              className="bg-[#111827] rounded-xl mt-4 w-full h-[150px] pl-12 pr-4 pt-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            onClick={handleSend}
            className="mt-6 flex items-center justify-center gap-2 cursor-pointer bg-cyan-600 hover:bg-cyan-500 rounded-xl px-6 py-3 text-white font-semibold transition-all duration-300"
          >
            <MessageSquare className="w-5 h-5" />
            Send Message
          </button>
        </div>

        {/* Info Section */}
        <div className="text-center lg:text-left max-w-md text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Let’s Work Together!
          </h1>
          <p className="text-gray-300 text-base leading-relaxed mb-6">
            I usually respond within 24 hours. Feel free to reach out for
            collaborations, freelance work, or just a friendly hello!
          </p>

          {/* CV Download */}
          <a
            target="blank"
            href="https://drive.google.com/file/d/1lNjtVjQ6WVoE_J3cneLtnRc6h_3K91Ta/view
"
            download
            className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
