import React, { useRef, useState, useEffect } from 'react';

const AutoScalingText = ({ text }) => {
    const node = useRef(null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const parentNode = node.current.parentNode;
    
        const availableWidth = parentNode.offsetWidth;
        const actualWidth = node.current.offsetWidth;
        const actualScale = availableWidth / actualWidth;
        
        if (scale === actualScale){
            return;
        }
        
        if (actualScale < 1) {
            setScale(actualScale);
        } else if (scale < 1) {
            setScale(1);
        }
    }, [text]);

    return (
        <div
            className="auto-scaling-text"
            style={{ transform: `scale(${scale},${scale})` }}
            ref={node}
        >
            {text}
        </div>
    );
};

export default AutoScalingText;