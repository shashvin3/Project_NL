import Banner from "../components/common/Banner";
import ContactInfo from "../components/contact/ContactInfo";
import Reveal from "../components/common/Reveal";

function Contact() {
  return (
    <div className="bg-[#fffafc] min-h-screen">
      <section className="text-center bg-blue-50 transparent p-22">
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
          Have questions about our scholarship programs, career counseling, or
          skill development training? Our team is here to guide you toward
          structured academic growth and professional excellence. Whether you
          are a student, parent, school, college, or corporate partner — we’re
          ready to assist you.
        </p>
        </Reveal>
      </section>
      <ContactInfo />
      <div className="px-4 pt-10">
        <section className="max-w-4xl mx-auto p-8 rounded-2xl border-2 border-dashed border-grayone/30 text-center mb-20 space-y-5">
       <div className="flex justify-center items-center">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-grayone/30">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
       </div>
       
        <h3 className="text-xl font-semibold font-jakarta">National Presence</h3>
        <p className="text-grayone font-jakarta">
          While our registered office is in India, NavLakshya operates
          nationally, supporting students from every corner of the country
          through our digital assessment, counseling, and training platforms. We
          are building a connected ecosystem that makes career guidance
          accessible to all.
        </p>
      </section>
      </div>
      <Banner
        title="Ready to Build Your Career?"
        titleTextColor="text-white"
        des="Don’t wait for the right opportunity — create it with NavLakshya’s structured scholarship and skill development programs."
        desTextColor="text-white"
        firstBtnText="Explore Programs"
        secondBtnText="Book Counseling"
        bgColor="bg-blueone"
        firBtnTextColor="text-[#182230]"
        secBtnTextColor="text-white"
        firBtnBg="bg-white"
        secBtnBg="bg-blueone "
        secBtnBorder="border-blue-400"
      />
    </div>
  );
}
export default Contact;
