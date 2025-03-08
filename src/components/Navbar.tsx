import {SmoothLink} from "../shared/SmoothLink.tsx";
import Button from "../shared/Button.tsx";

const navLinks = [
    {
        name: 'Home',
        dest: 'home'
    },
    {
        name: 'Services',
        dest: 'services'
    },
    {
        name: 'Tools',
        dest: 'tools'
    },
    {
        name: 'About me',
        dest: 'about'
    },
    {
        name: 'My Expertise',
        dest: 'expertise'
    },
    {
        name: 'Portfolio',
        dest: 'portfolio'
    }
]

export const Navbar = () => {

    return <div className="flex justify-between mx-0 p-[1.5%] fixed bg-white w-full z-5 shadow-2xs">
        {/* Logo */}
        <SmoothLink link="/">
            <h1 className="font-vampiro gradient-text text-4xl">{'<R_Ch/>'}</h1>
        </SmoothLink>
        {/* Links */}
        <div className="flex gap-10">
            {
                navLinks.map((info) => <SmoothLink link={info.dest}>{info.name}</SmoothLink>)
            }
        </div>
        {/* Contact Me */}
        <SmoothLink link="contact">
            <Button text="Contact Me" isPrimary={true} />
        </SmoothLink>

    </div>
}