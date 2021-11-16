import './App.css';
import whatsup from './images/whatsup.jpeg';
import instagram from './images/insta.png';
import facebook from './images/fb.png';
import twitter from './images/twitter.png';
import primevideo from './images/prime.png';
import netflix from './images/netflix.png';
import hotstar from './images/hotstar.png';
import aha from './images/aha.png';
import myntra from './images/myntra.jpeg';
import flipkart from './images/flipkart.png';





const Apps = (trendapps)=>
{
  console.log(trendapps.img);
  return(
    <div className="appslist">
      <h1> {trendapps.name}</h1>
      <h1>{trendapps.founder}</h1>
      <h1> {trendapps.foundedyear}</h1>
      <h1>{trendapps.noofdownloads}</h1> 
      <h1>{trendapps.ratings}</h1>
      <img className="appslist" src={trendapps.image} alt="logos" />
    </div>
  
  )
}

function App() {
  return (
    <div className="applications" >

     <div className="wu">
       <Apps image ={whatsup}alt="logos" name =" App name : Whatsup" founder = "Founder : John Koum" foundedyear =" founded in 2009" noofdownloads = "5 Billion users" ratings ="4.4 ratings"  />
       </div> 
     <div className="wu" > 
     <Apps name =" App name : Instagram" founder = "Founder : Kevin Systrom" foundedyear ="founded in 2010" noofdownloads = "1 Billion users" ratings ="3.8 ratings" image ={instagram}/>
     </div>
    <div className="wu">
      <Apps name ="App name : Facebook" founder = "Founder : Mark Zuckerberg" foundedyear ="founded in 2004" noofdownloads = "500 cr+ users" ratings ="2.3 ratings" image ={facebook}/>
      </div>
     <div className="wu">
       <Apps name ="App name : Twitter" founder = "Founder : Jack Dorsey" foundedyear ="founded in 2006" noofdownloads = "100 cr+ users" ratings ="3.4 ratings" image ={twitter}/>
       </div>
     <div className="wu">
       <Apps name ="App name : Prime Video" founder = "Founder : Jeff Bezos" foundedyear =" founded in 2011" noofdownloads = "10cr users" ratings ="4.3 ratings" image ={primevideo}/>
       </div>
     <div className="wu">
       <Apps name ="App name : Netflix" founder = " Founder : Reed Hastings" foundedyear ="founded in 1997" noofdownloads = "100 cr+ users" ratings ="4.4 ratings" image ={netflix}/>
       </div>
     <div className="wu">
       <Apps name ="App name : Hotstar" founder = "Founder : Sunil Rayan" foundedyear =" founded in 2015" noofdownloads = "50 cr+ users" ratings ="3.9 ratings" image ={hotstar}/>
       </div>
     <div className="wu">
       <Apps name ="App name : Aha" founder = "Founder : Ajit Thakur" foundedyear ="founded in 2020" noofdownloads = "1cr+ users" ratings ="4.4 ratings" image ={aha}/>
     </div>  
     <div className="wu">
       <Apps name ="App name : Myntra" founder = " Founder : Mukesh Bansal" foundedyear ="founded in 2007" noofdownloads = "10cr+ users" ratings ="4.3 ratings" image ={myntra}/>
       </div>  
     <div className="wu">
       <Apps name ="App name : Flipkart" founder = "Founder : Sachin Bansal" foundedyear =" founded in 2007" noofdownloads = "10cr+ users" ratings ="4.3 ratings" image ={flipkart}/>
       </div> 
        
    </div>
  );
}

export default App;
