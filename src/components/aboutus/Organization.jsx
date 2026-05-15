import group from '../../assets/aboutus/groupphoto.png'; 
import organiz from '../../assets/aboutus/organiz.png';
function Organization(){
    return(
  <section className=" bg-[#fffafc] py-8">          
  <div className='container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14'>
    {/* left part */}     
     <div>
       <div className='flex items-center gap-2 mb-4'>
           <img src={organiz} alt="" className='w-13 h-13' />    
           <span className='font-bold text-blueone uppercase text-sm tracking-widest'>
            The Organization
           </span>
        </div>
         <h2 className='text-4xl font-bold mb-6'>Why NavLakshya exists.</h2>
         <div className="space-y-2 text-grayone font-jakarta mb-4">
         <p>
          NavLakshya was built after Nitin Mishra observed the same problem playing out across every school, every counseling room, and every anxious family conversation he encountered.
         <span className='font-extrabold'>Students were not lacking ambition. They were lacking a map.</span> 
         </p>
         <p>
         Most students make career decisions based on assumptions, parental pressure, or incomplete information. Schools focus on academics but not on real career clarity. The generic guidance available to students either handed them a brochure or told them what was popular — without ever asking a single question about who they actually were.         </p>
         <p>
         What was missing in the market was not more advice. It was a structured system that does not just tell a student what to do but guides them step by step — from confusion to clarity, from clarity to skill, from skill to placement.
         </p>
         <p className='font-extrabold'>
          NavLakshya was founded in 2026 to be that system 
         </p>
         <p>
         Not a platform that aggregates information. A structured, result-oriented ecosystem where students can explore, learn, and access real opportunities. Built with one measure of success: that every student who walks in leaves with a clearer direction and a concrete next step than they had when they arrived.
         </p>
         </div>
        <div className="bg-white rounded-2xl border border-[#e0e5eb] p-4 italic text-grayone font-jakarta shadow-sm">
        “For Nitin, NavLakshya is not just a platform. It is a mission. A commitment to ensuring no student feels lost when it comes to their future.”
        </div>
     </div>
    {/* right part */}
     <div className='rounded-3xl shadow-2xl overflow-hidden aspect-video lg:aspect-square'>
     <img src={group} className='w-full h-full object-cover opacity-85'/>
     </div>
  </div>
</section>
    )
}
export default Organization;