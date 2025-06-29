import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    try {
      await axios.post("https://ibtisum-raian-server.vercel.app/api/send-email", {
        name,
        email,
        message,
      });

      Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Message sent successfully!",
      showConfirmButton: false,
      timer: 2000,
      iconColor: "#ec9956",
      customClass: {
        popup: "text-white border border-[#ec9956]",
        title: "text-[#ec9956]",       
        content: "text-[#ec9956]",     
      },
      background: "linear-gradient(to bottom right, #62393c, #181e41)",
    }); 

      e.target.reset();
    } catch (err) {
      console.error(err);

      Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Failed to send message!",
      text: "Please try again later.",
      showConfirmButton: false,
      timer: 2500,
      iconColor: "#e9615e",
      customClass: {
        popup: "text-white border border-[#e9615e]",
        title: "text-[#e9615e]",
        content: "text-[#e9615e]",
      },
      background: "linear-gradient(to bottom right, #62393c, #181e41)",
    });

    }
  };

  return (
    <section id="contact" className="w-11/12 mx-auto py-20 text-white">
      <h2 className="text-5xl font-bold text-center mb-16">Contact</h2>

      <div className="grid md:grid-cols-2 gap-10 bg-gradient-to-br from-[#62393c] to-[#181e41] p-6 rounded-3xl border border-[#ec9956]">
        {/* Left - Contact Info */}
        <div className="bg-[#2b2d42] bg-opacity-30 p-6 sm:p-8 rounded-2xl border border-[#ec9956] flex flex-col gap-6 justify-center">
          <h3 className="text-3xl font-bold text-[#ec9956] mb-2">Let's Connect</h3>
          <p className="text-gray-300 text-lg">
            I'm always open to meaningful connections — whether it's a new opportunity, a collaboration, or just a great conversation. Don't hesitate to reach out!
          </p>

          <div className="space-y-4 mt-4 text-sm sm:text-base">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#ec9956] text-xl" />
              <a href="mailto:ibtisumraian@gmail.com" className="text-gray-300 hover:text-white transition">
                ibtisumraian@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#ec9956] text-xl" />
              <span className="text-gray-300">Khulna, Bangladesh</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#ec9956] text-xl" />
              <a href="tel:+8801323861148" className="text-gray-300 hover:text-white transition">
                +8801323861148
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-[#ec9956] text-xl" />
              <a
                href="https://linkedin.com/in/ibtisumraian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                linkedin.com/in/ibtisumraian
              </a>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <form
          onSubmit={handleFormSubmit}
          className="bg-[#2b2d42] bg-opacity-30 p-6 rounded-2xl border border-[#ec9956] flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="px-4 py-3 rounded-md bg-[#181e41] border border-gray-600 text-white placeholder-gray-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="px-4 py-3 rounded-md bg-[#181e41] border border-gray-600 text-white placeholder-gray-400"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="6"
            className="px-4 py-3 rounded-md bg-[#181e41] border border-gray-600 text-white placeholder-gray-400"
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-b from-[#e9615e] to-[#ec9956] text-white font-bold py-3 rounded-md hover:scale-105 transition"
          >
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
