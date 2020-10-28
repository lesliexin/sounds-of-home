import React, {useEffect} from 'react';
import soh from "../assets/soh.png";
import Slider from "./Slider";
import styled from 'styled-components';
import kitchen from '../assets/kitchen.mp3';
import nature from '../assets/nature.mp3';
import mahjong from '../assets/mahjong.mp3';
import city from '../assets/city.mp3';

const StyledCol = styled.div`
  position: absolute;
`

const StyledImg = styled.img`
  height: 100vh;
  position: absolute;
`

function Home() {
  // const htmlaudio: HTMLAudioElement = new Audio(require('../assets/kitchen.mp3'));
  // htmlaudio.play();

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
          <Slider
            id={"nature"}
            startValue={0.5}
            title={"Nature"}
            sound={nature}
          />
        </StyledCol>
        <StyledCol style={{
          bottom: "10vh",
          left: "60vh",
        }}>
          <Slider
            id={"grandma"}
            startValue={0.5}
            title={"Grandma Humming"}
          />
        </StyledCol>
        <StyledCol style={{
          bottom: "40vh",
          left: "10vh",
        }}>
           <Slider
            id={"mahjong"}
            startValue={0.5}
            title={"Mahjong Game"}
            sound={mahjong}
          />
        </StyledCol>
        <StyledCol style={{
          top: "10vh",
          right: "10vh",
        }}>
          <Slider
            id={"television"}
            startValue={0.5}
            title={"Television"}
          />
        </StyledCol>
        <StyledCol style={{
          top: "10vh",
          right: "60vh",
        }}>
          <Slider
            id={"kitchen"}
            startValue={0.5}
            title={"Kitchen"}
            sound={kitchen}
          />
        </StyledCol>
        <StyledCol style={{
          top: "40vh",
          right: "10vh",
        }}>
          <Slider
            id={"city"}
            startValue={0.5}
            title={"City"}
            sound={city}
          />
        </StyledCol>
      </div>
  );
}

export default Home;
