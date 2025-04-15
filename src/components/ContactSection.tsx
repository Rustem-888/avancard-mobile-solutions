
import ContactInfo from "./contact/ContactInfo";
import ContactForm from "./contact/ContactForm";

const ContactSection = () => {
  return (
    <section id="contacts" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Свяжитесь с нами</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
