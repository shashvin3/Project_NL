import ProgHeroSection from "../components/program/ProgHeroSection";
import Specialprog from "../components/program/specialprog";
import Banner from "../components/common/Banner"
import SkillDev from "../components/program/SkillDev";
import PlacementCell from "../components/program/PlacementCell";


function Program(){
    return(
        <div className="min-h-screen bg-[#fffafc] ">
        <ProgHeroSection/>
        <Specialprog/>
        <SkillDev/>
        <PlacementCell/>
         <Banner title="Ready to Transform Your Career?" titleTextColor="text-white" des=" Join NavLakshya today and take the first step toward structured academic growth and professional success." desTextColor="text-[#99a1af]" firstBtnText="Get Started Today" secondBtnText="Apply Now" bgColor="bg-[#0c121a]" firBtnTextColor="text-white" secBtnTextColor="text-white" firBtnBg = "bg-blueone" secBtnBg = "bg-[#182230]" secBtnBorder="border-white"/>
        </div>
        )
}
export default Program;