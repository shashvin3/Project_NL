import goldenstar from "../../assets/goldenstar.png";
import ashmita from "../../assets/testimonialph/ashmita.jfif";
import priya from "../../assets/testimonialph/priya.jfif";
import Rahul from "../../assets/testimonialph/Rahul.jfif";

function Testimonial() {
  return (
    <section className="py-24 bg-[#edf2f9]">
      <div className="mx-auto px-14">
        <h1 className="font-jakarta font-bold text-3xl md:text-4xl text-[#0c121a] text-center mb-6">
          What Our Students Say
        </h1>
        <div className="flex items-center justify-center gap-1 mb-10">
          <img src={goldenstar} alt="Golden Star" className="w-6 h-6" />
          <img src={goldenstar} alt="Golden Star" className="w-6 h-6" />
          <img src={goldenstar} alt="Golden Star" className="w-6 h-6" />
          <img src={goldenstar} alt="Golden Star" className="w-6 h-6" />
          <img src={goldenstar} alt="Golden Star" className="w-6 h-6" />
        </div>
        {/* Testimonial cards grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial Card 1 */}
          <div className="bg-white group hover:scale-105 hover:bg-linear-to-r from-blueone/20 via-yellowone/20 to-blueone/20 transition-all duration-200  rounded-xl shadow-xl flex flex-col h-full p-5">
            <div className="flex">
            <img
              src={ashmita}
              alt="Ashmita Sharma"
              className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-gray-300 group-hover:border-blueone/40 transition-all duration-200"
            />
            <div className="flex flex-col ml-5">
              <span className="font-bold text-[#0c121a] font-jakarta group-hover:text-blueone transition-all duration-200">Ashmita Sharma</span>
              <span className="inline-block mt-1 px-3 py-1 text-[10px] font-bold uppercase bg-blue-50 rounded-full tracking-wider">AIBMSP Scholar</span>
            </div>
            </div>
            <p className="font-[16px] text-grayone font-jakarta italic leading-relaxed">
              The AIBMSP scholarship not only provided financial support but
              also gave me a clear career roadmap through their counseling
              session."
            </p>
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-white group hover:scale-105 hover:bg-linear-to-r from-blueone/20 via-yellowone/20 to-blueone/20 transition-all duration-200  rounded-2xl shadow-xl  flex flex-col h-full p-5">
            <div className="flex gap-3">
              <img
                src={priya}
                alt="Priya Verma"
                className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-gray-300 group-hover:border-blueone/40 transition-all duration-200"
              />
              <div className="flex flex-col">
                <span className="font-bold text-[#0c121a] font-jakarta group-hover:text-blueone transition-all duration-200">Priya Verma</span>
                <span className="inline-block mt-1 px-3 py-1 text-[10px] font-bold uppercase bg-blue-50 rounded-full tracking-wider">Placed as HR Executive</span>
              </div>
            </div>

            <p className="font-[16px] text-grayone italic font-jakarta leading-relaxed">
              "The HR Skill Division training was practical and
              industry-focused. I felt confident during my interviews thanks to
              the mock sessions."
            </p>
          </div>

          {/* Testimonial Card 3 */}
          <div className="bg-white group hover:scale-105 hover:bg-linear-to-r from-blueone/20 via-yellowone/20 to-blueone/20 transition-all duration-200 rounded-2xl shadow-xl  flex flex-col h-full p-5">
            <div className="flex">
            <img
              src={Rahul}
              alt="Rahul Mehta"
              className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-gray-300 group-hover:border-blueone/40 transition-all duration-200"
            />
            <div className="flex flex-col ml-3">
              <span className="font-bold text-[#0c121a] font-jakarta group-hover:text-blueone transition-all duration-200">Rahul Mehta</span>
              <span className="inline-block mt-1 px-3 py-1 text-[10px] font-bold uppercase bg-blue-50 rounded-full tracking-wider">Graduate Student</span>
            </div>
            </div>
            <p className="font-[16px] text-grayone font-jakarta italic leading-relaxed">
              "I was confused about my career after 12th. NavLakshya's
              scientific counseling helped me choose the right degree and
              specialization."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
