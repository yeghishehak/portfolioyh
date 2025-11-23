import Header from '../../components/Header/header.js';
import Projects from '../../components/Project/projects.js';
import Footer from '../../components/Footer/footer.js';

export default function ProjectsPage() {
    return (
        <>
            <Header />
            <Projects marginTop={50} />
            <Footer marginTop="130px" />
        </>
    );
}