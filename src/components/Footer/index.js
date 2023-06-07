import Link from 'next/link';
import { menu } from '~/data/menu';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {menu[2].children.map((item, index) => (
            <div key={index} className="footer-top-item">
              <h4>{item.title}</h4>
              <ul className="footer-top-item-content">
                {item.children.map((child, idx) => (
                  <li key={idx + 1 * index + 1}>
                    {child.url ? (
                      <Link href={child.url} title={child.title}>
                        {child.title}
                      </Link>
                    ) : (
                      child.title
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* <div className="footer-top-item">
            <h4>Dịch vụ khách hàng</h4>
            <ul className="footer-top-item-content">
              {Object.keys(menu.footer['Dịch vụ khách hàng']).map((item) => (
                <li key={item}>
                  <Link href={menu.footer['Dịch vụ khách hàng'][item]} title={item}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-top-item">
            <h4>Thông tin</h4>
            <ul className="footer-top-item-content">
              {Object.keys(menu.footer['Thông tin']).map((item) => (
                <li key={item}>
                  <Link href={menu.footer['Thông tin'][item]} title={item}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-top-item">
            <h4>Về chúng tôi</h4>
            <ul className="footer-top-item-content">
              {Object.keys(menu.footer['Về chúng tôi']).map((item) => (
                <li key={item}>
                  <Link href={menu.footer['Về chúng tôi'][item]} title={item}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-top-item">
            <h4>Liên hệ</h4>
            <div className="footer-top-item-content">{menu.footer['Liên hệ']}</div>
          </div> */}
        </div>
      </div>
      <div className="footer-bot">
        <div className="container">
          <div className="copyright">
            <div className="row align-items-center">
              <div className="col-md-3 text-md-left  text-center">
                <div className="logo-footer">
                  <Link href="//f1genz-furniture.mysapo.net" className="logo" title="F1GENZ Furniture">
                    <img
                      loading="lazy"
                      width="150"
                      height="40"
                      src="//bizweb.dktcdn.net/thumb/medium/100/482/001/themes/906081/assets/logo_fbottom.png?1684771044770"
                      alt="F1GENZ Furniture"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-4  text-center"></div>
              <div className="col-md-5  text-md-right  text-center">
                <p className="text-copyright mb-0">
                  © 2023 - All rights reserved by
                  <Link target="_blank" href="https://f1genz.com/">
                    F1GENZ TECHNOLOGY CO., LTD.
                  </Link>
                  Powered by Sapo{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
