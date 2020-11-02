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

const StyledCol = styled.div`
  position: absolute;
`

const StyledImg = styled.img`
  height: 80vh;
  margin-top: 10vh;
  position: absolute;
  z-index: 10;
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
        <h1 style={{color: "#D20E00"}}>Sounds of Home</h1>
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
            startValue={0.25}
            title={"Birds and Cicadas"}
            sound={nature}
            play={play}
            max={"0.7"}
            image={natureImg}
            position={{top: '45vh', left: '83vw'}}
          />

          {/* Radio */}
          <Slider
            id={"music"}
            startValue={0.10}
            title={"Radio Music"}
            sound={music}
            play={play}
            max={"0.35"}
            image={radioImg}
            position={{top: '64vh', left: '6vw'}}
          />

          {/* Mahjong */}
           <Slider
            id={"mahjong"}
            startValue={0.25}
            title={"Mahjong Game"}
            sound={mahjong}
            play={play}
            image={mahjongImg}
            position={{top: '84vh', left: '80vw'}}
          />

          {/* Kitchen */}
          <Slider
            id={"kitchen"}
            startValue={0.5}
            title={"Kitchen"}
            sound={kitchen}
            play={play}
            image={kitchenImg}
            position={{top: '12vh', left: '74vw'}}
          />

          {/* Ambience */}
          <Slider
            id={"street"}
            startValue={0.5}
            title={"Street Ambience"}
            sound={city}
            play={play}
            image={cityImg}
            position={{top: '31vh', left: '4vw'}}
          />
      </div>
  );
}

export default Home;
