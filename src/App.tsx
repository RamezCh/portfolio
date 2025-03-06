import './App.css';
import Button from "./shared/Button.tsx"

function App() {

    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <div className="relative z-10 p-8">
            <Button text="DOWNLOAD CV" downloadPath="./Ramez_Chreide_2025_CV.pdf" fileName="Ramez_Chreide_CV.pdf"/>
            <Button onClick={handleClick}  text="Click Me"/>
        </div>
    );
}

export default App;