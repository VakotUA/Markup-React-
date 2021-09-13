import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header.js'
import Intro from './Components/Intro.js'
import Text from './Components/Text.js'
import './Components/Image.css'
import img1 from './Images/Lingua desktop 1.png'
import img2 from './Images/Lingua desktop 2.png'
import img3 from './Images/Lingua desktop 3.png'
import imgp1 from './Images/Lingua phone 1.png'
import imgp2 from './Images/Lingua phone 2.png'
import imgp3 from './Images/Lingua phone 3.png'
import imgp4 from './Images/Lingua phone 4.png'
import imgp5 from './Images/Lingua phone 5.png'
import imge1 from './Images/Lingua web 1.png'
import imge2 from './Images/Lingua web 2.png'
import imge3 from './Images/Lingua web 3.png'
import imge4 from './Images/Lingua web 4.png'
import imge5 from './Images/Lingua web 5.png'
import imge6 from './Images/Lingua web 6.png'
import imge7 from './Images/Lingua web 7.png'
import bg from './Images/Abstract_r.png'

const img2style = {
  width: '90%',
  margin: 'auto 0'
}

class Markup extends React.Component {
  render() {
    return (
      <div className="markup">
        <Header />

        <Intro />

        <Text
          style={{marginTop: '100px'}}
          title="Product"
          content=<p>Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Quidem provident, sequi minus, cupiditate ratione fugit vel accusantium asperiores, mollitia dolores atque magni perspiciatis unde repudiandae ipsam magnam illo voluptatum ullam. Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Excepturi ad, at labore consectetur nemo, maxime, hic tempora earum officia ex temporibus commodi accusamus dolorum officiis debitis facere, inventore et minus.</p>
        />

        <Text
          title="The scope"
          content=<ul>
            <li>Lorem, ipsum dolor, sit amet consectetur adipisicing elit.voluptatum ullam.</li>
            <li>Quidem provident, sequi minus, cupiditate ratione fugit vel accusantium asperiores, mollitia dolores atque magni perspiciatis unde repudiandae ipsam magnam illo voluptatum ullam.</li>
            <li>Lorem, ipsum dolor, sit amet consectetur adipisicing elit.voluptatum ullam.</li>
            <li>Quidem provident, sequi minus, cupiditate ratione fugit vel accusantium asperiores, mollitia dolores atque magni perspiciatis unde repudiandae ipsam magnam illo voluptatum ullam.</li>
          </ul>
        />

        <div className="img_block" style={{backgroundColor: "#959595"}}>
          <div className="images">
            <img src={img1} className="img img1" />
            <img src={img2} className="img img2" />
            <img src={img3} className="img img3" />
          </div>
          <div className="indicator">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        <Text
          title="Design Process"
          subtitle="Research"
          content=<p>Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Quidem provident, sequi minus, cupiditate ratione fugit vel accusantium asperiores, mollitia dolores atque magni perspiciatis unde repudiandae ipsam magnam illo voluptatum ullam.</p> 
          
        />
        <Text 
          style={{backgroundColor: 'lightgray'}}
          quotation='"The goal of learning a new language i to be able to real-world conversation."'
          quotation_author="Yulia Russian Language Student"
        />

        <Text
          subtitle="The problem" 
          content=<p>Lorem, ipsum dolor, sit amet consectetur adipisicing elit.</p> 
          creed="Quidem provident, sequi minus, cupiditate ratione fugit vel accusantium asperiores, mollitia dolores atque magni perspiciatis unde repudiandae ipsam magnam illo voluptatum ullam."
        />

        <div className="img_block" style={{backgroundColor: 'rgb(55, 55, 70)'}}>
          <div className="images" style={{width: '90%', margin: '0 auto'}}>
            <img src={imgp1} className="img imgp" />
            <img src={imgp2} className="img imgp" />
            <img src={imgp3} className="img imgp" />
            <img src={imgp4} className="img imgp" />
            <img src={imgp5} className="img imgp" />
          </div>
        </div>

        <Text
          subtitle="Cross platform experience"
          content=<p>Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Quidem provident, sequi minus, cupiditate ratione fugit vel accusantium asperiores, mollitia dolores atque magni perspiciatis unde repudiandae ipsam magnam illo voluptatum ullam.</p>
        />

        <div className="img_block" style={{backgroundColor: '#1f166a'}}>
          <div className="images">
            <img src={imge1} className="img imge1" />
            <img src={imge2} className="img imge2" />
            <img src={imge3} className="img imge3" />
            <img src={imge4} className="img imge4" />
            <img src={imge5} className="img imge5" />
            <img src={imge6} className="img imge6" />
            <img src={imge7} className="img imge7" />
          </div>
        </div>
      </div>
    );
  }
}

//===============================

ReactDOM.render(
  <Markup />,
  document.getElementById('root')
);