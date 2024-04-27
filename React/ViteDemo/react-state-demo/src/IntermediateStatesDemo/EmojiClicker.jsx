import { v4 as uuid } from "uuid";
import { useState } from "react";

const emojis = ["😂", "😔", "🤦‍♂️", "😪", "💪", "💻"]
const getRandomEmoji = () => {
    return emojis[Math.floor(Math.random() * emojis.length + 1)];
}

export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: "😊" }]);
    const addEmoji = () => {
        //creates copy of emojis array to pass it further
        setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: getRandomEmoji() }]);
    }
    const removeEmoji = (id) => {
        setEmojis((oldEmojis) => {
            // will only add to the new array, where element that doesn't have the same id as requested id
            // then pass the new array further
            return oldEmojis.filter(e => e.id !== id)
        })
    }

    return (
        <div>
            {emojis.map((e) => (
                <span
                    onClick={() => { removeEmoji(e.id) }}
                    key={e.id}
                    style={{ fontSize: "5rem" }}
                >{e.emoji}</span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    );
}