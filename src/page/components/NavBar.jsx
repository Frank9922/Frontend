import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaDog, FaPaw } from "react-icons/fa";
import { GiDogHouse } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { DropDownPerfil } from "../../auth/components/DropDownPerfil";
import useScreenSize from "../../hooks/useScreenSize";

export const NavBar = () => {
    const [open, setOpen] = useState(false);

    const { width } = useScreenSize();

    const conditional = open || width > 768;



    const Links = [
        { name: 'Mascotas', link: '/mascotas', icon: <FaDog /> },
        { name: 'Refugios', link: '/refugios', icon: <GiDogHouse /> },
    ];


    return (
        <div className="shadow-md w-full top-0 left-0 sticky z-30">
            <div className="md:flex items-center bg-primary py-4 md:px-10 px-4 justify-between">
                <div className="text-xl font-bold flex items-center text-white">

                    <NavLink to='/' className='flex items-center'>
                    <span className="mr-1 text-white">
                        <FaPaw />
                    </span>
                    CuatroPatitas
                    </NavLink>

                </div >
                <button
                    onClick={() => setOpen(!open)}
                    className="text-white absolute right-8 top-5 cursor-pointer md:hidden text-2xl"
                >
                    {open ? <IoMdClose /> : <IoMenu />}
                </button>
                <motion.div
                    className="flex-1 flex md:justify-end flex-col"
                    initial={{ height: 'auto' }}
                    animate={{ height: conditional ? 'auto' : '0' }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                >
                    <AnimatePresence>
                        {conditional ? 
                        
                        (
                            <motion.ul
                                initial={ width > 768 ? null : { opacity: 0, y: -20 }}
                                animate={ width > 768 ? null : { opacity: 1, y: 0 }}
                                exit={ width > 768 ? null : { opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className={`flex justify-end items-center md:pb-0 md:static md:z-auto z-[1] left-0 w-full md:w-auto md:pl-9 max-md:justify-center max-md:flex-col`}
                            >
                                <div className="flex max-md:flex-col max-md:w-full">
                                    {Links.map((Link) => (
                                        <li className="w-full" key={Link.link}>
                                            <NavLink
                                                className={({ isActive }) => (
                                                    `flex md:items-center items-center max-md:py-4 px-3 mx-2 border-solid border-2 border-primary rounded-full text-white hover:shadow-shadow 
                                                    ${isActive ? 'underline ' : ''} duration-500 shadow-lg shadow-primary`
                                                )}
                                                to={Link.link}
                                            >
                                                {Link.icon}
                                                {Link.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </div>
                                <li className="max-md:mx-2 max-md:w-full">
                                    <DropDownPerfil />
                                </li>
                            </motion.ul>
                        ) 
                        : null
                        }

                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};
