import Wrapper from "../shared/Wrapper"
import Link from "next/link"
import Logo from "../../../../public/assets/image/logo.png"
import Image from "next/image"
import { AnimatePresence, animate, motion } from "framer-motion";


const Header = () => {

  return (
    <header className="sticky top-0 backdrop-blur-md  py-2  bg-white z-10 bg-opacity-90">
<Wrapper>
    <div className=" mx-auto flex  p-2  md:flex-row items-center justify-between ">
      
        {/* logo */}
        <div className="w-[5rem] md:w-[8rem]">


          <Image src={Logo} alt="Panaverse Logo" width={500} height={500} />


        </div>
        {/* Navigation bar */}
        
        <ul className=" flex  space-x-4 font-light md:space-x-6 md:font-medium text-black item-center justify-center mt-3 ">
          <li className="hover:text-purple-500">
            <Link href={'/'}>
              Home
            </Link>
          </li>
          <li className="hover:text-purple-500">
            <Link href={'/syllabus'}>
              Syllabus
            </Link>
          </li>
          <li className="hover:text-purple-500">
            <Link href={'/about'}>
              About
            </Link>

          </li>



        </ul>
        </div>
      </Wrapper>
    
    
    </header>

  )
}

export default Header