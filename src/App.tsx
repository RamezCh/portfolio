import './App.css';
import {Navbar} from "./components/Navbar.tsx";
import {Home} from "./components/Home.tsx";
import {Services} from "./components/Services.tsx";
import {Tools} from "./components/Tools.tsx";
import {ImageCard} from "./shared/ImageCard.tsx";
import {Contact} from "./components/Contact.tsx";
import {ToolsMobile} from "./components/ToolsMobile.tsx";
import {ToolsPad} from "./components/ToolsPad.tsx";
import {aboutMe, expertise} from "./data.ts";
import {NavbarMobile} from "./components/NavbarMobile.tsx";

function App() {

    return (
        <>
            <div className="hidden lg:block"><Navbar/></div>
            <div className="lg:hidden"><NavbarMobile/></div>
            <div className="w-full h-36 block"></div>
            <div className="relative z-1 m-8">
                <Home/>
                <Services/>
                <section id="tools">
                    <div className="hidden 2xl:block"><Tools/></div>
                    <div className="hidden xl:block 2xl:hidden"><ToolsPad/></div>
                    <div className="xl:hidden"><ToolsMobile/></div>
                </section>
                {/* About Me */}
                <ImageCard {...aboutMe}/>
                {/* Expertise */}
                <ImageCard {...expertise}/>
                <Contact/>
            </div>
        </>
    );
}

export default App;