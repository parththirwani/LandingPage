import Navbar from "./Components/NavBar"
import HeroSection from "./Components/HeroSection"
import FeatureSection from "./Components/FeatureSection"
import Workflow from "./Components/Workflow"
import Testimonials from "./Components/Testimonials"
import Footer from "./Components/Footer"

function App() {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Testimonials />
      <Footer />
    </div>
    </>
  )
}

export default App
