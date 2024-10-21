import axios from "axios";

const instance = axios.create({
    baseURL: "https://basic-fantasy-game.onrender.com",
});

export default instance;
