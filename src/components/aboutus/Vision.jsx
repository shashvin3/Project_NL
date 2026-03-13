import bluetick from "../../assets/bluetick.png";

function Vision() {
  return (
    <section className="bg-[#fffafc] my-20 mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Card 1 */}
        <div className="bg-blueone text-white rounded-3xl shadow-xl p-10 h-80 w-auto">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-12 h-12 text-blueone opacity-80"
            >
              <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </span>
          <h2 className="text-2xl font-extrabold mb-4 font-jakarta">Our Vision</h2>
          <p className="text-lg font-jakarta font-bold opacity-80 leading-relaxed">
            To build India’s largest structured career ecosystem for students,
            creating a seamless pathway from the classroom to the boardroom. We
            envision a future where every student has clarity, skill competence,
            and corporate exposure before entering the job market.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-3xl shadow-xl p-7 h-80 w-auto">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-12 h-12 text-blueone mb-3"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </span>
          <h2 className="text-2xl font-extrabold mb-3 font-jakarta">Our Mission</h2>
          <p className="text-lg font-bold leading-relaxed mb-2">
            To bridge the gap between education and employment by providing:
          </p>
          <ul>
            <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <img src={bluetick} alt="" className="w-4 h-4" />
              <span>Merit-based recognition</span>
            </li>
            <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <img src={bluetick} alt="" className="w-4 h-4" />
              <span>Industry-aligned skill development</span>
            </li>
            <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <img src={bluetick} alt="" className="w-4 h-4" />
              <span>Structured career counseling</span>
            </li>
            <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <img src={bluetick} alt="" className="w-4 h-4" />
              <span>Corporate placement access</span>
            </li>
            <li className="flex items-center space-x-2 text-sm font-jakarta text-grayone">
              <img src={bluetick} alt="" className="w-4 h-4" />
              <span>Internship and real-world exposure</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Vision;
