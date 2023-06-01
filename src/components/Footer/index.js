import Link from 'next/link';

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-top-item">
            <h4>Dịch vụ khách hàng</h4>
            <ul class="footer-top-item-content">
              <li>
                <Link href="/gioi-thieu" title="Giới thiệu">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/chinh-sach-doi-tra" title="Chính sách đổi trả">
                  Chính sách đổi trả
                </Link>
              </li>
              <li>
                <Link href="/chinh-sach-bao-mat" title="Chính sách bảo mật">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="/" title="Chính sách khiếu nại">
                  Chính sách khiếu nại
                </Link>
              </li>
              <li>
                <Link href="/dieu-khoan-dich-vu" title="Điều khoản dịch vụ">
                  Điều khoản dịch vụ
                </Link>
              </li>
              <li>
                <Link href="/lien-he" title="Liên hệ">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
          <div class="footer-top-item">
            <h4>Thông tin</h4>
            <ul class="footer-top-item-content">
              <li>
                <Link href="/collections/all" title="Tất cả sản phẩm">
                  Tất cả sản phẩm
                </Link>
              </li>
              <li>
                <Link href="/" title="Nội thất phòng khách">
                  Nội thất phòng khách
                </Link>
              </li>
              <li>
                <Link href="/" title="Nội thất phòng ngủ">
                  Nội thất phòng ngủ
                </Link>
              </li>
              <li>
                <Link href="/" title="Nội thất phòng bếp">
                  Nội thất phòng bếp
                </Link>
              </li>
              <li>
                <Link href="/" title="Nội thất thông minh">
                  Nội thất thông minh
                </Link>
              </li>
            </ul>
          </div>

          <div class="footer-top-item">
            <h4>Về chúng tôi</h4>
            <ul class="footer-top-item-content">
              <li>
                <Link href="/gioi-thieu" title="Giới thiệu">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/chinh-sach-doi-tra" title="Chính sách đổi trả">
                  Chính sách đổi trả
                </Link>
              </li>
              <li>
                <Link href="/chinh-sach-bao-mat" title="Chính sách bảo mật">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="/" title="Chính sách khiếu nại">
                  Chính sách khiếu nại
                </Link>
              </li>
              <li>
                <Link href="/dieu-khoan-dich-vu" title="Điều khoản dịch vụ">
                  Điều khoản dịch vụ
                </Link>
              </li>
              <li>
                <Link href="/lien-he" title="Liên hệ">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
          <div class="footer-top-item">
            <h4>Liên hệ</h4>
            <div class="footer-top-item-content">
              Chúng tôi hướng tới sự khác biệt trong từng chi tiết, tạo nên ngôn ngữ riêng cho bày trí nội thất, đem đến
              một không gian tinh tế trong từng đường nét. Nhưng trên tất cả, sự tin tưởng của khách hàng là điều F1GENZ
              FURNITURE 2 đề cao nhất, và đây cũng là tôn chỉ hoạt động của công ty. Do đó, đến với chúng tôi, hơn cả
              một không gian hoàn mỹ, khách...
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bot">
        <div class="container">
          <div class="copyright">
            <div class="row align-items-center">
              <div class="col-md-3 text-md-left  text-center">
                <div class="logo-footer">
                  <Link href="//f1genz-furniture.mysapo.net" class="logo" title="F1GENZ Furniture">
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
              <div class="col-md-4  text-center"></div>
              <div class="col-md-5  text-md-right  text-center">
                <p class="text-copyright mb-0">
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
