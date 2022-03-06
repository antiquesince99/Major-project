import { Container } from "@mui/material";
import React from "react";
import app_config from "../../config";

const Home = () => {
  const url = app_config.api_url;

  return (
    <div>
      <h1>HELLO HOME</h1>
      <Container>
      <img src={url + "/T-SHIRT-IMAGE.jpeg"} />
      </Container>
    </div>
  );
};
export default Home;
