import React from "react";
import { ImageApp } from "../../assets/images/image-app.js";
import { IconsApp } from "../../assets/icons/icon-app.js";
import "./style.css";
export const BlockCard = ({ data }) => {
  console.log(data?.image);
  const linerGradient =
    data?.backgroundColor.length === 1
      ? { backgroundColor: data?.backgroundColor[0] }
      : {
          background: `linear-gradient(to bottom right, ${data?.backgroundColor[0]}, ${data?.backgroundColor[1]})`,
        };

  console.log(linerGradient);
  return (
    <div className="container">
      <div className="image" style={linerGradient}>
        <img src={data?.image} alt="" width={240} height={240} />
      </div>
      <div className="content">
        <div className="first-content">
          <span className="category open-sans-semibold">{data?.category}</span>
          <span className="time open-sans-semibold">{data?.time}</span>
        </div>
        <div className="title">
          <h2 className="title-style dm-serif-display-regular">
            {data?.title}
          </h2>
        </div>
        <div className="description">
          <span className="description-style open-sans-regular">
            {data?.description}
          </span>
        </div>
        <div className="author">
          <div className="author-style">
            <div>
              <img
                src={data?.user?.avatar}
                alt=""
                className="image-author-style"
              />
            </div>
            <span className="open-sans-semibold">{data?.user?.name}</span>
          </div>
          <div className="read-more">
            <a href="#" className="open-sans-semibold">
              Read more
            </a>
            <img src={IconsApp.arrow_right} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
