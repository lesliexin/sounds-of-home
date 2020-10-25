import React from 'react';
import soh from "../assets/soh.png";
import Slider from "./Slider";

function Home() {
  return (
    <div style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        zIndex: -1,
    }}>
        <img
            alt="sounds of home"
            style={{
            height: "100vh",
            position: "absolute",
            }}
            src={soh}
        />
        <Slider id={"1"}/>
    </div>
  );
}

export default Home;
