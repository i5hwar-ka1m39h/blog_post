

import Intro from "./Intro"
import AboutMe from "./AboutMe"
import FeaturedPost from "./FeaturedPost"
import AllPostGateWay from "./AllPostGateWay"


export default function LandingPage() {
  return (
    <div >
     
      <main className="flex-1">
        <Intro/>
        <section id="about"><AboutMe/></section>
        
        <section id="featured"><FeaturedPost/></section>
        
        <AllPostGateWay/>
      </main>
      
    </div>
  )
}