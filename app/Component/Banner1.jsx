import Assistancebanner from "./Assistancebanner";
import Lookingbanner from "./Lookingbanner";


export default function Banner1() {
    return (
      <section className="sm:flex flex-row px-3 sm:px-20 bg-white pb-6 sm:pb-18 sm:justify-between gap-3">
      
      <Lookingbanner/>
      <Assistancebanner/>
     
      </section>
    );
  }