import { Helmet } from "react-helmet-async";
import { Banner, Featured, Footer, Navbar } from "./Components";

const Home = () => {
    return (
        <div  className="bg-gradient-to-tr from-[#ffffff] via-[#fffbf3] to-[#ffffff]">
            <Helmet>
                <title>
                    Sheikh Properties - Home
                </title>
            </Helmet>
            <Navbar />
            <Banner />
            <Featured />
            <Footer />

        </div>
    );
};

export default Home;