import Wrapper from "../components/shared/Wrapper"
import Button from "../components/shared/Button"
import { title } from "process"

const Coretrackdata = [
    {
      title: "Q1",
      des: "TypeScript and Python Programming",
      text:"The first quarter covers TypeScript and Python programming",
  
      
  
  
    },
    {
      title: "Q2",
      des: "Front-end Development using Next.js",
      text:"The second quarter focuses on front-end development using Next.js."
      
  
  
    },
    {
      title: "Q3",
      des: "Custom GPT and  API Deployment",
      text:"The third quarter introduces API development database containers cloud deployment and DevOps."
      
  
  
    },
    {
      title: "Q4",
      des: "Advanced AI and Cloud Development",
      text:"The fourth quarter covers custom GPT development"
  
  
  
    },
  
  ]






const Syllabus = () => {
    return (
        <Wrapper>
            <div className="mt-20 ">
            <div>
                <h2 className="font-bold p-4 mx-auto text-5xl text-[#480048] text-center ">Course Detailed</h2>
            </div>

 {/* boxes */}
 <div className="grid sm:grid-cols-1 md:grid-cols-2 mb-20 gap-8  sm:px-0">
        
        {
          Coretrackdata.map((item, i) => (
                          <div key={title} className="p-6 mt-20 md:p-14 lg:p-24 lg:mx-28  border rounded-lg shadow-xl bg-[#DBDBDB] bg-opacity-100 backdrop:blur-md border-purple-600 hover:bg-[#e0aaff] text-center md:text-left hover:scale-105 duration-300">
          <h4 key={title}  className="font-bold text-8xl text-purple-900">{item.title}</h4>
          <p className="mt-2 text-black z-0  font-bold text-lg">{item.des}</p>
          <p className="mt-2 text-black z-0  text-md">{item.text}</p>
          
        </div>
        )
          )
          
        }
        </div>

        </div>
        </Wrapper>

    )
}


export default Syllabus