import axios from "axios";

export const getAll = async () => {
    try {
        const res = await axios.get("http://localhost:8080/custumer")
        return res.data;
    } catch (e) {
        console.log(e);
    }
}