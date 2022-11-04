import { createSlice } from "@reduxjs/toolkit";

const todo: string[] = [];

const initialState = {
    todos: todo
};

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        }
    }
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer; 