import { createContext } from "react"

const AuthContext = createContext({
    isLoggedIn: false,
    user:{},
    token: null,
    login: () => {},
    logout: () => {}
});

export default AuthContext
