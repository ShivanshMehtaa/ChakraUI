import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Upload from "./components/Upload";
import Videos from "./components/Videos";


function App() {
  return (
    <BrowserRouter>
      {/* <div>aodaojndofn</div>
      <Button py={"5"} m={"34"} colorScheme={"whatsapp"}>Click</Button> */}
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/videos" element={<Videos/>} />
        <Route exact path="/upload" element={<Upload/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
