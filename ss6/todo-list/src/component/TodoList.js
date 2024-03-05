import {useEffect, useState} from "react";
import {getList} from "../service/TodoService";

export default function TodoList() {
    const [todo, setTodo] = useState([]);
    useEffect(() => {
        getList().then((listToDo) => {
            setTodo(listToDo);
        })
    }, []);
    return (
        <>
            <table>
                <tbody>
                <tr>
                    <td>
                        ID
                    </td>
                    <td>
                        Title
                    </td>
                    <td>
                        Status
                    </td>
                </tr>
                </tbody>
                {todo.map((list) => (
                    <tr key={list.id}>
                        <td>{list.id}</td>
                        <td>{list.title}</td>
                        <td>{list.flag ? "OK" : "NO"}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}