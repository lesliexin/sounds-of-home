import React, {useState} from 'react';
import Slider from "./Slider";
import styled from 'styled-components';
import base from "../assets/base.png";
import kitchenImg from "../assets/kitchen.png";
import kitchen from '../assets/kitchen.mp3';
import natureImg from "../assets/nature.png";
import nature from '../assets/nature.mp3';
import mahjongImg from '../assets/mahjong.png';
import mahjong from '../assets/mahjong.mp3';
import cityImg from '../assets/ambience.png';
import city from '../assets/city.mp3';
import radioImg from '../assets/radio.png';
import music from '../assets/music.mp3';
import on from "../assets/on.png";
import off from "../assets/off.png";

const StyledImg = styled.img`
  height: 80vh;
  margin-top: 12vh;
  position: absolute;
  z-index: 10;

  @media (max-width: 768px) {
    height: 50vh;
  } 

  @media (max-width: 425px) {
    width: 90vw;
    height: auto;
  } 
`

const StyledButtonContainer = styled.div`
  z-index: 1;
  width: 5vh;
  top: 2vh;
  right: 2vh;
  position: absolute;
  cursor: pointer;
`

const StyledButton = styled.img<any>`
  z-index: 10;
  width: 5vh;
`

const StyledTitle = styled.div<any>`
  color: #D20E00;
  font-weight: bold;
  font-size: 34px;
  letter-spacing: 1.5px;
  margin-top: 6vh;

  @media (max-width: 768px) {
    font-size: 28px;
  } 

  @media (max-width: 425px) {
    font-size: 24px;
  } 
`

function Home() {
  const [play, setPlay] = useState(false);

  const handleChange = (e: any) => {
    setPlay(!play);
};

  return (
      <div style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        zIndex: -1,
        backgroundColor: "#F7F1DE",
      }}>
        <StyledTitle>Sounds of Home</StyledTitle>
        <StyledImg
          alt="sounds of home"
          src={base}
        />
        <StyledButtonContainer onClick={handleChange}>
          {play
            ? <StyledButton alt="volume on" src={on}/> 
            :  <StyledButton alt="volume off" src={off}/>
          }
        </StyledButtonContainer>

          {/* Nature */}
          <Slider
            id={"nature"}
            startValue={0.15}
            title={"Birds and Cicadas"}
            sound={nature}
            play={play}
            max={"0.7"}
            image={natureImg}
            position={{top: '48vh', left: '81vw', mobile: '70vh'}}
          />

          {/* Radio */}
          <Slider
            id={"music"}
            startValue={0.08}
            title={"Radio Music"}
            sound={music}
            play={play}
            max={"0.35"}
            image={radioImg}
            position={{top: '64vh', left: '6vw', mobile: '80vh'}}
          />

          {/* Mahjong */}
           <Slider
            id={"mahjong"}
            startValue={0.18}
            title={"Mahjong Game"}
            sound={mahjong}
            play={play}
            image={mahjongImg}
            position={{top: '84vh', left: '80vw', mobile: '90vh'}}
          />

          {/* Kitchen */}
          <Slider
            id={"kitchen"}
            startValue={0.4}
            title={"Kitchen"}
            sound={kitchen}
            play={play}
            image={kitchenImg}
            position={{top: '16vh', left: '77vw', mobile: '50vh'}}
          />

          {/* Ambience */}
          <Slider
            id={"street"}
            startValue={0.4}
            title={"Street Ambience"}
            sound={city}
            play={play}
            image={cityImg}
            position={{top: '31vh', left: '6vw', mobile: '60vh'}}
          />
      </div>
  );
}

export default Home;
