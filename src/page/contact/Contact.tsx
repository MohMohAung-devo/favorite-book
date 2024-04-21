import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.MainContainer}>
      <div className={classes.ContactContainer}>
        <h1 className={classes.heading}>Get In Touch</h1>
        <p className={classes.subHeading}>To Discuss your favorite books </p>
        <div className={classes.boxContainer}>
          <h5 className={classes.boxHeading}>Let's Talk</h5>
          <div className={classes.list}>
            <div className={classes.listContainer}>
              <div>
                <p className={classes.text}>Phone -</p>
                <p className={classes.contactP}>09259575377</p>
              </div>

              <div className={classes.contactP}>
                Give me a call and chat directily with your friendly. We are
                always happy to discuss favorite book.
              </div>
            </div>

            <div className={classes.listContainer}>
              <div>
                <p className={classes.text}>Email-</p>
                <p className={classes.contactP}>mohmohaung737@gmail.com</p>
              </div>

              <div>
                <p className={classes.contactP}>
                  Send us a detailed message.We well get back to you as soon as
                  possible to disscus your word.
                </p>
              </div>
            </div>

            <div className={classes.listContainer}>
              <div>
                <p className={classes.text}>Social Media -</p>
              </div>

              <div>
                <p className={classes.contactP}>Follow us on Social Media</p>
              </div>
            </div>
          </div>
          <h6 className={classes.footerText}>Wait me your response</h6>
        </div>
      </div>
    </div>
  );
};

export default Contact;
