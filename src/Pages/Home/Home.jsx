import { Helmet } from "react-helmet-async";
import { Banner, Navbar } from "./Components";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Sheikh Properties - Home</title>
            </Helmet>
            <Navbar />
            <Banner />

        </>
    );
};

export default Home;