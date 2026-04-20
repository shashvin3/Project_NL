import Input from "../components/common/Input";
import Toast from "../components/common/Toast";
import useToast from "../components/hooks/useToast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../supabaseClient";

function BookCounselling() {
    const navigate = useNavigate();
    const { toast, showToast, hideToast } = useToast();
    const [formData,setFormData] = useState({
        fullName:"",
        email:"",
        phone:"",
        qualification: "",
        areaOfInterest: "",   
        counselingMode: "",        
        preferredDateTime: "",
        message:""
    })
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);  

   const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is mandatory";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName.trim())) {
      newErrors.fullName = "Full Name can only contain letters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is mandatory";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is mandatory";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
    }

     if (!formData.qualification) {
     newErrors.qualification = "Please select your qualification";
    }

      if (!formData.areaOfInterest) {
      newErrors.areaOfInterest = "Please select your area of interest";
      }

    if (!formData.counselingMode) {
    newErrors.counselingMode = "Please select a counseling mode";
    }

    if (!formData.preferredDateTime) {
    newErrors.preferredDateTime = "Please select a preferred date";
    }

    if(!formData.message.trim()){
      newErrors.message = "Message cannot be empty"
    }
    return newErrors;
}

  const handleChange = (e) => {
  const {name, value} = e.target;
  setFormData((prev) => ({...prev, [name]: value }))
  if(errors[name]){
    setErrors((prev) => ({...prev, [name]: "" }))
  }};

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const ValidationErrors = validateForm();
    if(Object.keys(ValidationErrors).length > 0){
        setErrors(ValidationErrors); 
        showToast("Please fill all mandatory fields correctly.", "warning"); 
        return;
    }
    try{
    setIsSubmitting(true);
    const {data, error } = await supabase
    .from("counseling_bookings")
    .insert([formData]).select();

    if (error) throw error;

    const newId = data[0].id;
     navigate(`/payment/${newId}?source=counseling`);
    }
    catch(err){
        console.error("Submission error:", err);
        showToast("Submission failed: " + err.message, "error");
    }
    finally{
        setIsSubmitting(false);
    }
    
  }

  return (
    <section className="bg-blueone pt-10 pb-10">  
    {toast && <Toast message={toast.message} type={toast.type} onClose={hideToast} />}     
     <div className="container px-4 md:px-8 lg:px-10 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Part */}
        <div className=" flex flex-col justify-center px-2 md:px-5 space-y-6 lg:space-y-10 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-500 font-jakarta">Transform Your Career with Expert Guidance</h1>
          <p className="text-xl font-jakarta text-white">Get personalized career counseling, scholarship guidance, and skill-based roadmaps designed for your success.</p>
          <div className="flex gap-4 md:gap-10 justify-center lg:justify-start">
            <div className="rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex-1 shadow-lg px-5 md:px-8 py-4">
             <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400 mt-1" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 3L1 9l4 2.18V16l7 4 7-4v-4.82L23 9 12 3zm6 10.99l-6 3.44-6-3.44V13.2l6 3.27 6-3.27v.79z"/>
               </svg>
              <h3 className="text-3xl text-yellow-500 font-bold">5000+</h3>
              </div>
              <p className="text-xl font-bold text-white font-jakarta mt-2">Students Guided</p>
            </div>
            <div className="rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex-1 shadow-lg px-5 md:px-8 py-4">
             <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8"/>
             </svg>
              <h3 className="text-3xl text-yellow-500 font-bold">98+</h3>
              </div>
              <p className="text-xl font-bold text-white font-jakarta mt-2">Success Rate</p>
            </div>
          </div>
        </div>

       {/* Right part form */}
      <form className="space-y-3 bg-white p-5 md:p-8 rounded-3xl shadow-lg w-full"> 
      <h2 className="text-xl md:text-2xl lg:text-3xl text-center font-extrabold font-jakarta leading-snug text-blueone ">Book Your Career Counseling Session</h2>
      <Input
       name="fullName"
       value={formData.fullName}
       onChange={handleChange}
       error={errors.fullName}
       placeholder="Full Name"
      /> 
      
       <Input 
       name="email"
       type="email"
       value={formData.email}
       onChange={handleChange}
       error={errors.email}
       placeholder="Email"
       />
       <Input 
       name="phone"
       type="tel"
       value={formData.phone}
       onChange={handleChange}
       error={errors.phone}
       placeholder="Phone Number"
      />
     
       <div>
       <select  name="qualification" value={formData.qualification}  onChange={handleChange} 
       className={`w-full border rounded-lg px-3 py-2.5 outline-none focus:ring bg-white
       ${errors.qualification ? "border-red-500 focus:ring-red-400" : "border-gray-500 focus:ring-blue-500"}`}>
       <option value="" disabled>Select Qualification</option>
       <option>10th Pass</option>
       <option>12th Pass</option>
       <option>Graduate</option>
       <option>Post Graduate</option>
       <option>Other</option>
       </select>
       {errors.qualification && <p className="text-xs text-red-500 mt-1 font-medium">{errors.qualification}</p>}
       </div>

      <div>
      <select name="areaOfInterest" value={formData.areaOfInterest} onChange={handleChange} 
      className={`w-full border rounded-lg px-3 py-2.5 outline-none focus:ring bg-white
       ${errors.areaOfInterest ? "border-red-500 focus:ring-red-400" : "border-gray-500 focus:ring-blue-500"}`}>
      <option value="" disabled>Select Area Of Interest</option>
      <option>Engineering</option>
      <option>Medical</option>
      <option>Management</option>
      <option>Government Jobs</option>
      <option>Skill Development</option>
      <option>Other</option>
      </select>
      {errors.areaOfInterest && <p className="text-xs text-red-500 mt-1 font-medium">{errors.areaOfInterest}</p>}
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium font-jakarta">Preferred Counseling Mode</label>
        <div className="flex gap-3">
          <button
           type="button" 
           onClick={() => {setFormData((prev) => ({...prev, counselingMode: "online"}))
           if (errors.counselingMode) {
            setErrors((prev) => ({ ...prev, counselingMode: "" }))
           }
           }}
           className={`flex-1 py-2 text-sm md:text-base font-semibold rounded-lg shadow-sm border font-jakarta transition-all duration-200 ${formData.counselingMode === "online"
            ? "bg-yellowone text-white border-yellowone" : errors.counselingMode        
            ? "bg-white text-gray-600 border-red-400" : "bg-white text-gray-600 border-gray-300 hover:border-yellowone"
          }`}>Online</button>
          <button
          type="button" 
          onClick={() => {setFormData((prev) => ({...prev, counselingMode:"offline"}))
          if (errors.counselingMode) {
            setErrors((prev) => ({ ...prev, counselingMode: "" }))
           }
          }}
          className={`flex-1 py-2 text-sm md:text-base font-semibold shadow-sm rounded-lg border font-jakarta transition-all duration-200 ${formData.counselingMode === "offline"
            ? "bg-yellowone text-white border-yellowone" : errors.counselingMode        
            ? "bg-white text-gray-600 border-red-400" : "bg-white text-gray-600 border-gray-300 hover:border-yellowone"
          }`}>Offline</button>
        </div>
         {errors.counselingMode && <p className="text-xs text-red-500 mt-1 font-medium">{errors.counselingMode}</p>}
      </div>

        <Input
        name="preferredDateTime"
        value={formData.preferredDateTime} 
        onChange={handleChange}  
        type="date"
        error={errors.preferredDateTime}
        min={new Date().toISOString().split("T")[0]} 
        />

        <div>
          <textarea rows="3" value={formData.message} onChange={handleChange} name="message" placeholder="Your Query" 
          className={`w-full border rounded-lg px-3 py-2 outline-none focus:ring-1 resize-none  ${errors.message
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-500 focus:ring-blue-500"
                  }`}/>
          {errors.message && <p className="text-xs text-red-500 mt-1 font-medium">{errors.message}</p>}
        </div>

        <button onClick={handleSubmit} disabled={isSubmitting} 
        className={`bg-yellow-500 text-white py-3 text-lg w-full font-bold rounded-4xl transition-all  ${isSubmitting ? "opacity-60 cursor-not-allowed" : "hover:bg-yellow-600"}`}>
            {isSubmitting ? "Booking..." : "Book Your Session"}</button>
      </form>
      </div>
      
     </div>  
    </section>
  );
}   

export default BookCounselling;