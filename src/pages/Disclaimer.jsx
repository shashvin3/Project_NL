import bluedot from "../assets/policies/bluedot.png";

function Disclaimer() {
  return (
    <section className="bg-[#fffafc]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-jakarta font-bold mb-5">
          Disclaimer
        </h1>
       <div className="flex gap-10 items-start">
        <div className="flex-1 space-y-10">
        {/* Use of Information */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3">
            Use of Information
          </h3>
          <p className=" text-grayone  leading-relaxed mb-1">
            The data and information published on www.navlakshya.in are provided for general reference and awareness purposes only. Detailed and official information regarding any scholarship, fellowship, or external opportunity should always be verified directly through the official website of the relevant provider or authority.
          </p>
        </div >

        {/* Validity of Information */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3">
           Validity of Information
          </h3>
          <p className=" text-grayone  leading-relaxed mb-1">
          The validity of scholarship listings, articles, deadlines, and eligibility criteria may change due to passage of time, amendments in laws or regulations, updates by scholarship providers, or changes in official notifications. Users are strongly advised to verify all information through official sources before taking any action.
          </p>
        </div>

        {/*  Accuracy of Information */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3">
             Accuracy of Information
          </h3>
          <p className=" text-grayone  leading-relaxed mb-3">
          NavLakshya does not guarantee the absolute accuracy, completeness, or timeliness of information published on this website. While reasonable efforts are made to ensure accuracy, NavLakshya does not guarantee that scholarship listings, deadlines, or eligibility details are free from errors at any given time.
          </p>
         </div>

           {/* Non-Affiliation */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3">
             Non-Affiliation
          </h3>
           <p className=" text-grayone  leading-relaxed mb-1">
          NavLakshya is an independent education and career empowerment initiative. We are not affiliated with any government body, ministry, or public authority unless explicitly stated.
          </p>
        </div>

        {/* Limitation of Liability*/}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-3">
           Limitation of Liability
          </h3>
          <p className=" text-grayone  leading-relaxed mb-3">
          Use of this website and reliance on its information is entirely at your own risk. NavLakshya, including its directors, employees, consultants, affiliates, and partners, shall not be liable for any loss of opportunity, financial loss, academic consequences, career-related damages, or direct, indirect, incidental, or consequential losses arising from use of this website.
          </p>
        </div>

         {/* Consent */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">
            Consent
          </h3>
          <p className=" text-grayone  leading-relaxed mb-3">
          By using this website you acknowledge that you have read, understood, and agreed to this Disclaimer in its entirety. Continued use following any updates constitutes your acceptance of the revised terms.
          </p>
        </div> 

        {/* Our Commitment */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="font-jakarta font-bold text-xl md:text-2xl text-[#0c121a] mb-1">
            Our Commitment
          </h3>
          <p className=" text-grayone  leading-relaxed mb-3">
          NavLakshya is built to guide students toward better decisions, better opportunities, and better futures. Every policy, term, and disclaimer on this page exists to protect both our users and the integrity of the services we provide. We are grateful for your trust and committed to earning it every day.
          </p>
        </div> 
       </div>

        <div className="hidden lg:block w-64 shrink-0">
         <div className="sticky top-24 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-bold font-jakarta uppercase tracking-widest text-grayone mb-4">
          On This Page</h3>
          <ul className="space-y-2">
          {["Use of Information","Validity of Information","Accuracy of Information","Non-Affiliation","Limitation of Liability","Consent","Our Commitment"].map((items) =>(
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
export default Disclaimer;

