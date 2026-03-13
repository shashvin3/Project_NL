import HeroSection from "../components/home/HeroSection"
import About from "../components/home/About"
import Program from "../components/home/Program"
import Stats from "../components/home/Stats"
import Testimonial from "../components/home/Testimonial"
import Banner from "../components/common/Banner"
import trophybl from "../assets/trophyblack.png";


function Home(){
    return(
     <>
    <div className="min-h-screen bg-blue-50">
    <HeroSection />
    <About />
    <Program />
    <Stats />
    <Testimonial />
    <Banner title="Ready to Build Your Career?" titleTextColor="text-white" des=" Don't wait for opportunities. Create them with NavLakshya's structured scholarship and career development programs." desTextColor="text-white" firstBtnText="Explore Programs" secondBtnText="Book Counseling" bgColor="bg-blueone" firBtnTextColor="text-[#182230]" secBtnTextColor="text-white" firBtnBg ="bg-white" secBtnBg = "bg-blueone " secBtnBorder="border-blue-400" firstIcon={trophybl}
     secondIcon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 transition-colors duration-300 group-hover:text-black`}
              ><circle cx="12" cy="12" r="10" /> <circle cx="12" cy="12" r="6" /> <circle cx="12" cy="12" r="2" /></svg>}/>
    </div>
    </>    
    )
}

export default Home;