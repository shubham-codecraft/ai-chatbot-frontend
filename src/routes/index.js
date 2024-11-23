import { Navigate } from "react-router-dom"
import ChatPage from "../pages/ChatPage"
import Login from "../pages/Login"
import Logout from "../pages/Logout"
import Pages404 from "../pages/Pages404"

const publicRoutes = [
    { path: "/", exact: true, component: <Navigate to={"/login"} replace />},
    { path: "/login", component: <Login/> },
    { path: "/logout", component: <Logout/>},
    { path: "*", component: <Pages404 /> }
]

const authProtectedRoutes = [
    { path: "/", exact: true, component: <Navigate to={"/chat"} replace />},
    { path: "/chat", component: <ChatPage/>},
    { path: "*", component: <Pages404 /> }
]

export { publicRoutes, authProtectedRoutes}