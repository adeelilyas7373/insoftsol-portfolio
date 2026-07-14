import { useState } from "react";
import styled from "styled-components";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

// Remove most animations, keep it simple

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #e0e7ff 0%, #f9fafb 100%);
  padding: 4rem 0 2rem 0;
`;

const Container = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1.2rem;
`;

const SectionTitle = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 2.5rem;
  background: linear-gradient(90deg, #2563eb 0%, #4f46e5 50%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Grid = styled.div`
  display: grid;
  gap: 3rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Card = styled.div`
  background: ${({ blue }) =>
    blue
      ? "#fff" // Contact form ka background ab safed hai
      : "linear-gradient(135deg, #fff 0%, #f3f4f6 100%)"};
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px 0 rgba(31, 41, 55, 0.08);
  padding: 2.5rem 2rem;
`;

const CardContent = styled.div`
  opacity: 1;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  background: linear-gradient(90deg, #2563eb 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const CardText = styled.p`
  color: #334155;
  margin-bottom: 1.5rem;
  font-size: 1.08rem;
  line-height: 1.6;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const ContactItemRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const ContactIcon = styled.div`
  background: linear-gradient(135deg, #dbeafe 0%, #a5b4fc 100%);
  color: #2563eb;
  border-radius: 9999px;
  padding: 0.7rem;
  margin-top: 0.1rem;
  box-shadow: 0 2px 8px 0 rgba(59, 130, 246, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactInfo = styled.div`
  h3 {
    font-weight: 600;
    color: #3730a3;
    margin-bottom: 0.1rem;
    font-size: 1.05rem;
  }
  p {
    color: #334155;
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const StatusMessage = styled.div`
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 0.75rem;
  font-weight: 500;
  background: ${({ success }) =>
    success
      ? "linear-gradient(90deg, #bbf7d0 0%, #f0fdf4 100%)"
      : "linear-gradient(90deg, #fee2e2 0%, #fef2f2 100%)"};
  color: ${({ success }) => (success ? "#166534" : "#b91c1c")};
  border: 1px solid ${({ success }) => (success ? "#86efac" : "#fecaca")};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

const Label = styled.label`
  color: #3730a3;
  font-weight: 500;
  margin-bottom: 0.4rem;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.7rem 1rem;
  border-radius: 0.6rem;
  border: 1.5px solid #c7d2fe;
  background: #fff;
  font-size: 1rem;
  transition: border 0.2s;
  &:focus {
    outline: none;
    border-color: #6366f1;
    background: #f0f9ff;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.7rem 1rem;
  border-radius: 0.6rem;
  border: 1.5px solid #c7d2fe;
  background: #fff;
  font-size: 1rem;
  min-height: 110px;
  resize: vertical;
  transition: border 0.2s;
  &:focus {
    outline: none;
    border-color: #6366f1;
    background: #f0f9ff;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(90deg, #2563eb 0%, #9333ea 60%, #06b6d4 100%);
  color: #fff;
  font-weight: 600;
  font-size: 1.08rem;
  padding: 0.85rem 2.2rem;
  border-radius: 9999px;
  border: none;
  box-shadow: 0 8px 24px -8px rgba(59, 130, 246, 0.13);
  cursor: pointer;
  transition: all 0.22s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  &:hover {
    background: linear-gradient(90deg, #2563eb 0%, #4f46e5 60%, #06b6d4 100%);
    transform: translateY(-2px) scale(1.01);
    box-shadow: 0 12px 32px -8px rgba(59, 130, 246, 0.18);
  }
  &:active {
    transform: scale(0.98);
  }
`;

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
        "http://localhost:9000/api/contact",
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
    <PageContainer>
      <Container>
        <SectionTitle>Contact Us</SectionTitle>
        <Grid>
          {/* Left Column */}
          <Card>
            <CardContent>
              <CardTitle>Get in Touch</CardTitle>
              <CardText>
                Have a project in mind or want to learn more about our services?
                Reach out to us using the information below or fill out the
                form.
              </CardText>
              <ContactList>
                <ContactItem
                  icon={<FiMail size={22} />}
                  title="Email"
                  content="insoftsol34@gmail.com"
                />
                <ContactItem
                  icon={<FiPhone size={22} />}
                  title="Phone"
                  content="+92 304 5226671"
                />
                <ContactItem
                  icon={<FiMapPin size={22} />}
                  title="Address"
                  content={
                    <a
                      href="https://maps.app.goo.gl/V8F6w6vZXdjRAdti6"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#334155",
                        textDecoration: "none",
                        transition: "color 0.18s",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.color = "black")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.color = "#334155")
                      }
                    >
                      955-C, Street 36, Block Block B Faisal Town,
                      <br />
                      Lahore-54000 Punjab PAKISTAN
                    </a>
                  }
                />
              </ContactList>
            </CardContent>
          </Card>
          {/* Right Column */}
          <Card blue>
            <CardContent>
              <CardTitle>Send Us a Message</CardTitle>
              {submitStatus && (
                <StatusMessage success={submitStatus.success}>
                  {submitStatus.message}
                </StatusMessage>
              )}
              <Form onSubmit={handleSubmit} autoComplete="off">
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
                <SubmitButton type="submit" disabled={isSending}>
                  {isSending ? "Sending..." : "Send Message"}
                </SubmitButton>
              </Form>
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </PageContainer>
  );
};

// Reusable Components
const ContactItem = ({ icon, title, content }) => (
  <ContactItemRow>
    <ContactIcon>{icon}</ContactIcon>
    <ContactInfo>
      <h3>{title}</h3>
      <p>{content}</p>
    </ContactInfo>
  </ContactItemRow>
);

const FormField = ({ label, id, type, placeholder, required }) => (
  <div>
    <Label htmlFor={id}>{label}</Label>
    {type === "textarea" ? (
      <Textarea
        id={id}
        name={id}
        rows="4"
        placeholder={placeholder}
        required={required}
      />
    ) : (
      <Input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
        autoComplete="off"
      />
    )}
  </div>
);

export default Contact;
