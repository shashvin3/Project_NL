import bluedot from "../assets/policies/bluedot.png";
import bluecircle from "../assets/policies/bluecircle.png";
import refundbanner from "../assets/policies/refundbanner.png";

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
          This Refund & Cancellation Policy outlines the terms under which
          payments made for NavLakshya programs, examinations, and services may
          be refunded or cancelled.
          <br /> By registering for any NavLakshya program, you agree to this
          policy.
        </p>
        </div>

          {/* General Policy */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3">
            General Policy
          </h2>
          <ul className="mb-4">
            <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 j-2 mt-2" />
              <span>
                All fees paid towards scholarship registration, examination
                fees, skill development programs, or counseling sessions are
                subject to this Refund Policy.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 j-2 mt-2" />
              <span>
                Refund eligibility depends on the type of service and timing of
                cancellation.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 j-2 mt-2" />
              <span>
                Processing time for eligible refunds is 7–15 working days.
              </span>
            </li>
          </ul>
        </div>

        {/*  Scholarship Registration & Examination Fees */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3">
            Scholarship Registration & Examination Fees
          </h2>
          <ul className="mb-1">
            <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 h-2 mt-2" />
              <span>
                Scholarship registration and examination fees are non-refundable
                once payment is successfully processed.
              </span>
            </li>
            <li className="flex items-start gap-2">
                <img src={bluedot} alt="" className="w-2 h-2 mt-1.5" />
                <span>No refund will be provided for:</span>
            </li>
          </ul>
           <ul className="my-1 pl-6">
                <li className="flex items-center gap-2">
                  <img
                    src={bluecircle}
                    alt="Refund points"
                    className="w-1.5 h-1.5"
                  />
                  <span className="text-sm">Absence in exam</span>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src={bluecircle}
                    alt="Refund points"
                    className="w-1.5 h-1.5"
                  />
                  <span className="text-sm">Failure to qualify</span>
                </li>
                <li className="flex items-start gap-2">
                  <img
                    src={bluecircle}
                    alt="Refund points"
                    className="w-1.5 h-1.5 mt-2"
                  />
                  <span className="text-sm">
                    Incorrect information submitted by candidate
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src={bluecircle}
                    alt="Refund points"
                    className="w-1.5 h-1.5"
                  />
                  <span className="text-sm">
                    Change of mind after registration
                  </span>
                </li>
              </ul>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">
            If an examination is cancelled by NavLakshya due to unavoidable
            circumstances, the organization may:
          </p>
          <ul className="mb-3">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>Reschedule the exam, OR</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>Provide refund at its discretion.</span>
            </li>
          </ul>
        </div>

        {/* Skill Development Program Fees */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3">
           Skill Development Program Fees
          </h3>
         <h3 className="font-xl font-jakarta font-bold mb-1">
         Cancellation Before Program Start:
         </h3>
          <ul className="mb-4">
          <li className="flex items-start gap-2">
          <img src={bluedot} alt="" className="w-2 h-2 mt-2" />
          <span>If cancellation request is made 48 hours before program commencement, partial refund may be considered after deducting administrative charges.</span>
          </li>
          </ul>
          <h3 className="font-xl font-jakarta font-bold mb-1">
           After Program Start:
           </h3>
          <ul className="mb2">
          <li className="flex items-center gap-2">
          <img src={bluedot} alt="" className="w-2 h-2" />
          <span>No refund will be issued once:</span>
          </li>
          </ul>
          <ul className="mt-1 mb-4 pl-6">
                <li className="flex items-center gap-2">
                  <img
                    src={bluecircle}
                    alt="Refund points"
                    className="w-1.5 h-1.5"
                  />
                  <span className="text-sm">Course materials are shared</span>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src={bluecircle}
                    alt="Refund points"
                    className="w-1.5 h-1.5"
                  />
                  <span className="text-sm">Classes have commenced</span>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src={bluecircle}
                    alt="Refund points"
                    className="w-1.5 h-1.5"
                  />
                  <span className="text-sm">
                    Access credentials are provided
                  </span>
                </li>
            </ul>
        </div>

        {/* Career Counseling Sessions */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3">
           Career Counseling Sessions
          </h3>
          <ul className="mb-3">
            <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 h-2 mt-2" />
              <span>
                Counseling session fees are refundable only if cancellation is made 24 hours prior to scheduled appointment.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 h-2 mt-2" />
              <span>
               No refund for missed appointments without prior notice.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 h-2 mt-2" />
              <span>
               Rescheduling may be allowed once, subject to availability.
              </span>
            </li>
          </ul>
        </div>

        {/*  Placement & Internship Services */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3">
             Placement & Internship Services
          </h3>
          <ul className="mb-3">
            <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 h-2 mt-2" />
              <span>
                Registration or service charges (if applicable) for placement assistance are non-refundable.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 h-2 mt-2"/>
              <span>
                NavLakshya does not guarantee job placement; therefore, refunds will not be issued based on employment outcomes.
              </span>
            </li>
            </ul>
        </div>

        {/* Duplicate Payments*/}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3">
            Duplicate Payments
          </h3>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-1">
           In case of accidental duplicate payment:
          </p>
          <ul className="mb-3">
            <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 h-2 mt-2" />
              <span>
                The excess amount will be refunded after verification.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 h-2 mt-2" />
              <span>
                Refund processing may take 7–10 working days.
              </span>
            </li>
          </ul>
        </div>

        {/*Refund Process*/}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">
            Refund Process
          </h3>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-1">
            To request a refund:
          </p>
          <ul className="mb-1">
            <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 h-2 mt-2" />
              <span>Send a written request to: info@navlakshya.com</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>Mention:</span>
            </li>
          </ul>
          <ul className="my-1 pl-6">
                <li className="flex items-center gap-2">
                  <img
                    src={bluecircle}
                    alt="Refund points"
                    className="w-1.5 h-1.5"
                  />
                  <span className="text-sm">Full Name</span>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src={bluecircle}
                    alt="Refund points"
                    className="w-1.5 h-1.5"
                  />
                  <span className="text-sm">Registered Email ID</span>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src={bluecircle}
                    alt="Refund points"
                    className="w-1.5 h-1.5"
                  />
                  <span className="text-sm">Transaction ID </span>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src={bluecircle}
                    alt="Refund points"
                    className="w-1.5 h-1.5"
                  />
                  <span className="text-sm">
                   Program Name
                  </span>
                </li>
                 <li className="flex items-center gap-2">
                  <img
                    src={bluecircle}
                    alt="Refund points"
                    className="w-1.5 h-1.5"
                  />
                  <span className="text-sm">
                    Reason for refund request
                  </span>
                </li>
              </ul>
       <p className=" text-grayone lg:text-lg leading-relaxed mb-1">
        Refunds (if approved) will be credited to the original payment method.
       </p>
        </div>

        {/*Non-Refundable Situations */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3">
            Non-Refundable Situations
          </h3>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-1">Refunds will not be provided in cases of:</p>
          <ul className="mb-1">
            <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 h-2 mt-2" />
              <span>
                Incorrect personal details submitted by applicant
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>
                Disqualification due to misconduct
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span>
                Violation of Terms & Conditions
              </span>
            </li>
             <li className="flex items-start gap-2">
              <img src={bluedot} alt="" className="w-2 h-2 mt-2" />
              <span>
                Technical issues from user side (internet/device problems)
              </span>
            </li>
          </ul>
        </div>

        {/* Modification of Policy */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3">
           Modification of Policy
          </h3>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-1">
           NavLakshya reserves the right to modify this Refund & Cancellation Policy at any time without prior notice. Updated policies will be posted on the website.
          </p>
        </div>

        {/* Contact Us */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3">
            Contact Information
          </h3>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-2">
            For any refund-related queries:
          </p>
          <p className=" text-grayone lg:text-lg leading-relaxed mb-3">
            NavLakshya <br />
            An initiative of Streamcore Web Pvt Ltd
          </p>
                    
            <ul className="space-y-3">
              <li className="flex gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-blueone"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>      
                <span className="text-sm text-grayone font-jakarta">
                  info@navlakshya.com
                </span>
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
                  Streamcore Web Pvt Ltd Office,India
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
          {["General Policy","Scholarship Registration & Examination Fees","Skill Development Program Fees","Career Counseling Sessions","Placement & Internship Services","Duplicate Payments","Refund Process","Non-Refundable Situations","Modification of Policy","Contact Information"].map((items) =>(
          <li key={items} className="text-sm text-grayone hover:text-blueone transition-colors duration-200 flex items-start gap-2 group">
          <span className="w-1 h-1 mt-2 rounded-full bg-grayone/40 group-hover:bg-blueone transition-colors shrink-0"></span>
          {items}
          </li>
          ))}
          </ul>
         </div>
        </div>

        </div>
      </div>
    </section>
  );
}

export default RefundPolicy;
