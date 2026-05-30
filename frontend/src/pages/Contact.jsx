
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { 
  FaInstagram, 
  FaFacebookF, 
  FaEnvelope, 
  FaLinkedinIn, 
  FaTiktok,
  FaWhatsapp
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import PageWrapper from "../components/PageWrapper.jsx";


const socials = [
  {
    name: "Email",
    username: "Send an Email",
    url: "mailto:[idowus187@gmail.com]",
    icon: <FaEnvelope />,
    iconColor: "bg-red-500/10 text-red-500 group-hover:bg-red-500 group-hover:text-white",
  },
  {
    name: "LinkedIn",
    username: "Connect on LinkedIn",
    url: "https://www.linkedin.com/in/idowuolakunlesamuel",
    icon: <FaLinkedinIn />,
    iconColor: "bg-blue-600/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
  },
  {
    name: "Instagram",
    username: "Follow on Instagram",
    url: "https://instagram.com/idowuos",
    icon: <FaInstagram />,
    iconColor: "bg-pink-500/10 text-pink-500 group-hover:bg-pink-500 group-hover:text-white",
  },
//   {
//     name: "Twitter / X",
//     username: "Follow on X",
//     url: "https://twitter.com/yourusername",
//     icon: <FaXTwitter />,
//     iconColor: "bg-gray-700/10 text-gray-200 group-hover:bg-white group-hover:text-black",
//   },
//   {
//     name: "Facebook",
//     username: "Connect on Facebook",
//     url: "https://facebook.com/yourusername",
//     icon: <FaFacebookF />,
//     iconColor: "bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white",
//   },
//   
{
    name: "WhatsApp",
    username: "Chat on WhatsApp",
    url: "https://wa.me/+2348137451940",
    icon: <FaWhatsapp />,
    iconColor: "bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white",
},
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:3000/api/contact",
        {
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
        }
      );

      setSuccess(res.data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Contact <span className="text-blue-500">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* SOCIAL MEDIA LINKS SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6 w-full"
          >
            <div className="bg-[#111] border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-gray-400 leading-7 mb-8">
                Feel free to reach out to me through any of these platforms or use the contact form to send a message directly.
              </p>

              <div className="grid grid-cols-1 gap-4">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a0a] border border-gray-800 hover:border-blue-500 hover:bg-blue-500/5 transition group"
                  >
                    <div className={`p-3 rounded-lg text-xl transition-colors duration-300 ${social.iconColor}`}>
                      {social.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-200 group-hover:text-white transition">
                        {social.name}
                      </h4>
                      <p className="text-xs text-gray-500 group-hover:text-gray-400 transition">
                        {social.username}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-[#111] border border-gray-800 rounded-2xl p-8 md:p-12 w-full"
          >

          {/* NAME */}
          <div className="mb-6">
            <label className="block mb-3 text-lg">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full bg-[#0a0a0a] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
            />
          </div>

          {/* EMAIL */}
          <div className="mb-6">
            <label className="block mb-3 text-lg">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full bg-[#0a0a0a] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
            />
          </div>

          {/* MESSAGE */}
          <div className="mb-6">
            <label className="block mb-3 text-lg">
              Message
            </label>

            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              className="w-full bg-[#0a0a0a] border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
            ></textarea>
          </div>

          {/* SUCCESS */}
          {success && (
            <p className="text-green-500 mb-5">
              {success}
            </p>
          )}

          {/* ERROR */}
          {error && (
            <p className="text-red-500 mb-5">
              {error}
            </p>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </motion.form>
        </div>
      </div>
    </section>
    </PageWrapper>
  );
}

export default Contact;