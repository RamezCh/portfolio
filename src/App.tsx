import './App.css';
import {Navbar} from "./components/Navbar.tsx";
import {Home} from "./components/Home.tsx";

function App() {

    return (
        <>
            <Navbar/>
            <div className="w-full h-36 block"></div>
            <div className="relative z-1 m-8">
                <Home/>
                <section id="expertise">
                    <img src="./Skills_Expertise.svg" alt="skills image"/>
                </section>
            </div>
        </>
    );
}

export default App;