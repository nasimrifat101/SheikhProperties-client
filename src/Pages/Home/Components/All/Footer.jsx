import Logo from '../../../../Assets/Logo.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-gradient-to-r from-[#FFFAF0] via-[#FEFDF7] to-[#FDECC8] text-base-content">

                <aside>
                   <img src={Logo} alt="" className='w-20' />
                    <p>Sheikh Properties Services.<br />Providing reliable Real Estate since 2018</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Buy</a>
                    <a className="link link-hover">Sell</a>
                    <a className="link link-hover">Rent</a>
                    <a className="link link-hover">Broker</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;