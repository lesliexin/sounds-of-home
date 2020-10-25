import React from 'react';
import soh from "../assets/soh.png";
import Slider from "./Slider";
import styled from 'styled-components';

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledCol = styled.div`
  position: absolute;
`

const StyledImg = styled.img`
  height: 100vh;
  position: absolute;
`

function Home() {
  return (
      <div style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        zIndex: -1,
      }}>
        <StyledImg
          alt="sounds of home"
          src={soh}
        />
        <StyledCol style={{
          bottom: "10vh",
          left: "10vh",
        }}>
          <Slider id={"1"} startValue={0.5}/>
        </StyledCol>
        <StyledCol style={{
          bottom: "10vh",
          left: "60vh",
        }}>
          <Slider id={"1"} startValue={0.5}/>
        </StyledCol>
        <StyledCol style={{
          bottom: "40vh",
          left: "10vh",
        }}>
          <Slider id={"1"} startValue={0.5}/>
        </StyledCol>
        <StyledCol style={{
          top: "10vh",
          right: "10vh",
        }}>
          <Slider id={"1"} startValue={0.5}/>
        </StyledCol>
        <StyledCol style={{
          top: "10vh",
          right: "60vh",
        }}>
          <Slider id={"1"} startValue={0.5}/>
        </StyledCol>
        <StyledCol style={{
          top: "40vh",
          right: "10vh",
        }}>
          <Slider id={"1"} startValue={0.5}/>
        </StyledCol>
      </div>
  );
}

export default Home;
