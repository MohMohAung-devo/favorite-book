import { useState } from "react";
import classes from "./Portfolio.module.css";
import { FaArrowRight } from "react-icons/fa6";
import Photo6 from "../../../public/photo6.jpeg";
import Photo7 from "../../../public/photo7.jpeg";
import Photo8 from "../../../public/photo8.jpeg";
export const Portfolio = () => {
  const [draw, setDraw] = useState<number | null>(null);

  interface itemType {
    image: string;
    name: string;
    description: string;
  }

  const portFolioList: itemType[] = [
    {
      image: Photo6,
      name: "ကျာနယ်ကျော်မမလေး",
      description: "Lore ispaum dolor adfadf llafdf  hello i am mohmohaung",
    },
    {
      image: Photo7,
      name: "တက္ကသိုလ်ဘုန်းနိုင်",
      description: "Lore ispaum dolor adfadf llafdf  hello i am mohmohaung",
    },
    {
      image: Photo8,
      name: "ထင်းလင်း",
      description: "Lore ispaum dolor adfadf llafdf  hello i am mohmohaung",
    },
    {
      image: Photo6,
      name: "ကျာနယ်ကျော်မမလေး",
      description: "Lore ispaum dolor adfadf llafdf  hello i am mohmohaung",
    },
    {
      image: Photo6,
      name: "ကျာနယ်ကျော်မမလေး",
      description: "Lore ispaum dolor adfadf llafdf  hello i am mohmohaung",
    },
    {
      image: Photo6,
      name: "ကျာနယ်ကျော်မမလေး",
      description: "Lore ispaum dolor adfadf llafdf  hello i am mohmohaung",
    },
  ];

  const [item, setItem] = useState<itemType[] | []>(portFolioList);

  // const handlerDragStart = (index: number) => {
  //   setDraw(index);
  // };
  // const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
  //   event.preventDefault();
  // };

  // const handleDrop = (
  //   event: React.DragEvent<HTMLDivElement>,
  //   index: number
  // ) => {
  //   event.preventDefault();
  //   if (draw === null) return;

  //   const newItems = [...item];
  //   const [drawItem] = newItems.splice(draw, 1);
  //   newItems.slice(index, 0, drawItem[0]);
  //   setItem(newItems);
  //   setDraw(null);
  // };

  const handleDragStart = (index: number) => {
    setDraw(index);
    console.log(draw, setItem);
  };

  return (
    <div className={classes.PortfolioContainer}>
      <div className={classes.Portfolio}>
        <h1 className={classes.heading}>Portfolio</h1>
        <div className={classes.Container}>
          {item.map((item, index) => (
            <div
              key={index}
              className={classes.portfolioList}
              // draggable
              onDragStart={() => handleDragStart(index)}
              // onDragOver={handleDragOver}
              // onDrop={(event) => handleDrop(event, index)}
            >
              <img
                src={item.image}
                alt=""
                style={{ width: "50%", height: "150px" }}
              />
              <p className={classes.name}>
                Author : <span className={classes.spanName}>{item.name}</span>{" "}
              </p>
              <p>
                Biography -{" "}
                <span className={classes.spanBiography}>
                  {item.description}
                </span>
              </p>
              <FaArrowRight size={25} style={{ marginTop: "2rem" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;


//400453992
//772356963