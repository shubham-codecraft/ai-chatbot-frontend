import { Navigate } from "react-router-dom"
import ChatPage from "../pages/ChatPage"
import Login from "../pages/Login"
import Logout from "../pages/Logout"

const publicRoutes = [
    { path: "/", exact: true, component: <Navigate to={"/login"} replace />},
    { path: "/login", component: <Login/> },
    { path: "/logout", component: <Logout/>},
]

const authProtectedRoutes = [
    { path: "/", exact: true, component: <Navigate to={"/chat"} replace />},
    { path: "/chat", component: <ChatPage/>}
]

export { publicRoutes, authProtectedRoutes}