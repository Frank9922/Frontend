import { useDispatch, useSelector } from "react-redux";
import { startLogoutWithToken } from "../../store/auth";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

export const DropDownPerfil = () => {
    const ulRef = useRef(null);
    const linkRef = useRef(null);

    const dispatch = useDispatch();
    const { status, user } = useSelector(state => state.auth);

    const authenticated = status === 'authenticated';
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    };

    const handleClickOutside = (event) => {
        if (ulRef.current && !ulRef.current.contains(event.target) && !linkRef.current.contains(event.target)) {
            setOpen(false);
        }
    };

    const onLogout = () => {
        dispatch(startLogoutWithToken());
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <NavLink
                to={authenticated ? null : '/login'}
                ref={linkRef}
                onClick={authenticated ? toggleOpen : null}
                className={({ isActive }) => (
                    `flex md:items-center items-center max-md:py-4 gap-1 py-1 px-3 mx-2 border-solid border-2 border-primary rounded-full text-white hover:shadow-shadow 
                    ${isActive ? 'shadow-shadow' : ''} duration-500 shadow-lg shadow-primary`
                )}
            >
                <IoMdPerson /> {authenticated ? user.nombrecompleto : <>Login</>}
            </NavLink>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                        className="flex flex-col absolute max-md:w-[10rem] max-md:relative max-md:top-0 max-md:right-0 max-md:left-10 max-md:bg-primary max-md:text-white max-md:p-0 top-14 right-5 w-50 p-4 rounded-lg bg-white border-2 border-primary"
                    >
                        <motion.ul
                            ref={ulRef}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col gap-4"
                        >
                            <NavLink to='/mi-perfil'>Mi Perfil</NavLink>
                            <NavLink to='/mis-mascotas'>Mis Mascotas</NavLink>
                            <li>
                                <button onClick={onLogout}>Logout</button>
                            </li>
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
