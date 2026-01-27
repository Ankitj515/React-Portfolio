import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <>
      <section className="container">
        <div className="wrapper contact">
            <h2>Contact Me</h2>
          <div className="contact-section">
            
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>
                Feel free to reach out to me for any collaboration or any
                inquiries.
              </p>
              
            </div>
            <div className="contact-form-section">
                <ContactForm></ContactForm>
            </div>
            
          </div>
          
        </div>
      </section>
    </>
  );
}
