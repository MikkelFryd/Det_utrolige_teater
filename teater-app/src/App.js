import { Home } from "./components/pages/Home";
import { AppRouter } from "./components/routing/Routing";
import { BrowserRouter } from "react-router-dom";
import "./app.scss";
import { EventProvider } from "./components/context/event/Event";
import { AuthProvider } from "./components/context/auth/Auth";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <EventProvider>
          <AppRouter>
            <Home />
          </AppRouter>
        </EventProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
