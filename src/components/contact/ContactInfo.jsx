import Reveal from "../common/Reveal";
import {useState} from 'react';

function ContactInfo() {
  const [formData, setFormData] = useState({name:"",
    email:"",
    subject:"",
    message:"",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);  

  const validate = () =>{
    const newErrors = {};
    if (!formData.name.trim()){
      newErrors.name = "Full Name is required";
    }
    if(!formData.email.trim()){
      newErrors.email = "Email address is required"
    }else if(!/\S+@\S+\.\S+/.test(formData.email)){
      newErrors.email = "Email address is invalid"
    }
    if(!formData.subject.trim()){
      newErrors.subject = "Subject is required"
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0){
      setErrors(validationErrors);
      return;
    }
    console.log("Form Submitted: ", formData);
    setSubmitted(true);
    setFormData({name:"", email:"", subject:"", message:""});
    setErrors({});
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 ">
         {/* left part */}
      <Reveal direction = "left">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold font-jakarta">Contact Information</h2>
        <p className="font-jakarta text-grayone">
          NavLakshya is an initiative of Streamcore Web Pvt Ltd, dedicated to
          empowering India’s future through structured career ecosystems.
        </p>
        {/* Email */}
        <div className="flex items-start gap-4 bg-[#edf2f9]/50 shadow-sm p-7">
          <div className="p-3 rounded-xl bg-blueone/10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-blueone"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>      
          </div>
          <div>
            <h3 className="font-semibold mb-1 font-jakarta"> Email Us</h3>
            <a href="#" className="font-jakarta text-grayone">
              info@navlakshya.com
            </a>
          </div>
        </div>
        {/* Call us */}
        <div className="flex items-start gap-4 bg-[#edf2f9]/50 shadow-sm p-7">
          <div className="p-3 rounded-xl bg-blueone/10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-blueone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>          
          </div>
          <div>
            <h3 className="font-semibold mb-1 font-jakarta">Call Us</h3>
            <a href="#" className="font-jakarta text-grayone">
              +91-9415337435
            </a>
          </div>
        </div>
        {/* Address */}
        <div className="flex items-start gap-4 bg-[#edf2f9]/50 shadow-sm p-7">
          <div className="p-3 rounded-xl bg-blueone/10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-blueone"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
          </div>
          <div>
            <h3 className="font-semibold mb-1 font-jakarta">Office Address</h3>
            <p className="font-jakarta text-grayone">
              Streamcore Web Pvt Ltd Registered Office, India
            </p>
          </div>
        </div>
        {/* Working hours */}
        <div className="flex items-start gap-4 bg-[#edf2f9]/50 shadow-sm p-7">
          <div className="p-3 rounded-xl bg-blueone/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-blue-600 transition-colors duration-300"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold mb-1 font-jakarta">Working Hours</h3>
            <p className="font-jakarta text-grayone">
              Monday – Saturday 10:00 AM – 6:00 PM
            </p>
          </div>
        </div>
        <div>
          <span className="uppercase font-semibold text-xs tracking-widest mb-4 font-jakarta text-grayone">
            Follow Our Journey
          </span>
          <div className="flex gap-7 pt-4">
            <a href="https://www.linkedin.com/company/navlakshya" target="_blank" rel="noopener noreferrer" className="rounded-full flex items-center justify-center p-3 bg-grayone/10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={0} role="img" className="h-5 w-5 text-grayone relative z-10"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            <a href="#" className="rounded-full flex items-center justify-center p-3 bg-grayone/10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={0} role="img" className="h-5 w-5 text-grayone relative z-10"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" /></svg>
            </a>
             <a href="https://www.instagram.com/navlakshya.aim/" target="_blank" rel="noopener noreferrer" className="rounded-full flex items-center justify-center p-3 bg-grayone/10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={0} role="img" className="h-5 w-5 text-grayone relative z-10"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" /></svg>          
            </a>
            
          </div>
        </div>
      </div>
      </Reveal>
      {/* right part  */}
      <Reveal direction = "right">
      <div className="bg-white border border-grayone/20 shadow-xl rounded-xl p-8 max-w-3xl w-full space-y-6">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">
            Send us a Message
          </h3>
          <p className="text-sm text-grayone mt-2">
            Fill out the form below and our career experts will reach out to you
            within 24-48 hours.
          </p>
        </div>

        {submitted && (
              <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg p-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <p className="text-sm text-green-700 font-medium">
                  Your message has been sent! We'll get back to you within 24-48 hours.
                </p>
              </div>
            )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`border rounded-lg bg-blueone/3 px-4 py-2 h-10 focus:outline-none focus:ring-2 focus:ring-blueone ${errors.name?"border-red-500 focus:ring-red-400": "border-gray-300 focus:ring-blueone"}`}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>

           <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className={`border h-10 bg-blueone/3 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blueone ${errors.email?"border-red-500 focus:ring-red-400": "border-gray-300 focus:ring-blueone"}`}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What is this regarding?"
            className={`border border-gray-300 h-10 bg-blueone/3 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blueone ${errors.subject?"border-red-500 focus:ring-red-400": "border-gray-300 focus:ring-blueone"}`}
          />
        {errors.subject && <p className="text-xs text-red-500">{errors.subject}</p>}
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Your Message</label>
          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you today?"
            className={`border rounded-lg bg-blueone/3 min-h-20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blueone ${errors.message?"border-red-500 focus:ring-red-400": "border-gray-300 focus:ring-blueone"}`}
          />
          {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
        </div>

        <button 
        onClick={handleSubmit}
        className="w-full bg-blueone hover:bg-blueone/80 transition text-white py-3 rounded-lg flex items-center justify-center gap-2 font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" />
          </svg>
          Send Message
        </button>

        <div className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-blueone mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9 12l2 2 4-4" />
          </svg>
          <p className="text-sm text-gray-600">
            By submitting this form, you agree to receive communications
            regarding our scholarship programs and career guidance services.
          </p>
        </div>
      </div>
      </Reveal>
      </div>
    </section>
  );
}

export default ContactInfo;
