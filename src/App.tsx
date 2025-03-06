import './App.css';
import Button from "./shared/Button.tsx"

function App() {

    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <div className="relative z-10 p-8">
            <h1 className="font-vampiro gradient-text">{'<R_Ch/>'}</h1>
            <Button text="DOWNLOAD CV" downloadPath="./Ramez_Chreide_2025_CV.pdf" fileName="Ramez_Chreide_CV.pdf" isPrimary={true}/>
            <Button onClick={handleClick}  text="Click Me" isPrimary={true}/>
            <Button onClick={handleClick}  text="Browse Portfolio" isPrimary={false}/>
        </div>
    );
}

export default App;