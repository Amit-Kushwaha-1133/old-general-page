import React from "react";

const variantStyle = {
  ouroffering: {
    mainstyle:"flex w-full h-full flex-row justify-center items-center p-4 bg-black/50 rounded-2xl ",
    containerStyle:
      "w-full h-full rounded-2xl bg-center bg-cover bg-no-repeat flex flex-col justify-end  shadow-lg text-white",
    titleStyle: "rounded-md w-1/2  px-4 sm:w-full text-sm sm:text-xl font-extrabold sm:font-bold text-center pt-16 flex pb-0",
  },
  residential: {
    mainstyle:"flex w-full flex-row justify-center items-center",
    containerStyle:
      "w-full h-full rounded-2xl bg-center bg-cover bg-no-repeat flex flex-col justify-end p-4 shadow-lg text-white",
    titleStyle: "rounded-md w-full text-xl font-bold text-center",
  },
  Furnishtype: {
    mainstyle:"flex w-full flex-row justify-between items-end px-5 pb-5 bg-gradient-to-t from-black/90 to-transparent rounded-2xl",
    containerStyle:
      "w-full h-full rounded-2xl bg-center bg-cover flex text-white",
    titleStyle: "flex rounded-md w-1/2 sm:w-full text-sm sm:text-xl font-extrabold sm:font-bold pt-16 flex pb-0  whitespace-nowrap",
    descStyle: "text-xs whitespace-nowrap sm:text-sm  mt-1",
  },
  Propertiestype: {
    mainstyle:"flex w-full flex-row justify-center items-end",
    containerStyle: "w-full h-full rounded-2xl bg-center bg-cover flex text-white",
    titleStyle: "text-xl font-semibold text-nowrap rounded-b-2xl bg-black/50 backdrop-blur-sm px-12 py-3 text-white w-fit",
  },
  Plottype: {
    mainstyle:"flex w-full flex-row justify-center items-end bg-gradient-to-t from-black to-transparent rounded-2xl",
    containerStyle: "w-full h-full rounded-2xl bg-center bg-cover flex text-white",
    titleStyle: " text-xl font-bold text-center flex pb-5 ",
  },
  Bhktype: {
    mainstyle:"flex w-full flex-row justify-center items-end bg-black/50 rounded-2xl",
    containerStyle: "h-full rounded-2xl bg-center bg-cover flex text-white",
    titleStyle: "text-xl font-bold text-center flex pb-5 ",
  },
  commercialtype: {
    mainstyle:"flex w-full flex-row justify-center items-end bg-black/50 rounded-2xl",
    containerStyle: "h-full rounded-2xl bg-center bg-cover flex text-white",
    titleStyle: "text-xl font-bold text-center flex pl-5",
    descStyle: "sm:flex text-sm mt-1 pb-5 pl-5",
  },
  pginnoida: {
    mainstyle:"flex w-full flex-row justify-between items-end bg-black/50 rounded-2xl pb-5 px-3 lg:px-5",
    containerStyle: "flex h-full rounded-2xl bg-center bg-cover flex text-white justify-between",
    titleStyle: "text-2xl sm:px-0 sm:py-0  px-7 py-6 sm:text-xl font-bold whitespace-nowrap  flex",
    buttonstyle:"hidden sm:block text-black py-2 px-3 right-0 w-fit items-center justify-end flex bg-white text-sm  font-extrabold rounded-lg",
  
  },
};

const Variantprops = ({ card, variant, icon}) => {
  return (
    <div
      className={variantStyle[variant].containerStyle}
      style={{ backgroundImage: `url(${card.image})` }}
    >
      <div className={variantStyle[variant].mainstyle}>
      <div>
        <div className={variantStyle[variant].titleStyle}>{card.title}</div>
        {card.desc && <p className={variantStyle[variant].descStyle}>{card.desc}</p>}
        
      </div>
        {icon && <div className="hidden sm:block ml-2">{icon}</div>}
        {card.button && <p className={variantStyle[variant].buttonstyle}>{card.button}</p>}
        
      </div>
      
    </div>
  );
};

export default Variantprops;
