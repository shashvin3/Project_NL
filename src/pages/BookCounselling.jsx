import Input from "../components/common/Input";
import Radio from "../components/common/Radio";
import counselingimg from "../assets/counselingimg.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../supabaseClient";

function BookCounselling() {
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        fullName:"",
        email:"",
        phone:"",
        qualification: "10th Pass",
        areaOfInterest: "Engineering",   
        counselingMode: "online",        
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
        return;
    }
    try{
    setIsSubmitting(true);
    const {data, error } = await supabase
    .from("counseling_bookings")
    .insert([
        formData  
    ]).select();

    if (error) throw error;

    const newId = data[0].id;
     navigate(`/payment/${newId}?source=counseling`);
    }
    catch(err){
        console.error("Submission error:", err);
        alert("Submission failed: " + err.message);
    }
    finally{
        setIsSubmitting(false);
    }
    
  }

  return (
    <section className="bg-blueone/10 pt-20 pb-15">       
    <div className="flex justify-center px-2">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold inline-block text-center bg-yellowone rounded-full py-3 px-3 lg:px-5 mb-5 text-blueone ">Book Your Career Counseling Session</h2>
    </div> 
      <p className="text-lg lg:text-xl mb-6 text-blue-800 text-center px-5 mx-auto max-w-170">Get personalized guidance from our experts to choose the right career path, scholarships, and skill development programs.</p>
      <div className="container px-5 lg:px-10 mx-auto">
      <div className="grid lg:grid-cols-2 gap-4 bg-white rounded-3xl shadow-sm p-5">
      {/* Left part image */}
       <div className="flex items-center">
        <img src={counselingimg} alt="Counseling" className="w-full object-contain max-w-250 mx-auto " />
       </div>
       {/* Right part form */}
      <form className="max-w-250 space-y-5"> 
      
      <Input
       label="Full Name *"
       name="fullName"
       value={formData.fullName}
       onChange={handleChange}
       error={errors.fullName}
       icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e3a8a" className="w-7 h-7"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 4-6 8-6s8 2 8 6" /></svg>}
      /> 
      
       <Input label="Email Address *"
       name="email"
       type="email"
       value={formData.email}
       onChange={handleChange}
       error={errors.email}
       icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e3a8a" className="w-7 h-7"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" fill="none" stroke="#ffffff" strokeWidth={2} strokeLinecap="butt" strokeLinejoin="miter" /></svg>}
       />
       <Input label="Phone Number *"
       name="phone"
       type="tel"
       value={formData.phone}
       onChange={handleChange}
       error={errors.phone}
       icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-blue-800"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C11.3 21 3 12.7 3 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" /></svg>}
       />

      <div>
      <div className="flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-800"><path d="M12 3L2 8l10 5 8-4v6h2V8L12 3z" /><path d="M6 12v3c0 2 3 4 6 4s6-2 6-4v-3l-6 3-6-3z" /><rect x="9" y="17" width="6" height="2" rx="1" /></svg>
      <label className="block mb-2 text-sm font-medium">Current Qualification</label>
      </div>
       <select  name="qualification" value={formData.qualification}  onChange={handleChange}  className="w-full border rounded-lg px-3 py-2 outline-none border-gray-500">
       <option>10th Pass</option>
       <option>12th Pass</option>
       <option>Graduate</option>
       <option>Post Graduate</option>
       <option>Other</option>
       </select>
      </div>

      <div>
        <div className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-800"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><path d="M9 15l2 2 4-4" /></svg>   
        <label className="block mb-2 text-sm font-medium">Area of Interest</label>
        </div>
                <select name="areaOfInterest" value={formData.areaOfInterest} onChange={handleChange}  className="w-full border rounded-lg px-3 py-2 outline-none border-gray-500">
                    <option>Engineering</option>
                    <option>Medical</option>
                    <option>Management</option>
                    <option>Government Jobs</option>
                    <option>Skill Development</option>
                    <option>Other</option>
                </select>
      </div>
     
      <div>
        <label className="block mb-1 text-sm font-medium">Preferred Counseling Mode</label>
        <div className="flex gap-4">
            <Radio
              label="Online"
              name="counselingMode"
              value="online"
              checked={formData.counselingMode === "online"} 
              onChange={handleChange}  
             />
            <Radio
             label="Offline"
             name="counselingMode"
             value="offline"
             checked={formData.counselingMode === "offline"} 
             onChange={handleChange}   
            />
        </div>
      </div>

        <Input label="Preferred Date & Time"
        name="preferredDateTime"
        value={formData.preferredDateTime} 
        onChange={handleChange}  
        type="datetime-local"
        />

        <div>
          <label className="block mb-2 text-sm font-medium">Message / Query</label>
          <textarea rows="3" value={formData.message} onChange={handleChange} name="message" className="w-full border rounded-lg px-3 py-2 outline-none border-gray-500 focus:ring-1 focus:ring-blue-500 resize-none"></textarea>
          {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
        </div>

        <button onClick={handleSubmit} className="bg-blueone text-white py-3 text-lg w-full font-bold rounded-4xl">
            {isSubmitting ? "Booking..." : "Book My Counseling Session"}</button>
      </form>
      </div>
     </div> 
      
      
    </section>
  );
}   

export default BookCounselling;