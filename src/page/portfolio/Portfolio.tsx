import classes from "./Portfolio.module.css";
import { FaArrowRight } from "react-icons/fa6";
export const Portfolio = () => {
  const portFolioList = [
    {
      name: "ကျာနယ်ကျော်မမလေး",
      description: "Lore ispaum dolor adfadf llafdf  hello i am mohmohaung",
    },
    {
      name: "ကျာနယ်ကျော်မမလေး",
      description: "Lore ispaum dolor adfadf llafdf  hello i am mohmohaung",
    },
    {
      name: "ကျာနယ်ကျော်မမလေး",
      description: "Lore ispaum dolor adfadf llafdf  hello i am mohmohaung",
    },
    {
      name: "ကျာနယ်ကျော်မမလေး",
      description: "Lore ispaum dolor adfadf llafdf  hello i am mohmohaung",
    },
  ];
  return (
    <div className={classes.PortfolioContainer}>
      <div className={classes.Portfolio}>
        <h1 className={classes.heading}>Portfolio</h1>
        <div className={classes.Container}>
          {portFolioList.map((item) => (
            <div className={classes.portfolioList}>
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
