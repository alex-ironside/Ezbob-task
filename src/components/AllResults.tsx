import {Data} from "../consts";

interface Props {
    setSelectedItem: (value: string | null) => void;
    data: Data[];
}

export function AllResults({
    setSelectedItem,
    data: hints
}: Props) {
    return (
        <div>
            {
                hints.map(word => (
                    <div key={word.id}>
                        <h3>{word.value}</h3>
                        <p>{word.description}</p>
                    </div>
                ))
            }
            <button onClick={() => setSelectedItem(null)}>Close</button>
        </div>
    );
}
