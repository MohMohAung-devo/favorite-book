import classes from "./About.module.css";
import { FaArrowRight } from "react-icons/fa6";
const About = () => {
  return (
    <div className={classes.MainContainer}>
      <div className={classes.About}>
        {/* <h1 className={classes.heading}>About</h1> */}
        <div className={classes.textContainer}>
          <div className={classes.leftContainer}>
            <h1 className={classes.heading}>Share Your Favorite Books</h1>
            <div className={classes.subHeading}>
              <div className={classes.psubHeading}>
                <p>my intersted book list</p>
              </div>

              <div className={classes.icons}>
                <FaArrowRight size={40} style={{}} />
              </div>
            </div>
          </div>
          <div className={classes.rightConatiner}>
            <p className={classes.textRight}>Welcome to My Favorite Book !</p>
            <p className={classes.text}>
              This project is dedicated to sharing our love for books and
              reading. Our goal is to inspire others to discover the joy of
              reading and to explore new worlds through literature.
            </p>
            <h2 className={classes.ourText}>Our Ambition</h2>
            <p className={classes.textList}>
              At My Favorite Book, we believe in the power of storytelling to
              educate, entertain, and connect people from all walks of life.
              Whether you're a seasoned bookworm or just starting your reading
              journey, we're here to help you find your next favorite book.
            </p>
            <h2 className={classes.ourText}>Our Mission</h2>
            <p className={classes.ourP}>
              Our mission is to promote literacy and a love for reading by
              providing book recommendations, reviews, and resources for readers
              of all ages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
