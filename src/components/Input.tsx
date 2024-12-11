import React from "react";
import {Data} from "../consts";

interface Props {
    inputValue: string;
    setShouldShowHints: React.Dispatch<React.SetStateAction<boolean>>;
    setHistory: React.Dispatch<React.SetStateAction<string[]>>;
    setSelectedItem: (value: string | null) => void;
    setInputValue: (value: string) => void;
    setHints: React.Dispatch<React.SetStateAction<Data[]>>;
    data: Data[];
    hints: Data[];
}

export function Input({
    inputValue,
    setShouldShowHints,
    setHistory,
    setSelectedItem,
    setInputValue,
    setHints,
    data,
    hints
}: Props) {
    return <input
        autoFocus
        type="text"
        value={inputValue}
        onKeyDown={e => {
            if (e.key === 'Enter') {
                setShouldShowHints(false);
                setHistory(prev => [...prev, inputValue]);
                setSelectedItem(inputValue);
            }
        }}
        onClick={() => {
            if (hints.length > 0) {
                setShouldShowHints(true);
            }
        }}
        onChange={e => {
            setShouldShowHints(true);
            setInputValue(e.target.value);
            setHints(data.filter(word => word.value.startsWith(e.target.value)));
        }}
    />;
}
