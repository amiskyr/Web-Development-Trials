import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import Create from '@mui/icons-material/Create';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { Box } from '@mui/material';
import { useState } from 'react';

export default function TodoForm({ addTodo }) {
    const [text, setText] = useState("");
    const handleChange = (evt) => {
        setText(evt.target.value);
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <ListItem
            sx={{
                display: "flex",
                // alignItems: 'center',
                justifyContent: "center",
                // flexDirection: "column",
            }}
        >
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="Add note"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    value={text}
                    InputProps={
                        {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        // onClick={handleClickShowPassword}
                                        // onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        type="submit"
                                    >
                                        <Create />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }
                    }
                />
            </form>
        </ListItem>
    )
}