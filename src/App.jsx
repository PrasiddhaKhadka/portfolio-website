import earth from "./assets/images/earth.svg";
import bg from "./assets/images/bg.svg"; // import your background
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Navbar />
    </div>

    // <div
    //   className="h-screen w-screen bg-center bg-cover bg-black"
    //   style={{ backgroundImage: `url(${bg})` }}
    // >
    //   <div className="flex flex-col justify-end h-screen items-center">
    //     <img 
    //       src={earth} 
    //       alt="Logo" 
    //       className="w-96 object-cover border-2 border-red-600" 
    //     />
    //   </div>
    // </div>
  );
}

export default App;
