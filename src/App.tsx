import React from "react";
import { useTheme } from "styled-components";
import Appbar from "./components/navigation/Appbar/Appbar";

const App = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <div>
      <Appbar />
    </div>
  );
};

export default App;
