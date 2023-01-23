// const mongoose = require('mongoose');
import Home from "./pages/home.jsx"
import { Routes, Route } from "react-router-dom";
import Signin from './pages/signin.jsx'

// const DB = 'mongodb+srv://Pallavi:<pallavipalram@123>@cluster0.21yhysu.mongodb.net/?retryWrites=true&w=majority';
// mongoose.connect(DB,{
//   useNewUrlParser :true,
//   useCreateIndex: true,
//   useUnifiedTopology :true,
//   useFindAndModify : false
// }).then(()=>{
//   console.log('connection successful')
// }).cach((err)=>console.log('no connection'));
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signin" element={<Signin />}></Route>

      </Routes>
    </>
  );
}

export default App;
