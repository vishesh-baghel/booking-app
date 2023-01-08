import "./home.css";
import NavBar from "../../Components/navBar/NavBar";
import Header from "../../Components/header/Header";
import Featured from "../../Components/featured/Featured";
import PropertyList from "../../Components/propertyList/PropertyList";
import FeaturedProperties from "../../Components/featuredProperties/FeaturedProperties";
import MailList from "../../Components/mailList/MailList";
import Footer from "../../Components/footer/Footer";

function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Propertyies guests love</h1>
        <FeaturedProperties />
        <h1 className="homeTitle">Subscribe to get latest offers</h1>
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
