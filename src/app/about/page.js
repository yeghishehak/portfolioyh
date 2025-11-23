import Header from '../../components/Header/header.js';
import About from '../../components/About/about.js';
import Footer from '../../components/Footer/footer.js';

export default function AboutPage() {
    return (
        <>
            <Header />
            <About marginTop={50} />
            <Footer />
        </>
    );
}