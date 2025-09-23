import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker, HiDownload } from "react-icons/hi";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { portfolioData } from "../data/portfolioData";

const Contact = () => {
  const { personal, social } = portfolioData;
  let [statusmsg, setStatusMessage] = useState("");
  let [loading, setLoading] = useState(false);
  let [isError, setIserror] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const resumeUrl = "/AswarthaReddy_Resume.pdf";

  const handleResumeClick = (e) => {
    e.preventDefault();
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
    const tempLink = document.createElement("a");
    tempLink.href = resumeUrl;
    tempLink.download = "AswarthaReddy_Resume.pdf";
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:3000/contact/add",
        formData
      );
      // console.log(res);
      if (res.status == 200) {
        setIserror(false);
        setStatusMessage("✅ Message sent successfully!");

        // alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setIserror(true);
        setStatusMessage("❌ Failed to send message.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (err) {
      setIserror(true);
      setStatusMessage("❌ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
      setTimeout(() => setStatusMessage(""), 5000);
    }
  };
  const contactInfo = [
    {
      icon: HiMail,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: HiPhone,
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone}`,
    },
    {
      icon: HiLocationMarker,
      label: "Location",
      value: personal.location,
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: SiLinkedin,
      label: "LinkedIn",
      href: social.linkedin,
      color: "text-blue-600",
    },
    {
      icon: SiGithub,
      label: "GitHub",
      href: social.github,
      color: "text-gray-900 dark:text-white",
    },
    {
      icon: HiMail,
      label: "Email",
      href: `mailto:${social.email}`,
      color: "text-red-600",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {info.label}
                      </p>
                      <p className="text-gray-900 dark:text-white font-medium">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`w-12 h-12 ${social.color} bg-gray-100 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 p-6 rounded-xl text-white"
            >
              <h4 className="text-xl font-semibold mb-2">Resume</h4>
              <p className="mb-4 opacity-90">
                Get a copy of my detailed resume with all my experience and
                projects
              </p>
              <motion.a
                download
                href={resumeUrl}
                onClick={handleResumeClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 text-sm px-2 py-1 rounded font-medium hover:bg-gray-100 transition-colors duration-300 inline-flex items-center gap-1"
              >
                <HiDownload className="w-10 h-6" />
                Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-300"
                    // placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-300"
                    // placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-300"
                  // placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-300"
                  // placeholder="Project Discussion"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-300 resize-none"
                  // placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <button
                  type="submit"
                  className="btn-primary flex items-center gap-2"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {statusmsg && (
                  <span
                    className={`text-sm font-medium px-4 py-2 rounded ${
                      isError
                        ? "text-red-700 bg-red-100 dark:bg-red-800 dark:text-red-200"
                        : "text-green-700 bg-green-100 dark:bg-green-800 dark:text-green-200"
                    }`}
                  >
                    {statusmsg}
                  </span>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
