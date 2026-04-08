import bluetick from "../assets/bluetick.png";
import Aibmspbanner from "../assets/policies/Aibmspbanner.png";

function AIBMSP(){
return(
  <section className="bg-[#fffafc]">
    <img src={Aibmspbanner} alt="AIBMSP banner" />
    <div className="container mx-auto px-4 py-16 space-y-12">

   <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-jakarta font-bold mb-3">All India Bright Minds Scholarship Program (AIBMSP)</h1>
        <p className="font-bold text-md md:text-lg font-jakarta text-grayone leading-relaxed mb-4">
        Welcome to AIBMSP, A national-level scholarship examination designed to identify and reward bright students across India while preparing them for academic and professional excellence.
        </p>
   </div>
       
  <div className="bg-blueone/5 border border-blueone/20 rounded-2xl p-8">
  <h4 className='font-bold text-lg font-jakarta flex items-center gap-2 mb-3'>
            Benefit Highlight
  </h4>
         <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <li className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm min-h-16">
            <img src={bluetick} alt="" className="w-4 h-4" />
              <span className="font-jakarta font-medium text-sm self-center">Merit Certificate</span>
            </li>
            <li className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm min-h-16">
            <img src={bluetick} alt="" className="w-4 h-4 mt-1 shrink-0" />
              <span className="font-jakarta font-medium text-sm self-center">National Level Recognition for all qualified candidates</span>
            </li>
            <li className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm min-h-16">
            <img src={bluetick} alt="" className="w-4 h-4" />
              <span className="font-jakarta font-medium text-sm self-center">Cash Prizes</span>
            </li>
          </ul>
   </div>
       {/* Objectives and Eligibility */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Objective */}
          <div className="bg-white border border-grayone/20 rounded-2xl p-8 shadow-sm">
            <h3 className='font-bold text-lg font-jakarta flex items-center gap-2 mb-3'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"> <circle cx="12" cy="12" r="10" /> <circle cx="12" cy="12" r="6" /> <circle cx="12" cy="12" r="2" /></svg>
              Objective
            </h3>
            <ul className="space-y-3 pl-5">
              {[
                "Identify academically talented students",
                "Promote competitive excellence",
                "Provide merit-based scholarships",
                "Offer structured career direction",
                "Build confidence through national-level benchmarking"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-jakarta text-grayone">
                    <div className="w-6 h-6 rounded-full bg-yellowone/40 flex items-center justify-center shrink-0 mt-0.5">    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>   
                    </div> 
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Eligibility */}
          <div className="bg-white border border-grayone/20 rounded-2xl p-8 shadow-sm">
            <h3 className='font-bold text-lg font-jakarta flex items-center gap-2 mb-3'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>
              Eligibility
            </h3>
            <ul className="space-y-3 pl-5">
              {[
                "Students from Class 6 to Graduation",
                "Identify academically talented students",
                "Open to all streams (Science, Commerce, Arts)",
                "Students from schools, colleges, and institutions across India"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-jakarta text-grayone">
                  <div className="w-6 h-6 rounded-full bg-yellowone/40 flex items-center justify-center shrink-0 mt-0.5">    
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>   
                  </div> 
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

       <div className="bg-blueone rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold font-jakarta mb-6"> Exam Structure</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Online/Computer-Based Examination",
              "Aptitude & Logical Reasoning",
              "Subject Knowledge Assessment",
              "National-Level Ranking & Merit List"
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
                 <div className="w-6 h-6 rounded-full bg-yellowone/40 flex items-center justify-center shrink-0 mt-0.5">    
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>   
                  </div> 
              <span className="font-jakarta font-medium text-gray-100">{item}</span>
              </div>
            ))}
          </div>
        </div>
    </div>
  </section>
)
}

export default AIBMSP;