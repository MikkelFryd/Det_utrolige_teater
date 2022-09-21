import { Home } from "./components/pages/Home";
import { AppRouter } from "./components/routing/Routing";
import { BrowserRouter } from "react-router-dom";
import "./app.scss";
import { EventProvider } from "./components/context/eventcontext/Event";
import { AuthProvider } from "./components/context/authcontext/Auth";
import { FavoriteProvider } from "./components/context/favoritecontext/Favorite";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <EventProvider>
            <FavoriteProvider>
              <AppRouter>
                <Home />
              </AppRouter>
            </FavoriteProvider>
        </EventProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
