import Banner from "../components/common/Banner";
import ContactInfo from "../components/contact/ContactInfo";
import WhatHappens from "../components/contact/WhatHappens";
import Reveal from "../components/common/Reveal";

function Contact() {
  return (
    <div className="bg-blueone/3 min-h-screen">
      <section className="text-center bg-blueone/5 py-22">
        <div className="container mx-auto px-4 ">
          <Reveal direction="up">
            <div>
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider font-jakarta text-blueone bg-blue-100 rounded-2xl uppercase">
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl md:text:5xl lg:text-6xl font-bold mb-6 tracking-tight font-jakarta text-center">
              Let’s Start a <span className="text-blueone">Conversation</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg font-jakarta text-grayone text-center">       
           Not sure which program fits? You do not need to know before you reach out. That is what the first conversation is for.
           Tell us where you are — your stream, your stage, what you are trying to figure out. We will tell you which path makes the most sense and what the next step actually looks like
            </p>
          </Reveal>
        </div>
        
      </section>
      <ContactInfo />
       <WhatHappens />
      <div className="px-4 pt-10">
        <section className="max-w-4xl mx-auto p-8 rounded-2xl border-2 border-dashed border-grayone/30 text-center mb-20 space-y-5">
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-12 h-12 text-grayone/30"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
          </div>

          <h3 className="text-xl font-semibold font-jakarta">
            Where We Are
          </h3>
          <p className="text-grayone font-jakarta">
           NavLakshya operates nationally through digital platforms, serving students across India. We are currently building our pan-India presence to make every program accessible regardless of location.
           We currently serve students from Delhi, Mumbai, Lucknow, Hyderabad, Bangalore, Pune, Jaipur, Bhopal, and more than 20 cities across India. Wherever you are, the first conversation is always free
          </p>
        </section>
      </div>
      <Banner
        title="Ready to Build Your Career?"
        titleTextColor="text-[#2d1f01]"
        des=" Don’t wait for the right opportunity — create it with NavLakshya’s structured scholarship and skill development programs."
        desTextColor="text-[#2d1f01]"
        firstBtnText="Explore Programs"
        secondBtnText="Book Counseling"
        bgColor="bg-yellowone"
        firBtnTextColor="text-white"
        secBtnTextColor="text-[#2d1f01]"
        firBtnBg="bg-blueone"
        secBtnBg="bg-[yellowone]"
        firstBtnLink="/programs"
        secondBtnLink="/book-counselling"
        secBtnBorder="border-[#2d1f01]"
      />
    </div>
  );
}
export default Contact;
