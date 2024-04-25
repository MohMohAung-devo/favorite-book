import { useState } from "react";
import classes from "./Page.module.css";
import { FaRegFaceLaughBeam } from "react-icons/fa6";
import { FaRegFaceKissWinkHeart } from "react-icons/fa6";
import { FaRegFaceGrinTongueSquint } from "react-icons/fa6";
import { FaRegFaceSadCry } from "react-icons/fa6";
import Photo from "../../../public/photo5.webp";

const Page = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<number | null>(null);
  const [selectedLike, setSelectedLike] = useState<number | null>(null);
  const [saveIcon, setSaveIcon] = useState<number | null>(null);

  const [comment, setComment] = useState(0);
  const [showComment, setShowComment] = useState(false);
  const [commentWord, setCommentWord] = useState([]);
  const booklist = [
    {
      image: Photo,
      name: "Defininte Guide with Javascript",
    },
    {
      image: Photo,
      name: "Defininte Guide with Javascript",
    },
    { image: Photo, name: "Defininte Guide with Javascript" },
    { image: Photo, name: "Defininte Guide with Javascript" },
    { image: Photo, name: "Defininte Guide with Javascript" },
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
    setSaveIcon(saveIcon);
    console.log("selectedIcon", selectedIcon);
    console.log("saveIcons", saveIcon);
    console.log(setComment);
  };

  const handleShowComment = () => {
    setShowComment(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentWord(event.target.value);
  };

  const handleSubmit = () => {
    setCommentWord([...commentWord]);
    // setComment(commentWord + 1);
  };

  return (
    <div className={classes.PageContainer}>
      <div className={classes.Container}>
        <h1 className={classes.heading}>My Interested Technical Book</h1>

        <div className={classes.bookList}>
          {booklist.map((item, index) => (
            <div key={index}>
              <div className={classes.book}>
                <img
                  src={item.image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "200px",
                    borderRadius: "10px",
                  }}
                />
                <p className={classes.name}>{item.name}</p>
              </div>
              <div className={classes.bookComment}>
                <div className={classes.likeButton}>
                  <div className={classes.likeList}>
                    {" "}
                    <p
                      onClick={() => handleShow(index)}
                      key={index}
                      className={classes.like}
                    >
                      Like
                    </p>
                    <p style={{ color: "yellow" }}>
                      {selectedIcon !== null && selectedLike === index
                        ? icons[selectedIcon].icons
                        : ""}
                    </p>
                  </div>
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

                <div className={classes.comment}>
                  <div className={classes.commentList}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: "1rem",
                      }}
                      onClick={handleShowComment}
                    >
                      {" "}
                      <p style={{ color: "#7a4493" }}>Comments</p>
                      <p style={{ color: "#333" }}>{comment}</p>
                    </div>{" "}
                    {showComment ? (
                      <div className={classes.formContainer}>
                        <div>
                          {/* <p>{commentWord.map((item) => (
                            <div>

                            </div>
                          ))}</p> */}

                          <p>{commentWord}</p>
                          <input
                            placeholder="Write Something...."
                            type="text"
                            onChange={handleChange}
                            style={{ color: "black" }}
                          />
                          <button type="submit" onClick={handleSubmit}>
                            Submit
                          </button>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
