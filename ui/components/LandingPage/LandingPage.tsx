
import Navbar from "../Navbar"
import Intro from "./Intro"
import AboutMe from "./AboutMe"
import FeaturedPost from "./FeaturedPost"
import AllPostGateWay from "./AllPostGateWay"
import Footer from "../Footer"

export default function LandingPage() {
  return (
    <div >
     
      <main className="flex-1">
        <Intro/>
        <AboutMe/>
        <FeaturedPost/>
        <AllPostGateWay/>
      </main>
      
    </div>
  )
}