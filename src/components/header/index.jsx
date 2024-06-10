import { CiSearch } from "react-icons/ci"
import { IoMdMenu } from "react-icons/io"
import { RiAccountCircleFill, RiVideoAddLine } from "react-icons/ri"
import logo from "../../assets/header-img/logo.svg"
import fram from "../../assets/header-img/Frame.svg"

const Header = ({ search, setSearch,setMenu }) => {
    return (
        <>
            <header className="bg-black sticky top-0 left-0">
                <div className="max-w-[1940px] w-full px-4 mx-auto">
                    <nav className="flex justify-between items-center gap-5">
                        <div className="flex items-center">
                            <button onClick={()=> setMenu(p=>!p)} className="w-10 h-10 flex items-center justify-center text-white">
                                <IoMdMenu className="h-6 w-6" />
                            </button>
                            <div className="py-[18px] px-4">
                                <img src={logo} alt="youtbe logo img" />
                            </div>
                        </div>
                        <div className="flex-grow flex items-center gap-3 justify-center">
                            <form className="border flex items-center justify-between border-[#2a2a2a] w-[640px] rounded-3xl h-10 overflow-hidden">
                                <input value={search} onChange={(e) => setSearch(e.target.value)} className="h-10 bg-black pl-3 px-2 outline-none bg-transparent text-lg flex-grow text-white  flex items-center justify-between" type="search" placeholder="search" />
                                <button className="text-white h-10 w-16 bg-[#ffffff14] flex items-center justify-center text-xl"><CiSearch /></button>
                            </form>
                            <button className="bg-gray-400 w-10 h-10 flex items-center justify-center rounded-[50%]">
                                <img src={fram} alt="fram img" />
                            </button>
                        </div>
                        <div className="flex items-center justify-between gap-16">
                            <button><RiVideoAddLine className="w-6 h-6 text-white" /></button>
                            <button> <RiAccountCircleFill className="w-8 h-8 text-white" /></button>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header