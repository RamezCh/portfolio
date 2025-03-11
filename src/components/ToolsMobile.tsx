import {CenteredTitle} from "../shared/CenteredTitle.tsx";
import CircleWithChevron from "../shared/CircleWithChevron.tsx";
import {ServiceCard} from "../shared/ServiceCard.tsx";
import {useState} from "react";

const tools = [
    {
        "toolName": "Python",
        "image": "https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=1920%2C1920&ssl=1"
    },
    {
        "toolName": "Java",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUaDjGczuu5b038vjXDstYNwIUtEc7rS3Fw&s"
    },
    {
        "toolName": "JavaScript (ES6+)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png"
    },
    {
        "toolName": "React.js",
        "image": "https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png"
    },
    {
        "toolName": "Typescript",
        "image": "https://cdn.worldvectorlogo.com/logos/typescript.svg"
    },
    {
        "toolName": "Spring",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8i4zPog-0j0JR_yZglxPhTPZXxN2iMTQ3Dw&s"
    },
    {
        "toolName": "Node.js",
        "image": "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
    },
    {
        "toolName": "Express.js",
        "image": "https://logowik.com/content/uploads/images/express-js1720895488.logowik.com.webp"
    },
    {
        "toolName": "Postman API",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-TB9d5YXwtKhv4NWbpeTBVveYvcxu9gMJng&s"
    },
    {
        "toolName": "MongoDB",
        "image": "https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png"
    },
    {
        "toolName": "MySQL",
        "image": "https://seeklogo.com/images/M/mysql-logo-B4943FE6DD-seeklogo.com.png"
    },
    {
        "toolName": "PostgreSQL",
        "image": "https://www.stickersdevs.com.br/wp-content/uploads/2022/01/postgreesql-logo-adesivo-sticker.png"
    },
    {
        "toolName": "Jenkins",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVMO4E719cFK4rKPXq6e1YW6GW-AlbInL42cjzLO2XaiJOzLwA3pQqgLaLZdNkJPlQlZs&usqp=CAU"
    },
    {
        "toolName": "Ansible",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaOVM9YjIvfqI04nYC_iqdOnl9CO54ll1x3A&s"
    },
    {
        "toolName": "Terraform",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-9UQFrU_rd6SWsmxkA-F_UAToUnZRG4Fzxw&s"
    },
    {
        "toolName": "Docker",
        "image": "https://tech.osteel.me/images/2020/03/04/docker-introduction-01.jpg"
    },
    {
        "toolName": "Kubernetes",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSueZAX3LWOh8XOllvjvPSxsefGC8gdma_LOH6aWShJbpwSUeE9f1T5FhbSk7a26egB7sY&usqp=CAU"
    }
];


export const ToolsMobile = () => {
    const [lastIndex, setLastIndex] = useState(1);

    const handleIncrement = () => {
        setLastIndex( (prev) => prev < tools.length ? prev + 1 : tools.length);
    }

    const handleDecrement = () => {
        setLastIndex( (prev) => prev > 1 ? prev - 1 : 1);
    }

    return <section id="tools">
        <CenteredTitle title="Tools" />
        {/* Carousel */}
        <div className="flex flex-row items-center justify-between my-20 p-10">
            <CircleWithChevron direction="left" enabled={lastIndex > 1} onClick={handleDecrement}/>
            <div className="flex mx-5 justify-center w-[60%]">
                {tools.slice(lastIndex - 1, lastIndex).map( (tool) => <ServiceCard image={tool.image} title={tool.toolName} />)}
            </div>
            <CircleWithChevron direction="right" enabled={tools.length - 1 >= lastIndex} onClick={handleIncrement}/>
        </div>
    </section>
}