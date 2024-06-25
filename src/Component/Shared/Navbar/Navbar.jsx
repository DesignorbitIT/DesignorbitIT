import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"

const Nav = () => {
    const navLinks = <>
        <ul className="flex lg:flex-row flex-col lg:items-center  lg:gap-10 gap-3 lg:text-lg ">


            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-[#fff] " : "border-b-2-hover "
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-[#fff] " : "border-b-2-hover "
                }
            >
                About us
            </NavLink>
            <NavLink
                to="/services"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-[#fff] " : "border-b-2-hover "
                }
            >
                Services
            </NavLink>

            <NavLink
               
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2-hover " : ""
                }
            >
          
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button">Portfolio</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow  bg-gradient-to-r from-[#042B4D] via-[#0065DF] to-[#0298FA] w-52">
                       <Link to="/portfolio/ui-ux"> <li><a>UI/UX DESIGN</a></li></Link>
                       <Link  to="/portfolio/app-development"> <li><a>APP DEVELOPMENT</a></li></Link>
                        <Link to="/portfolio/web-development"><li><a>WEB DESIGN & DEVELOPMENT</a></li></Link>
                       <Link to="/portfolio/graphic-design"> <li><a>GRAPHIC DESIGN</a></li></Link>
                        
                    </ul>
                </div>
            </NavLink>
            <NavLink
                to="/our-team"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-[#fff] " : "border-b-2-hover "
                }
            >
                Our Team
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-[#fff] " : "border-b-2-hover "
                }
            >
                Contract
            </NavLink>




        </ul>

    </>
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 120);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div className="bg-gradient-to-r from-[#042B4D] via-[#0065DF] to-[#0298FA]" >
                <div className={`navbar-1 navbar z-10 lg:px-20 2xl:px-[20%] py-5 bg-gradient-to-r from-[#042B4D] via-[#0065DF] to-[#0298FA] fixed lg:text-white ${scrolled ? 'scrolled' : 'navbar z-10 lg:px-[20%] py-10 fixed lg:text-white'}`}>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">

                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                                {navLinks}
                            </ul>
                        </div>
                        <a className="btn btn-ghost lg:text-2xl text-white">Design Orbit</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="drawer drawer-end navbar-end lg:hidden">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-4"> <div className=" border-2  p-2 rounded  ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></div></label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-[#042B4D]  text-white text-center space-y-5 py-10">
                                {/* Sidebar content here */}
                                <a className="btn btn-ghost text-white">Design Orbit</a>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "bg-[#0298FA] font-bold py-2 rounded " : "hover:bg-[#0298FA] "
                                    }
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "bg-[#0298FA] font-bold py-2 rounded " : "hover:bg-[#0298FA]"
                                    }
                                >
                                    About us
                                </NavLink>
                                <NavLink
                                    to="/services"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "bg-[#0298FA] font-bold py-2 rounded " : "hover:bg-[#0298FA] "
                                    }
                                >
                                    Services
                                </NavLink>

                                <NavLink
                                    to="/portfolio"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "bg-[#0298FA] font-bold py-2 rounded " : "hover:bg-[#0298FA]"
                                    }
                                >
                                    Portfolio
                                </NavLink>
                                <NavLink
                                    to="/our-team"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "bg-[#0298FA] font-bold py-2 rounded " : "hover:bg-[#0298FA]"
                                    }
                                >
                                    Our Team
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "bg-[#0298FA] font-bold py-2 rounded " : "hover:bg-[#0298FA] "
                                    }
                                >
                                    Contract
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;