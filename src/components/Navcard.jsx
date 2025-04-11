import React from 'react'
import { Dropdown } from 'react-bootstrap'
import './Header.css';
import './Navcard.css';

const Navcard = () => {
  return (
   <div className="nav-card-container">
     <div className="card nav-card">
        <div className="card-header">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <img src="https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100" alt="Television"/>
                        <p>Television</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <img src="https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100" alt="Air Conditioner"/>
                        <p>Air Conditioner</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="Washing Machine"/>
                        <p>Washing Machine</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="Refrigerator"/>
                        <p>Refrigerator</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="Water Purifier"/>
                        <p>Water Purifier</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="Commercial AC"/>
                        <p>Commercial AC</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <img src="https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100" alt="Mixer Juicer"/>
                        <p>Mixer Juicer</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <img src="https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100" alt="Microwave"/>
                        <p>Microwave</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <img src="https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100" alt="Atta Chakki"/>
                        <p>Atta Chakki</p>
                    </a>
                </li>
            </ul>
        </div>
     </div>
   </div>
  )
}

export default Navcard