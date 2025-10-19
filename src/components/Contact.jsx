import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs.send(
      "service_tifenh9",
      "template_5lqr3x9",
      {
        from_name: form.name,
        from_email: form.email,
        reply_to: form.email, 
        message: form.message,
      },
      "BKJyazJE5k_P17MG0"
    )
    .then(() => {
      alert("Message sent! ✅");
      setForm({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
      alert("Failed to send message. ❌");
    });
  };
  


  return (
    <section  id="contact"  className="w-full max-w-6xl mx-auto my-20 px-4 font-[Poppins]">
      <h2 className="text-2xl sm:text-4xl font-bold text-center bg-gradient-to-r from-white to-cyan-400 text-transparent bg-clip-text mb-12">
        Contact Me
      </h2>

      <div className="flex flex-col-reverse md:flex-row gap-12 p-8 rounded-2xl">

        {/* Left: Contact Info */}
        <div className="md:w-1/2 flex flex-col justify-center gap-6 text-white">
          <h3 className="text-2xl font-semibold">Get in touch </h3>

          <div className="flex items-center gap-4">
            <img
                src="/amina-portfolio-image/linkedin.png"
                alt="LinkedIn Icon"
                className="w-10 h-10"
            />
            <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-white no-underline"
            >
                LinkedIn
            </a>
            </div>

            <div className="flex items-center gap-4">
            <img
                src="/amina-portfolio-image/gmail.png"
                alt="Email Icon"
                className="w-10 h-10"
            />
            <a
                className="text-white"
            >
                aaaaaaaaa@gmail.com
            </a>
            </div>

        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 flex flex-col gap-4 border-none outline-none ring-0 font-[Poppins]  border-gray-500/50"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            className=" font-[Poppins] p-3 rounded-md bg-white/20 placeholder-gray-300 text-white focus:outline-none border-none outline-none ring-0"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            className="font-[Poppins] p-3 rounded-md bg-white/20 placeholder-gray-300 text-white focus:outline-none border-none outline-none ring-0"
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="font-[Poppins] p-3 rounded-md bg-white/20 placeholder-gray-300 text-white focus:outline-none resize-none border-none outline-none ring-0"
            required
          ></textarea>
          <button
            type="submit"
            className="font-[Poppins] bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-md transition border-none outline-none ring-0"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
