import Button from "../shared/Button.tsx";
import {SmoothLink} from "../shared/SmoothLink.tsx";
import {Card} from "../shared/Card.tsx";
import {SocialMedia} from "../shared/SocialMedia.tsx";

export const Home = () => {
    return <section id="home" className="flex flex-col-reverse lg:flex-row justify-evenly">
        <div className="mt-8 w-full lg:w-[38%]">
            <Card title="RAMEZ" titleSize="text-8xl" subtitleWords={["SOFTWARE ENGINEER", "FULL-STACK DEVELOPER", "AI/ML ENGINEER"]} subtitleSize="text-6xl font-bold" text="I transform Ideas into Seamless Digital Experiences">
                <SocialMedia/>
            </Card>
            <div className="flex flex-row gap-16">
                <Button text="DOWNLOAD CV" downloadPath="./Ramez_Chreide_2025_CV.pdf" fileName="Ramez_Chreide_CV.pdf" isPrimary={true}/>
                <SmoothLink link="portfolio">
                    <Button text="Browse Portfolio" isPrimary={false}/>
                </SmoothLink>
            </div>
        </div>
        <img src="./Ramez_Picture_Hero.svg" alt="Ramez, the person who built this website and showcases his portfolio" />
    </section>
}