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
import {Portfolio} from "./components/Portfolio.tsx";
import ScrollToTop from "./shared/ScrollToTop.tsx";

function App() {
    return (
        <>
            <div className="hidden lg:block"><Navbar/></div>
            <div className="lg:hidden"><NavbarMobile/></div>
            <div className="w-full h-36 block"></div>
            <div className="relative z-1 m-4 sm:m-6 md:m-8">
                <div className="mb-16 sm:mb-24 md:mb-32 lg:mb-40">
                    <Home/>
                </div>
                <div className="mb-16 sm:mb-24 md:mb-32 lg:mb-40">
                    <Services/>
                </div>
                <div className="mb-16 sm:mb-24 md:mb-32 lg:mb-40">
                    <section id="tools">
                        <div className="hidden 2xl:block"><Tools/></div>
                        <div className="hidden xl:block 2xl:hidden"><ToolsPad/></div>
                        <div className="xl:hidden"><ToolsMobile/></div>
                    </section>
                </div>
                {/* About Me */}
                <div className="mb-16 sm:mb-24 md:mb-32 lg:mb-40">
                    <ImageCard {...aboutMe}/>
                </div>
                {/* Expertise */}
                <div className="mb-16 sm:mb-24 md:mb-32 lg:mb-40">
                    <ImageCard {...expertise}/>
                </div>
                <div className="mb-16 sm:mb-24 md:mb-32 lg:mb-40">
                    <Portfolio/>
                </div>
                <div>
                    <Contact/>
                </div>
            </div>
            <ScrollToTop />
        </>
    );
}

export default App;
