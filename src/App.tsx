import './App.css';
import Button from "./shared/Button.tsx"
import IconLink from "./shared/IconLink.tsx";

function App() {

    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <div className="relative z-10 p-8">
            <h1 className="font-vampiro gradient-text text-4xl">{'<R_Ch/>'}</h1>
            <Button text="DOWNLOAD CV" downloadPath="./Ramez_Chreide_2025_CV.pdf" fileName="Ramez_Chreide_CV.pdf" isPrimary={true}/>
            <Button onClick={handleClick}  text="Click Me" isPrimary={true}/>
            <Button onClick={handleClick}  text="Browse Portfolio" isPrimary={false}/>
            <IconLink icon="./Github_Icon.svg" link="https://github.com/RamezCh" altText="Github Link to my Profile" />
            <IconLink icon="./LinkedIn_Icon.svg" link="https://www.linkedin.com/in/ramez-chreide/" altText="LinkedIn Link to my Profile" />
        </div>
    );
}

export default App;