import { Link } from "react-router-dom";
import greentick from "../assets/greentick.png";

function SuccessPage() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-lg text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-5 rounded-full">
            <img src={greentick} alt="greentick" className="w-10 h-10"/>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Payment Successful!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for registering. Your application for the NavLakshya Scholarship has been received and is now under review.
        </p>

        <div className="space-y-4">
          <Link 
            to="/" 
            className="block w-full bg-blueone hover:bg-blueone/80 text-white font-bold py-3 rounded-xl transition-all"
          >
            Return to Home
          </Link>
          <p className="text-sm text-gray-400">
            A confirmation email will be sent to you shortly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;