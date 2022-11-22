import React from "react";
import { Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import SideVideos from "../SideVideos/SideVideos";

const Home = () => {
  const data = useLoaderData();
  const videos = data.items;
  console.log(videos);
  return (
    <div className="container mt-2">
      <Row>
        <Col lg={9}>
          <iframe
            className="rounded"
            width="960"
            height="615"
            src={`https://www.youtube.com/embed/${videos[0].id.videoId}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>

        <Col lg={3}>
          {videos.map((item) => (
            <SideVideos key={item.id.videoId} data={item}></SideVideos>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Home;
