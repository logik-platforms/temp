// Components
import Head from "./components/head";
import Landing from "./components/Landing";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";


// Views
import Services from "./views/Services";
import Technologies from "./views/Technologies";
import Contact from "./views/Contact";
import About from "./views/About";

// CSS
import "./CSSreset.css"
import "./App.css"

const App = () => (<div>
    <Head />
    <NavBar />
    <Landing />
    <About />
    <Services />
    <Contact />
</div>
)

export default App