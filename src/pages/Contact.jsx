import { useState, useRef, useEffect } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  // Refs for animations
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  // Form state
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Animation on mount
  useEffect(() => {
    const animateElements = [
      { ref: leftColRef, delay: 100, direction: "-40px" },
      { ref: rightColRef, delay: 250, direction: "40px" },
    ];

    animateElements.forEach(({ ref, delay, direction }) => {
      const element = ref.current;
      if (element) {
        element.classList.add("opacity-0", `translate-x-[${direction}]`);
        setTimeout(() => {
          element.classList.add("transition-all", "duration-700", "ease-out");
          element.classList.remove("opacity-0", `translate-x-[${direction}]`);
          element.classList.add("opacity-100", "translate-x-0");
        }, delay);
      }
    });
  }, []);

  // Form submission (REPLACED CODE)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    // Use FormData for more flexibility (e.g., file uploads in future)
    const formDataObj = new FormData(e.target);
    const formData = Object.fromEntries(formDataObj.entries());

    try {
      const response = await fetch(
        "https://portfolio-backend-three-pi.vercel.app/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Failed to send");

      setSubmitStatus({
        success: true,
        message: "Message sent successfully!",
      });
      e.target.reset();
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error.message || "Failed to send message",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      className="py-16 min-h-screen"
      style={{
        background:
          "linear-gradient(120deg, #e0f2fe 0%, #f0f9ff 50%, #f1f5f9 100%)",
      }}
    >
      <style>
        {`
          .contact-gradient-title {
            background: linear-gradient(90deg, #2563eb 0%, #38bdf8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .contact-card {
            background: linear-gradient(120deg, #fff 60%, #e0f2fe 100%);
            box-shadow: 0 4px 24px 0 rgba(30, 41, 59, 0.10), 0 1.5px 6px 0 rgba(56, 189, 248, 0.08);
          }
          .contact-form-card {
            background: linear-gradient(120deg, #f0f9ff 60%, #dbeafe 100%);
            box-shadow: 0 4px 24px 0 rgba(30, 41, 59, 0.10), 0 1.5px 6px 0 rgba(56, 189, 248, 0.08);
          }
          .contact-animate {
            opacity: 1 !important;
            transform: none !important;
          }
        `}
      </style>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 contact-gradient-title animate-fade-in-down">
            Contact Us
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div
              ref={leftColRef}
              className="contact-card rounded-2xl p-8 shadow-lg opacity-0 translate-x-[-40px]"
            >
              <h2 className="text-2xl font-bold mb-6 contact-gradient-title animate-fade-in-up">
                Get in Touch
              </h2>
              <p className="text-slate-700 mb-6 animate-fade-in-up delay-100">
                Have a project in mind or want to learn more about our services?
                Reach out to us using the information below or fill out the
                form.
              </p>

              <div className="space-y-4">
                <ContactItem
                  icon={<FiMail className="text-blue-600 text-xl" />}
                  title="Email"
                  content="usman@mountsol.com"
                />
                <ContactItem
                  icon={<FiPhone className="text-blue-600 text-xl" />}
                  title="Phone"
                  content="+92 341 4891548"
                />
                <ContactItem
                  icon={<FiMapPin className="text-blue-600 text-xl" />}
                  title="Address"
                  content={
                    <>
                      Plot 35, Aibak Block Garden Town,
                      <br />
                      Lahore, Punjab 54000
                    </>
                  }
                />
              </div>

              <div className="mt-8 animate-fade-in-up delay-500">
                <h3 className="font-semibold mb-4 text-blue-700">Follow Us</h3>
                <div className="flex space-x-4">
                  <SocialIcon
                    href="https://www.facebook.com/mountsol"
                    icon="facebook"
                  />
                  <SocialIcon
                    href="https://www.instagram.com/mount.sol?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    icon="instagram"
                  />
                  <SocialIcon
                    href="https://www.linkedin.com/company/mountsol/"
                    icon="linkedin"
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div
              ref={rightColRef}
              className="contact-form-card rounded-2xl p-8 shadow-lg opacity-0 translate-x-[40px]"
            >
              <h2 className="text-2xl font-bold mb-6 contact-gradient-title animate-fade-in-up">
                Send Us a Message
              </h2>
              {submitStatus && (
                <div
                  className={`p-4 mb-6 rounded-lg ${
                    submitStatus.success
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <FormField
                  label="Name"
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
                <FormField
                  label="Email"
                  id="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
                <FormField
                  label="Subject"
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  required
                />
                <FormField
                  label="Message"
                  id="message"
                  type="textarea"
                  placeholder="Your message"
                  required
                />
                <button
                  type="submit"
                  disabled={isSending}
                  className={`bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all shadow-md animate-fade-in-up delay-500 ${
                    isSending ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Components
const ContactItem = ({ icon, title, content }) => (
  <div className="flex items-start gap-4 animate-fade-in-up">
    <div className="bg-blue-100 text-blue-600 rounded-full p-2 mt-1 shadow-sm">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-blue-700">{title}</h3>
      <p className="text-slate-700">{content}</p>
    </div>
  </div>
);

const SocialIcon = ({ href, icon }) => {
  const icons = {
    facebook: (
      <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
    ),
    instagram: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
    ),
    linkedin: (
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
    ),
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-100 text-blue-600 hover:bg-blue-200 rounded-full p-2 transition-colors shadow-sm"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        {icons[icon]}
      </svg>
    </a>
  );
};

const FormField = ({ label, id, type, placeholder, required }) => (
  <div>
    <label htmlFor={id} className="block text-blue-700 mb-2 font-medium">
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        id={id}
        name={id}
        rows="4"
        className="w-full px-4 py-2 border border-blue-200 rounded focus:outline-none focus:border-blue-500 bg-white/80"
        placeholder={placeholder}
        required={required}
      />
    ) : (
      <input
        type={type}
        id={id}
        name={id}
        className="w-full px-4 py-2 border border-blue-200 rounded focus:outline-none focus:border-blue-500 bg-white/80"
        placeholder={placeholder}
        required={required}
      />
    )}
  </div>
);

export default Contact;
