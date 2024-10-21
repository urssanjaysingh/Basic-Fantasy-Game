import axios from "axios";

const instance = axios.create({
	// frontend base url
    baseURL: "https://basic-fantasy-game.onrender.com", 
});

export default instance;
