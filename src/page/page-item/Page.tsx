import { useState } from "react";
import classes from "./Page.module.css";
import { FaRegFaceLaughBeam } from "react-icons/fa6";
import { FaRegFaceKissWinkHeart } from "react-icons/fa6";
import { FaRegFaceGrinTongueSquint } from "react-icons/fa6";
import { FaRegFaceSadCry } from "react-icons/fa6";

const Page = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<number | null>(null);
  const [selectedLike, setSelectedLike] = useState<number | null>(null);
  const [saveIcon, setSaveIcon] = useState<number | null>(null);

  const booklist = [
    {
      name: "Defininte Guide with Javascript",
    },
    {
      name: "Defininte Guide with Javascript",
    },
    {
      name: "Defininte Guide with Javascript",
    },
    {
      name: "Defininte Guide with Javascript",
    },
    {
      name: "Defininte Guide with Javascript",
    },
  ];

  const icons = [
    { icons: <FaRegFaceLaughBeam /> },
    { icons: <FaRegFaceKissWinkHeart /> },
    { icons: <FaRegFaceGrinTongueSquint /> },
    { icons: <FaRegFaceSadCry /> },
  ];

  const handleShow = (index: number) => {
    setShowIcon(true);
    setSelectedLike(index);
    console.log("setSelectedLike", index);
  };

  const handleIcon = (index: number) => {
    setSelectedIcon(index);
    setShowIcon(false);
    setSaveIcon(selectedIcon);
    console.log("selectedIcon", selectedIcon);
    console.log("saveIcons", saveIcon);
  };
  return (
    <div className={classes.PageContainer}>
      <div className={classes.Container}>
        <h1 className={classes.heading}>My Interested Technical Book</h1>

        <div className={classes.bookList}>
          {booklist.map((item, index) => (
            <div key={index}>
              <div className={classes.book}>
                <p>{item.name}</p>
              </div>
              <div className={classes.bookComment}>
                <div className={classes.likeButton}>
                  {" "}
                  <p style={{ color: "yellow" }}>
                    {selectedIcon !== null && selectedLike === index
                      ? icons[selectedIcon].icons
                      : ""}
                  </p>
                  <p onClick={() => handleShow(index)} key={index}>
                    Like
                  </p>
                  <div>
                    {" "}
                    {showIcon && selectedLike === index ? (
                      <div className={classes.icons}>
                        {icons.map((item, idx) => (
                          <div key={idx} onClick={() => handleIcon(idx)}>
                            {item.icons}
                          </div>
                        ))}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <p>Comment</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
