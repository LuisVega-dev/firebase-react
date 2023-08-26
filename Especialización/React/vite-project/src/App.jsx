import { SelectPerson } from "./components/SelectPerson";
import { Mytext } from "./components/Mytext";
import { Button } from "./components/Button";


// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  return (
    <>
      <SelectPerson />
      <SelectPerson />
      <Mytext classStyle={"Mi-Color-1"} />
      <Mytext classStyle="Mi-Color-2" />
      <Mytext classStyle="Mi-Color-3" />
      <Button />
    </>
  );
}

export default App;