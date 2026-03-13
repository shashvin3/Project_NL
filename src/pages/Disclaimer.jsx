import message from "../assets/footer/message.png";
import phone from "../assets/footer/phone.png";
import bluedot from "../assets/policies/bluedot.png";

function Disclaimer() {
  return (
    <section className="bg-[#fffafc]">
      <div className="pt-10 px-25">
        <h1 className="text-3xl font-jakarta font-bold mb-5">
          Disclaimer
        </h1>

        {/* Use of Information */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">
            Use of Information
          </h3>
          <p className=" text-grayone leading-relaxed mb-1">
            The data and information published on this website (www.navlakshya.in) are for general reference and awareness purposes only.
          </p>
          <p className=" text-grayone leading-[1.3] mb-1">
           Detailed and official information regarding any scholarship, fellowship, government scheme, or external opportunity should always be verified through the official website of the respective scholarship provider or authority.       
          </p>
          <p className=" text-grayone leading-relaxed mb-3">
          NavLakshya shall not be held responsible for any decision or action taken by users based solely on the information available on this website.
          </p>
        </div >

        {/* Validity of Information */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">
           Validity of Information
          </h3>
          <p className=" text-grayone leading-relaxed mb-1">
           The validity of scholarship listings, articles, deadlines, eligibility criteria, and related information may change due to:
          </p>
          <ul className="mb-3">
            {["Passage of time","Amendments in laws or regulations","Updates by scholarship providers","Changes in official notifications",
            "Technical or administrative issues"].map((item) => (
              <li className="flex items-center gap-2 pl-8">
                <img src={bluedot} alt="" className="w-2 h-2" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className=" text-grayone leading-relaxed mb-1">
           Users are strongly advised to verify all information through official sources before applying or taking action.
          </p>
           <p className=" text-grayone leading-relaxed mb-1">
           External links provided on this website for user convenience may become inaccessible due to technical issues on third-party websites. NavLakshya is not responsible for the maintenance, accuracy, or availability of such external links.          </p>
           <p className=" text-grayone leading-relaxed mb-3">
           We welcome feedback regarding outdated, incorrect, or technically malfunctioning content.
          </p>
        </div>

        {/*  Accuracy of Information */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">
             Accuracy of Information
          </h3>
          <p className=" text-grayone leading-relaxed mb-3">
           NavLakshya does not guarantee the absolute accuracy, completeness, or timeliness of the information published on this website.
          </p>
          <p className=" text-grayone leading-relaxed mb-1">
           The content available on the platform is intended to:
          </p>
          <ul className="mb-3">
            {[ "Spread awareness about scholarships and career opportunities","Provide general guidance to students",
               "Compile publicly available information"].map((item) => (
              <li className="flex items-center gap-2 pl-5">
                <img src={bluedot} alt="" className="w-2 h-2" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className=" text-grayone leading-relaxed mb-3">
          While reasonable efforts are made to ensure accuracy, NavLakshya does not guarantee that scholarship listings, deadlines, eligibility details, or related articles are free from errors.
          <br />We rely on users to update or correct their personal information wherever required.
          </p>
         </div>

        {/*  Source of Information */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">
           Source of Information
          </h3>
          <p className=" text-grayone leading-relaxed mb-1">
           NavLakshya compiles scholarship and fellowship details from
          </p>
           <ul className="mb-3">
            {["Government websites","Publicly available official notifications","Private scholarship providers",
            "Historical public domain information"].map((item) => (
              <li className="flex items-center gap-2">
                <img src={bluedot} alt="" className="w-2 h-2" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className=" text-grayone leading-relaxed mb-3">
           Where applicable, links to official sources are provided for verification.
           </p>
        </div>

           {/* Non-Affiliation */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">
             Non-Affiliation
          </h3>
           <p className=" text-grayone leading-relaxed mb-1">
            NavLakshya is an independent education and career empowerment initiative.         
           </p>
          <p className=" text-grayone leading-[1.3] mb-1">
            We are not affiliated with any government body, ministry, or public authority unless explicitly stated.
          </p>
          <p className=" text-grayone leading-relaxed mb-3">
            When featuring government scholarships or schemes, the information is sourced from publicly accessible government websites or official notifications.
          </p>
        </div>

          {/* Partnership with Scholarship Providers*/}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">
           Partnership with Scholarship Providers
          </h3>
          <p className=" text-grayone leading-relaxed mb-1">
          NavLakshya serves as a platform to inform and guide students about various scholarship opportunities.
          </p>
          <p className=" text-grayone leading-relaxed mb-1">
          Listing a scholarship on this website does <span className="font-bold">not necessarily imply a partnership or endorsement</span>of the scholarship provider.
          </p>
          <p className=" text-grayone leading-relaxed mb-3">
          In cases where NavLakshya has an official partnership, alliance, or engagement with a specific scholarship provider, such association will be explicitly mentioned.
          </p>
        </div>


        {/*Limitation of Liability*/}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-3">
           Limitation of Liability
          </h3>
          <p className=" text-grayone leading-relaxed mb-3">
           Use of this website and reliance on its information is at your own risk.
          </p>
          <p className=" text-grayone leading-relaxed mb-1">
           NavLakshya, including its:
          </p>
           <ul className="mb-1">
            {["Directors","Employees","Consultants","Affiliates","Partners","Advertisers","Operational",
            "associates"].map((item) => (
              <li className="flex items-center gap-2 pl-5">
                <img src={bluedot} alt="" className="w-2 h-2" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
            </ul>
            <p className=" text-grayone leading-relaxed mb-1">
            shall not be liable for:
          </p>
           <ul className="mb-3">
            {["Any loss of opportunity","Financial loss","Academic consequences","Career-related damages","Direct or indirect damages",
            "Incidental or consequential losses"].map((item) => (
              <li className="flex items-center gap-2 pl-5">
                <img src={bluedot} alt="" className="w-2 h-2" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
            </ul>
            <p className=" text-grayone leading-relaxed mb-2">
           arising from the use of this website or reliance on its content.
          </p>
          <p className=" text-grayone leading-relaxed mb-3">
          NavLakshya reserves the right to modify, update, suspend, or discontinue any content, feature, or service without prior notice.
          </p>
        </div>

         {/* Consent */}
        <div>
          <h3 className="font-jakarta font-bold text-2xl text-[#0c121a] mb-1">
            Consent
          </h3>
          <p className=" text-grayone leading-relaxed mb-3">
         By using this website, you acknowledge that you have read, understood, and agreed to this Disclaimer.
          </p>
          </div>


      </div>
    </section>
  );
}
export default Disclaimer;

