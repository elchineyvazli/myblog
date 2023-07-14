import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Navbar from "./components/Navbar/Navbar";
import Message from "./components/Message/Message";
import { useContext } from "react";
import Footer from './components/Footer/Footer';
import { MessageContext } from "./ContextFolder/UseMessageContext";

function App() {
  let { messageHeight, messageWidth } = useContext(MessageContext)
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}>
        </Route>
      </Routes>
      <Message
        heightValue={messageHeight}
        widthValue={messageWidth}
      />
      <Footer />
    </>
  );
}

export default App;

