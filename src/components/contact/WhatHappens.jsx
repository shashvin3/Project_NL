function WhatHappens() {

  const steps = [
    {
      number: "01",
      text:
        "We respond within 24 hours — a real reply, not an automated acknowledgement",
    },

    {
      number: "02",
      text:
        "We ask a few simple questions about your situation before recommending anything",
    },

    {
      number: "03",
      text:
        "We tell you which program fits, why, and what the enrollment process looks like",
    },

    {
      number: "04",
      text:
        "If nothing fits right now, we tell you that too — and what to do instead",
    },
  ];


  return (
    <section className="py-20">

      <div className="container mx-auto px-4">

        {/* heading */}
        <div className="text-center mb-14">

          <span className="uppercase text-blueone text-sm font-bold tracking-widest">
            What Happens Next
          </span>

          <h2 className="text-4xl font-bold mt-3">
            What Happens When You Reach Out
          </h2>

        </div>


        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {steps.map((step) => (

            <div
              key={step.number}
              className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:-translate-y-1 transition"
            >

              <div className="text-blueone text-3xl font-bold mb-5">
                {step.number}
              </div>

              <p className="text-grayone text-sm leading-relaxed">
                {step.text}
              </p>

            </div>

          ))}

        </div>


        {/* bottom note */}
        <div className="mt-10 bg-blueone/5 rounded-2xl p-6 text-center">

          <p className="text-lg font-medium text-grayone">
            No sales pressure. No pitch. Just a straight conversation
            about your options and what makes sense for where you are.
          </p>

        </div>

      </div>

    </section>
  );
}

export default WhatHappens;