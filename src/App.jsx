import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [animal, setAnimal] = useState({
    mascota: "",
    color: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      animal.mascota[0] !== " " &&
      animal.mascota.length >= 3 &&
      animal.color.length >= 6
    ) {
      setShow(true);
      setError(false);
    } else {
      setShow(false);
      setError(true);
    }
  };

  console.log(animal);
  console.log("primera letra " + animal.mascota[0]);
  console.log("show " + show);
  console.log("error " + error);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Mascota: </label>
        <input
          type="text"
          onChange={({ target }) =>
            setAnimal({ ...animal, mascota: target.value })
          }
        /> 
        <hr></hr>
        <label>Color: </label>
        <input
          type="text"
          onChange={({ target }) =>
            setAnimal({ ...animal, color: target.value })
          }
        />
             <hr></hr>
        <button>Enviar</button>
      </form>
      <>
        {show && <Card mascota={animal.mascota} color={animal.color} />}

        {error && <h4 style={{color:"red"}}>Por favor chequea que la información sea correcta</h4>}
      </>
    </>
  );
}

export default App;
