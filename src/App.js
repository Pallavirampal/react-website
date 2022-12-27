import Home from "./pages/home.jsx" 
import {Routes,Route} from "react-router-dom"; 
import Signin from './pages/signin.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        
      </Routes>
    </>
  );
}

export default App;
