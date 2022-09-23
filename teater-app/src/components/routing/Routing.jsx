import { Routes, Route } from "react-router-dom";
import { Actors } from "../pages/Actors";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Events } from "../pages/Events";
import { EventDetails } from "../eventdetails/EventDetails";
import { Shop } from "../pages/Shop";
import { ActorsDetails } from "../actorsdetails/ActorsDetails";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events">
        <Route index element={<Events />} />
        <Route path=":id" element={<EventDetails />} />
      </Route>
      <Route path="/actors">
        <Route index element={<Actors />} />
        <Route path=":id" element={<ActorsDetails />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/shop">
        <Route index element={<Shop />} />
        <Route path=":id" element={<Shop />} />
      </Route>
    </Routes>
  );
};
