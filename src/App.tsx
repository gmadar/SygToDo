import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Avatar from "./components/Avatar";
import GlobalTasksStatus from "./components/GlobalTasksStatus";
import Logo from "./components/Logo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header>
        <Logo />
        <GlobalTasksStatus low={0} medium={2} high={1} />
        <Avatar name="hertzel" />
      </Header>
      <div>main app here</div>
    </>
  );
}

export default App;
