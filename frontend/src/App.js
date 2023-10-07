// import "bootswatch/dist/lumen/bootstrap.min.css";
// import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Login from "./components/Login";
import Trail1 from "./components/Publications";
import Home  from "./components/Home";
import WorkFlow from "./components/WorkFlow";
import FirstData from "./components/NewPublication";
import FirstData1 from "./components/NewPublication1";
import Publications1 from "./components/Publications1";
import Publications2 from "./components/Publications2";
import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Notifications } from "@mantine/notifications";

function App() {
  return (
    <MantineProvider>
      
    <div className="App">
      <Notifications position="top-right" zIndex={1000}/>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/publications" element={<Publications2/>}/>

          {/* <Route path="/insert" element={<WorkFlow/>}/> */}
          <Route path="/insert" element={<FirstData/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    {/* </NotificationsProvider> */}
    </MantineProvider>
    
  );
}

export default App