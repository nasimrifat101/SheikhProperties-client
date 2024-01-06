import { Helmet } from "react-helmet-async";
import { Banner, Featured, Navbar, Services } from "./Components";

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
            <Services/>
            <Featured />

        </>
    );
};

export default Home;