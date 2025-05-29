import Button from "../shared/Button.tsx";
import {SmoothLink} from "../shared/SmoothLink.tsx";
import {Card} from "../shared/Card.tsx";
import {SocialMedia} from "../shared/SocialMedia.tsx";

export const Home = () => {
    return <section id="home" className="flex flex-col-reverse lg:flex-row justify-evenly items-center lg:items-start gap-8 sm:gap-10 md:gap-12 lg:gap-16">
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 w-full lg:w-[38%] px-2 sm:px-4 md:px-6">
            <Card 
                title="RAMEZ" 
                titleSize="text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                subtitleWords={["SOFTWARE ENGINEER", "FULL-STACK DEV", "AI/ML ENGINEER"]}
                subtitleSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold" 
                text="I transform Ideas into Seamless Digital Experiences"
            >
                <SocialMedia/>
            </Card>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                <Button text="DOWNLOAD CV" downloadPath="./Ramez_Chreide_2025_CV.pdf" fileName="Ramez_Chreide_CV.pdf" isPrimary={true}/>
                <SmoothLink link="portfolio">
                    <Button text="Browse Portfolio" isPrimary={false}/>
                </SmoothLink>
            </div>
        </div>
        <img 
            src="./Ramez_Picture_Hero.svg" 
            alt="Ramez, the person who built this website and showcases his portfolio" 
            className="w-full lg:w-auto max-w-full h-auto px-4 sm:px-6 md:px-8 transition-transform hover:scale-105 duration-500"
        />
    </section>
}
