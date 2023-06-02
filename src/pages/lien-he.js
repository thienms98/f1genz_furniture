import React from 'react';
import HomeLayout from '~/layouts';
import Head from 'next/head';

const Contact = () => {
  return (
    <HomeLayout>
      <Head>
        <link rel="stylesheet" href="/css/lienhe.css" type="text/css" media="all" />
      </Head>
      <main class="main-layout">
        <div class="page-about-new" data-page-id="2300191">
          <div class="container">
            <div class="page-about-new-main">
              <div class="page-about-new-main-item">
                <div class="page-about-new-main-item-left">
                  <img
                    title="Về Chúng Tôi"
                    src="//bizweb.dktcdn.net/100/482/001/themes/906081/assets/page-about-new-image-1.png?1684771044770"
                    class="img-fluid"
                    alt="Về Chúng Tôi"
                  />
                </div>
                <div class="page-about-new-main-item-right">
                  <div class="section-title-all">
                    <span>Về Chúng Tôi</span>
                    <p>
                      F1GENZ FURNITURE là một thương hiệu chuyên cung cấp các dịch vụ thiết kế đến thi công nội thất
                      trọn gói cho căn hộ. Chúng tôi là một công ty liên doanh giữa Việt Nam và Hong Kong. Với mục tiêu
                      mang lại cho bạn không gian lý tưởng, sản phẩm nội thất sáng tạo, dịch vụ chuyên nghiệp. Chúng tôi
                      luôn xây dựng một mối quan hệ chặt chẽ với khách hàng và tiếp cận trực tiếp với các dự án. Các
                      thiết kế của F1GENZ FURNITURE luôn độc đáo và phù hợp theo không gian của bạn. Chúng tôi luôn phát
                      triển các gói nội thất mang tính đặc trưng, hấp dẫn và luôn đảm bảo chất lượng tốt.
                    </p>
                  </div>
                </div>
              </div>
              <div class="page-about-new-main-item">
                <div class="page-about-new-main-item-left">
                  <img
                    title="Liên hệ"
                    src="//bizweb.dktcdn.net/100/482/001/themes/906081/assets/page-about-new-image-2.png?1684771044770"
                    class="img-fluid"
                    alt="Liên hệ"
                  />
                </div>
                <div class="page-about-new-main-item-right">
                  <div class="section-title-all">
                    <span>Liên hệ</span>
                    <p>
                      F1GENZ FURNITURE tự hào cung cấp đến bạn những thiết kế đầy sáng tạo của đội ngũ chuyên nghiệp và
                      đó là chìa khóa thành công của công ty chúng tôi. Luôn lắng nghe những cảm hứng và ý tưởng của
                      khách hàng và giúp những ước mơ của mỗi cá nhân trở thành hiện thực, điều này tạo thêm sự tin
                      tưởng và thân thiện khi khách hàng làm việc với F1GENZ FURNITURE.
                    </p>
                  </div>
                </div>
              </div>
              <div class="page-about-new-contact">
                <form method="post" action="/postcontact" id="contact" accept-charset="UTF-8">
                  <input name="FormType" type="hidden" value="contact" />
                  <input name="utf8" type="hidden" value="true" />
                  <input
                    type="hidden"
                    id="Token-0e6ebfc57ed24788be5629b2615059c3"
                    name="Token"
                    value="03AL8dmw_ylWvqXX-oxnEM0DX6B5kVriW4yfrNzApkdjzPDJfJmNnBbYdPDlEt5u7XM4B4UWkoPPvXdcNUS5KaouuaerZjByqnDyq2xeba00t2y9SmQZCozFBFlUCmITXl-BVnm8_J0QYJKblfcDcCmAnp_9oamn5T1d9K-I0EzlOaHqhh-hDLolqu8NfjVgg_G_Rc3a2q3Fr150BCH7FMhroE7jSdgOwBL6eEeq7Vc3N7RSA7fOEvICoAuw6SqE0IpApVa4BfSFGBUYIOlTyBZccdajuEzs2CyZHKKs8FKikyEnFpp4tWHwCgR_YV9_uxLyWLfvHyqKGGMXXK7fJa6jVxz33vahP9HZYF7UH0WTrSyEfTkSJShvk8vZdFcbC4A4D7xgR44rcfWzNUCevul3ficyD2XU5anpzknpKar4nmpo0Axa0As4OoJJwvn6CJSHXNta61ucuChS13jokYpfUcOa0VXf1-25YiugJI8husioARs_q9_9_VdGlxquQ9bHx9LX4q5ApWKxval-vwkOFmB8zykbmksyoKSH3hUPo-luO49d0dFyU"
                  />
                  <div class="section-title-all">
                    <span>Kết nối ngay với chúng tôi</span>
                    <h1 hidden="">Liên hệ</h1>
                  </div>
                  <input
                    required=""
                    type="text"
                    id="contactFormName"
                    class="form-control input-lg"
                    name="contact[name]"
                    placeholder="Tên của bạn"
                    autocapitalize="words"
                    value=""
                  />
                  <input
                    required=""
                    type="number"
                    id="contactFormPhone"
                    class="form-control input-lg"
                    name="contact[phone]"
                    placeholder="Số điện thoại của bạn"
                    autocapitalize="words"
                    value=""
                  />
                  <input
                    required=""
                    type="email"
                    name="contact[email]"
                    placeholder="Email của bạn"
                    id="contactFormEmail"
                    class="form-control input-lg"
                    autocapitalize="off"
                    value=""
                  />
                  <textarea
                    required=""
                    rows="6"
                    name="contact[body]"
                    class="form-control"
                    placeholder="Viết bình luận"
                    id="contactFormMessage"
                  ></textarea>
                  <button type="submit" class="btn btn-outline insButton" title="Gửi thông tin">
                    Gửi thông tin
                  </button>
                  <ul class="shop-social">
                    <li>
                      <a href="/collections/all" target="_blank" title="Chia sẻ qua Facebook">
                        <img
                          width="30"
                          height="30"
                          class=" lazyloaded"
                          src="https://file.hstatic.net/200000588277/file/facebook__6__53aaa8d352524d3eb025af5203eaa437_icon.png"
                          data-src="https://file.hstatic.net/200000588277/file/facebook__6__53aaa8d352524d3eb025af5203eaa437_icon.png"
                          alt=" - Facebook"
                        />
                      </a>
                    </li>

                    <li>
                      <a href="/collections/all" target="_blank" title="Chia sẻ qua Youtube">
                        <img
                          width="30"
                          height="30"
                          class=" lazyloaded"
                          src="https://file.hstatic.net/200000588277/file/youtube__5__4f04522e10494557a651f53a33ad4d76_icon.png"
                          data-src="https://file.hstatic.net/200000588277/file/youtube__5__4f04522e10494557a651f53a33ad4d76_icon.png"
                          alt=" - Youtube"
                        />
                      </a>
                    </li>

                    <li>
                      <a href="/collections/all" target="_blank" title="Chia sẻ qua Pinterest">
                        <img
                          width="30"
                          height="30"
                          class=" lazyloaded"
                          src="https://file.hstatic.net/200000588277/file/pinterest_a1a15995132a4275845412deba5f1193_icon.png"
                          data-src="https://file.hstatic.net/200000588277/file/pinterest_a1a15995132a4275845412deba5f1193_icon.png"
                          alt=" - Pinterest"
                        />
                      </a>
                    </li>

                    <li>
                      <a href="/collections/all" target="_blank" title="Chia sẻ qua Tiktok">
                        <img
                          width="30"
                          height="30"
                          class=" lazyloaded"
                          src="https://file.hstatic.net/200000588277/file/tik-tok_d85bb4e7468c43ac9ed5437649b7405c_icon.png"
                          data-src="https://file.hstatic.net/200000588277/file/tik-tok_d85bb4e7468c43ac9ed5437649b7405c_icon.png"
                          alt=" - Twitter"
                        />
                      </a>
                    </li>

                    <li>
                      <a href="/collections/all" target="_blank" title="Chia sẻ qua Instagram">
                        <img
                          width="30"
                          height="30"
                          class=" lazyloaded"
                          src="https://file.hstatic.net/200000588277/file/instagram__3__7de3ebbce1f24003b516ca6c1d7c24d5_icon.png"
                          data-src="https://file.hstatic.net/200000588277/file/instagram__3__7de3ebbce1f24003b516ca6c1d7c24d5_icon.png"
                          alt=" - Linkedin"
                        />
                      </a>
                    </li>
                  </ul>
                </form>
                <div class="page-about-new-contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6177130569445!2d106.6541090152164!3d10.763917262366853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eec413c9d8d%3A0xfd53ac27a1acd021!2zMTgyIMSQLiBMw6ogxJDhuqFpIEjDoG5oLCBQaMaw4budbmcgMTUsIFF14bqtbiAxMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1666321027665!5m2!1svi!2s"
                    width="100"
                    height="450"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </HomeLayout>
  );
};

export default Contact;
