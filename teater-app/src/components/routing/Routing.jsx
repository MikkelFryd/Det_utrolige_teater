import { Routes, Route } from 'react-router-dom'
import { Actors } from '../pages/Actors'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Events } from '../pages/Events'

export const AppRouter = () => {


    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/events" element={<Events />} />
            <Route path="/actors" element={<Actors />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}