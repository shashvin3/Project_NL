import logo from "../assets/logo/logo.png";
import { Link } from "react-router-dom";

function ComingSoon(){

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-4 pb-10 text-center">
      <img src={logo} alt="NavLakshya" className="w-38 mb-6" />
      <h1 className="text-4xl md:text-5xl font-bold text-blueone mb-4 font-jakarta">
        Coming Soon!
      </h1>
      <p className="max-w-md mb-8 leading-relaxed">
       This service will be live very soon!
      </p>

      <Link to = "/">
      <button className="bg-blueone text-white px-8 py-3 rounded-xl font-bold hover:bg-blueone/90 transition-all shadow-md">
       Back to Home
      </button>
      </Link>
      
    </div>
  );
};

export default ComingSoon;