import React from "react";

function Banner({title, des, firstBtnText, secondBtnText, bgColor, titleTextColor, desTextColor,firBtnTextColor, secBtnTextColor, firBtnBg, secBtnBg, secBtnBorder, firstIcon, secondIcon}) {
  return (
    <div className=" bg-blue-50/10 py-24 px-14">
     <section className={`${bgColor} w-11/12 mx-auto p-8 md:p-16 text-center relative z-10 overflow-hidden rounded-3xl`}>
      <div>
        <div>
          <h1 className={`text-3xl md:text-5xl font-bold ${titleTextColor} mb-6 font-jakarta text-center`}>
          {title}
          </h1>
          <p className={`text-lg md:text-xl opacity-90 mb-10 ${desTextColor} text-center`}>
           {des}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <button className ={`${firBtnBg} hover:scale-105 hover:opacity-80 ${firBtnTextColor} px-10 py-3 rounded-full font-bold inline-flex whitespace-nowrap items-center gap-2 transition-all duration-300`}>
           {firstIcon && (
            <img src={firstIcon} alt="Trophy Icon" className="w-5 h-5 object-contain"/>
          )}
            {firstBtnText}
          </button>
          <button className={` ${secBtnBg} border inline-flex  whitespace-nowrap gap-2 group ${secBtnTextColor} ${secBtnBorder} hover:border-[#026fd7] hover:scale-105 hover:bg-[#5A95CF] px-10 py-3 rounded-full font-bold transition-all duration-300`}>
            <div className="inline-flex items-center justify-center group">
             {secondIcon && <span>{secondIcon}</span>}
            </div>
            <span className="group-hover:text-black transition-all duration-300">{secondBtnText}</span>
          </button>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Banner;
