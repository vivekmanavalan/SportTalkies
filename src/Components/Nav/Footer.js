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
                        <li><a href="https://twitter.com/vivekvivy" target="blank"><img src={Twitter} alt="twitter" /></a></li>
                        <li><a href="https://www.instagram.com/vivy_baller/" target="blank"><img src={Instagram} alt="instagram" /></a></li>
                        <li><img src={Medium} alt="medium" /></li>
                    </ul>
                
            </div>
        )
    }
}

export default Footer;