// Components
import Head from "./components/head"
import Landing from "./components/Landing"
// import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import ReactFullpage from '@fullpage/react-fullpage/dist/react-fullpage-commonjs';
import StickyNavbar from "./components/StickyNavbar";

// Views
import About from "./views/About";
import Services from "./views/Services";
import Technologies from "./views/Technologies";
import Contact from "./views/Contact";

// CSS
import "./App.css"

const App = (props) => (
    <div className='slider'>
        <Head />
        <ReactFullpage
            licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
            scrollingSpeed={650}
            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className='section' id="landingSection">
                            <Landing />
                        </div>
                        <div className='section' id="section1">
                        <StickyNavbar />
                        <About />
                        </div>
                        <div className='section' id="section2">
                        <StickyNavbar />
                            <Services />
                        </div>
                        <div className='section' id="section3">
                        <StickyNavbar />
                            <Technologies />
                        </div>
                        <div className='section' id="section4">
                        <StickyNavbar />
                            <Contact />
                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    </div>
)

export default App