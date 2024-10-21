import react, { Fragment } from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import PlayersList from "./components/PlayersList";
import TeamForm from "./components/TeamForm";
import TeamDisplay from "./components/TeamDisplay";

function App() {
    return (
        <Fragment>
            <Toaster />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<PlayersList />} />
                    <Route path="/create-team" element={<TeamForm />} />
                    <Route path="/team/:id" element={<TeamDisplay />} />
                </Route>
            </Routes>
        </Fragment>
    );
}

export default App;
