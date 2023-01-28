import React, {FC} from 'react';
import { ITodoListProps} from '../types/types';
import ToDoItem from './ToDoItem';

const ToDoList:FC<ITodoListProps> = (props) => {

    const {items,toggleToDoITem,deleteTodoItem} = props

    return (
        <div>
            {items.map(element=><ToDoItem key={element.id} {...element} toggleToDoITem={toggleToDoITem}  deleteTodoItem={deleteTodoItem}/>)}
        </div>
    );
};

export default ToDoList;