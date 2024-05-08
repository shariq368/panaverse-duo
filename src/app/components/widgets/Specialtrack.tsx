import Button from "../shared/Button"
import Image from "next/image"
import Link from "next/link"
import web3 from "../../../../public/assets/image/Web 3.0.png"
import AI from "../../../../public/assets/image/AI Pic.png"
import Cloud from "../../../../public/assets/image/Cloud Computing.png"
import Wrapper from "../shared/Wrapper"


const Specialtrack = () => {
  return (
    <div className="mt-20">
        
        <section className="text-gray-600 body-font">
          
            <div className="text-center">
                <h2 className="font-bold  text-5xl  text-[#480048]">Specialized Track</h2>
            </div>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg ">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center hover:scale-105 duration-300 shadow-md"
            src={web3}
            width={500}
            height={500}
            alt="Web 3.0 Pic"
          />
          <div className="p-3 md:p-6">
            
            <h2 className="title-font text-lg font-semibold text-[#726c6c] mb-3">
              Web 3.0 (BlockChain)
            </h2>
            <p className="leading-relaxed mb-3">
            In this course you will learn how to develop Web 3.0 DApps create a project deploy it in production write smart contracts unit test them and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens DAOs Oracles etc. Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already..
            </p>
            <div className="flex items-center flex-wrap">
              <Link href={"https://panaverse-dao-staging.vercel.app/wmd/q4"}>
            <div className="mt-2 ">
                <button className="rounded-3xl border px-5 py-3 bg-purple-800 text-white hover:bg-purple-950 shadow-lg duration-300">Learn more</button>
             </div>
             </Link>
                          
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg ">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center hover:scale-105 duration-300 shadow-md"
            src={AI}
            width={500}
            height={500}
            alt="Ai pic"
          />
          <div className="p-3 md:p-6">
            
            <h2 className="title-font text-lg font-semibold text-[#726c6c] mb-3">
            Artificial Intelligence and Deep Learning
            </h2>
            <p className="leading-relaxed  mb-3">
            Artificial intelligence is the simulation of human intelligence processes by machines especially computer systems. The AI and Deep Learning Specialization is a foundational program that will aid in your comprehension of deep learning potential difficulties and effects as well as equip you to take part in the creation of cutting-edge AI technology.
            </p>
            <div className="flex items-center flex-wrap">
              <Link href={"https://panaverse-dao-staging.vercel.app/ai/q4"}>
             <div className="mt-2">
                <button className="rounded-3xl border px-5 py-3 bg-purple-800 text-white hover:bg-purple-950 shadow-lg duration-300">Learn more</button>
             </div>
             </Link>
                          </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg ">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center hover:scale-105 duration-300 shadow-md"
            src={Cloud}
            width={500}
            height={500}
            alt="Cloud Computing pic"
          />
          <div className="p-3 md:p-6">
            
            <h2 className="title-font text-lg font-semibold text-[#726c6c] mb-3">
            Cloud-Native Computing Specialization
            </h2>
            <p className="leading-relaxed mb-3">
            Cloud-native architecture and technologies are an approach to designing constructing and operating workloads that are built in the cloud and take full advantage of the cloud computing model. Cloud-native technologies empower organizations to build and run scalable applications in modern dynamic environments such as public private and hybrid clouds.
            </p>
            <div className="flex items-center flex-wrap">
              <Link href={"https://panaverse-dao-staging.vercel.app/cnc/q4"}>
                <div className="mt-2">
              <button className="rounded-3xl border px-5 py-3 bg-purple-800 text-white hover:bg-purple-950 shadow-lg duration-300">Learn more</button>
              </div>
              </Link>
               </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>

    </div>
  )
}

export default Specialtrack