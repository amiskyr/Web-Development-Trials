
import List from '@mui/material/List';
import { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const initialTodos = [
    { id: 1, text: "Walk the Dog", completed: false },
    { id: 2, text: "Walk the Cat", completed: false },
    { id: 3, text: "Walk the Dragon", completed: true },
    { id: 4, text: "Walk the Golem", completed: false },
]

export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos);

    const addTodo = (text) => {
        setTodos((prevTodos) => {
            return [...prevTodos, { text: text, id: 8, completed: false }];
        });
    }
    const removeTodo = (tid) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((t) => t.id !== tid);
        });
    };
    const toggleTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                else {
                    return todo;
                }
            })
        })
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map(todo => {
                return <TodoItem
                    todo={todo}
                    key={todo.id}
                    removeTodo={() => removeTodo(todo.id)}
                    toggleTodo={() => toggleTodo(todo.id)}
                />
            })}
            <TodoForm
                addTodo={addTodo}
            />
        </List>
    )
}


// export default function CheckboxList() {
//     const [checked, setChecked] = React.useState([0]);

//     const handleToggle = (value) => () => {
//         const currentIndex = checked.indexOf(value);
//         const newChecked = [...checked];

//         if (currentIndex === -1) {
//             newChecked.push(value);
//         } else {
//             newChecked.splice(currentIndex, 1);
//         }

//         setChecked(newChecked);
//     };

//     return (
//         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//             {[0, 1, 2, 3].map((value) => {
//                 const labelId = `checkbox-list-label-${value}`;

//                 return (
//                     <ListItem
//                         key={value}
//                         secondaryAction={
//                             <IconButton edge="end" aria-label="comments">
//                                 <CommentIcon />
//                             </IconButton>
//                         }
//                         disablePadding
//                     >
//                         <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
//                             <ListItemIcon>
//                                 <Checkbox
//                                     edge="start"
//                                     checked={checked.indexOf(value) !== -1}
//                                     tabIndex={-1}
//                                     disableRipple
//                                     inputProps={{ 'aria-labelledby': labelId }}
//                                 />
//                             </ListItemIcon>
//                             <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
//                         </ListItemButton>
//                     </ListItem>
//                 );
//             })}
//         </List>
//     );
// }
