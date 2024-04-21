import classes from "./Home.module.css";
import Photo1 from "../../../public/photo.jpg";
import Photo2 from "../../../public/photo2.png";
import Photo3 from "../../../public/photo3.jpg";
import Photo4 from "../../../public/Photo4.jpg";
import { useState } from "react";

const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  // const [activeColor, setActiveColor] = useState(false);
  const bookList = [
    {
      name: "GONE WITH THE WIND",
      description:
        "Within 'Gone with the Wind,' ambition embodies a woman's resilience amidst adversity, her fortitude during life's trials, and her ability to make tough decisions for her family's sake.",
    },
    {
      name: "သူငယ်ချင်းလိုပဲဆက်၍ခေါ်မည်ခိုင်",
      description: "This book offer , a kinkless, a hide love",
    },
    {
      name: "သွေး",
      description: "This book offer kindeness, differ people , same love.",
    },
    {
      name: "အရိုင်းစပယ်",
      description: "This book offer a  girl , how to work , how to speak.",
    },
  ];

  const book = [
    { image: Photo1 },
    { image: Photo2 },
    { image: Photo3 },
    { image: Photo4 },
  ];

  const handleHover = (index: number) => {
    setHoveredIndex(index);
    setSelectedImage(index);
  };

  return (
    <div className={classes.MainContainer}>
      <div className={classes.Container}>
        <h1 className={classes.heading}>My Favorite Books</h1>
        <p className={classes.pText}>
          Book offer ambiton, hobby , good decision. My life attended to read
          more book.
        </p>
        <div className={classes.bookContainer}>
          <div className={classes.imageList}>
            <div className={classes.image}>
              <img
                src={
                  hoveredIndex !== null
                    ? book[hoveredIndex].image
                    : book[selectedImage].image
                }
                alt=""
                width="100%"
                style={{ height: "670px", borderRadius: "20px" }}
              />
            </div>
          </div>
          <div className={classes.nameList}>
            {bookList.map((item, index) => (
              <div
                className={` ${classes.book} ${
                  hoveredIndex === index ? classes.show : ""
                }`}
                key={index}
                onMouseEnter={() => handleHover(index)}
                // onMouseLeave={() => setHoveredIndex(index)}
              >
                <div className={classes.textList}>
                  <h4 className={classes.nameText}>{item.name}</h4>
                  <p className={classes.textDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
