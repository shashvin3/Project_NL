import prog2 from '../../assets/programimage/prog2.jfif'
import furniture from '../../assets/programimage/furniture.jfif'

function PlacementCell(){
    return(
    <section className="py-20">
        <div className='max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center'>
        {/* Left Part Placement one*/}
      <div className='space-y-6'>
        <div className='inline-flex items-center justify-center gap-2 bg-blueone/20 px-3 py-1 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blueone"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /><rect width="20" height="14" x="2" y="6" rx="2" /></svg>
            <span className='text-blueone'>Career LaunchPad</span>
        </div>
        <h2 className='text-4xl font-bold font-jakarta'>Placement Cell</h2>
        <p className='text-lg font-jakarta txt-grayone'>Our dedicated Placement Division ensures smooth transition from education to employment.
        We collaborate with startups, SMEs, and corporate organizations to create opportunities for our students.</p>
        
        <div className="space-y-2">
         <div className='flex items-center gap-4 rounded-xl bg-white border border-[#e0e5eb] shadow-sm p-4'>
        <div className="w-6 h-6 rounded-full bg-blueone/20 flex items-center justify-center">    
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 text-blueone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>        </div>      
        <span>Employer–Student Matching
        </span>
        </div>

        <div className='flex items-center gap-4 rounded-xl bg-white border border-[#e0e5eb] shadow-sm p-4'>
        <div className="w-6 h-6 rounded-full bg-blueone/20 flex items-center justify-center">    
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 text-blueone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>    
        </div>
        <span>Corporate Referral Network</span>
        </div>

        <div className='flex items-center gap-4 rounded-xl bg-white border border-[#e0e5eb] shadow-sm p-4'>
        <div className="w-6 h-6 rounded-full bg-blueone/20 flex items-center justify-center">    
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 text-blueone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>    
        </div>   
        <span>Resume Writing & Profile Optimization</span>
        </div>
 
        <div className='flex items-center gap-4 rounded-xl bg-white border border-[#e0e5eb] shadow-sm p-4'>
        <div className="w-6 h-6 rounded-full bg-blueone/20 flex items-center justify-center">    
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 text-blueone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>    
        </div> 
        <span>Mock Interview Preparation</span>
        </div>

        <div className='flex items-center gap-4 rounded-xl bg-white border border-[#e0e5eb] shadow-sm p-4'>
        <div className="w-6 h-6 rounded-full bg-blueone/20 flex items-center justify-center">    
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 text-blueone"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>    
        </div> 
        <span>Internship & Job Assistance</span>
        </div>
        </div>
        <a href="#" className='inline-flex items-center justify-center gap-2 whitespace-nowrap text-white rounded-full px-8 w-full sm:w-auto text-sm font-medium bg-blueone hover:bg-blueone/90 p-3'>Connect with Placement Team</a>
        </div>

     {/* Right Part image one */}
      <div className='grid grid-cols-2 gap-6'>
       <img src={prog2} alt="" className='rounded-2xl h-full w-full object-cover shadow-lg'/>

       <div className='flex flex-col gap-4'>
        <img src={furniture} alt="" className='rounded-2xl h-1/2 w-full object-cover shadow-lg' />
        <div className='bg-[#FCD176] p-8 rounded-2xl shadow-lg flex flex-col justify-center h-1/2'>
            <p className='text-3xl font-bold font-jakarta text-[#2D1F01]'>100+</p>
            <p className='text-sm font-medium font-jakarta text-[#2D1F01]'>Hiring Partners Pan India</p>
        </div>
       </div>
      </div>

        </div>
    </section>    
    )
}
export default PlacementCell;