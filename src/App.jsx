import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Paste from "./components/Paste";
import ViewPaste from "./components/ViewPaste";
import Footer from "./components/Footer";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
        <div>
          <Navbar />
          <Home />
          <Footer />
        </div>
    },
    {
      path: '/pastes',
      element:
        <div>
          <Navbar />
          <Paste />
          <Footer />
        </div>
    },
    {
      path: "pastes/:id",
      element:
        <div>
          <Navbar />
          <ViewPaste />
          <Footer />
        </div>
    }
  ]
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
