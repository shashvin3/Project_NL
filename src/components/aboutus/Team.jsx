function Team() {

  const items = [
    {
      name: "Nitin Mishra",
      initials:"NM",
      post: "Founder & Visionary Leader",
      text:"Nitin Mishra founded NavLakshya in 2026 after years of building service-driven platforms and working at the intersection of talent and opportunity. His professional background spans startups, SMEs, and growing organizations — helping them connect with the right people and build scalable systems from the ground up. That dual understanding of how students struggle with career clarity and how companies struggle to find the right talent became the foundation of NavLakshya. Nitin believes that career decisions should not be based on guesswork or societal pressure, but on clarity, skills, and real exposure. His approach is practical and results-oriented: build a structured journey for every student, from self-discovery through skill development to placement, and measure success by outcomes rather than enrollment numbers."
    },
    {
      name: "Sandeep Bajpai",
      initials:"SB",
      post: "Technical Head",
      text:"Sandeep Bajpai brings 10+ years of technical and industry experience, leading the architecture and operational systems powering every program."
    },
    {
      name: "Anurag Pandey",
      initials:"AP",
      post: "Legal Head",
      text:"Anurag Pandey oversees legal strategy and compliance, ensuring every process is built on strong ethical and legal foundations."
    }
  ];


  return (

    <section className=" mt-16 py-8 px-6">

      <div className="text-center mb-20">
        <h1 className="relative text-4xl md:text-5xl font-bold uppercase font-jakarta text-[#0c121a]"> Our Team</h1>
        <div className="absolute left-1/2 -translate-x-1/2  mt-4 w-25 h-1 bg-blueone rounded-full"></div>
      </div>


      {/* Cards */}
      <div className="max-w-7xl mx-auto space-y-8">

    <div className="bg-linear-to-r from-blueone/10 via-yellowone/10 to-blueone/10 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
    <div className="w-18 h-18 rounded-full bg-blueone text-white flex items-center justify-center text-2xl font-bold mb-6">
      {items[0].initials}
    </div>
    <h2 className="text-3xl md:text-4xl font-bold text-[#0c121a] font-jakarta">{items[0].name}</h2>
    <p className="text-blueone text-sm uppercase tracking-widest font-semibold mt-3">{items[0].post} </p>


    <div className="
      w-16 h-1
      bg-yellowone
      rounded-full
      my-6
    "></div>


    <p className="
      text-grayone
      leading-loose
      text-base
      font-jakarta
    ">
      {items[0].text}
    </p>

  </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
       {items.slice(1).map((item) => (

          <div
            key={item.name}
            className="bg-linear-to-r from-blueone/10 via-yellowone/10 to-blueone/10 rounded-3xl p-8 shadow-xl border border-gray-100 hover:-translate-y-2 hover:shadow-2xltransition-all duration-300">

            <div className="w-16 h-16 rounded-full bg-blueone text-white flex items-center justify-center text-xl font-bold mb-6">
              {item.initials}
            </div>

            <h2 className="text-2xl font-bold text-[#0c121a] font-jakarta">{item.name} </h2>

            <p className="text-blueone text-sm uppercase tracking-wider font-semibold mt-2">{item.post}</p>

            <div className="w-12 h-1 bg-yellowone rounded-full my-5"></div>

            <p className="text-grayone leading-relaxed text-sm font-jakarta">{item.text}</p>        
          </div>

        ))}

      </div>

      </div>
      

    </section>

  );
}

export default Team;
