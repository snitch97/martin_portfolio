import "../contactMe/ContactMe.css";

function ContactMe() {
  return (
    <section className="contactme" id="contact">
      <div className="contactme-title">
        <h2>Get In Touch</h2>
      </div>
      <div className="contactme-desc">
        <p>
          Do you have a project for me? Or do you just want to say Hello to me?
          Just send me an email 😊 There is no form here, you can use your
          favorite email box.
        </p>
      </div>

      <div className="contactme-email">
        <p>Email: </p>
        <a href="mailto:jainexp017@gmail.com">suzukiiwao@gmail.com</a>
      </div>
    </section>
  );
}

export default ContactMe;
