import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // "sending" | "success" | "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

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
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    })
    .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="w-full max-w-5xl mx-auto mt-28 mb-18 px-4 font-[Poppins]">

      {/* Header */}
      <div className="flex flex-col items-center mb-10">
        <p className="text-cyan-400/70 text-[13px] tracking-[0.4em] uppercase mb-3 font-light">
          Let's talk
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-cyan-400 text-transparent bg-clip-text">
          Contact Me
        </h2>
        <div className="mt-3 w-8 h-[1px] bg-cyan-400/40" />
      </div>

      {/* Outer shell */}
      <div className="relative rounded-xl border border-white/[0.08] overflow-hidden bg-white/[0.03]">

        <div className="p-6 sm:p-8">

          {/* Prompt */}
          <p className="font-mono text-[11px] text-white/35 mb-8 pl-1">
            <span className="text-cyan-400/60">$</span>{" "}
            <span className="text-cyan-300/60">./send_message.sh</span>
          </p>

          <div className="flex flex-col md:flex-row gap-10">

            {/* Left: info */}
            <div className="md:w-2/5 flex flex-col gap-5 justify-center">
              <p className="font-mono text-[11px] text-white/35 mb-1">
                <span className="text-cyan-400/50">#</span> reach me at
              </p>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/medabis-amina-851a5926a/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-4 py-3 rounded-lg border border-white/[0.07] bg-white/[0.02] hover:border-cyan-400/25 hover:bg-cyan-400/[0.04] transition-all duration-300 no-underline"
              >
                <img
                  src="/amina-portfolio-image/linkedin.png"
                  alt="LinkedIn"
                  className="w-5 h-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-cyan-400/70 mb-0.5">LinkedIn</p>
                  <p className="font-mono text-[11.5px] text-white/90 group-hover:text-white transition-colors duration-300">
                    medabis-amina
                  </p>
                </div>
                <span className="material-symbols-rounded text-[13px] text-white/25 group-hover:text-cyan-400/60 ml-auto transition-colors duration-300">open_in_new</span>
              </a>

              {/* Email */}
              <div className="group flex items-center gap-3 px-4 py-3 rounded-lg border border-white/[0.07] bg-white/[0.02] hover:border-cyan-400/25 hover:bg-cyan-400/[0.04] transition-all duration-300 cursor-default">
                <img
                  src="/amina-portfolio-image/gmail.png"
                  alt="Email"
                  className="w-5 h-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-cyan-400/70 mb-0.5">Email</p>
                  <p className="font-mono text-[11.5px] text-white/90 group-hover:text-white transition-colors duration-300">
                    aminamedabis@gmail.com
                  </p>
                </div>
              </div>

              <div className="mt-2 h-[1px] bg-white/[0.05]" />
              <p className="font-mono text-[10px] text-white/25 leading-relaxed">
                <span className="text-cyan-400/40">#</span> open to opportunities and 
                collaborations 
              </p>
              <p className="font-mono text-[10px] text-white/25 mt-4 pl-1">
                <span className="text-cyan-400/50">{">"}</span> awaiting input...
              </p>

            </div>

            {/* Right: form */}
            <form onSubmit={handleSubmit} className="md:w-3/5 flex flex-col gap-3">

              {[
                { name: "name",    type: "text",  placeholder: "your_name",  label: "name"  },
                { name: "email",   type: "email", placeholder: "your@email", label: "email" },
              ].map((field) => (
                <div key={field.name} className="flex flex-col gap-1">
                  <label className="font-mono text-[9px] uppercase tracking-widest text-cyan-400/70 pl-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={form[field.name]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg font-mono text-[12px] text-white placeholder-white/25 bg-white/[0.04] border border-white/[0.08] focus:border-cyan-400/35 focus:bg-cyan-400/[0.04] outline-none transition-all duration-200"
                  />
                </div>
              ))}

              <div className="flex flex-col gap-1">
                <label className="font-mono text-[9px] uppercase tracking-widest text-cyan-400/70 pl-1">
                  message
                </label>
                <textarea
                  name="message"
                  placeholder="your message here..."
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg font-mono text-[12px] text-white placeholder-white/25 bg-white/[0.04] border border-white/[0.08] focus:border-cyan-400/35 focus:bg-cyan-400/[0.04] outline-none transition-all duration-200 resize-none"
                />
              </div>

              {/* Status */}
              {status === "success" && (
                <p className="font-mono text-[10px] text-cyan-400/90">
                  <span className="text-cyan-400/50">{">"}</span> message sent successfully ✓
                </p>
              )}
              {status === "error" && (
                <p className="font-mono text-[10px] text-red-400/70">
                  <span className="text-red-400/50">{">"}</span> failed to send. try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-1 w-full py-2.5 rounded-lg font-mono text-[11px] uppercase tracking-widest text-white border border-cyan-400/30 bg-cyan-400/[0.08] hover:bg-cyan-400/[0.15] hover:border-cyan-400/50 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "> sending..." : " send message"}
              </button>
            </form>

          </div>



        </div>
      </div>
    </section>
  );
};

export default Contact;