import { createContext, useContext, useState } from "react";

const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [eventData, setEventData] = useState([]);

  return (
    <EventContext.Provider value={{ eventData, setEventData }}>
      {children}
    </EventContext.Provider>
  );
};

const useEvent = () => useContext(EventContext);

export { EventContext, EventProvider, useEvent };
