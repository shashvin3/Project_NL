import Input from "../components/common/Input";
import Radio from "../components/common/Radio";
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
    <section className="bg-blueone pt-20 pb-15 px-5">        
      <h1 className="text-3xl lg:text-4xl text-center font-bold mb-5 text-[#ffc107] ">Book Your Free Career Counseling Session</h1>
      <p className="text-sm lg:text-lg mb-6 text-white text-center px-5 mx-auto max-w-150">Get personalized guidance from our experts to choose the right career path, scholarships, and skill development programs.</p>
      
      <form className="max-w-200 mx-auto bg-white p-6 rounded-2xl shadow-sm space-y-5">
      <Input
       label="Full Name *"
       name="fullName"
       value={formData.fullName}
       onChange={handleChange}
       error={errors.fullName}
      /> 
       <Input label="Email Address *"
       name="email"
       type="email"
       value={formData.email}
       onChange={handleChange}
        error={errors.email}
       />
       <Input label="Phone Number *"
       name="phone"
       type="tel"
       value={formData.phone}
       onChange={handleChange}
       error={errors.phone}
       />

      <div>
      <label className="block mb-2 text-sm font-medium">Current Qualification</label>
       <select  name="qualification" value={formData.qualification}  onChange={handleChange}  className="w-full border rounded-lg px-3 py-2 outline-none border-gray-500">
       <option>10th Pass</option>
       <option>12th Pass</option>
       <option>Graduate</option>
       <option>Post Graduate</option>
       <option>Other</option>
       </select>
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium">Area of Interest</label>
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

        <button onClick={handleSubmit} className="bg-[#ffc107] py-3 text-lg w-full font-bold rounded-4xl">
            {isSubmitting ? "Booking..." : "Book My Counseling Session"}</button>

         <div className="text-center space-x-2 text-[#666]">
                 100% Free Guidance | Expert Mentors |  Personalized Roadmap
         </div>
      </form>
    </section>
  );
}   

export default BookCounselling;