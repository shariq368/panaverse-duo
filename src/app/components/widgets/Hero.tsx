"use client"
import Wrapper from "../shared/Wrapper"
import Poster from "../../../../public/assets/image/herosec.png"
import Image from "next/image"
import Button from "../shared/Button"
import Link from "next/link"
import TypewriterComponent from "typewriter-effect"

const Hero = () => {
  return (
    <section>
      <Wrapper>
        {/* Left side */}
        <div className="mx-auto flex md:flex-row flex-col items-center  ">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold text-[#480048] text-center md:text-left">THE AGE OF <br />
             GENERATIVE AI <br />
            HAS BEGUN </h1>
            
            <h2 className="text-[#240046] text-xl md:text-2xl lg:text-3xl font-bold mt-3 text-center md:text-left">
            <TypewriterComponent
  options={{
    strings: ['Become a Certified Cloud Applied Generative AI Engineer'],
    autoStart: true,
    loop: true,
  }}
  />         
              
            </h2>
            <Link href={'https://portal.piaic.org/'} > 
            <div className="mt-6 text-center md:text-left">
           <Button  text="Apply Now"/>
            </div>
            </Link>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-[20rem] mt-10">
            {/* Rigth Side */}
            <Image  src={Poster} alt="Hero poster" />

          </div>

        </div>
      </Wrapper>
    </section>


  )
}

export default Hero





 