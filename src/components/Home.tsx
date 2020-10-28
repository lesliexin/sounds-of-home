import React, {useState} from 'react';
import soh from "../assets/soh.png";
import Slider from "./Slider";
import styled, { css } from 'styled-components';
import kitchen from '../assets/kitchen.mp3';
import nature from '../assets/nature.mp3';
import mahjong from '../assets/mahjong.mp3';
import city from '../assets/city.mp3';
import music from '../assets/music.mp3';
import on from "../assets/on.png";
import off from "../assets/off.png";

const StyledCol = styled.div`
  position: absolute;
`

const StyledImg = styled.img`
  height: 100vh;
  position: absolute;
`

const StyledButtonContainer = styled.div`
  z-index: 1;
  width: 5vh;
  top: 2vh;
  right: 2vh;
  position: absolute;
`

const StyledButton = styled.img<any>`
  z-index: 10;
  width: 5vh;
`
function Home() {
  const [play, setPlay] = useState(false);

  const handleChange = (e: any) => {
    setPlay(!play);
};

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
        <StyledButtonContainer onClick={handleChange}>
          {play
            ? <StyledButton alt="volume on" src={on}/> 
            :  <StyledButton alt="volume off" src={off}/>
          }
        </StyledButtonContainer>
        <StyledCol style={{
          bottom: "10vh",
          left: "9vw",
        }}>
          <Slider
            id={"nature"}
            startValue={0.25}
            title={"Nature"}
            sound={nature}
            play={play}
            max={"0.7"}
          />
        </StyledCol>
        <StyledCol style={{
          bottom: "10vh",
          left: "38vw",
        }}>
          <Slider
            id={"music"}
            startValue={0.12}
            title={"Radio Music"}
            sound={music}
            play={play}
            max={"0.4"}
          />
        </StyledCol>
        <StyledCol style={{
          bottom: "40vh",
          left: "9vw",
        }}>
           <Slider
            id={"mahjong"}
            startValue={0.25}
            title={"Mahjong Game"}
            sound={mahjong}
            play={play}
          />
        </StyledCol>
        <StyledCol style={{
          top: "10vh",
          right: "9vw",
        }}>
          <Slider
            id={"television"}
            startValue={0.5}
            title={"Television"}
            play={play}
          />
        </StyledCol>
        <StyledCol style={{
          top: "10vh",
          right: "38vw",
        }}>
          <Slider
            id={"kitchen"}
            startValue={0.5}
            title={"Kitchen"}
            sound={kitchen}
            play={play}
          />
        </StyledCol>
        <StyledCol style={{
          top: "40vh",
          right: "9vw",
        }}>
          <Slider
            id={"street"}
            startValue={0.5}
            title={"Street Ambience"}
            sound={city}
            play={play}
          />
        </StyledCol>
      </div>
  );
}

export default Home;
