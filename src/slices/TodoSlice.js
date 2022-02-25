import { createSlice } from "@reduxjs/toolkit";

const getinitTodos = () => {
    const localTodo = window.localStorage.getItem('todoList')
    if (localTodo) {
        return JSON.parse(localTodo);
    }
    window.localStorage.setItem('todoList', JSON.stringify([]));
    return [];
}
const initialValue = {
    filterStatus: 'All',
    todoList: getinitTodos(),
};

export const TodoSlice = createSlice({
    name: 'todo',
    initialState: initialValue,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload);
            const todoList = window.localStorage.getItem('todoList');
            if (todoList) {
                const todoArr = JSON.parse(todoList);
                todoArr.push({ ...action.payload });
                window.localStorage.setItem('todoList', JSON.stringify(todoArr));
            }
        },
        deleteTodo: (state, action) => {
            const todoList = window.localStorage.getItem('todoList');
            if (todoList) {
                const todoArr = JSON.parse(todoList);
                todoArr.forEach((todo, index) => {
                    if (todo.id === action.payload) todoArr.splice(index, 1);
                });
                window.localStorage.setItem('todoList', JSON.stringify(todoArr));
                state.todoList = todoArr
            }
        },
        updateTodo: (state, action) => {
            const todoList = window.localStorage.getItem('todoList');
            if (todoList) {
                const todoArr = JSON.parse(todoList)
                todoArr.forEach((todo) => {
                    if (todo.id === action.payload.id) {
                        todo.Title = action.payload.Title
                        todo.status = action.payload.status
                    }
                    window.localStorage.setItem('todo', JSON.stringify(todoArr))
                    state.todoList = todoArr
                })
            }
        },
        updatefilterStatus: (state, action) => {
            state.filterStatus = action.payload
        }
    }
})

export const { updateTodo, addTodo, deleteTodo, updatefilterStatus } = TodoSlice.actions;
export default TodoSlice.reducer;