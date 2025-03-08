import './App.css';
import Button from "./shared/Button.tsx"
import IconLink from "./shared/IconLink.tsx";
import {Navbar} from "./components/Navbar.tsx";

function App() {

    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <>
            <Navbar/>
            <div className="relative z-1 p-8">
                <Button text="DOWNLOAD CV" downloadPath="./Ramez_Chreide_2025_CV.pdf" fileName="Ramez_Chreide_CV.pdf" isPrimary={true}/>
                <Button onClick={handleClick}  text="Click Me" isPrimary={true}/>
                <Button onClick={handleClick}  text="Browse Portfolio" isPrimary={false}/>
                <img src="./Skills_Expertise.svg" alt="skills image"/>
                <img src="./Skills_Expertise.svg" alt="skills image"/>
                <section id="home">
                    <IconLink icon="./Github_Icon.svg" link="https://github.com/RamezCh" altText="Github SmoothLink to my Profile" />
                    <IconLink icon="./LinkedIn_Icon.svg" link="https://www.linkedin.com/in/ramez-chreide/" altText="LinkedIn SmoothLink to my Profile" />
                </section>
                <section id="expertise">
                    <img src="./Skills_Expertise.svg" alt="skills image"/>
                </section>
            </div>
        </>
    );
}

export default App;