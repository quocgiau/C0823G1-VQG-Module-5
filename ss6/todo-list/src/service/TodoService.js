import axios from "axios";

export async function getList() {
    const result = await axios.get("http://localhost:8080/todo");
    return result.data;
}

export async function addTodo(todo) {
    await axios.post("http://localhost:8080/todo", todo);
}