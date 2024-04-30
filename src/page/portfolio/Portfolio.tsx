import classes from "./Portfolio.module.css";

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
              <p className={classes.name}>Author: {item.name}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
