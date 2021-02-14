import { Fragment,useState } from "react";
import { Form } from "./components/Form";
import { Question } from "./components/Question";
import "./index.css";



const App = () => {

   //state
   const [budget, saveBudget] = useState(0);
   const [remaining, saveRemaining] = useState(0);


  return (
    <div className="container">
      <div className="container">
        <header>
          <h1 className="animate__animated animate__fadeInUp">Budget</h1>

          <div className="contenido-principal contenido">
              <Question
                  saveBudget={saveBudget}
                  saveRemaining={saveRemaining}
              />

              <div className="row">
                  <div className="one-half column">
                          <Form/>
                  </div>
                  <div className="one-half column">
                          2
                  </div>
              </div>
          </div>
        </header>
      </div>

     
    </div>
  );
};

export default App;
