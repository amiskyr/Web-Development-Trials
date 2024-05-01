import { useState } from "react";
import Rating from '@mui/material/Rating';

export default function RatingDemo() {
    const [score, setScore] = useState(1);

    return (
        <div>
            <h1>Rating Demo... Current score: {score}</h1>
            <Rating
                name="simple-controlled"
                value={score}
                onChange={(event, newValue) => {
                    setScore(newValue);
                }}
            />
        </div>
    )
}