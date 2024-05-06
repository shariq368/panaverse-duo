import { title } from "process"
import Wrapper from "../shared/Wrapper"


const Coretrackdata = [
  {
    title: "Quarter 1",
    des: "TypeScript and Python Programming",
    text:"The first quarter covers TypeScript and Python programming",

    


  },
  {
    title: "Quarter 2",
    des: "Front-end Development using Next.js",
    text:"The second quarter focuses on front-end development using Next.js."
    


  },
  {
    title: "Quarter 3",
    des: "Custom GPT and  API Deployment",
    text:"The third quarter introduces API development database containers cloud deployment and DevOps."
    


  },
  {
    title: "Quarter 4",
    des: "Advanced AI and Cloud Development",
    text:"The fourth quarter covers custom GPT developmen"



  },

]


const CoreTrack2 = () => {
  
  return (
 
    <section className="mt-20">
      <Wrapper>
      <div className="text-center">
        <h2 className="font-bold  text-5xl  text-[#480048]">Quarter</h2>
</div>
        {/* boxes */}
        <div className="my-14 grid grid-cols-1 md:grid-cols-2  gap-x-0  gap-y-6">
        
          {
            Coretrackdata.map((item , i) => (
                            <div key={title} className="py-16 md:py-32 px-10 my-8 mx-36  border rounded-lg shadow-xl bg-[#DBDBDB] backdrop:blur-md border-purple-500 text-center md:text-left hover:scale-105 duration-1000 hover:bg-[#e0aaff] ">
            <h4 key={title}  className="font-bold text-4xl text-purple-900">{item.title}</h4>
            <p className="mt-2 text-black z-0 font-bold text-lg">{item.des}</p>
            <p className="mt-2 text-black z-0 text-md">{item.text}</p>
            
          </div>
          )
            )
            
          }

          
        </div>



</Wrapper>
    </section>

  )
}





export default CoreTrack2







// "absolute text-gray-200 -top-10 right-16