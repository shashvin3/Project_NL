import prog1 from '../../assets/programimage/prog1.jfif'
import prog2 from '../../assets/programimage/prog2.jfif'
import { Link } from 'react-router-dom';
import Reveal from '../common/Reveal';

function Specialprog(){
    return(
   <section className="flex flex-col gap-32 px-14 ">
    
    {/* Program 1 */}
    <div>
    <div className="flex justify-start py-10">
    <Reveal direction="left">
    <span className="inline-flex gap-2 p-1 bg-blue-50 rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blueone"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
    <span className="text-sm font-bold font-jakarta text-blueone">Scholarship Program</span>
    </span>
    </Reveal>
    </div>     
    <div className="grid lg:grid-cols-2 mb-20 gap-12 items-center">
     <Reveal direction="left"> 
     <div className="space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold font-jakarta">All India Bright Minds Scholarship Program (AIBMSP)</h1>
        <p className="text-lg text-grayone font-jakarta">A national-level scholarship examination designed to identify and reward bright students across India while preparing them for academic and professional excellence.</p>
       
        {/* Objectives and Eligibility */}
        <div className="grid grid-cols-2">
         
         <div>
            <h4 className='font-bold font-jakarta text-blueone flex items-center gap-2 mb-3'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blueone"> <circle cx="12" cy="12" r="10" /> <circle cx="12" cy="12" r="6" /> <circle cx="12" cy="12" r="2" /></svg>
              Objective</h4>
            <ul className="space-y-2">
           {["Identify academically talented students","Promote competitive excellence","Provide merit-based scholarships","Offer structured career direction",
           "Build confidence through national-level benchmarking"].map((item) => (
          <li className="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blueone shrink-0 mt-1"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>                <span>{item}</span>
                </li>))}
           </ul>
         </div>
        
          <div> 
            <h4 className='font-bold font-jakarta text-blueone flex items-center gap-2 mb-3'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blueone"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>
              Eligibility</h4>
            <ul  className="space-y-2">
              {["Students from Class 8 to Graduation","Identify academically talented students","Open to all streams (Science, Commerce, Arts)",
                "Students from schools, colleges, and institutions across India"].map((item) => (<li className="flex items-start gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blueone shrink-0 mt-1"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>                <span>{item}</span>
             </li>
              ))}
            </ul>
         </div>
         
        </div>
        {/* Exam Structure */}
        <div className="bg-[#f4f9ff] rounded-2xl h-42 border border-[#e0e5eb] p-5 mr-5">
            <h3 className="font-bold font-jakarta mb-4">Exam Structure</h3>
            <ul className="flex flex-wrap gap-3">
              {["Online/Computer-Based Examination","Aptitude & Logical Reasoning","Subject Knowledge Assessment","National-Level Ranking & Merit List"].map((items) => (
            <li className="border border-[#e0e5eb] bg-white rounded-xl p-1 text-sm tracking-wide">{items}</li>
           ))}
        </ul>        
        </div>
        <Link to="/contact" className='inline-flex items-center justify-center text-sm font-medium font-jakarta text-white bg-blueone px-7 py-3 rounded-3xl hover:bg-blueone/90 transition-all duration-300'>
        Apply For AIBMSP
        </Link>
     </div > 
     </Reveal>
      <Reveal direction="right">
       <div className='relative h-full'>
        <div className='absolute -bottom-6 -left-6 p-8 bg-white rounded-2xl border border-[#e0e5eb] max-w-70 shadow-lg'>
          <p className='text-sm font-semibold mb-2 text-blueone font-jakarta'>Benefit Highlight</p>
          <p className='font-medium font-jakarta '>Merit Certificate & National Level Recognition for all qualified candidates.</p>
        </div>
        <img src={prog1} alt="" className='h-full w-full object-cover border-8 border-white rounded-3xl shadow-2xl'/>  
      </div>
      </Reveal>
     </div>
    </div>

    {/* Program 2 */}
    <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image part on left side */}
      <Reveal direction="left" className="order-2 lg:order-1">
      <div className='relative h-full'>
         <div className='absolute -top-6 -right-6 p-6 bg-blueone rounded-2xl '>
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-12 h-12 text-white"
                >
                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                  <path d="M9 13a4.5 4.5 0 0 0 3-4" />
                  <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                  <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                  <path d="M6 18a4 4 0 0 1-1.967-.516" />
                  <path d="M12 13h4" />
                  <path d="M12 18h6a2 2 0 0 1 2 2v1" />
                  <path d="M12 8h8" />
                  <path d="M16 8V5a2 2 0 0 1 2-2" />
                  <circle cx="16" cy="13" r=".5" />
                  <circle cx="18" cy="3" r=".5" />
                  <circle cx="20" cy="21" r=".5" />
                  <circle cx="20" cy="8" r=".5" />
                </svg> 
         </div>
        <img src={prog2} alt="" className='h-full w-full object-cover border-8 border-white rounded-3xl shadow-2xl'/>
      </div>
      </Reveal>
         {/* Right Side */}
         <Reveal direction="right" className="order-1 lg:order-2">
        <div className='space-y-8 py-30 '>
        <div className='inline-flex items-center justify-center gap-2 bg-yellowone/20 px-3 py-1 rounded-full'>
             <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-[#2d1f01]"
                >
                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                  <path d="M9 13a4.5 4.5 0 0 0 3-4" />
                  <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                  <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                  <path d="M6 18a4 4 0 0 1-1.967-.516" />
                  <path d="M12 13h4" />
                  <path d="M12 18h6a2 2 0 0 1 2 2v1" />
                  <path d="M12 8h8" />
                  <path d="M16 8V5a2 2 0 0 1 2-2" />
                  <circle cx="16" cy="13" r=".5" />
                  <circle cx="18" cy="3" r=".5" />
                  <circle cx="20" cy="21" r=".5" />
                  <circle cx="20" cy="8" r=".5" />
                </svg>
            <span className='text-[#2d1f01]'>Career Advisory</span>
        </div>
        <h2 className='text-4xl font-bold font-jakarta'>Career Counseling</h2>
        <p className='text-lg font-jakarta txt-grayone'>Scientific career assessment and expert guidance to eliminate confusion and build clarity.
         Our counseling program helps students understand their strengths, interests, and career alignment through structured evaluation tools.</p>
       
        <div className='flex items-center gap-4 rounded-xl bg-white border border-[#e0e5eb] shadow-sm p-4'>
        <div className="w-6 h-6 rounded-full bg-blueone/20 flex items-center justify-center">    
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blueone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>        </div>      
        <span>Detailed Psychometric & Aptitude Analysis</span>
        </div>

        <div className='flex items-center gap-4 rounded-xl bg-white border border-[#e0e5eb] shadow-sm p-4'>
        <div className="w-6 h-6 rounded-full bg-blueone/20 flex items-center justify-center">    
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blueone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>    
        </div>
        <span>Skill Identification Report</span>
        </div>

        <div className='flex items-center gap-4 rounded-xl bg-white border border-[#e0e5eb] shadow-sm p-4'>
        <div className="w-6 h-6 rounded-full bg-blueone/20 flex items-center justify-center">    
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blueone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>    
        </div>   
        <span>Career Stream Evaluation</span>
        </div>
 
        <div className='flex items-center gap-4 rounded-xl bg-white border border-[#e0e5eb] shadow-sm p-4'>
        <div className="w-6 h-6 rounded-full bg-blueone/20 flex items-center justify-center">    
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blueone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>    
        </div> 
        <span>Personalized One-on-One Counseling Session</span>
        </div>

        <div className='flex items-center gap-4 rounded-xl bg-white border border-[#e0e5eb] shadow-sm p-4'>
        <div className="w-6 h-6 rounded-full bg-blueone/20 flex items-center justify-center">    
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blueone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>    
        </div> 
        <span>Structured Career Action Roadmap</span>
        </div>
        <a href="#" className='inline-flex items-center justify-center border border-gray-200 rounded-3xl text-sm font-medium p-3'>Book Counseling Session</a>
        </div>
        </Reveal>
    </div>
</section>
    )
}
export default Specialprog;