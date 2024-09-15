import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Topscroller";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
