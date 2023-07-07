import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Navbar from "./components/Navbar/Navbar";
import Message from "./components/Message/Message";
import { useContext } from "react";
import { MessageContext } from "./UseMessage/UseMessage";

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
    </>
  );
}

export default App;

