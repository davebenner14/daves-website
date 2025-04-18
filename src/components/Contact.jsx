import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:triangle.dynamics.dev@gmail.com?subject=Contact from Website&body=${body}`;
  };

  const reset = () => {
    setOpen(false);
    setForm({ name: "", email: "", message: "" });
  };

  const field =
    "w-full rounded-lg bg-gray-100 px-5 py-3 text-[15px] placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1A73E8]";

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center bg-[#f0f2f8] text-gray-800 snap-start pt-20 pb-32 font-sans">
      <div className="flex flex-col items-center space-y-16">
        {/* Envelope */}
        <motion.div
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(!open)}
          className="cursor-pointer p-6 bg-blue-600/15 rounded-full shadow-lg"
        >
          <FaEnvelope className="text-[10rem] text-blue-500" />
        </motion.div>

        {/* Contact card */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.form
              key="card"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: -22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -22 }}
              transition={{ duration: 0.35 }}
              className="w-full max-w-[540px] bg-white rounded-3xl shadow-2xl ring-1 ring-gray-200 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-[#1A73E8] px-12 py-6 flex flex-col items-center gap-2">
                <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-[#34d399] to-[#10b981] flex items-center justify-center">
                  <span className="text-white text-xl">✉️</span>
                </div>
                <h2 className="text-white text-2xl sm:text-3xl font-semibold tracking-wide">
                  Get in Touch
                </h2>
              </div>

              {/* Body */}
              <div className="px-12 py-12 space-y-8">
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={onChange}
                  className={field}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={onChange}
                  className={field}
                />

                <textarea
                  name="message"
                  rows={6}
                  placeholder="Write your message here…"
                  value={form.message}
                  onChange={onChange}
                  className={`${field} resize-none`}
                />

                {/* Buttons */}
                <div className="flex justify-end gap-6 pt-2">
                  <button
                    type="button"
                    onClick={reset}
                    className="rounded-full border border-gray-400 px-10 py-4 text-base font-medium text-gray-700 hover:bg-gray-100 transition"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={
                      !form.name.trim() ||
                      !form.email.trim() ||
                      !form.message.trim()
                    }
                    className="rounded-full bg-[#1A73E8] px-12 py-4 text-base font-semibold text-white hover:bg-[#1765cc] transition disabled:opacity-40"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/david-benner/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.3 }}
          className="cursor-pointer p-6 rounded-full shadow-lg"
        >
          <FaLinkedin className="text-[10rem] text-[#0A66C2]" />
        </motion.a>

        {/* GitHub — anchor & SVG both forced to black */}
        <motion.a
          href="https://github.com/davebenner14"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.3 }}
          className="cursor-pointer p-6 rounded-full shadow-lg text-black hover:text-black visited:text-black"
        >
          <FaGithub className="text-[10rem] text-black" />
        </motion.a>
      </div>
    </section>
  );
}
