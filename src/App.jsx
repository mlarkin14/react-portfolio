import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Resume/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
