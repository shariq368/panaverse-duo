import Hero from "./components/widgets/Hero"
import Coretrack from "./components/widgets/CoreTrack"
import CoreTrack2 from "./components/widgets/CoreTrack2"
import Content from "./components/widgets/Content"
import Specialtrack from "./components/widgets/Specialtrack"



export default function Home(){
  return(
    <>
    <main>
    
      {/* Hero Section */}
      <Hero/>
      {/* CoreTrack Section */}
      <Coretrack/>
      {/* CoreTrack 2 Section */}
      <CoreTrack2/>
      {/* Specialized Track */}
      <Specialtrack/>
      {/* Content */}
      <Content/>

    </main>
    </>





  )
}