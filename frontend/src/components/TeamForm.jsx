import React, { Fragment, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "../axios";
import { useNavigate } from "react-router-dom";

const TeamForm = () => {
    const navigate = useNavigate();
    const [allPlayers, setAllPlayers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [team, setTeam] = useState({
        name: "",
        players: [],
    });

    const { name, players } = team;

    const handleChange = (e) => {
        const { name, value, checked } = e.target;

        if (name === "name") {
            setTeam({ ...team, name: value });
        } else if (name === "players") {
            if (checked) {
                setTeam({ ...team, players: [...players, value] });
            } else {
                setTeam({
                    ...team,
                    players: players.filter((player) => player !== value),
                });
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (players.length === 0) {
            toast.error(
                "Please enter a team name and select at least one player."
            );
            return;
        }

        try {
            setLoading(true);
            let {
                data: { success, message, data },
            } = await axios.post("/teams", team);
            if (success === true) {
                toast.success(message);
                navigate(`/team/${data._id}`);
            } else if (success === false) {
                toast.error(message);
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || "An error occurred");
            } else {
                toast.error("Network error. Please try again later.");
            }
        } finally {
            setLoading(false);
            setTeam({ name: "", players: [] });
        }
    };

    useEffect(() => {
        async function fetchAllPlayers() {
            try {
                let {
                    data: { success, message, data },
                } = await axios.get("/players");
                if (success === true) {
                    toast.success(message);
                } else if (success === false) {
                    toast.error(message);
                }
                setAllPlayers(data);
            } catch (error) {
                if (error.response) {
                    toast.error(
                        error.response.data.message || "An error occurred"
                    );
                } else {
                    toast.error("Network error. Please try again later.");
                }
            }
        }
        fetchAllPlayers();
    }, []);

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="team-name">Team Name</label>
                    <input
                        type="text"
                        id="team-name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        placeholder="Enter name of your team"
                        required
                    />
                </div>
                <div>
                    <label>Select Players</label>
                    <div className="checkbox-container">
                        {allPlayers.map((player) => {
                            let { _id, name, points, position } = player;
                            return (
                                <div key={_id}>
                                    <input
                                        type="checkbox"
                                        id={`player-${_id}`}
                                        name="players"
                                        value={_id}
                                        checked={players.includes(_id)}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor={`player-${_id}`}>
                                        {name}, {position}, Pts: {points}
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <input
                        type="submit"
                        value={loading ? "Submitting..." : "Submit"}
                        disabled={loading}
                    />
                </div>
            </form>
        </Fragment>
    );
};

export default TeamForm;
