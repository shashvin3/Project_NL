import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

function PaymentPage() {
  const { id } = useParams(); // Gets the ID from the URL
  const [applicant, setApplicant] = useState(null);

  useEffect(() => {
    // Fetch the applicant name so the user knows they are paying for the right account
    const fetchApplicant = async () => {
      const { data } = await supabase
        .from('applicants')
        .select('firstName, lastName')
        .eq('id', id)
        .single();
      setApplicant(data);
    };
    fetchApplicant();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-blueone mb-4">Complete Your Payment</h2>
        {applicant ? (
          <p className="mb-6">Hello, <span className="font-bold">{applicant.firstName}</span>! Please pay the registration fee to finalize your scholarship application.</p>
        ) : <p>Loading details...</p>}
        
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <span className="text-gray-600">Amount to Pay:</span>
          <span className="block text-3xl font-extrabold text-blueone">₹500</span>
        </div>

        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blueone font-bold py-3 rounded-xl transition-all">
          Pay Now via Razorpay
        </button>
      </div>
    </div>
  );
}

export default PaymentPage;