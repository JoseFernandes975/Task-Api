import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import ClientHeader from "./routes/ClientHeader"
import Home from "./routes/Home"
import FindUser from "./routes/FindUser"

function App() {

  return (
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<ClientHeader />}>
     <Route index element={<Navigate to={'home'} />} />
     <Route path="home" element={<Home />} />
     <Route path="findUser" element={<FindUser />} />
    </Route>
    
    </Routes>
    </BrowserRouter>
  )
}

export default App
