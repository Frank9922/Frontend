import { motion } from "framer-motion";
import { useState } from "react";
import { FaDog, FaPaw } from "react-icons/fa";
import { GiDogHouse } from "react-icons/gi";
import { IoMdClose, IoMdPerson } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export const NavBar = () => {

const [open, setopen] = useState(false)
    const Links = [
        {name: 'Mascotas', link: '/mascotas', icon: <FaDog />},
        {name: 'Refugios', link: '/refugios', icon: <GiDogHouse />},
    ];


  return (
    <div className="shadow-md w-full top-0 left-0 sticky z-10">
        <div className="md:flex items-center bg-primary py-6 md:px-10 px-7 justify-between">
            <NavLink to='/' className="text-xl font-bold cursor-pointer flex items-center text-white">
                <span className="mr-1 text-white">
                    <FaPaw />
                </span>
                CuatroPatitas
            </NavLink>
            <button onClick={() => setopen(!open)} className="text-white absolute right-8 top-7 cursor-pointer md:hidden text-2xl ">
                {
                    open ? <IoMdClose className="animate__animated animate__fadeIn"/> : <IoMenu className="animate__animated animate__fadeIn"/>
                }
                
            </button>
            <div className="flex-1 flex md:justify-end flex-col">
                <motion.ul
                initial={false}
                animate={open ? "open" : "closed"}
                className={`flex justify-end transition-all items-center md:pb-0 md:static md:z-auto z-[1] left-0 w-full md:w-auto md:pl-9 max-md:gap-4 max-md:justify-center max-md:flex-col ${open ? 'top-[4.7rem] opacity-100': 'max-md:hidden max-md:top-[-490px]'}`}>
                    
                    <div className="flex max-md:flex-col max-md:gap-4 max-md:w-full">
                    {
                        Links.map((Link) => (
                            <li className="w-full" key={Link.link}>
                                
                                <NavLink
                                className={({ isActive }) => (
                                    `flex md:items-center gap-1 py-1 px-3 mx-2 border-solid border-2 border-primary rounded-full text-white hover:shadow-shadow 
                                    ${isActive ? 'shadow-shadow' : ''} duration-500 shadow-lg shadow-primary`
                                )}
                                to={Link.link}
                                >
                                    {
                                        Link.icon
                                    }
                                    {
                                        Link.name
                                    }
                                </NavLink>
                            </li>
                        ))
                    }
                    </div>
                        <li className="md:ml-8 md:my-0 my-7">
                            <NavLink className={({ isActive }) => (
                                    `flex md:items-center gap-1 py-1 px-3 mx-2 border-solid border-2 border-primary rounded-full text-white hover:shadow-shadow 
                                    ${isActive ? 'shadow-shadow' : ''} duration-500 shadow-lg shadow-primary`
                                )} to='/login'>
                            <IoMdPerson />
                                Login
                            </NavLink>
                        </li>
                </motion.ul>
                    
            </div>

            
        </div>
    </div>
)
}
