import React, {Component} from 'react';
import '../CSS/Footer.css';
import Twitter from '../Images/iconfinder_Circled_Twitter.png';
import Facebook from '../Images/iconfinder_Circled_Facebook.png';
import Instagram from '../Images/iconfinder_Circled_Instagram.png';
import Medium from '../Images/iconfinder_Circled_Medium.png';
class Footer extends Component {

    render(){
        return(
            <div className="footer">
                    <p>Connect With Me</p>
                    <ul>
                        <li><img src={Facebook} alt="facebook" /></li>
                        <li><img src={Twitter} alt="twitter" /></li>
                        <li><img src={Instagram} alt="instagram" /></li>
                        <li><img src={Medium} alt="medium" /></li>
                    </ul>
                
            </div>
        )
    }
}

export default Footer;