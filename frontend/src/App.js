import './App.scss'
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "./pages/Sidebar";
import ChatPage from "./pages/ChatPage";


function App() {
  return (
    <div className='App'>
      <div className='app-body'>
        <HomePage />
        <ChatPage />
      </div>
    </div>
  )
} 

export default App;
