import { Home } from "./components/pages/Home";
import { AppRouter } from "./components/routing/Routing";
import { BrowserRouter } from "react-router-dom";
import "./app.scss";
import { EventProvider } from "./components/context/event/Event";
import { AuthProvider } from "./components/context/auth/Auth";
import { FavoriteProvider } from "./components/context/favorites/Favorite";

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
