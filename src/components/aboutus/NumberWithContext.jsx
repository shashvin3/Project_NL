function NumbersWithContext() {

  const stats = [
    {
      number:"1000+",
      title:"Students Guided",
      text:"Every student left with more clarity than they arrived with."
    },

    {
      number:"80+",
      title:"Hiring Connections",
      text:"Built relationship by relationship across startups and SMEs."
    },

    {
      number:"2026",
      title:"Year Founded",
      text:"Built on the belief that guidance solves potential gaps."
    },

    {
      number:"6",
      title:"Skill Domains",
      text:"Students should never be limited to one career track."
    }
  ];


  return (

    <section className="py-16 bg-[#f8fbff]">

      <div className="container mx-auto px-4">

        <h2 className="text-center text-4xl font-bold mb-12">
          Numbers With Context
        </h2>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item)=>(

            <div
              key={item.number}
              className="bg-white rounded-3xl p-6 shadow-md"
            >

              <h3 className="text-5xl font-bold text-blueone mb-3">
                {item.number}
              </h3>

              <p className="font-bold mb-3">
                {item.title}
              </p>

              <p className="text-grayone text-sm">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default NumbersWithContext;