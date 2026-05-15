
function stats(){
   
    const items = [
        { value: "1000+", label: "Students Guided", text:"We have guided more than 1000 students through career counseling, mentorship, scholarship awareness, and career planning initiatives across India" },
        { value: "80+", label: "Hiring Connections", text:"Our growing network of 80+ hiring connections includes startups, SMEs, and emerging businesses actively looking for skilled young professionals." },
        { value: "2026", label: "Founded In", text:"NavLakshya was founded with one clear mission — to bridge the gap between student potential and real career outcomes through practical guidance and structured support." },
        { value: "6", label: "Skill Domains", text:"From counseling to placement preparation, our six skill divisions are designed to prepare students for modern industry demands." },
    ]

    return(
    <section className="bg-[#0c121a] py-10 px-8">
        <h1 className="text-3xl font-bold text-center text-yellowone uppercase mb-10">Trusted by Students Across India</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {items.map((stats) => (
         <div
            key={stats.label}
            className="bg-[#111a24] border border-white/8 rounded-2xl p-8 flex flex-col gap-2 hover:border-yellow-500/40 transition-colors duration-200"
          >
        <div className="text-yellowone text-4xl font-bold font-jakarta leading-none mb-1">{stats.value}</div>
       <div className="w-8 h-0.5 bg-[#e5a93c] rounded-full my-1" /> 
        <div className="text-[#fffafc] text-xs font-semibold tracking-widest uppercase opacity-70 font-jakarta">{stats.label}</div>
        <p className="text-white/70 text-sm mt-1 leading-relaxed font-jakarta">{stats.text}</p>
        </div>
        ))}
        </div>
    </section>
    )
}
export default stats;