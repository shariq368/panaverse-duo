import Wrapper from "../shared/Wrapper"
import Poster from "../../../../public/assets/image/hero-pic.png"
import Image from "next/image"
import Button from "../shared/Button"
import Link from "next/link"

const Hero = () => {
  return (
    <section>
      <Wrapper>
        {/* Left side */}
        <div className="flex flex-col md:flex-row  items-center ">
          <div className="flex-1">
            <h1 className="text-4xl sm:text-8xl font-semibold text-purple-950">THE AGE OF GENERATIVE AI  </h1>
            <h1 className="text-4xl sm:text-8xl font-semibold text-purple-950"> HAS BEGUN</h1>
            <h2 className="text-gray-950 font-bold text-xl mt-2">Become a Certified Cloud Applied
              Generative AI Engineer
            </h2>
            <Link href={'https://portal.piaic.org/'} > 
            <div className="mt-6">
           <Button  text="Join Now"/>
            </div>
            </Link>
          </div>
          <div>
            {/* Rigth Side */}
            <Image className="w-[600px]  h-[600px] " src={Poster} alt="Hero poster"/>

          </div>

        </div>
      </Wrapper>
    </section>


  )
}

export default Hero