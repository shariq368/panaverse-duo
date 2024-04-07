import Wrapper from "../components/shared/Wrapper"
import Button from "../components/shared/Button"


const CoreTrackdata = [
    {
        header: "Quarter 1",
        description: "Unleash Your Fitness Potential",
    },
    {
        header: "Quarter 2",
        description: "Expert Articles & Personalized Plans to Fuel Your Journey",
    },
    {
        header: "Quarter 3",
        description: "Join Now & Achieve Your Fitness Goals",
    },
    {
        header: "Quarter 4",
        description: "Join Now & Achieve Your Fitness Goals",
    }

]





const Syllabus = () => {
    return (
        <section className="flex-wrap justify-around" >
            <Wrapper>
                
               
                {/* Boxes */}
                <div className="my-20 flex flex-col  md:flex-row gap-x-8  gap-y-6 mt-[300px]  ">
                    {
                        CoreTrackdata.map((item, i) => (
                            <div className="border rounded-xl flex-1 relative px-10 py-16 flex flex-col justify-center shadow-xl hover:scale-110 duration-500 text-black md:flex-col">
                                <h4 className="font-bold text-lg">{item.header}</h4>
                                <p className="mt-2 text-black z-0">{item.description}</p>
                                <div className="absolute text-gray-400 -top-10 right-16 text-[170px] font-bold -z-10 scale-95">{i + 1}</div>
                               
                            </div>
                            
                           
                        )
                        )

                    }




                </div>

            </Wrapper>
        </section>
    )
}

export default Syllabus