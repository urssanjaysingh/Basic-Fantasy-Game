import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";
import toast from "react-hot-toast";

const TeamDisplay = () => {
    let { id } = useParams();
    const [team, setTeam] = useState(null);

    useEffect(() => {
        async function fetchTeam() {
            try {
                let {
                    data: { success, message, data },
                } = await axios.get(`/teams/${id}`);
                if (success === true) {
                    setTeam(data);
                    toast.success("Your team is here");
                } else if (success === false) {
                    toast.error(message);
                }
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchTeam();
    }, [id]);

    if (!team) {
        return <h1>Loading...</h1>;
    }

    const totalPoints = team.players.reduce(
        (acc, player) => acc + player.points,
        0
    );

    return (
        <Fragment>
            <div className="container">
                <h1>Your Team: {team.name}</h1>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {team.players.map((player) => {
                        let { _id, name, points, position } = player;
                        return (
                            <tr key={_id}>
                                <td>{name}</td>
                                <td>{position}</td>
                                <td>{points}</td>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">Total Points:</td>
                        <td>{totalPoints}</td>
                    </tr>
                </tfoot>
            </table>
        </Fragment>
    );
};

export default TeamDisplay;
