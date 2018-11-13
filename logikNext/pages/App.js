// Components
import Head from "./components/head"
import Landing from "./components/Landing"
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import ReactFullpage from '@fullpage/react-fullpage/dist/react-fullpage-commonjs';

// Views
import Services from "./views/Services";
import Technologies from "./views/Technologies";
import Contact from "./views/Contact";

// CSS
import "./CSSreset.css"
import "./App.css"

const App = (props) => (
    <div className='slider'>
    <Head />
    <ReactFullpage
    //  {...opts}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {props.children &&
            <div className='section section--home '>
                {props.children}
                <button onClick={() => fullpageApi.moveSectionDown()}>Hello</button>
            </div>
            }
              <div className='section project--one'>
                  <Landing />
              </div>
              <div className='section project--two'>
                  <span className='project__number'>2</span>
              </div>
              <div className='section project--three'>
                  <span className='project__number'>3</span>
              </div>
            
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </div>
)

export default App

{/* preexisting components
     <div>
    <Head />
    <NavBar />
    <Landing />
</div> */}