import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [roomCode, setRoomCode] = useState("");
    const navigate = useNavigate();

    const submitCode = () => {
        navigate(`/room/${roomCode}`)
    }
    return (
        <header className="header">
            <div className="overlay">
                <h6 className="subtitle">Conect With Friends & Family In Real Time.</h6>
                <h1 className="title">Konkonsa Studio</h1>
                <div className="buttons text-center">
                    <input type="text" value={roomCode} className="form-control" onChange={(e) => setRoomCode(e.target.value)} placeholder="Enter room code" />
                    <br />
                    <a href="#" onClick={submitCode} className="btn btn-primary rounded w-lg btn-lg my-1">Submit</a>
                </div>              
            </div>      
        </header>
    )
}

export default Home