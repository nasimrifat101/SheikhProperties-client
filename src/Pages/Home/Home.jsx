import { Helmet } from "react-helmet-async";
import { Banner, Contact, Featured, Footer, Navbar, Services } from "./Components";

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
            <Services />
            <Featured />
            <Contact />
            <Footer />

        </>
    );
};

export default Home;