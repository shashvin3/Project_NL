import starblue from "../../assets/starblue.png";
import trophywh from "../../assets/trophywh.png";
import thunderbolt from "../../assets/thunderbolt.png";
import Reveal from "../common/Reveal";
import prog1 from '../../assets/programimage/prog1.jfif';

function HeroSection() {
  return (
    <section className="relative pb-16 px-6 text-center overflow-hidden min-h-screen">
       <span className="relative inline-flex items-center gap-2 px-6 py-2 text-blueone border border-blueone/20 rounded-full bg-blueone/10 mb-8 font-jakarta font-bold text-sm z-10">
          <img 
            src={starblue}
            alt="Star Icon"
            className="h-6 w-7 object-contain text-color-blueone animate-spin [animation-duration:2s]"
          />
          Education & Career Empowerment Initiative
        </span>
      <div className="absolute top-20 right-20 animate-spin [animation-duration:10s] rounded-full h-32 w-32 bg-linear-to-br from-blueone to-yellowone"></div>
      <div className="absolute inset-0">
        <img src={prog1} alt="Navlakshya Home Page" className="w-full h-full object-cover opacity-30" />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-[#fffafc]/60 via-[#fffafc]/90 to-[#fffafc]"></div>
      
      <Reveal direction="up">
      <h1 className="relative z-10 text-4xl md:text-6xl lg:text-8xl font-extrabold font-jakarta pb-12 ">
       <span className="bg-linear-to-r from-[#000305] via-blueone to-yellowone  bg-clip-text text-transparent">
        Empowering India's <br />
        Future
        </span> 
        
        <br />
        <span className="relative inline-block">

        <span className="absolute inset-0 bg-linear-to-r from-blueone/30 to-yellowone/30 rounded-lg blur-xl"></span>
        <span className="text-blueone relative ">
        Through Excellence
        </span>
        </span>

      </h1>

      <p className="relative z-10 text-grayone text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed">
        NavLakshya is a structured education and career transformation platform
        focused on scholarships, career counseling, skill development, and
        placement support.
      </p>
      </Reveal>
     
      <div className="relative z-10 flex flex-wrap gap-6 justify-center items-center">
        <button className="bg-blueone hover:scale-105 text-white px-10 py-3 rounded-full font-bold inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all shadow-xl shadow-blue-200">
         <img src={trophywh} alt="Trophy Icon" className="w-5 h-5 object-contain" />
          Apply for Scholarship <span className="text-xl">→</span>
        </button>
        <button className="border-2  border-blue-400 hover:border-blue-800 hover:scale-105 hover:bg-yellowone px-15 py-3 rounded-full font-bold inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all">
          <img src={thunderbolt} alt="Thunderbolt Icon" className="w-5 h-5 object-contain mr-2 inline-block" />
          Explore Programs
        </button>
      </div>
    <div className="absolute bottom-20 left-20 animate-spin [animation-duration:10s] rounded-full h-24 w-24 bg-linear-to-br from-blueone/10 to-yellowone/10"></div>
    </section>
  );
}
export default HeroSection;
