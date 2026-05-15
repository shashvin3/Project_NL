import bluedot from "../assets/policies/bluedot.png";
import bluecircle from "../assets/policies/bluecircle.png";
import refundbanner from "../assets/policies/refundbanner.png";
import { Link } from "react-router-dom";


function RefundPolicy() {
  return (
    <section className="bg-[#fffafc]">
      <img src={refundbanner} alt="Refund Policy" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-jakarta font-bold mb-8">
          Refund & Cancellation Policy
        </h1>

         <div className="flex gap-10 items-start">
          <div className="flex-1 space-y-10">
       <div className="bg-blueone/5 border border-blueone/20 rounded-2xl p-5">
        <p className="font-medium text-sm font-jakarta text-grayone leading-relaxed mb-3">
          NavLakshya strives to deliver high-quality educational services. This policy outlines the terms under which refunds may be requested and processed. Please read it carefully before making any purchase.
        </p>
        </div>

          {/* Cancellation Policy */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3">
            Cancellation Policy
          </h2>
          <ul className="mb-4">
            <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 j-2 mt-2" />
              <span>
              Any product, service, or program purchased from NavLakshya may be cancelled subject to the specific terms mentioned at the time of transaction.
              </span>
            </li>
          </ul>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">
            All cancellation requests must be submitted online through official communication channels only. Verbal requests or informal communication will not be accepted.
          </p>
        </div>

        {/*  Refund Request */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3">
            Refund Request
          </h2>
          <ul className="mb-1">
            <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 h-2 mt-2" />
              <span>
                A refund request must be submitted within 5 days from the date of the transaction
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>Refund eligibility depends on the specific terms mentioned with the product or program at the time of purchase</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>Certain services such as application processing fees, examination fees, and digital products may be non-refundable</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>Users are advised to carefully read the refund eligibility criteria before making any purchase</span>
            </li>
          </ul>
        </div>

        {/*  Refund Communication */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3">
            Refund Communication
          </h3>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">
            All refund requests must be submitted in writing via email to support@navlakshya.in with your Full Name, Registered Mobile Number, Transaction ID, Date of Transaction, and Reason for Refund. Incomplete requests may result in delays.
          </p>
          <ul>
            <li className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-blueone"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>      
              <span className="text-sm text-grayone font-jakarta"> support@navlakshya.in</span>
            </li>
            </ul>
        </div>

        {/*   Refund Processing Period*/}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3">
              Refund Processing Period
          </h3>
         <p className=" text-grayone lg:text-lg leading-relaxed mb-3">
         Once approved, refunds will be processed within 7 to 14 working days. NavLakshya is not responsible for delays caused by third-party payment processors or banking institutions.
          </p>
        </div>

        {/* Non-Refundable Services*/}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3">
             Non-Refundable Services
          </h3>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-1">
           Unless otherwise stated at the time of purchase, the following are generally not eligible for refunds: Scholarship Registration Fees, Examination Fees, Application Processing Charges, Career Counseling Sessions once conducted, Skill Development Course Fees after access is granted, Digital Downloads, and Placement Facilitation Charges.
          </p>
        </div>

        {/* Policy Updates */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3">
            Policy Updates
          </h3>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-2">
            NavLakshya may modify this Refund Policy at any time without prior notice. We encourage users to review this policy before making any purchase.
          </p>
                    
            <ul className="space-y-3">
              <li className="flex gap-2">
              <p className="text-blueone font-bold">Organization:</p>
              <span className="text-sm text-grayone font-jakarta"> NavLakshya</span>
              </li>
                <li className="flex gap-2">
              <p className="text-blueone font-bold">Refund Email:</p>
              <span className="text-sm text-grayone font-jakarta">support@navlakshya.in</span>
              </li>
                <li className="flex gap-2">
              <p className="text-blueone font-bold">General Email:</p>
              <span className="text-sm text-grayone font-jakarta">info@navlakshya.in</span>
              </li>
              <li className="flex gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-blueone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>          
                <span className="text-sm text-grayone font-jakarta">
                  +91-9415337435
                </span>
              </li>
              <li className="flex gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-blueone"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                <span className="text-sm text-grayone font-jakarta">
                   Office No. 279, Panchsheel Greens 2, Greater Noida West, Uttar Pradesh — 201318, India 
                </span>
              </li>
            </ul>
        </div>

         </div>

        <div className="hidden lg:block w-64 shrink-0">
         <div className="sticky top-24 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-bold font-jakarta uppercase tracking-widest text-grayone mb-4">
          On This Page</h3>
          <ul className="space-y-2">
          {["Cancellation Policy","Refund Request","Refund Communication","Refund Processing Period","Non-Refundable Services","Policy Updates"].map((items) =>(
          <li key={items} className="text-sm text-grayone hover:text-blueone transition-colors duration-200 flex items-start gap-2 group">
          <span className="w-1 h-1 mt-2 rounded-full bg-grayone/40 group-hover:bg-blueone transition-colors shrink-0"></span>
          {items}
          </li>
          ))}
          </ul>
         </div>
        </div>
        </div>

         <div className="text-center mt-10">
        <Link to="/contact" className='inline-flex items-center justify-center rounded-full text-sm font-medium py-3 px-5 lg:px-4 bg-blueone text-white hover:bg-blueone/80 transition-all duration-300'>Contact Us Now</Link>
        </div>
      </div>
    </section>
  );
}

export default RefundPolicy;
