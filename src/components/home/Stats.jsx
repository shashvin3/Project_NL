
function stats(){
   
    const items = [
        { value: "10K", label: "Scholars Impacted" },
        { value: "500+", label: "Corporate Partners" },
        { value: "95%", label: "Counseling Accuracy" },
        { value: "50+", label: "Skill Courses" },
    ]

    return(
    <section className="bg-[#0c121a] py-12">
     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-15 items-center justify-center text-center">
        {items.map((stats) => (
        <div>
        <div className="text-yellowone text-3xl font-bold mb-1">{stats.value}</div>
        <div className="text-[#fffafc] text-sm opacity-70 font-jakarta">{stats.label}</div>
        </div>
        ))}
        </div>
    </section>
    )
}
export default stats;