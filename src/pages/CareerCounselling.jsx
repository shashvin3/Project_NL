import { Link } from "react-router-dom";
import careercounseling from "../assets/policies/careercounseling.png";

function CareerCounselingPage() {

const included = [
"Detailed Psychometric & Aptitude Analysis",
"Skill Identification Report",
"Career Stream Evaluation",
"One-on-One Expert Session",
"Structured Career Action Roadmap"
];

const students = [
"Students who are confused about career choices at any stage of their education",
"Class 10 and Class 12 students deciding which stream to enter",
"Graduation level students planning which specialization to pursue",
"Students preparing for competitive exams who want to confirm they are preparing for the right career",
];


const faqs = [
{
q:" What is career counseling and why do I need it?",
a:" Career counseling is a structured process that helps you understand your own strengths, interests and aptitude and maps those to career paths that genuinely suit you. Most students choose a stream or degree based on what is popular or what their parents suggest. Career counseling replaces guesswork with a specific direction backed by assessment data."
},

{
q:"At what age or stage should I get career counseling?",
a:" Career counseling is most valuable at transition points i.e. before choosing a stream after Class 10, before choosing a degree after Class 12, and when planning a specialization at graduation level. It is also useful for students preparing for competitive exams who want to confirm they are preparing in the right direction."
},

{
q:" How long does a career counseling session take?",
a:"The full counseling process at NavLakshya includes an online psychometric and aptitude assessment followed by a personalized one-on-one session. The assessment typically takes 45 to 60 minutes. The counseling session itself is approximately 60 minutes. You receive a Career Action Roadmap after the session."
},

{
q:" Is the career counseling assessment conducted online?",
a:" Yes. The psychometric and aptitude assessment is conducted online and can be completed from anywhere in India. Your results are analyzed before your personal counseling session so the conversation is specific to your profile from the start."
},

{
q:" What career options can I explore after Arts, Commerce, or Science?",
a:"The counseling process covers career options across all three streams and also explores paths that cross stream boundaries, including careers in design, media, management, technology, and public service that are open regardless of your stream background. The assessment tells us which directions suit your profile, then we map those across the available options."
},

{
q:" How much does career counseling at NavLakshya cost?",
a:" Career Counseling at NavLakshya costs ₹999 per session. This includes the full psychometric and aptitude assessment, a skill identification report, a career stream evaluation, a one-on-one counseling session, and a structured career action roadmap. A refund is available within 5 days of enrollment."
},

{
q:"What is the difference between a career counselor and a career coach?",
a:"A career counselor helps you understand your strengths and interests and recommends a career direction — typically used at the beginning of a career journey when you are making foundational decisions. A career coach typically works with people who already have a career direction and helps them navigate advancement within it. For students making stream or degree decisions, a counselor is what you need."
},

{
q:"Can career counseling help if I have already started a degree I am not sure about?",
a:" Yes. Career counseling can help at any stage — including mid-degree when you are questioning whether your current path is right. The assessment maps where you are now, what your actual strengths are, and what realistic options exist from your current position. It does not tell you what you want to hear. It tells you what the data suggests."}
];


return (

<div className="bg-blue-50">
<img src={careercounseling} alt="Career Counseling" className="w-full object-cover" />      

<div className="container mx-auto px-4 py-16 space-y-12">
<div className="text-center max-w-4xl mx-auto ">
 <h1 className="text-2xl md:text-5xl font-jakarta font-bold mb-3">Career Counseling</h1>       
  <p className="font-bold text-md md:text-lg font-jakarta text-blueone leading-relaxed mb-4">
   ₹999 per session
  </p>
   <p className="font-bold text-md md:text-lg font-jakarta text-grayone leading-relaxed mb-4">
    Full assessment and one-on-one counseling report included
  </p>
</div>

<div  className="bg-blueone/5 border border-blueone/20 rounded-2xl p-6 space-y-4">
  <p className="font-medium text-sm font-jakarta text-grayone leading-relaxed">
  Most students choose their stream the same way. They follow what their parents think is stable. They go with what their friends are doing. They pick the degree that sounds impressive enough to justify the years they are about to put in. None of that is about them.
  </p>
  <p className="font-medium text-sm font-jakarta text-grayone leading-relaxed">
    Career Counseling at NavLakshya begins differently. It begins with understanding who you actually are — your cognitive strengths, your natural aptitude, the kinds of environments where you think clearly and the ones where you do not. It maps all of that to career paths that are not just available but genuinely suited to how you are built.
  </p>
  <p className="font-extrabold text-sm font-jakarta text-grayone leading-relaxed">
    The outcome is not a list of options. It is one specific direction, with a specific rationale behind it. Something you can explain clearly and commit to fully.
  </p> 
</div>

{/* INCLUDED */}
<section className="py-12 bg-white/70 rounded-2xl">
<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold font-jakarta text-blueone text-center mb-10">What Is Included</h2>

<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
{included.map((item)=>(<div key={item} className="bg-[#f8fbff] rounded-2xl p-6 border border-blue-100 shadow-sm">
<p className="font-semibold text-grayone">
✓ {item}
</p> </div>))}
</div>

</div>
</section>

{/* WHO */}
<section className="py-5">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl font-bold font-jakarta text-blueone text-center mb-10">Who It Is For</h2>
<div className="grid gap-5">
{students.map((item)=>(   
<div key={item} className=" bg-white rounded-2xl p-5 shadow-md">• {item}</div>
))}
</div>

</div>
</section>

{/* FAQ */}
<section className="py-10">

<div className="max-w-4xl mx-auto px-6">
<h2 className="text-4xl font-bold font-jakarta text-blueone text-center mb-10">Frequently Asked Questions</h2>
<div className="space-y-5">

{faqs.map((faq)=>(
<details key={faq.q} className="bg-white/90 rounded-2xl p-6 cursor-pointer">
<summary className="font-semibold text-[#0c121a] font-jakarta">{faq.q}</summary>
<p className="mt-4 text-grayone leading-relaxed font-jakarta">{faq.a}</p>
</details>
))}
</div>
</div>
</section>

<div className="text-center">
<Link to="/book-counselling" className='inline-flex items-center justify-center rounded-full text-sm font-medium py-3 px-5 lg:px-4 bg-blueone text-white hover:bg-blueone/80 transition-all duration-300'>Book Counseling Session</Link>
</div>

</div>
</div>

);

}

export default CareerCounselingPage;