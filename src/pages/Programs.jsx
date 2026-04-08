import ProgHeroSection from "../components/program/ProgHeroSection";
import Specialprog from "../components/program/Specialprog";
import Banner from "../components/common/Banner"
import SkillDev from "../components/program/SkillDev";
import PlacementCell from "../components/program/PlacementCell";


function Program(){
    return(
        <div className="min-h-screen bg-[#fffafc]">
        <ProgHeroSection/>
        <Specialprog/>
        <SkillDev/>
        <PlacementCell/>
         <Banner title="Ready to Transform Your Career?" titleTextColor="text-[#2d1f01]" des=" Join NavLakshya today and take the first step toward structured academic growth and professional success." desTextColor="text-[#2d1f01]" firstBtnText="Get Started Today" secondBtnText="Apply Now" bgColor="bg-yellowone" firBtnTextColor="text-white" secBtnTextColor="text-[#2d1f01]" firBtnBg = "bg-blueone" firstBtnLink="/" secondBtnLink="/apply-now" secBtnBg = "bg-[yellowone]" secBtnBorder="border-[#2d1f01]"/>
        </div>
        )
}
export default Program;