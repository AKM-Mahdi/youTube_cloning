import React from "react";
import { Link } from "react-router-dom";
import "./SlideVideo.css";

const SideVideos = ({ data }) => {
  console.log(data);
  return (
    <Link to={`/${data.snippet.title}`} className="nav-link">
      <div className="content d-flex pb-1">
        <div className="left">
          <img src={data.snippet.thumbnails.medium.url} alt="" />
        </div>
        <div className="right ps-2">
          <p>
            {data.snippet.title.length > 30 ? (
              <>{data.snippet.title.slice(0, 33)}..</>
            ) : (
              data.snippet.title.slice(0, 40)
            )}
          </p>

          <span>{data.snippet.channelTitle}</span>
          <p className="pbtime"> {data.snippet.publishTime}</p>
        </div>
      </div>
    </Link>
  );
};

export default SideVideos;
