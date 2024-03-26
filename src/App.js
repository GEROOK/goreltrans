import "./App.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/down/Footer";
function App() {
  return (
    <div className="body">
      <div className="inform">
        <Header />
        <Footer />
      </div>
    </div>
  );
}

export default App;
