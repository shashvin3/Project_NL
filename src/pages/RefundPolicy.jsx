import location from "../assets/footer/location.png";
import message from "../assets/footer/message.png";
import phone from "../assets/footer/phone.png";
import bluedot from "../assets/policies/bluedot.png";
import bluecircle from "../assets/policies/bluecircle.png";
import refundbanner from "../assets/policies/refundbanner.png";

function RefundPolicy() {
  return (
    <section className="bg-[#fffafc]">
      <img src={refundbanner} alt="Refund Policy" />
      <div className="py-10 px-25">
        <h1 className="text-3xl font-jakarta font-bold mb-3">
          Refund & Cancellation Policy
        </h1>
        <p className="font-medium text-sm font-jakarta text-grayone leading-relaxed mb-4">
          This Refund & Cancellation Policy outlines the terms under which
          payments made for NavLakshya programs, examinations, and services may
          be refunded or cancelled.
          <br /> By registering for any NavLakshya program, you agree to this
          policy.
        </p>

        <div>
          <h2 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">
            General Policy
          </h2>
          <ul className="mb-4">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
                All fees paid towards scholarship registration, examination
                fees, skill development programs, or counseling sessions are
                subject to this Refund Policy.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
                Refund eligibility depends on the type of service and timing of
                cancellation.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
                Processing time for eligible refunds is 7–15 working days.
              </span>
            </li>
          </ul>
        </div>

        {/*  Scholarship Registration & Examination Fees */}
        <div>
          <h2 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">
            Scholarship Registration & Examination Fees
          </h2>
          <ul className="mb-1">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
                Scholarship registration and examination fees are non-refundable
                once payment is successfully processed.
              </span>
            </li>
            <li className="flex items-center gap-2">
                <img src={bluedot} alt="" className="w-2 h-2" />
                <span className="text-sm">No refund will be provided for:</span>
            </li>
          </ul>
           <ul className="my-1 pl-6">
                <li className="flex items-center gap-2">
                  <img
                    src={bluecircle}
                    alt="Refund points"
                    className="w-1 h-1"
                  />
                  <span className="text-xs">Absence in exam</span>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src={bluecircle}
                    alt="Refund points"
                    className="w-1 h-1"
                  />
                  <span className="text-xs">Failure to qualify</span>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src={bluecircle}
                    alt="Refund points"
                    className="w-1 h-1"
                  />
                  <span className="text-xs">
                    Incorrect information submitted by candidate
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src={bluecircle}
                    alt="Refund points"
                    className="w-1 h-1"
                  />
                  <span className="text-xs">
                    Change of mind after registration
                  </span>
                </li>
              </ul>
          <p className=" text-grayone leading-relaxed mb-3">
            If an examination is cancelled by NavLakshya due to unavoidable
            circumstances, the organization may:
          </p>
          <ul className="mb-3">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Reschedule the exam, OR</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Provide refund at its discretion.</span>
            </li>
          </ul>
        </div>

        {/* Skill Development Program Fees */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">
           Skill Development Program Fees
          </h3>
         <h3 className="font-xl font-jakarta font-bold mb-1">
         Cancellation Before Program Start:
         </h3>
          <ul className="mb-4">
          <li className="flex items-center gap-2">
          <img src={bluedot} alt="" className="w-2 h-2" />
          <span className="text-sm">If cancellation request is made 48 hours before program commencement, partial refund may be considered after deducting administrative charges.</span>
          </li>
          </ul>
          <h3 className="font-xl font-jakarta font-bold mb-1">
           After Program Start:
           </h3>
          <ul className="mb2">
          <li className="flex items-center gap-2">
          <img src={bluedot} alt="" className="w-2 h-2" />
          <span className="text-sm">No refund will be issued once:</span>
          </li>
          </ul>
          <ul className="mt-1 mb-4 pl-6">
                <li className="flex items-center gap-2">
                  <img
                    src={bluecircle}
                    alt="Refund points"
                    className="w-1 h-1"
                  />
                  <span className="text-xs">Course materials are shared</span>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src={bluecircle}
                    alt="Refund points"
                    className="w-1 h-1"
                  />
                  <span className="text-xs">Classes have commenced</span>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src={bluecircle}
                    alt="Refund points"
                    className="w-1 h-1"
                  />
                  <span className="text-xs">
                    Access credentials are provided
                  </span>
                </li>
            </ul>
        </div>

        {/* Career Counseling Sessions */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">
           Career Counseling Sessions
          </h3>
          <ul className="mb-3">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
                Counseling session fees are refundable only if cancellation is made 24 hours prior to scheduled appointment.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
               No refund for missed appointments without prior notice.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
               Rescheduling may be allowed once, subject to availability.
              </span>
            </li>
          </ul>
        </div>

        {/*  Placement & Internship Services */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">
             Placement & Internship Services
          </h3>
          <ul className="mb-3">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
                Registration or service charges (if applicable) for placement assistance are non-refundable.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
                NavLakshya does not guarantee job placement; therefore, refunds will not be issued based on employment outcomes.
              </span>
            </li>
            </ul>
        </div>

        {/* Duplicate Payments*/}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">
            Duplicate Payments
          </h3>
          <p className=" text-grayone leading-relaxed mb-1">
           In case of accidental duplicate payment:
          </p>
          <ul className="mb-3">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
                The excess amount will be refunded after verification.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
                Refund processing may take 7–10 working days.
              </span>
            </li>
          </ul>
        </div>

        {/*Refund Process*/}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-1">
            Refund Process
          </h3>
          <p className=" text-grayone leading-relaxed mb-1">
            To request a refund:
          </p>
          <ul className="mb-1">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Send a written request to: info@navlakshya.in</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">Mention:</span>
            </li>
          </ul>
          <ul className="my-1 pl-6">
                <li className="flex items-center gap-2">
                  <img
                    src={bluecircle}
                    alt="Refund points"
                    className="w-1 h-1"
                  />
                  <span className="text-xs">Full Name</span>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src={bluecircle}
                    alt="Refund points"
                    className="w-1 h-1"
                  />
                  <span className="text-xs">Registered Email ID</span>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src={bluecircle}
                    alt="Refund points"
                    className="w-1 h-1"
                  />
                  <span className="text-xs">Transaction ID </span>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src={bluecircle}
                    alt="Refund points"
                    className="w-1 h-1"
                  />
                  <span className="text-xs">
                   Program Name
                  </span>
                </li>
                 <li className="flex items-center gap-2">
                  <img
                    src={bluecircle}
                    alt="Refund points"
                    className="w-1 h-1"
                  />
                  <span className="text-xs">
                    Reason for refund request
                  </span>
                </li>
              </ul>
       <p className=" text-grayone leading-relaxed mb-1">
        Refunds (if approved) will be credited to the original payment method.
       </p>
        </div>

        {/*Non-Refundable Situations */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">
            Non-Refundable Situations
          </h3>
          <p className=" text-grayone leading-relaxed mb-1">Refunds will not be provided in cases of:</p>
          <ul className="mb-1">
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
                Incorrect personal details submitted by applicant
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
                Disqualification due to misconduct
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
                Violation of Terms & Conditions
              </span>
            </li>
             <li className="flex items-center gap-2">
              <img src={bluedot} alt="" className="w-2 h-2" />
              <span className="text-sm">
                Technical issues from user side (internet/device problems)
              </span>
            </li>
          </ul>
        </div>

        {/* Modification of Policy */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">
           Modification of Policy
          </h3>
          <p className=" text-grayone leading-relaxed mb-1">
           NavLakshya reserves the right to modify this Refund & Cancellation Policy at any time without prior notice. Updated policies will be posted on the website.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">
            Contact Information
          </h3>
          <p className=" text-grayone leading-relaxed mb-2">
            For any refund-related queries:
          </p>
          <p className=" text-grayone leading-relaxed mb-3">
            NavLakshya <br />
            An initiative of Streamcore Web Pvt Ltd
          </p>
                    
            <ul className="space-y-3">
              <li className="flex gap-2">
                <img src={message} alt="" className="w-5 h-5" />
                <span className="text-sm text-grayone font-jakarta">
                  info@navlakshya.in
                </span>
              </li>
              <li className="flex gap-2">
                <img src={phone} alt="" className="w-5 h-5" />
                <span className="text-sm text-grayone font-jakarta">
                  +91-XXXXXXXXXX
                </span>
              </li>
              <li className="flex gap-2">
                <img src={location} alt="" className="w-5 h-5" />
                <span className="text-sm text-grayone font-jakarta">
                  Streamcore Web Pvt Ltd Office,India
                </span>
              </li>
            </ul>
        </div>
      </div>
    </section>
  );
}

export default RefundPolicy;
