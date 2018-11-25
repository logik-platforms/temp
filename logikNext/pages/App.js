// Components
import Head from "./components/head"
import Landing from "./components/Landing"
import ReactFullpage from '@fullpage/react-fullpage/dist/react-fullpage-commonjs';
import StickyNavbar from "./components/StickyNavbar";
import FooterPage from "./components/FooterPage";
import DownArrow from "./components/DownArrow";

// Views
import About from "./views/About";
import Services from "./views/Services";
import Technologies from "./views/Technologies";
import Contact from "./views/Contact";

// CSS
import "./App.css"

class App extends React.Component {
    state = {
        navShown: false
    }

    navControlScheme = {
        0: {
            nav: false,
            down: true
        },
        1: {
            nav: true,
            down: true
        },
        2: {
            nav: true,
            down: true
        },
        3: {
            nav: true,
            down: true
        },
        4: {
            nav: true,
            down: false
        }
    }

    showNav(index) {
        if (index !== 0) {
            this.setState({
                navShown: true
            })
        } else {
            this.setState({
                navShown: false
            })
        }
    }

    render() {
        return (
            <div className='slider'>
                <Head />
                <StickyNavbar className={`animated ${this.state.navShown ? ('fadeInDown') : ('fadeOutUp')}`} />
                <DownArrow />
                <ReactFullpage
                    licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
                    scrollingSpeed={650}
                    onLeave={(origin, destination, direction) => {
                        setTimeout(() => {
                            this.showNav(destination.index);
                        })
                    }}
                    render={({ state, fullpageApi }) => {
                        return (
                            <ReactFullpage.Wrapper>
                                <div className='section' id="landingSection">
                                    <Landing />
                                </div>
                                <div className='section' id="section1">
                                    <About />

                                </div>
                                <div className='section' id="section2">
                                    <Services />

                                </div>
                                <div className='section' id="section3">
                                    <Technologies />

                                </div>
                                <div className='section' id="section4">
                                    <Contact />
                                    <FooterPage />
                                </div>
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />
            </div>
        )
    }
}


export default App