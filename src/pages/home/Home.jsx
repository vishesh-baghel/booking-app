import "./home.css";
import NavBar from "../../Components/navBar/NavBar";
import Header from "../../Components/header/Header";
import Featured from "../../Components/featured/Featured";
import PropertyList from "../../Components/propertyList/PropertyList";

function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
      </div>
    </div>
  );
}

export default Home;
