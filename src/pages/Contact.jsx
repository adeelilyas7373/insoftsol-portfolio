import { useState, useRef, useEffect } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSubmitStatus(null);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch(
        "https://portfolio-backend-three-pi.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      setSubmitStatus({
        success: true,
        message: "Message sent successfully!",
      });
      e.target.reset();
    } catch (error) {
      setSubmitStatus({
        success: false,
        message:
          error.message || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="py-16 min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Contact Us
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div
              ref={leftColRef}
              className="bg-white rounded-2xl p-8 shadow-lg opacity-0 translate-x-[-40px]"
            >
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <p className="text-slate-700 mb-6">
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
            </div>

            {/* Right Column */}
            <div
              ref={rightColRef}
              className="bg-blue-50 rounded-2xl p-8 shadow-lg opacity-0 translate-x-[40px]"
            >
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
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
                  className={`bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all shadow-md ${
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
  <div className="flex items-start gap-4">
    <div className="bg-blue-100 text-blue-600 rounded-full p-2 mt-1 shadow-sm">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-blue-700">{title}</h3>
      <p className="text-slate-700">{content}</p>
    </div>
  </div>
);

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
        className="w-full px-4 py-2 border border-blue-200 rounded focus:outline-none focus:border-blue-500 bg-white"
        placeholder={placeholder}
        required={required}
      />
    ) : (
      <input
        type={type}
        id={id}
        name={id}
        className="w-full px-4 py-2 border border-blue-200 rounded focus:outline-none focus:border-blue-500 bg-white"
        placeholder={placeholder}
        required={required}
      />
    )}
  </div>
);

export default Contact;
