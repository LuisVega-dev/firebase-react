import imagen from "./assets/react.svg";
import { Movies } from "./components/Movies";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  const titulo = "REACT";
  return (
    <>
      <h1 style={{ color: "red" }}>{titulo}</h1>
      <h2>JAVASCRIPT</h2>
      <img src={imagen} />

      <Movies />
    </>
  );
}
export default App;
