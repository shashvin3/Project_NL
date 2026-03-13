import Banner from "../components/common/Banner";
import Organization from "../components/aboutus/Organization";
import Vision from "../components/aboutus/Vision";
import bgimage from "../assets/aboutus/bgimage.jfif";
import Corevalues from "../components/aboutus/Corevalues";
import Reveal from "../components/common/Reveal";


function AboutUs() {
  return (
    <div className="bg-[#fffafc]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={bgimage} alt="about hero image" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-[#fffafc] via-transparent to-[#fffafc]"></div>
        <div className="max-w-230 mb-5 p-15 relative z-10">
        <Reveal direction="up">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wide font-jakarta text-blueone bg-blue-100 rounded-2xl">OUR IDENTITY</span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-jakarta tracking-tight">Empowering India's Future Through <span className="text-blueone">Excellence</span></h1>
        <p className="text-lg md:text-xl leading-relaxed font-jakarta text-grayone">
          NavLakshya is a structured education and career transformation
          initiative focused on scholarship programs, skill development, career
          counseling, and placement solutions.<br/> We are committed to building a
          scientific and transparent ecosystem that bridges the gap between
          academic learning and real-world professional success.
        </p>
        </Reveal>
        </div>
      </section>
      <Organization/>
      <Vision/>
      <Corevalues/>
      <Banner title="Ready to Start Your Success Story?"
        titleTextColor="text-[#2d1f01]"
        des="Join thousands of students who are transforming their academic journey into structured professional success through NavLakshya."
        desTextColor="text-[#2d1f01]"
        firstBtnText="Explore Programs"
        secondBtnText="Contact Us"
        bgColor="bg-[#fcd176]"
        firBtnTextColor="text-white"
        secBtnTextColor="text-[#2d1f01]"
        firBtnBg="bg-blueone"
        secBtnBg="bg-[#fcd176]"
        secBtnBorder="border-[#2d1f01]"
      />
      <div className="text-center px-4 text-sm text-grayone py-10 border-t border-grayone/40">© 2026 NavLakshya. All rights reserved. A brand of Streamcore Web Pvt Ltd.</div>
    </div>
);
}
export default AboutUs;

