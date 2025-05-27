import Header from "./Component/Header.jsx"
import Image from "next/image";
import Ouroffering from "./Component/Ouroffering.jsx";
import Exploreresident from "./Component/Exploreresident.jsx";
import Furnishingtype from "./Component/Furnishingtype.jsx";
import Banner1 from "./Component/Banner1.jsx";
import Propertiesforrenty from "./Component/Propertiesforrenty.jsx";
import Apartments from "./Component/Apartments.jsx";
import Plot from "./Component/Plot.jsx";
import Plotprop from "./Component/Plotprop.jsx";
import BHK from "./Component/BHK.jsx";
import CheckoutCommercial from "./Component/CheckoutCommercial.jsx";
import Commercialproper from "./Component/Commercialproper.jsx";
import Downloadappbanner from "./Component/Downloadappbanner.jsx";
import Hotdealprop from "./Component/Hotdealprop.jsx";
import Pginnoida from "./Component/Pginnoida.jsx";
import Checkoutcoliving from "./Component/Checkoutcoliving.jsx";
import Footer from "./Component/Footer.jsx";
import Explorenowcard from "./Component/Explorenowcard.jsx";
import Footermob from "./Component/Footermob.jsx";



export default function Home() {
  return (
    <section>
      <Header />
      <Explorenowcard/>
      <Ouroffering/>
      <Exploreresident/>
      <Furnishingtype/>
      <div className="sm:hidden">
      <Pginnoida/>
      </div>
      <Banner1/>
      <div className="sm:hidden">
      <CheckoutCommercial/>
      </div>
      <Propertiesforrenty/>
      <div className="sm:hidden">
      <BHK/>
      </div>
      <Apartments/>
     <Plot/>
      <Plotprop/>
     <div className="hidden sm:block">
      <BHK/>
      </div>
      <div className="hidden sm:block">
      <CheckoutCommercial/>
      </div>
      <Commercialproper/>
      <Downloadappbanner/>
      <Hotdealprop/>
      <div className="hidden sm:block">
      <Pginnoida/>
      </div>
     <Checkoutcoliving/>
     <Footermob/>
     <Footer/>

    </section>
  );
}
