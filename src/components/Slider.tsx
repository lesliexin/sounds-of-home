import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import slide from "../assets/slide.png";
import thumb from "../assets/thumb.png";

const StyledSlider = styled.div`
    z-index: 1;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .slider {
        width: 200px;
        height: auto;
        -webkit-appearance: none;
        border-radius: 5px;
        outline: none;
        background: url(${slide}) no-repeat;
        background-size: 200px;


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
    font-size: 14px;
    color: #D20E00;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 8px;
`

interface Props {
    id: string,
    startValue: number,
    title: string,
    sound?: string,
}

function Slider({id, startValue, title, sound}: Props) {
    const [slideValue, setSlideValue] = useState(0.5);
    const [play, setPlay] = useState(true);
    const audioRef: any = useRef(null);

    const handleChange = (e: any) => {
        setSlideValue(e.target.value);
        // audioRef.volume = slideValue;
        // let audioComponent: any = document.getElementById("test");
        // audioComponent!.volume = slideValue;
    };

    // useEffect(() => {
    //     let audioComponent: any = document.getElementById(id);
    //     audioComponent!.play();
    // }, []);

    useEffect(() => {
        let audioComponent: any = document.getElementById(id);
        audioComponent!.volume = slideValue;
    }, [slideValue]);

    return (
        <StyledSlider>
        <audio id={id} ref={audioRef} style={{zIndex: 10}} src={sound} controls autoPlay/>
        <StyledTitle>{title}</StyledTitle>
            <input
                type="range" 
                min="0"
                max="1" 
                step="0.05"
                value={slideValue} 
                onChange={handleChange}
                className="slider"
            />
        </StyledSlider>
    );
}

export default Slider;
