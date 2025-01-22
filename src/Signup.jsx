import { NavLink } from "react-router-dom"
export default function Signup() {
    return (
        <><nav>
            <input type="text" />
            <h1>for SignUp</h1>
            <button>SignUp</button>
            <button><NavLink to="/">SIGNIN</NavLink></button>
        </nav>
        </>
    )
}