import Wrapper from "../shared/Wrapper"
import Link from "next/link"
import Logo from "../../../../public/assets/image/logo.png"
import Image from "next/image"
import { AnimatePresence, animate, motion } from "framer-motion";


const Header = () => {

  return (
    <header className="sticky top-0 backdrop-blur-md  py-2 pt-8 bg-transparent z-10 bg-opacity-90">
<Wrapper>
    <div className="  flex justify-between   items-center">
      
        {/* logo */}
        <div>


          <Image src={Logo} alt="Panaverse Logo" />


        </div>
        {/* Navigation bar */}
        <ul className="flex space-x-6 font-medium text-black items-start md:items-end   ">
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