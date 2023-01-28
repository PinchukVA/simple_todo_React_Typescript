import React, {FC} from 'react';
import { ITodoItem } from '../types/types';

const ToDoItem: FC<ITodoItem>= (props) => {

    const {
        id,
        title, 
        complete,
        toggleToDoITem,
        deleteTodoItem
    } = props

    return (
        <div className='todoItem__wrapper'>
            <p>Completed:<input type={'checkbox'} onChange={()=>toggleToDoITem(id)}checked={complete}/></p>
            <p>{title}</p>
            <button className='todoItem__button' onClick={()=>deleteTodoItem(id)}>Delete item</button>
        </div>
    );
};

export default ToDoItem;