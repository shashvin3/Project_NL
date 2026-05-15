import bluetick from "../assets/bluetick.png";
import Aibmspbanner from "../assets/policies/Aibmspbanner.png";
import { Link } from "react-router-dom";

function AIBMSP(){

  const table = [ 
    {
      rank: "Ranks 1 to 10",
      prize: "₹25,000",
      certificate: "National Recognition Certificate"
    },
    {
      rank: "Ranks 11 to 50",
      prize: "₹10,000",
      certificate: "Recognition Certificate"
    },
    {
      rank: "Ranks 51 to 100",
      prize: "₹5,000",
      certificate: "Certificate of Merit"
    }
  ];

  const faqs = [
    {
      q: "What is the All India Bright Minds Scholarship Program?",
      a: "The AIBMSP is a national level scholarship examination conducted by NavLakshya that ranks students from Class 8 through Graduation across India. Students who qualify receive merit-based scholarship awards up to ₹25,000, a National Recognition Certificate, career counseling support, and a detailed performance analysis report.",
    },

    {
      q: "Who can apply for the AIBMSP scholarship?",
      a: "The program is open to students from Class 8 through Graduation across all academic streams including Science, Commerce, and Arts. Students from schools, colleges, and institutions anywhere in India are eligible to apply.",
    },

    {
      q: "How much is the AIBMSP registration fee?",
      a: "The registration fee for the AIBMSP is ₹599. This covers your examination access, national ranking, performance analysis report, and career counseling support for qualifying students."
    },

    {
      q: "What are the scholarship prize amounts for AIBMSP?",
      a: "Prize amounts are awarded by national merit rank. Ranks 1 to 10 receive ₹25,000 plus a National Recognition Certificate. Ranks 11 to 50 receive ₹10,000 plus a Recognition Certificate. Ranks 51 to 100 receive ₹5,000 plus a Certificate of Merit. Additional awards are given to State Toppers and the Best Performer Per Stream."
    },

    {
      q: "How is the AIBMSP examination conducted?",
      a: "The examination is conducted online through a computer-based platform and can be taken from anywhere in India. It includes aptitude and logical reasoning assessment alongside subject knowledge evaluation. A national merit ranking is produced from the results."
    },

    {
      q: "When are AIBMSP results declared?",
      a: "Results are declared within a specified period after the examination closes. The exact result date is communicated to all registered students through the NavLakshya platform and registered email address."
    },

    {
      q: "What do I receive apart from the scholarship prize?",
      a: "Every participant receives a Performance Analysis Report. Qualifying students receive a National Recognition Certificate. All registered students receive access to career counseling support to ensure that academic recognition translates into career direction."
    },

    {
      q: "Is the AIBMSP recognized nationally?",
      a: "The AIBMSP is a national level examination that produces verifiable national merit rankings. The National Recognition Certificate issued to qualifying students is a credential that can be presented in college applications and professional contexts as evidence of nationally benchmarked academic performance."
    }
  ];

return(
  <section className="bg-[#fffafc]">
    <img src={Aibmspbanner} alt="AIBMSP banner" className="w-full object-cover" />
    <div className="container mx-auto px-4 sm:px-6 py-12 space-y-12 max-w-5xl">

   <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-2xl md:text-4xl font-jakarta font-bold mb-3">All India Bright Minds Scholarship Program (AIBMSP)</h1>
        <p className="font-bold text-md md:text-lg font-jakarta text-blue-900 leading-relaxed mb-4">
        National level recognition and merit based financial support for India's brightest students.
        </p>
        <p className="font-bold text-md md:text-lg font-jakarta text-blueone leading-relaxed mb-4">
        ₹599* 
        </p>
         <p className="font-bold text-md md:text-lg font-jakarta text-grayone leading-relaxed mb-4">
         One-time examination registration fee
        </p>
   </div>

   <div  className="bg-blueone/5 border border-blueone/20 rounded-2xl p-5 sm:p-6 space-y-3">
  <p className="font-medium text-sm font-jakarta text-grayone leading-relaxed">
  There is a difference between doing well in school and understanding where you stand relative to students across the country.  </p>
  <p className="font-medium text-sm font-jakarta text-grayone leading-relaxed">
   Most assessments tell you how you performed in your class, your school, or your district. The All India Bright Minds Scholarship Program measures your performance against a national field and rewards you for where you rank within it.
  </p>
  <p className="font-extrabold text-sm font-jakarta text-grayone leading-relaxed">
   This is not just a scholarship. It is a credential that tells you and every institution or employer who evaluates you exactly how your academic ability holds up at a national level. Paired with career counseling support, it ensures that recognition becomes direction.
  </p>
   </div>

  <div className="text-left">
    <h2 className="text-xl sm:text-2xl text-blue-600 font-bold font-jakarta">Scholarship Prize Brackets</h2>
    <p className="text-sm sm:text-base text-gray-600 mt-2 mb-5">Prizes are awarded by national merit rank. Every qualifying student receives a National Recognition Certificate alongside their prize.</p>
  
  <div className="hidden sm:block overflow-hidden rounded-xl border border-yellow-200">
  <table className="w-full border-collapse">
    <thead>
        <tr className="text-white text-sm font-jakarta">
          <th className="bg-yellow-300 p-4 text-center">
            National Rank
          </th>
          <th className="bg-yellow-300 p-4 text-center">
            Cash Prize
          </th>
          <th className="bg-yellow-300 p-4 text-center">
            Certificate
          </th>
        </tr>
      </thead>
      <tbody>
        {table.map((row, index) => (
          <tr key={index} className="bg-yellow-50">
            <td className="p-4 text-center font-jakarta text-grayone">{row.rank}</td>
            <td className="p-4 text-center font-jakarta text-grayone">{row.prize}</td>
            <td className="p-4 text-center font-jakarta text-grayone">{row.certificate}</td>
          </tr>
        ))}
      </tbody>
  </table>
  </div>
  </div>

   <div className="flex flex-col gap-3 sm:hidden">
            {table.map((row, index) => (
              <div key={index} className="rounded-2xl border border-yellow-200 bg-yellow-50 overflow-hidden">
                <div className="bg-yellow-300 px-4 py-2 text-center font-bold font-jakarta text-gray-800 text-sm">
                  {row.rank}
                </div>
                <div className="flex justify-between items-center px-4 py-3 gap-3">
                  <div className="text-center flex-1">
                    <p className="text-xs text-gray-500 font-jakarta mb-1">Cash Prize</p>
                    <p className="font-bold text-blueone font-jakarta text-base">{row.prize}</p>
                  </div>
                  <div className="w-px h-10 bg-yellow-200" />
                  <div className="text-center flex-1">
                    <p className="text-xs text-gray-500 font-jakarta mb-1">Certificate</p>
                    <p className="font-medium text-grayone font-jakarta text-xs leading-snug">{row.certificate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
   
       
  <div className="bg-blueone/5 border border-blueone/20 rounded-2xl p-5 sm:p-8">
  <h4 className='font-bold text-lg font-jakarta flex items-center gap-2 mb-4'>
            Additional Awards
  </h4>
         <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
            <img src={bluetick} alt="" className="w-4 h-4 mt-1 shrink-0" />
              <span className="font-jakarta font-medium text-sm leading-relaxed">State Toppers Recognition — top performer per state receives special acknowledgement</span>
            </li>
            <li className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm ">
            <img src={bluetick} alt="" className="w-4 h-4 mt-1 shrink-0" />
              <span className="font-jakarta font-medium text-sm leading-relaxed">Best Performer Per Stream — Science, Commerce, and Arts category winners recognized separately</span>
            </li>
          </ul>
   </div>

       {/* Overview and Eligibility */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Overview */}
          <div className="bg-white border border-grayone/20 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className='font-bold text-lg font-jakarta flex items-center gap-2 mb-4'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"> <circle cx="12" cy="12" r="10" /> <circle cx="12" cy="12" r="6" /> <circle cx="12" cy="12" r="2" /></svg>
              Program Overview
            </h3>
            <ul className="space-y-3">
              {[
                "Identify academically talented students from across India",
                "Promote competitive excellence through national level benchmarking",
                "Provide merit based scholarships to qualifying students",
                "Offer structured career direction alongside academic recognition"
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
          <div className="bg-white border border-grayone/20 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className='font-bold text-lg font-jakarta flex items-center gap-2 mb-3'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>
              Eligibility
            </h3>
            <ul className="space-y-3 pl-5">
              {[
                "Students from Class 8 to Graduation",
                "Open to all streams including Science, Commerce and Arts",
                "Students from schools, colleges and institutions across India"
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
         
         {/* Exam structure */}
        <div className="bg-blueone rounded-2xl p-6 sm:p-8 text-white">
          <h3 className="text-xl sm:text-2xl font-bold font-jakarta mb-5"> Exam Structure</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Online and Computer Based Examination accessible from anywhere in India",
              "Aptitude and Logical Reasoning Assessment",
              "Subject Knowledge Assessment",
              "National-Level Ranking & Merit List"
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
                 <div className="w-6 h-6 rounded-full bg-yellowone/40 flex items-center justify-center shrink-0 mt-0.5">    
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellowone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>   
                  </div> 
              <span className="font-jakarta font-medium text-sm leading-relaxed text-gray-100">{item}</span>
              </div>
            ))}
          </div>
        </div>

         <section className="py-8 sm:py-10 bg-blue-50 rounded-2xl">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-jakarta text-blueone text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="bg-white/90 rounded-2xl p-6 cursor-pointer"
                >
                  <summary className="font-semibold text-[#0c121a] font-jakarta">
                    {faq.q}
                  </summary>
                  <p className="mt-4 text-grayone leading-relaxed font-jakarta">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <div className="text-center">
        <Link to="/apply-now" className='inline-flex items-center justify-center rounded-full text-sm font-medium py-3 px-5 lg:px-4 bg-blueone text-white hover:bg-blueone/80 transition-all duration-300'>Book Counseling Session</Link>
        </div>
    </div>
  </section>
)
}

export default AIBMSP;