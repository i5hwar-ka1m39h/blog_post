
import Navbar from "../Navbar"
import Intro from "./Intro"
import AboutMe from "./AboutMe"
import FeaturedPost from "./FeaturedPost"
import AllPostGateWay from "./AllPostGateWay"
import Footer from "../Footer"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-1">
        <Intro/>
        <AboutMe/>
        <FeaturedPost/>
        <AllPostGateWay/>
      </main>
      <Footer/>
    </div>
  )
}