import { Helmet } from "react-helmet-async";
import { Banner, Featured, Navbar } from "./Components";

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

        </>
    );
};

export default Home;