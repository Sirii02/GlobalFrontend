import React from "react";
import { useState } from "react";
import axios from "axios";
export default function Login({ setIsAuth }) {
    const [username, setUsername] = useState("");
    async function handleClick(e) {
        e.preventDefault()
        const response = await axios.post("https://globalbackend-cp5z.onrender.com")
        if (response) {
            setIsAuth(response.data.success)
        } else {
            console.log("Error")
        }
        // try {
        //     const response = await axios.post("https://globalbackend-cp5z.onrender.com",
        //     {
        //         name: username
        //     });

        //     if (response.data.success) {
        //         setIsAuth(true);
        //     } else {
        //         console.log("Invalid username");
        //     }
        // } catch (error) {
        //     console.error("Error during login");
        // }
    }
    return (
        <>
            <form onSubmit={handleClick}>
                <label>username</label>
                <input type="text"
                    value={username}
                    onChange={(e) => { setUsername(e.target.value) }}
                />
                <button onClick={handleClick}>Submit</button>
            </form>
        </>
    )
}