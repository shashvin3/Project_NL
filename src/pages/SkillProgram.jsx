function SkillProgram() {
  const programs = [
    "Industry Specific Training built around what particular sectors are actively hiring for",
    "Internship Preparation Modules so your first professional experience reflects your actual capability",
    "Corporate Readiness Bootcamps that prepare you for the transition from student to professional",
    "Live Project Exposure giving you real work experience before your first job",
  ];

  const included = [
    "Industry Mentorship from practitioners who work in your field",
    "Internship Recommendations to verified partner organizations",
    "Placement Support through the NavLakshya placement network",
    "Real World Project Experience documented for your professional profile",
    "Skill Certification that demonstrates specific capability to employers",
  ];

  const faqs = [
    {
      q: "  What is skill development and why is it important for students?",
      a: "Skill development refers to the process of building specific, practical competencies that employers require — distinct from the academic knowledge a degree provides. It is important because most Indian graduates have a significant gap between what their degree taught them and what employers expect on day one. Closing that gap through focused skill training is the most direct path to employment.",
    },

    {
      q: "What skill development courses does NavLakshya offer?",
      a: "NavLakshya offers six industry-aligned skill development divisions: Mechanical, IT, Operations, HR, Marketing, and Sales. Each division includes corporate-oriented curriculum, real project experience, and placement support. Special corporate programs include Internship Preparation Modules, Corporate Readiness Bootcamps, and Live Project Exposure.",
    },

    {
      q: "How much do NavLakshya skill development courses cost?",
      a: "NavLakshya skill development courses cost between ₹8,000 and ₹15,000 depending on the division and course duration. Placement support is free for all enrolled students. A refund is available within 5 days of enrollment.",
    },

    {
      q: "Which skill development course is best for a fresh graduate?",
      a: "The best skill development course depends on your strengths, interests, and target career direction. Students with analytical ability and interest in business tend to do well in Data Analytics or Marketing. Students with interpersonal skills tend to do well in Sales or HR. Students with technical interest do well in IT or Mechanical. A Career Counseling session can help identify which track fits your specific profile before you enroll."
    },

    {
      q: "Do NavLakshya skill development courses include placement support?",
      a: " Yes. Placement support is included and is free for all enrolled students. This includes employer-student matching, corporate referral network access, resume writing and profile optimization, mock interview preparation, and internship and job assistance."
    },

    {
      q: " Are NavLakshya skill development courses available online?",
      a: " Please confirm with NavLakshya directly regarding the current format — online, offline, or hybrid — for each division. Contact us at info@navlakshya.in or call +91 9415337435 to ask about the format for your preferred division."
    },

    {
      q: "What certification do I receive after completing a NavLakshya skill development course?",
      a: "Students who complete a NavLakshya Skill Development course receive a Skill Certification that demonstrates specific professional capability to employers. The certification is supported by documented real-world project experience completed during the program."
    },
  ];

  return (
    <div className="pb-10">
      <div className="text-white bg-blueone py-4 space-y-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-jakarta font-bold text-center mt-2">
          Explore Our <br />
          <span className="text-yellowone"> Skill Development Programs</span>
        </h1>
        <p className="font-jakarta text-white/90 md:font-bold md:max-w-2xl px-7 text-center leading-relaxed tracking-wide mx-auto mb-7">
          Industry-aligned skill training programs designed to transform
          students into job-ready professionals.We focus on practical exposure,
          project-based learning, and corporate-oriented curriculum.
        </p>
      </div>

      <div className="container mx-auto px-4 py-10 space-y-12">
        <div className="text-center max-w-4xl mx-auto ">
          <p className="font-bold text-md md:text-lg font-jakarta text-blueone leading-relaxed my-2">
            ₹8,000 to ₹15,000
          </p>
          <p className="font-bold text-md md:text-lg font-jakarta text-grayone leading-relaxed mb-4">
            Depending on division and course duration
          </p>
        </div>

        <div className="bg-blueone/5 border border-blueone/20 rounded-2xl p-6 space-y-4">
          <p className="font-medium text-sm font-jakarta text-grayone leading-relaxed">
            Employers are not looking for students who have completed a course
            of study. They are looking for candidates who can do something
            specific on day one without a six month learning curve. That is the
            gap most graduates discover too late — that their education prepared
            them to understand a field, not to perform in one.
          </p>
          <p className="font-extrabold text-sm font-jakarta text-grayone leading-relaxed">
            The Skill Development Division at NavLakshya was built to close that
            gap. Industry aligned curriculum, project based learning, and
            corporate oriented training that reflects what the workplace
            actually requires.
          </p>
        </div>

        <div className="flex flex-col gap-3 py-10 px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold font-jakarta text-blueone mb-4">
              Choose your division
            </h2>
            <p className="font-extrabold text-lg font-jakarta text-grayone leading-relaxed">
              Six professional domains. Each one built for students who are
              serious about entering that industry properly prepared.{" "}
            </p>
          </div>
          {/* //Card 1 */}
          <div className="flex flex-col sm:flex-row bg-grayone/10 border border-[#262c3f]/40 rounded-2xl p-5 items-start sm:items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 text-grayone"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-xl sm:text-2xl mb-1.5 text-blue-800">
                Mechanical Division
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "CAD / CAM Fundamentals",
                  "Machine Design Basics",
                  "Industrial Tools & Applications",
                  "Production & Manufacturing Concepts",
                ].map((items) => (
                  <span className="bg-blue-100 border border-blue-300 rounded-md px-2.5 py-1 text-xs md:text-sm text-slate-800 font-medium">
                    {items}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* //Card 2 */}
          <div className="flex flex-col sm:flex-row bg-grayone/10 border border-[#262c3f]/40 rounded-2xl p-5 items-start sm:items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 text-grayone"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-xl sm:text-2xl mb-1.5 text-blue-800">
                IT Division
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Web Development",
                  "Programming Fundamentals",
                  "Data Analytics",
                  "Software Tools & Technologies",
                ].map((items) => (
                  <span className="bg-blue-100 border border-blue-300 rounded-md px-2.5 py-1 text-xs md:text-sm text-slate-800 font-medium">
                    {items}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* //Card 3 */}
          <div className="flex flex-col sm:flex-row bg-grayone/10 border border-[#262c3f]/40 rounded-2xl p-5 items-start sm:items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 text-grayone"
              >
                <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-bold text-xl sm:text-2xl mb-1.5 text-blue-800">
                Operations Division
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Supply Chain Management",
                  "Production Planning",
                  "Quality Control",
                  "Industrial Operations",
                ].map((items) => (
                  <span className="bg-blue-100 border border-blue-300 rounded-md px-2.5 py-1 text-xs md:text-sm text-slate-800 font-medium">
                    {items}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* //Card 4 */}
          <div className="flex flex-col sm:flex-row bg-grayone/10 border border-[#262c3f]/40 rounded-2xl p-5 items-start sm:items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 text-grayone"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-bold text-xl sm:text-2xl mb-1.5 text-blue-800">
                HR Division
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Talent Acquisition",
                  "HR Analytics",
                  "Corporate Communication",
                  "Employee Engagement Practices",
                ].map((items) => (
                  <span className="bg-blue-100 border border-blue-300 rounded-md px-2.5 py-1 text-xs md:text-sm text-slate-800 font-medium">
                    {items}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* //Card 5 */}
          <div className="flex flex-col sm:flex-row bg-grayone/10 border border-[#262c3f]/40 rounded-2xl p-5 items-start sm:items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 text-grayone"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-bold text-xl sm:text-2xl mb-1.5 text-blue-800">
                Marketing Division
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Digital Marketing",
                  "Brand Strategy",
                  "Market Research",
                  "Performance Marketing Basics",
                ].map((items) => (
                  <span className="bg-blue-100 border border-blue-300 rounded-md px-2.5 py-1 text-xs md:text-sm text-slate-800 font-medium">
                    {items}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* //Card 6 */}
          <div className="flex flex-col sm:flex-row bg-grayone/10 border border-[#262c3f]/40 rounded-2xl p-5 items-start sm:items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 text-grayone"
              >
                <line x1="12" x2="12" y1="2" y2="22" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-bold text-xl sm:text-2xl mb-1.5 text-blue-800">
                Sales Division
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Sales Techniques",
                  "Customer Relationship Management (CRM)",
                  "Business Development",
                  "Negotiation Skills",
                ].map((items) => (
                  <span className="bg-blue-100 border border-blue-300 rounded-md px-2.5 py-1 text-xs md:text-sm text-slate-800 font-medium">
                    {items}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* //Card 7 */}
          <div className="flex flex-col sm:flex-row bg-grayone/10 border border-[#262c3f]/40 rounded-2xl p-5 items-start sm:items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 text-grayone"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                <path d="M20 3v4" />
                <path d="M22 5h-4" />
                <path d="M4 17v2" />
                <path d="M5 18H3" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-bold text-xl sm:text-2xl mb-1.5 text-blue-800">
                Special Corporate Programs
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Industry-Specific Training",
                  "Internship Preparation Modules",
                  "Corporate Readiness Bootcamps",
                  "Live Project Exposure",
                ].map((items) => (
                  <span className="bg-blue-100 border border-blue-300 rounded-md px-2.5 py-1 text-xs md:text-sm text-slate-800 font-medium">
                    {items}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="py-12 bg-blue-50 rounded-2xl">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold font-jakarta text-blueone text-center mb-10">
              Special Corporate Programs
            </h2>
            <div className="grid gap-5">
              {programs.map((item) => (
                <div key={item} className=" bg-white rounded-2xl p-5 shadow-md">
                  • {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 bg-white/60 rounded-2xl">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold font-jakarta text-blueone text-center mb-10">
              What You Get with the NavLakshya Skill Division
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {included.map((item) => (
                <div
                  key={item}
                  className="bg-[#f8fbff] rounded-2xl p-6 border border-blue-100 shadow-sm"
                >
                  <p className="font-semibold text-grayone">✓ {item}</p>{" "}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 bg-blue-50 rounded-2xl">
          <div className="">
            <h2 className="text-4xl font-bold font-jakarta text-blueone text-center mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="bg-white/90 rounded-2xl p-6 cursor-pointer"
                >
                  <summary className="font-semibold text-[#0c121a] font-jakarta">
                    {faq.q}
                  </summary>
                  <p className="mt-4 text-grayone leading-relaxed font-jakarta">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SkillProgram;
