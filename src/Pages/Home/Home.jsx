import { Helmet } from "react-helmet-async";
import { Navbar } from "./Components";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Sheikh Properties - Home</title>
            </Helmet>
            <Navbar />

        </>
    );
};

export default Home;