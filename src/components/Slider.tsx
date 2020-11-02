import React, {useEffect, useRef, useState} from 'react';
import styled, { css } from "styled-components";
import slide from "../assets/slide.png";
import thumb from "../assets/thumb.png";

const StyledSlider = styled.div<any>`
    z-index: 20;
    width: 190px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${(props: any) => props.posX && css`
        left: ${props.posX};
    `};

    ${(props: any) => props.posY && css`
        top: ${props.posY};
    `};

    .slider {
        width: 190px;
        height: auto;
        -webkit-appearance: none;
        border-radius: 5px;
        outline: none;
        background: url(${slide}) no-repeat;
        background-size: 190px;


        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 28px;
            height: 28px;
            cursor: pointer;
            background: url(${thumb}) no-repeat;
            background-size: 28px;
        }

        &::-moz-range-thumb {
            width: 28px;
            height: 28px;
            cursor: pointer;
            background: url(${thumb}) no-repeat;
            background-size: 28px;
        }
    }
`

const StyledTitle = styled.div`
    font-size: 16px;
    color: #D20E00;
    font-weight: 700;
    letter-spacing: 1.2px;
    margin-bottom: 8px;
`

const StyledImg = styled.img<any>`
    height: 80vh;
    margin-top: 12vh;
    position: absolute;
    opacity: 0;

    ${(props: any) => props.opacity && css`
        opacity: ${props.opacity};
    `};
`

interface Props {
    id: string,
    startValue: number,
    title: string,
    sound?: string,
    play: boolean,
    max?: string,
    image?: string,
    position: {top: string, left: string},
}

function Slider({id, startValue, title, sound, play, max="1", image, position}: Props) {
    const [slideValue, setSlideValue] = useState(startValue);
    const audioRef: any = useRef(null);

    const handleChange = (e: any) => {
        setSlideValue(e.target.value);
    };

    useEffect(() => {
        let audioComponent: any = document.getElementById(id);
        audioComponent!.addEventListener('ended', function () {
            audioComponent.currentTime = 0;
            audioComponent!.play()
          }, false);
    }, []);

    useEffect(() => {
        let audioComponent: any = document.getElementById(id);
        audioComponent!.volume = slideValue;
    }, [slideValue, id]);

    useEffect(() => {
        let audioComponent: any = document.getElementById(id);
        play ? audioComponent!.play() : audioComponent!.pause();
    }, [play, id]);

    return (
        <>
            <StyledImg
                alt="image"
                src={image}
                opacity={slideValue/Number(max)}
            />
            <StyledSlider
                posX={position.left}
                posY={position.top}
            >
                <audio id={id} ref={audioRef} style={{zIndex: 10}} src={sound}/>
                <StyledTitle>{title}</StyledTitle>
                    <input
                        type="range" 
                        min="0"
                        max={max ? max : "1"}
                        step="0.01"
                        value={slideValue} 
                        onChange={handleChange}
                        className="slider"
                    />
            </StyledSlider>
        </>
    );
}

export default Slider;
