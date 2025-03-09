import './App.css';
import {Navbar} from "./components/Navbar.tsx";
import {Home} from "./components/Home.tsx";

function App() {

    return (
        <>
            <Navbar/>
            <div className="relative z-1 p-8 mt-24">
                <Home/>
                <section id="expertise">
                    <img src="./Skills_Expertise.svg" alt="skills image"/>
                </section>
            </div>
        </>
    );
}

export default App;