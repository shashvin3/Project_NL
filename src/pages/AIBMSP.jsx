import bluetick from "../assets/bluetick.png";
import bluedot from "../assets/policies/bluedot.png";
import Aibmspbanner from "../assets/policies/Aibmspbanner.png";

function AIBMSP(){
return(
  <section className="bg-[#fffafc]">
    <img src={Aibmspbanner} alt="AIBMSP banner" />
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-jakarta font-bold mb-3">All India Bright Minds Scholarship Program (AIBMSP)</h1>
        <p className="font-bold text-md md:text-lg font-jakarta text-grayone leading-relaxed mb-4">
        Welcome to AIBMSP, A national-level scholarship examination designed to identify and reward bright students across India while preparing them for academic and professional excellence.
        </p>
        <h4 className='font-bold text-lg font-jakarta flex items-center gap-2 mb-3'>
            Benefit Highlight
        </h4>
         <ul className="mb-4 ml-3">
             {["Merit Certificate"," National Level Recognition for all qualified candidates", "Cash Prizes"].map((item) => (
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-md  text-grayone ">{item}</span>
            </li>
           ))}
          </ul>
         {/* Objectives and Eligibility */}
       <div className="mb-4">
            <h4 className='font-bold text-lg font-jakarta flex items-center gap-2 mb-3'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"> <circle cx="12" cy="12" r="10" /> <circle cx="12" cy="12" r="6" /> <circle cx="12" cy="12" r="2" /></svg>
              Objective</h4>
            <ul className="space-y-2 ml-2">
           {["Identify academically talented students","Promote competitive excellence","Provide merit-based scholarships","Offer structured career direction",
           "Build confidence through national-level benchmarking"].map((item) => (
            <li className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-yellowone/40 flex items-center justify-center">    
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>   
              </div> 
              <span>{item}</span>
                </li>))}
           </ul>
         </div>
        
          <div className="mb-4"> 
            <h4 className='font-bold text-lg font-jakarta flex items-center gap-2 mb-3'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>
              Eligibility</h4>
            <ul className="space-y-2  ml-2">
              {["Students from Class 6 to Graduation","Identify academically talented students","Open to all streams (Science, Commerce, Arts)",
                "Students from schools, colleges, and institutions across India"].map((item) => 
              (<li className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-yellowone/40 flex items-center justify-center">    
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>   
              </div>            
               <span>{item}</span>
             </li>
              ))}
            </ul>
         </div>  
        <h2 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3">
        Exam Structure    
        </h2>
         <ul className="pb-22">
            {["Online/Computer-Based Examination","Aptitude & Logical Reasoning","Subject Knowledge Assessment","National-Level Ranking & Merit List"].map((item) =>(
            <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone mb-2">
                  <img src={bluetick} alt="" className="w-4 h-4" />
                  <span>{item}</span>
                </li>
            ))}
         </ul>
    </div>
  </section>
)
}

export default AIBMSP;