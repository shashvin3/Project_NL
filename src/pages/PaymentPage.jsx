import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Toast from "../components/common/Toast";
import useToast from "../components/hooks/useToast";
import { supabase } from "../supabaseClient";

function PaymentPage() {
  const { id } = useParams(); // Gets the ID from the URL
  const [searchParams] = useSearchParams(); 
  const source = searchParams.get("source");
  const { toast, showToast, hideToast } = useToast();
  const [applicant, setApplicant] = useState(null);
  

  useEffect(() => {
    const fetchDetails = async () => {
      try{
        let data, error;
      
      if (source === "counseling") {  //fetching from counseling_bookings table
      ({ data, error } = await supabase
        .from('counseling_bookings')
        .select('fullName')
        .eq('id', id)
        .single());

        if (error) {console.error("Supabase Error:", error.message); return;}
        if (data) setApplicant({firstName: data.fullName});
      }else{
        ({ data,error } = await supabase
          .from('applicants')
          .select("firstName,lastName")
          .eq('phone', id)
          .single());

       if(error) {console.error("Supabase Error:", error.message); return;}
       if (data) setApplicant(data);
        }   
      }catch (err) {
       console.error("Fetch error:", err);
     }
    };

    fetchDetails();

    const timer = setTimeout(() => showToast("Your details have been saved successfully!", "success"));
    return () => clearTimeout(timer);
  }, [id, source]);

  const paymentMessage = source === "counseling"
    ? "Please pay the counseling session fee to confirm your booking."
    : "Please pay the registration fee to finalize your scholarship application.";
  
 
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-4">
     
     {toast && (
      <Toast 
        message={"Your details have been saved successfully!"}
        type={toast.type}
        onClose={hideToast}
      />
    )}

      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-blueone mb-4">Complete Your Payment</h2>
        {applicant ? (
          <p className="mb-6">Hello, <span className="font-bold">{applicant.firstName}</span>!{" "}{paymentMessage} </p>
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