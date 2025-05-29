import {SmoothLink} from "../shared/SmoothLink.tsx";
import Button from "../shared/Button.tsx";
import {navLinks} from "../data.ts";

export const Navbar = () => {

    return <div className="flex justify-between items-center mx-0 p-[1.5%] top-0 fixed bg-white w-full z-50 shadow-sm border-b border-gray-100 transition-all duration-300">
        {/* Logo */}
        <h1 className="font-vampiro gradient-text text-4xl transition-transform duration-300 hover:scale-105">{'<R_Ch/>'}</h1>
        {/* Links */}
        <div className="flex gap-8 md:gap-10 lg:gap-12">
            {
                navLinks.map((info) => <SmoothLink key={info.name} link={info.dest}>
                    <span className="hover:text-[#7051EF] font-medium transition-all duration-300 ease-in-out hover:underline hover:underline-offset-4">
                        {info.name}
                    </span>
                </SmoothLink>)
            }
        </div>
        {/* Contact Me */}
        <SmoothLink link="contact">
            <Button text="Contact Me" isPrimary={true} isSmall={true} />
        </SmoothLink>

    </div>
}
