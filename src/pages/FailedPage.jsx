import { Link, useNavigate } from "react-router-dom";

function FailedPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-lg text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth={3} strokeLinecap="butt" strokeLinejoin="miter" className="w-8 h-8"><path d="M5 5l14 14" /><path d="M19 5L5 19" /></svg>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Payment Failed</h1>
        <p className="text-gray-600 mb-8">
          We couldn't process your payment. Don't worry, your registration details are saved! You can try the payment again.
        </p>

        <div className="space-y-3">
          <button 
            onClick={() => navigate(-1)}
            className="block w-full bg-yellow-400 hover:bg-yellow-500 text-blueone font-bold py-3 rounded-xl transition-all"
          >
            Try Payment Again
          </button>
          
          <Link 
            to="/" 
            className="block w-full text-gray-500 hover:text-gray-700 font-medium py-2"
          >
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FailedPage;