import Assistancebanner from "./Assistancebanner";
import Lookingbanner from "./Lookingbanner";


export default function Banner1() {
    return (
      <section className="sm:flex flex-row hidden px-20 pb-18 justify-between gap-3">
      
      <Lookingbanner/>
      <Assistancebanner/>
     
      </section>
    );
  }