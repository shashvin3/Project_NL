function Philosophy() {
  const beliefs = [
    {
      text: "Clarity before commitment — a student who understands their direction commits more fully to developing toward it"
    },
    {
      text: "Specificity over generality — one precise recommendation outperforms ten generic options every time"
    },
    {
      text: "The gap between education and employment is structural, not accidental — and it requires a structured solution"
    },
    {
      text: "Guidance that ends at advice is not guidance. It has to follow through to outcome"
    },
  ];

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-5 md:px-8 lg:px-12 max-w-6xl">

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-jakarta text-blueone mb-8 md:mb-12 max-w-6xl leading-snug">
          Most guidance tells you where to go. We start by understanding where you are.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="bg-blue-50 rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="space-y-4 text-grayone font-jakarta text-sm sm:text-base leading-relaxed">
              <p>
                There is a version of career guidance that sounds helpful but is not. It hands you a brochure. It tells you what careers are in demand without asking a single question about who you are, what you are good at, or what kind of work you would still want to be doing in twenty years.
              </p>
              <p>
                NavLakshya was built on a different belief.
              </p>

              <div className="bg-blueone text-white rounded-2xl p-5 my-4">
                <span className="text-sm sm:text-base italic font-semibold leading-relaxed block">
                  "The right path for a student is not the most popular one. It is the one that fits — their strengths, their interests, and the reality of what the professional world actually rewards."
                </span>
              </div>

              <p>
                That is why every program at NavLakshya begins with assessment, not assumption. Before we recommend a direction, we understand the student. Before we prescribe a skill track, we map what they already have against what their target industry actually needs.
              </p>
              <p className="font-bold text-gray-800">
                This approach takes longer than handing someone a list of options. It produces better outcomes. Consistently.
              </p>
            </div>
          </div>

          <div className="space-y-4 py-10">
            {beliefs.map((item, index) => (
              <div
                key={index}
                className="bg-[#f8fbff] rounded-2xl p-5 border border-[#e0e5eb] text-grayone font-jakarta shadow-sm flex gap-4 items-start"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-blueone/10 text-blueone flex items-center justify-center text-sm font-bold font-jakarta">
                  {index + 1}
                </div>
                <p className="italic text-sm sm:text-base leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Philosophy;