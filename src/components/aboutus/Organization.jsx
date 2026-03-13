import group from '../../assets/aboutus/groupphoto.jpg'; 
import organiz from '../../assets/aboutus/organiz.png';
function Organization(){
    return(
        <section className="grid grid-cols-1 md:grid-cols-2 bg-[#fffafc] p-10 pt-10">
         {/* left part */}
         <div>
            <div className='flex items-center gap-1 mt-15'>
           <img src={organiz} alt="" className='w-13 h-13' />    
           <span className='font-bold text-blueone uppercase text-sm tracking-widest font-jakarta'>
            The Organization
           </span>
            </div>
         <h2 className='text-3xl font-bold mb-6'>Part of Streamcore Web Pvt Ltd</h2>
         <p className='text-lg leading-relaxed mb-8 text-grayone font-jakarta '>
         NavLakshya operates as the flagship Education & Career Empowerment initiative of <span className='font-extrabold'>Streamcore Web Pvt Ltd.</span>
         We represent the convergence of technology, structured assessment systems, and industry-aligned training methodologies. Our goal is to redefine how students prepare for their careers by creating a clear roadmap from classroom learning to corporate readiness.
         By integrating scholarships, career guidance, skill development, and placement support into one ecosystem, we ensure students receive complete career transformation — not just academic recognition.
         </p>
        <div className="bg-white rounded-2xl h-30 border border-[#e0e5eb] p-5 mr-5 italic text-grayone font-jakarta">
        “Our mission is simple — Identify Talent. Build Skills. Create Careers.
         We guide students from academic excellence to professional success through a scientific ecosystem.”
        </div>
         </div>
         {/* right part */}
         <div className='p-10'>
         <img src={group} alt="" className='w-full h-full object-contain rounded-xl shadow-2xl' />
         </div>
        </section>
    )
}
export default Organization;