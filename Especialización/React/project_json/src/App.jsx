import { Api } from "./Components/Api";
import { ApiProduct } from "./Components/ApiProduct";
import { data } from "./data.js";

function App() {
  return (
    <>
      <Api>
        {data.map((pokemones) => (
          <ApiProduct 
            key={pokemones.name} 
            nombre={pokemones.name}
            img={pokemones.img}
          />
        ))}
      </Api>
    </>
  );
}

export default App;
