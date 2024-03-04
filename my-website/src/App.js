
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import ExampleComponent from './components/ExampleComponent';
import Slid from './components/Slid';
import LabTest from './components/LabTest';
import NavBar from './components/NavBar';
import Categories from './components/Categories'
import Launches from './components/Launches';
import Trending from './components/Trending';
import Health from './components/Health';
import InfoComponent from './components/InfoComponent';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';



const App = () => {
  
  const [searchQuery, setSearchQuery] = useState('');
 

  
  const handleSearch = (query) => {
    setSearchQuery(query);

    console.log('Search query:', query);
  };

  const images = [
    
    'https://cdn01.pharmeasy.in/dam/banner/banner/f8b653efff8-fb999.jpg',
    'https://cdn01.pharmeasy.in/dam/banner/banner/d74fbde8ea0-Slippers.jpg',
    'https://cdn01.pharmeasy.in/dam/banner/banner/480aa5499c8-flashhp.jpg',
    'https://cdn01.pharmeasy.in/dam/banner/banner/af7eca79a24-25.jpg',
    
  ];
 

  return (
    
    <Router>
    <div>
   
     
      <Header  />
    
      
      <NavBar/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Search onSearch={handleSearch} />
      <ExampleComponent />
      <div>
        <Slid images={images} />
        <LabTest/>
        <Categories/>
        <Launches/>
        <Trending/>
      
        <Health/>
        <InfoComponent/>
      </div>
       
      <div>
      <h5>Top Tests we cover:</h5>
      <p>CBC | CRP | ESR | Widal | Lipid Profile | Hba1C | RTPCR | Liver Function | VDRL | TSH | Thyroid | HBSAG | SGPT | Urine Culture | Troponin | RFT | RBS | PSA | D Dimer | Prolactin | HIV | Creatinine | ANA | AMH | Urine | Uric Acid | SGOT | Ra Factor | IgE | HCV | FBS | Coombs | Typhoid | CA 125 | All Full Body packages | All Blood tests</p>
      
      <h5>Top-Selling Medicines:</h5>
      <p>Dolovera Gel | Neurobion Forte | Chymoral Forte | Crocin Advance | Soframycin | Dexorange | Becadexamin | Folvite | Livogen | Becosules | Fourderm | Nurokind Plus | Burnol | Crocin 650 | Mintop 5 | Thrombophob | Evion 600</p>

      <h5>Top-Searched Medicines:</h5>
      <p>Viagra 50mg | Morr F 5 | Mintop Forte 5 | Viagra 100mg | New Follihair | Plavix 75mg | Finax 1mg | Ketord | Miss Me | Cerazette | Tracnil Sachet | Lantus 100Iu Cartridge | Mintop 10 | Isotroin 20mg | Inbilt F | Livial 2.5mg | Vigore 100mg | Morr F 10 | Tugain 5 | Adaferin 0 1 Gel 15gm | Ryzodeg Penfill 100Iu | Efil 2.5 | Duphaston 10mg | Supracal 2000 | Shelcal 500mg</p>

      <h5>Top-Selling Healthcare Products:</h5>
      <p>Accu-Chek Active - 100 Strips | Supradyn Multivitamin Tablets | DR Morepen BG 03 - 50 Strips | Dettol Antiseptic Liquid | Ensure Diabetes Care Vanilla Sugar Free Jar | Dettol Instant Hand Sanitizer | Everherb Shilajit | Softovac SF Powder | Pediasure Premium Chocolate Refill</p>

      <h5>COVID-19 Preventatives:</h5>
      <p>N95 Masks | Hand Sanitizers | Hand Gloves, Disinfectants, Thermometers & more!</p>

      <h5>Your One-Stop Online Pharmacy - PharmEasy</h5>
      <p>We've got India Covered! We now deliver in 1000+ cities and towns across 22000+ pin codes. We thereby cover every nook and corner of the country! The major cities in which we deliver include Mumbai, Kolkata, Delhi, Bengaluru, Ahmedabad, Hyderabad, Chennai, Thane, Howrah, Pune, Gurgaon, Navi Mumbai, Jaipur, Noida, Lucknow, Ghaziabad & Vadodara.</p>
      
      <h5>Say Goodbye to All Your Healthcare Worries With PharmEasy!</h5>
      <p>PharmEasy is here to help you take it easy! We are amongst one of India's top online pharmacy and medical care platforms. It enables you to order pharmaceutical and healthcare products online by connecting you to registered retail pharmacies and get them delivered to your home. We are an online medical store, making your purchase easy, simple, and affordable!</p>

      <h5>How Are We Making Lives Simpler With Our Online Medical Store?</h5>
      <p>Our doorstep delivery service is available in PAN-India across top cities like Bangalore, Delhi, Mumbai, Kolkata, Hyderabad, Gurgaon, Noida, Pune, etc. Our online medical store also allows you to choose from 1 lakh+ products including OTC products and medical equipment. PharmEasy is a one-stop online medical platform where you can also book diagnostic tests including blood tests, full-body checkups, and other preventive health check-ups at an affordable cost, right from the comfort of your home. We have partnered with trusted & certified labs that arrange for a sample pick-up from the convenience of your home. They also provide you with timely reports.</p>

      <h5>Why Are We The Most Preferred Online Pharmacy?</h5>
      <p>Lucrative offers on our platform allow you to make payment online and via various payment wallets at a discounted price. Alternatively, you can also choose to pay cash on delivery as we deliver the products at your doorstep. We cater to all your pharmaceutical needs and also make ordering medicines online a hassle-free experience for you. We connect you only with registered retail pharmacies & certified diagnostic labs. We ensure that healthcare is affordable to all and make the process of ordering online simple.</p>

      <h5>Sit Back & Relax While You Get Your Essentials Delivered Every Month!</h5>
      <p>It’s tough to remember to refill every month, especially in the case of chronic diseases. PharmEasy’s subscription service not only ensures that you are reminded of your refills but also makes sure that you are never out on your medical essentials. You will get a reminder every month and your order will be delivered at your convenience!</p>

      <h5>Access medical and health information:</h5>
      <p>PharmEasy delivers reliable and accurate medical information that has been carefully written, vetted and validated by our health experts. Our specialists curate high-quality and most reliable literature about medicines, illnesses, lab tests, Ayurvedic and over the counter health products.</p>

      <h5>We Believe in ‘Simplifying Healthcare, Impacting Lives!’</h5>

      <footer>
        <p>We Believe in ‘Simplifying Healthcare, Impacting Lives!’</p>
      </footer>
    </div>
      <Footer />

     
    </div>
    </Router>
  );
}

export default App;
