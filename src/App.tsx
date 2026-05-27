import Header from "./components/Header/Header";
import Impact from "./sections/Impact/Impact";
import Ahorro from "./sections/Ahorro/Ahorro";
import Consumo from "./sections/Consumo/Consumo";
import Razones from "./sections/Razones/Razones";
import MeatlessMonday from "./sections/MeatlessMonday/MeatlessMonday";

function App() {
  return (
    <div>
  
        <Header />
   
      <Impact/>
      <Consumo/>
      <MeatlessMonday/>
      
      <Ahorro/>


      <Razones/>
      
    </div>

    
  );
}

export default App;
