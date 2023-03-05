import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Header2 from "../../components/header/Header2";
import Navbar from "../../components/navbar/Navbar";
import Stats from "../../components/stats/Stats";
import Vendors from "../../components/vendors/Vendors";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Header2 />
      <div className="homeContainer">
        <Featured />
        <Stats />
        <Vendors />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
