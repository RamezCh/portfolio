import {CenteredTitle} from "../shared/CenteredTitle.tsx";
import {ServiceCard} from "../shared/ServiceCard.tsx";

const services = [
    {
        image: "https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=1920%2C1920&ssl=1",
        title: "AI-Powered Insights & Automation",
        description: "Build and deploy custom machine learning models to unlock data-driven insights, automate processes, and enhance decision-making. From predictive analytics to OCR, I deliver scalable AI solutions tailored to your needs."
    },
    {
        image: "https://blog.grantmcgregor.co.uk/hubfs/web%20developer.png",
        title: "Modern Web Applications",
        description: "Create responsive, user-friendly web applications with seamless frontend and backend integration. Using the MERN stack or Java-React, I deliver high-performance solutions that scale with your business."
    },
    {
        image: "https://media.istockphoto.com/id/1404020923/vector/devops-banner-concept-has-8-steps-to-analyze-such-as-plan-code-build-operate-deploy-test.jpg?s=612x612&w=0&k=20&c=KJ90yfWIP3lELbmiTS2Furjv_IOSHrTDYqz-BWhkerU=",
        title: "Streamlined Deployment & Scalability",
        description: "Optimize your software delivery with CI/CD pipelines, containerization, and cloud deployment. I ensure your applications are scalable, reliable, and ready for production."
    }
];

export const Services = () => {
    return <section id="services" className="flex flex-col p-20 justify-evenly">
        <CenteredTitle title="Services" text="Delivered with Care and Attention" />
        <div className="flex flex-row justify-evenly gap-10 flex-wrap mt-20">
            {services.map(service => <ServiceCard image={service.image} title={service.title} description={service.description} />)}
        </div>
    </section>
}