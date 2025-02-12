import "./App.css";
import "@mantine/core/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import NewNav from "./components/NewNav.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import MyAccount from "./components/MyAccount.jsx";
import Chat from "./pages/Chat.jsx";
import { useState } from "react";
import SignUpModel from "./pages/SignupModel.jsx";

function App() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const openSignup = () => setIsSignupOpen(true);
  const closeSignup = () => setIsSignupOpen(false);

  return (
    <>
      <div className="container">
        <AuthProvider>
          <CartProvider>
            <Router>
              <div className="flex-footer">
                <NewNav openSignup={openSignup} />

                <Routes>
                  <Route path="/" element={<Home openSignup={openSignup} />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Shop" element={<Shop />} />
                  <Route path="/Me" element={<MyAccount />} />
                  <Route path="/Chat" element={<Chat />} />
                </Routes>
                <Footer />
                <SignUpModel isOpen={isSignupOpen} onClose={closeSignup} />
              </div>
            </Router>
          </CartProvider>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
