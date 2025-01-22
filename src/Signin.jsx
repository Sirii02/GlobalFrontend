// import { NavLink } from "react-router-dom"

export default function Signin() {
        return (
        <>
            <form onSubmit={handleSubmit}>
                <label>username</label>
                <input type="text"
                    value={username}
                    // onChange={(e) => { setUsername(e.target.value) }}
                />
                <button>Sumbit</button>
            </form>
        </>
    )
}