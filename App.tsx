import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/app/Tabs";
import { initDb } from "./src/db/client";

export default function App() {
  useEffect(() => {
    initDb();
  }, []);

  return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
  );
}
