import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <WhatsAppIcon />
        <InstagramIcon/>
        <TwitterIcon />
        <TelegramIcon />
      </div>
      <p> &copy; 2022 Amostech.com</p>
    </div>
  );
}

export default Footer;
