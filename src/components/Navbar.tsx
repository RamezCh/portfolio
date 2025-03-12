import {SmoothLink} from "../shared/SmoothLink.tsx";
import Button from "../shared/Button.tsx";
import {navLinks} from "../data.ts";

export const Navbar = () => {

    return <div className="flex justify-between mx-0 p-[1.5%] top-0 fixed bg-white w-full z-5 shadow-2xs">
        {/* Logo */}
        <h1 className="font-vampiro gradient-text text-4xl">{'<R_Ch/>'}</h1>
        {/* Links */}
        <div className="flex gap-10">
            {
                navLinks.map((info) => <SmoothLink key={info.name} link={info.dest}>
                    <span className="hover:text-[#7051EF] hover:text-lg transition-all duration-500 ease-in-out">
                        {info.name}
                    </span>
                </SmoothLink>)
            }
        </div>
        {/* Contact Me */}
        <SmoothLink link="contact">
            <Button text="Contact Me" isPrimary={true} />
        </SmoothLink>

    </div>
}