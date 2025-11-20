import Header from "../components/Header/header.js";
import Herosection from "../components/Herosection/herosection.js";
import About from "../components/About/about.js";
import Projects from "../components/Project/projects.js";
import Contacts from "../components/Contact/contacts.js";
import Footer from "../components/Footer/footer.js";

export default function Home() {
  return (
    <div>
      <Header />
      <Herosection />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}
