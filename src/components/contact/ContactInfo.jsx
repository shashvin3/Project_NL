import facebook from "../../assets/footer/facebook.png";
import instagram from "../../assets/footer/instagram.png";
import linkedin from "../../assets/footer/linkedin.png";
import location from "../../assets/footer/location.png";
import message from "../../assets/footer/message.png";
import Reveal from "../common/Reveal";

function ContactInfo() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-10">
      {/* left part */}
      <Reveal direction = "left">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold font-jakarta">Contact Information</h1>
        <p className="font-jakarta text-grayone">
          NavLakshya is an initiative of Streamcore Web Pvt Ltd, dedicated to
          empowering India’s future through structured career ecosystems.
        </p>
        {/* Email */}
        <div className="flex items-start gap-4 bg-[#edf2f9]/50 shadow-sm p-7">
          <div className="p-3 rounded-xl bg-blueone/10">
            <img src={message} alt="" className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold mb-1 font-jakarta"> Email Us</h3>
            <a href="#" className="font-jakarta text-grayone">
              info@navlakshya.in
            </a>
          </div>
        </div>
        {/* Call us */}
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
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>{" "}
          </div>
          <div>
            <h3 className="font-semibold mb-1 font-jakarta">Call Us</h3>
            <a href="#" className="font-jakarta text-grayone">
              +91-XXXXXXXXXX
            </a>
          </div>
        </div>
        {/* Address */}
        <div className="flex items-start gap-4 bg-[#edf2f9]/50 shadow-sm p-7">
          <div className="p-3 rounded-xl bg-blueone/10">
            <img src={location} alt="" className="w-5 h-5" />
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
            <a href="#" className="rounded-full flex items-center justify-center p-3 bg-grayone/10">
              <img src={linkedin} alt="" className="w-5 h-5" />
            </a>
            <a href="#" className="rounded-full flex items-center justify-center p-3 bg-grayone/10">
              <img src={facebook} alt="" className="w-5 h-5" />
            </a>
             <a href="#" className="rounded-full flex items-center justify-center p-3 bg-grayone/10">
              <img src={instagram} alt="" className="w-5 h-5" />
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
            within 24–48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="border border-gray-300 rounded-lg bg-[#FFFAFC] px-4 py-2 h-10 focus:outline-none focus:ring-2 focus:ring-blueone"
            />
          </div>

           <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="name@example.com"
              className="border border-gray-300 h-10 bg-[#FFFAFC] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blueone"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Subject</label>
          <input
            type="text"
            placeholder="What is this regarding?"
            className="border border-gray-300 h-10 bg-[#FFFAFC] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blueone"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Your Message</label>
          <textarea
            rows="5"
            placeholder="How can we help you today?"
            className="border border-gray-300 rounded-lg bg-[#FFFAFC] min-h-20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blueone"
          />
        </div>

        <button className="w-full bg-blueone hover:bg-blue-700 transition text-white py-3 rounded-lg flex items-center justify-center gap-2 font-medium">
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
    </section>
  );
}

export default ContactInfo;
