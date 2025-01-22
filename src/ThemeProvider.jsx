// import { useState, useEffect } from "react";
// import { themeContext } from "./themeContext";

// export default function ThemeProvider({children}) {
//     const [bgState, setbgState] = useState(false);
//     useEffect(() => {
//         document.body.style.color = bgState ? "white" : "black"
//         document.body.style.backgroundColor = bgState ? "black" : "white"
//     }, [bgState])
//     return (
//         <>
//             <themeContext.Provider value={{bgState,setbgState}}>
//                 {children}
//             </themeContext.Provider>
//         </>
//     )
// }