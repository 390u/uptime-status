import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>基于 <Link to="https://uptimerobot.com/" text="UptimeRobot" /> 接口制作，检测频率 5 分钟</p>
        <p>&copy; 2020-2024 <Link to="https://paolu.cc/" text="paolu.cc 免费看电影" /></p>
      </div>
    </div>
  );
}

export default Footer;
