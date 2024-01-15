import Footer from "./Components/Footer component/Footer";
import Hero from "./Components/Hero component/Hero";
import Navbar from "./Components/Navbar component/Navber";
import Searchbar from "./Components/Searchbar component/Searchbar";
import Table from "./Components/Table component/Table";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Searchbar />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
