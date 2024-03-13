import { Helmet } from "react-helmet-async";
import { Banner, Featured, Footer, Navbar } from "./Components";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>
                    Sheikh Properties - Home
                </title>
            </Helmet>
            <Navbar />
            <Banner />
            <Featured />
            <Footer />

        </>
    );
};

export default Home;