import { Routes, Route } from 'react-router-dom'
import { Actors } from '../pages/Actors'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Performances } from '../pages/Performances'

export const AppRouter = () => {


    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/performances" element={<Performances />} />
            <Route path="/actors" element={<Actors />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}