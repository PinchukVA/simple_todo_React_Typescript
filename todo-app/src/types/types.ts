export interface ITodo {
    id: number,
    title: string,
    complete: boolean
}

export interface ITodoItem extends ITodo{
    toggleToDoITem: (id:number) => void
    deleteTodoItem: (id:number) => void 
}

export interface ITodoListProps{
    items: ITodo[]
    toggleToDoITem: (id:number) => void
    deleteTodoItem: (id:number) => void
}