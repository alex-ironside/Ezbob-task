import {Data} from "../consts";

interface Props {
    setInputValue: (value: string) => void;
    setHistory: React.Dispatch<React.SetStateAction<string[]>>;
    setSelectedItem: (value: string | null) => void;
    word: Data;
    history: string[];
}

export function Link({
    setInputValue,
    setHistory,
    setSelectedItem,
    word,
    history,
}: Props) {
    return <a
        href={'#'}
        onMouseDown={() => {
            setInputValue(word.value);
            setHistory(prev => [...prev, word.id]);
            setSelectedItem(word.value);
        }}
        style={{
            color: history.includes(word.id) ? 'red' : 'black'
        }}>
        {word.value}
    </a>;
}
