import { useState } from "react";
import classes from "./Page.module.css";
import { FaRegFaceLaughBeam } from "react-icons/fa6";
import { FaRegFaceKissWinkHeart } from "react-icons/fa6";
import { FaRegFaceGrinTongueSquint } from "react-icons/fa6";
import { FaRegFaceSadCry } from "react-icons/fa6";

const Page = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(0);
  const [iconList, setIconList] = useState(0);
  const booklist = [
    {
      id: 1,
      name: "Defininte Guide with Javascript",
    },
    {
      id: 2,
      name: "Defininte Guide with Javascript",
    },
    {
      id: 3,
      name: "Defininte Guide with Javascript",
    },
    {
      id: 4,
      name: "Defininte Guide with Javascript",
    },
    {
      id: 5,
      name: "Defininte Guide with Javascript",
    },
  ];

  const icons = [
    { id: 1, icons: <FaRegFaceLaughBeam /> },
    { id: 2, icons: <FaRegFaceKissWinkHeart /> },
    { id: 3, icons: <FaRegFaceGrinTongueSquint /> },
    { id: 4, icons: <FaRegFaceSadCry /> },
  ];

  const handleShow = (id: number) => {
    setShowIcon(true);
    setSelectedIcon(id);
    console.log(id);
  };

  const handleIcon = (id: number) => {
    setIconList(id);
    setSelectedIcon(id);
    setShowIcon(false);
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
                    {iconList ? icons[selectedIcon].icons : ""}
                  </p>
                  <p onClick={() => handleShow(item.id)} key={index}>
                    Like
                  </p>
                  <div>
                    {" "}
                    {showIcon && selectedIcon === item.id ? (
                      <div className={classes.icons}>
                        {icons.map((item, index) => (
                          <div key={index} onClick={() => handleIcon(item.id)}>
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
