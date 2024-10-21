import React, { useEffect, useState } from "react";
import axios from "../axios";
import toast from "react-hot-toast";

const PlayersList = () => {
    const [loading, setLoading] = useState(false);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        async function fetchAllPlayers() {
            try {
                setLoading(true);
                let {
                    data: { success, message, data },
                } = await axios.get("/players");
                if (success === true) {
                    toast.success(message);
                } else if (success === false) {
                    toast.error(message);
                }
                setPlayers(data);
            } catch (error) {
                toast(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchAllPlayers();
    }, []);

    return (
        <div className="container">
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Points</th>
                            <th>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player) => {
                            let { _id, name, points, position } = player;
                            return (
                                <tr key={_id}>
                                    <td>{name}</td>
                                    <td>{points}</td>
                                    <td>{position}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default PlayersList;
