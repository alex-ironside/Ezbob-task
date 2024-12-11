import React from "react";
import {Data} from "../consts";
interface Props {
    setHistory: React.Dispatch<React.SetStateAction<string[]>>;
    word: Data;
}

export function RemoveButton({
    setHistory,
    word
}: Props) {
    return <button style={{
        cursor: 'pointer',
        border: 'none',
        background: 'none',
        color: 'blue',
        textDecoration: 'underline'
    }} onMouseDown={() => {
        setHistory(prev => prev.filter(id => id !== word.id));
    }}>Remove</button>;
}
