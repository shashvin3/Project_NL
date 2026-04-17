import Banner from "../components/common/Banner";
import Organization from "../components/aboutus/Organization";
import Vision from "../components/aboutus/Vision";
import bgimage from "../assets/aboutus/bgimage.png";
import Corevalues from "../components/aboutus/Corevalues";
import Reveal from "../components/common/Reveal";


function AboutUs() {
  return (
  <div className="bg-[#fffafc]">
    <section className="relative overflow-hidden">
        <div className="container mx-auto px-8">
        <div className="absolute inset-0">
          <img src={bgimage} alt="about hero image" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-[#fffafc] via-transparent to-[#fffafc]"></div>
        
        <Reveal direction="up">
        <div className="max-w-3xl mb-5 py-24 relative z-10">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider font-jakarta text-blueone bg-blue-100 rounded-full">OUR IDENTITY</span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-jakarta tracking-tight">Empowering India's Future Through <span className="text-blueone">Excellence</span></h1>
        <p className="text-lg md:text-xl leading-relaxed font-jakarta text-grayone">
          NavLakshya is a structured education and career transformation
          initiative focused on scholarship programs, skill development, career
          counseling, and placement solutions.<br/> We are committed to building a
          scientific and transparent ecosystem that bridges the gap between
          academic learning and real-world professional success.
        </p>
        </div>
        </Reveal>
      </div>
    </section>
      <Organization/>
      <Vision/>
      <Corevalues/>
      <Banner title="Ready to Start Your Success Story?"
        titleTextColor="text-yellow-500"
        des="Join thousands of students who are transforming their academic journey into structured professional success through NavLakshya."
        desTextColor="text-white"
        firstBtnText="Explore Programs"
        secondBtnText="Contact Us"
        bgColor="bg-blueone"
        firBtnTextColor="text-[#182230]"
        secBtnTextColor="text-white"
        firstBtnLink="/programs"
        secondBtnLink="/contact"
        firBtnBg="bg-yellow-500"
        secBtnBg="bg-blueone"
        secBtnBorder="border-blue-400"
      />
      </div>
);
}
export default AboutUs;

