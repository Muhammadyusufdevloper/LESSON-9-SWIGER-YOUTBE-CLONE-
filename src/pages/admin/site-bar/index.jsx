import { GoHomeFill } from "react-icons/go"
import { MdOutlineSubscriptions } from "react-icons/md"
import { SiYoutubeshorts } from "react-icons/si"
import { NavLink } from "react-router-dom"

const SiteBar = ({ menu }) => {
    return (
        <>
            <section className="h-[90vh] pr-6 sticky top-14 left-0">
                <nav>
                    <ul className="p-3">
                        <li>
                            <NavLink className={`text-white flex items-center  ${menu ? "w-52 gap-10 px-3" : "w-14 gap-0 px-1 overflow-hidden justify-center"} h-10  rounded-xl bg-[#ffffff45]`}>
                                <GoHomeFill className=" w-6 h-6 " />
                                <p className={`text-[#f1f1f1] ${menu ? "block" : "opacity-0"}`}> {menu ? "Home" : ""}</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={`text-white flex items-center  ${menu ? "w-52 gap-10 px-3" : "w-14 gap-0 px-1 overflow-hidden justify-center"} h-10  rounded-xl`}>
                                <SiYoutubeshorts className=" w-6 h-6 " />
                                <p className={`text-[#f1f1f1] ${menu ? "block" : "opacity-0"}`}>{menu ? "Shorts" : ""}</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={`text-white flex items-center  ${menu ? "w-52 gap-10 px-3" : "w-14 gap-0 px-1 overflow-hidden justify-center"} h-10  rounded-xl`}>
                                <MdOutlineSubscriptions className=" w-6 h-6 " />
                                <p className={`text-[#f1f1f1] ${menu ? "block" : "opacity-0"}`}> {menu ? "Subscriptions" : ""}</p>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </section>
        </>
    )
}

export default SiteBar