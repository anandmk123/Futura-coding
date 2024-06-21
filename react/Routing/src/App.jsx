import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import NavigationBar from "./Components/NavigationBar"
import GivenElement from "./Components/GivenElement"
import User from "./Components/User"
import Profile from "./Components/Profile"
import Settings from "./Components/Settings"
import Change from "./Components/Change"
import Password from "./Components/Password"
import Info from "./Components/Info"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/navigationbar" Component={NavigationBar}/>
        <Route path="/givenelement" element={<GivenElement/>}/>
        <Route path="/directelement" element={
           (<>
          <div>Direct Element</div>
          </>)
        }/>
        <Route path="user">
          <Route path="" Component={User}/>
          <Route path="profile">
            <Route path="" Component={Profile}/>
            <Route path="change">
              <Route path="" Component={Change}/>
              <Route path="password" Component={Password}/>
              <Route path="info" Component={Info}/>
            </Route>
          </Route>
          <Route path="settings" Component={Settings}/>
        </Route>
        <Route path="*" element={
          (<><div>404|page not found</div></>)  
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
