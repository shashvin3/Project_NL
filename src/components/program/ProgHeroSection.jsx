import bgimg from '../../assets/programimage/backgroundimg.jfif'
import Reveal from '../common/Reveal';

function ProgHeroSection(){
return(
    <section className='relative overflow-hidden py-12 mb-10'>
         <div className='absolute inset-0'>
          <img src={bgimg} alt="Program hero img" className='w-full h-full object-cover opacity-20' />
         </div>

    <div className='absolute inset-0 bg-linear-to-b from-[#fffafc]/50 via-[#fffafc] to-[#fffafc]'></div>
    
    <div className="relative z-10 mt-12 mb-10 ">
          <Reveal direction="up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center font-jakarta">Our Specialized <span className="text-blueone">Programs</span></h1>
          </Reveal>
          <Reveal direction="up" delay="0.2">
            <p className="text-xl max-w-2xl mx-auto text-[#4A5666] text-center font-jakarta">From academic recognition to professional transformation, we guide students at every step of their career journey.</p>
          </Reveal>
    </div>
    </section>
)
}

export default ProgHeroSection;