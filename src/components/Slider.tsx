import React, {useState} from 'react';

interface Props {
    id: string
}

function Slider({id}: Props) {
    const [slideValue, setSlideValue] = useState(5);

    const handleChange = (e: any) => {
        setSlideValue(e.target.value);
    };

    return (
        <div style={{
            zIndex: 1,
        }}>
            <label>
                <input
                    id={id}
                    type="range" 
                    min="0"
                    max="5" 
                    step="1"
                    value={slideValue} 
                    onChange={handleChange}
                />
            </label>
        </div>
    );
}

export default Slider;
