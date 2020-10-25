import React, {useState} from 'react';
import styled from 'styled-components';
import slide from "../assets/slide.png";
import thumb from "../assets/thumb.png";

const StyledSlider = styled.div`
    z-index: 1;
    width: 250px;

    .slider {
        width: 250px;
        height: auto;
        -webkit-appearance: none;
        border-radius: 5px;
        outline: none;
        background: url(${slide}) no-repeat;
        background-size: 250px;


        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 35px;
            height: 35px;
            cursor: pointer;
            background: url(${thumb}) no-repeat;
            background-size: 35px;
        }

        &::-moz-range-thumb {
            width: 20px;
            height: 20px;
            cursor: pointer;
            outline: 2px solid #333;
        }
    }
`

interface Props {
    id: string
}

function Slider({id}: Props) {
    const [slideValue, setSlideValue] = useState(5);

    const handleChange = (e: any) => {
        setSlideValue(e.target.value);
    };

    return (
        <StyledSlider>
            <input
                id={id}
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
