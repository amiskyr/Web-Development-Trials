import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Box from "@mui/material/Box";

import { useState } from 'react';

export default function FormDemo() {
    const [name, setName] = useState("");
    const [volume, setVolume] = useState(50);
    const updateName = (e) => {
        setName(e.target.value);
    }
    const changeVolume = (e) => {
        setVolume(e.target.value);
    }
    return (
        <Box sx={{border: "1px solid red"}}>
            <h1>Name is: {name}</h1>
            <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                placeholder="Puppy Name"
                onChange={updateName}
            />
            <h1>Volume is: {volume}</h1>
            <Slider aria-label="Volume" value={volume} onChange={changeVolume} />

            {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
        </Box>
    )
}