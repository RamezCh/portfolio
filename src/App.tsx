import './App.css';
import {Navbar} from "./components/Navbar.tsx";
import {Home} from "./components/Home.tsx";
import {Services} from "./components/Services.tsx";
import {Tools} from "./components/Tools.tsx";
import {ImageCard} from "./shared/ImageCard.tsx";

const aboutMe = {
    sectionID: 'about',
    imgSrc: "./About_me.jpg",
    imgAlt: "about me image",
    title: "About me",
    text: "I am fluent in Arabic, English, and German. I enjoy reading books, honing my skills, and tackling coding challenges. In my free time, I love playing competitive video games with my brothers and friends. I strongly believe in lifelong self-improvement and the importance of cherishing time with family and friends",
    imgLeft: true,
    imgSize: "h-[450px]"
}

const expertise = {
    sectionID: 'expertise',
    imgSrc: "./Skills_Expertise.svg",
    imgAlt: "skills image",
    title: "Skills & Expertise",
    text: "I have a solid foundation in backend development, machine learning, and DevOps, with hands-on experience in Python, Java, and JavaScript, along with frameworks like Spring and Flask. In ML, I’ve worked on data cleaning, model tuning, and deployment using Docker. I’m also comfortable with DevOps tools like Jenkins and Kubernetes, always striving to improve efficiency and automation. I’m constantly learning and aim to grow further in these areas",
    imgLeft: false,
    imgSize: "h-[600px]"
}

function App() {

    return (
        <>
            <Navbar/>
            <div className="w-full h-36 block"></div>
            <div className="relative z-1 m-8">
                <Home/>
                <Services/>
                <Tools/>
                {/* About Me */}
                <ImageCard {...aboutMe}/>
                {/* Expertise */}
                <ImageCard {...expertise}/>
            </div>
        </>
    );
}

export default App;