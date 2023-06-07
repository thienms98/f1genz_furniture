import React from 'react';
import Link from 'next/link';
import MagnifyingGlassIcon from '~/components/icon/magnifyingGlass';
import { menu } from '~/data/menu';
import Menu from '~/components/Header/Menu';

import NewsLayout from '~/layouts/news';

const News = () => {
  return (
    <NewsLayout>
      <main className="main-layout">
        <div className="main-blog" data-blog-id="611051">
          <div
            className="main-blog-breadcrumb"
            title="Tin tức"
            style={{
              backgroundImage:
                "url('https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/main_blog_breadcrumb_bg.png?1684771044770')",
            }}
          >
            <div className="container">
              <div className="section-title-all">
                <h1>Tin tức</h1>
              </div>
              <div className="breadcrumb-wrap">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Trang chủ</Link>
                  </li>
                  <li className="breadcrumb-item active">
                    <span>Blog - Tin tức</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="main-blog-wrap">
              <div className="main-blog-left">
                <div className="main-blog-left-data">
                  <article className="article-item " data-index="1">
                    <div className="article-item-wrap">
                      <div className="article-item-image">
                        <Link
                          href="/news/kinh-nghiem-lua-chon-noi-that-chung-cu"
                          title="Kinh nghiệm lựa chọn nội thất chung cư"
                          rel="nofollow"
                        >
                          <img
                            src="//bizweb.dktcdn.net/thumb/grande/100/482/001/articles/blog2-1-3524a4d36acf465e8e1f3ed9-30c9accf60e142d9886251f7730c33fd.jpg?v=1680759065870"
                            className=" lazyloaded"
                            data-src="//bizweb.dktcdn.net/thumb/grande/100/482/001/articles/blog2-1-3524a4d36acf465e8e1f3ed9-30c9accf60e142d9886251f7730c33fd.jpg?v=1680759065870"
                            alt="Kinh nghiệm lựa chọn nội thất chung cư"
                          />
                          <MagnifyingGlassIcon />
                        </Link>
                      </div>
                      <div className="article-item-detail">
                        <h3 className="article-item-detail-name">
                          <Link
                            href="/news/kinh-nghiem-lua-chon-noi-that-chung-cu"
                            title="Kinh nghiệm lựa chọn nội thất chung cư"
                          >
                            Kinh nghiệm lựa chọn nội thất chung cư
                          </Link>
                        </h3>
                        <strong className="article-item-detail-info">30.09.2022 / Công Ty TNHH KTCN F1GENZ</strong>
                        <p className="article-item-detail-des">
                          Bạn có muốn căn hộ chung cư nhỏ bé của mình đáp ứng đầy đủ công năng sử dụng mà vẫn gọn gàng,
                          đảm bảo tính thẩm mỹ? F1GENZ Nội Thất sẽ bật mí cho bạn một số kinh nghiệm lựa chọn nội thất
                          cho nhà chung cư diện tích nhỏ với phong cách sang...
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="article-item " data-index="2">
                    <div className="article-item-wrap">
                      <div className="article-item-image">
                        <Link
                          href="/news/kinh-nghiem-chon-den-led-trang-tri-noi-that"
                          title="Kinh nghiệm chọn đèn LED trang trí nội thất"
                          rel="nofollow"
                        >
                          <img
                            src="//bizweb.dktcdn.net/thumb/grande/100/482/001/articles/blog3-c747c021d13c4b889f6c3a95d6-f736f5c6938943f0b9165c8b87c7166e.jpg?v=1680759066097"
                            className=" lazyloaded"
                            data-src="//bizweb.dktcdn.net/thumb/grande/100/482/001/articles/blog3-c747c021d13c4b889f6c3a95d6-f736f5c6938943f0b9165c8b87c7166e.jpg?v=1680759066097"
                            alt="Kinh nghiệm chọn đèn LED trang trí nội thất"
                          />
                          <MagnifyingGlassIcon />
                        </Link>
                      </div>
                      <div className="article-item-detail">
                        <h3 className="article-item-detail-name">
                          <Link
                            href="/news/kinh-nghiem-chon-den-led-trang-tri-noi-that"
                            title="Kinh nghiệm chọn đèn LED trang trí nội thất"
                          >
                            Kinh nghiệm chọn đèn LED trang trí nội thất
                          </Link>
                        </h3>
                        <strong className="article-item-detail-info">30.09.2022 / F1GENZ Furniture</strong>
                        <p className="article-item-detail-des">
                          Hiện nay khoa học công nghệ phát triển, một loại thiết bị điện mới ra đời và được ưa chuộng.
                          Đó chính là đèn LED trang trí nội thất. Bởi, nó có nhiều ưu thế vượt trội hơn so với các sản
                          phẩm bóng đèn truyền thống như màu sắc đa dạng, tuổi thọ trung...
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="article-item " data-index="3">
                    <div className="article-item-wrap">
                      <div className="article-item-image">
                        <Link
                          href="/news/tai-sao-mau-nau-luon-duoc-ua-chuong-trong-thiet-ke-noi-that"
                          title="Tại sao màu nâu luôn được ưa chuộng trong thiết kế nội thất?"
                          rel="nofollow"
                        >
                          <img
                            src="//bizweb.dktcdn.net/thumb/grande/100/482/001/articles/blog7-1-642c28eca458452db72ebc36-aa47987c65b842b0839047171f834f06.jpg?v=1680759065690"
                            className=" lazyloaded"
                            data-src="//bizweb.dktcdn.net/thumb/grande/100/482/001/articles/blog7-1-642c28eca458452db72ebc36-aa47987c65b842b0839047171f834f06.jpg?v=1680759065690"
                            alt="Tại sao màu nâu luôn được ưa chuộng trong thiết kế nội thất?"
                          />
                          <MagnifyingGlassIcon />
                        </Link>
                      </div>
                      <div className="article-item-detail">
                        <h3 className="article-item-detail-name">
                          <Link
                            href="/news/tai-sao-mau-nau-luon-duoc-ua-chuong-trong-thiet-ke-noi-that"
                            title="Tại sao màu nâu luôn được ưa chuộng trong thiết kế nội thất?"
                          >
                            Tại sao màu nâu luôn được ưa chuộng trong thiết kế nội thất?
                          </Link>
                        </h3>
                        <strong className="article-item-detail-info">30.09.2022 / Công Ty TNHH KTCN F1GENZ</strong>
                        <p className="article-item-detail-des">
                          Trong thiết kế nội thất, màu sắc luôn đóng vai trò hết sức quan trọng. Trong đó có màu nâu rất
                          được ưa chuộng. Hãy xem lý do tại sao nhé! Tại sao màu nâu đang ngày càng được ưa chuộng? Màu
                          nâu – giống như một màu nền tảng Trong thập kỷ qua, màu xám, trắng...
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="article-item " data-index="4">
                    <div className="article-item-wrap">
                      <div className="article-item-image">
                        <Link
                          href="/news/ghe-armchair-dep-la-gi-cach-de-chon-ghe-armchair-dung-chuan"
                          title="Ghế Armchair đẹp là gì? Cách để chọn ghế Armchair đúng chuẩn!"
                          rel="nofollow"
                        >
                          <img
                            src="//bizweb.dktcdn.net/thumb/grande/100/482/001/articles/blog9-1-a6649f4aa0f44baa9994a0fa-4a57509aa03a48fc9226b9457732f646.png?v=1680759066187"
                            className=" lazyloaded"
                            data-src="//bizweb.dktcdn.net/thumb/grande/100/482/001/articles/blog9-1-a6649f4aa0f44baa9994a0fa-4a57509aa03a48fc9226b9457732f646.png?v=1680759066187"
                            alt="Ghế Armchair đẹp là gì? Cách để chọn ghế Armchair đúng chuẩn!"
                          />
                          <MagnifyingGlassIcon />
                        </Link>
                      </div>
                      <div className="article-item-detail">
                        <h3 className="article-item-detail-name">
                          <Link
                            href="/news/ghe-armchair-dep-la-gi-cach-de-chon-ghe-armchair-dung-chuan"
                            title="Ghế Armchair đẹp là gì? Cách để chọn ghế Armchair đúng chuẩn!"
                          >
                            Ghế Armchair đẹp là gì? Cách để chọn ghế Armchair đúng chuẩn!
                          </Link>
                        </h3>
                        <strong className="article-item-detail-info">30.09.2022 / Công Ty TNHH KTCN F1GENZ</strong>
                        <p className="article-item-detail-des">
                          Ghế Armchair đẹp không chỉ giúp bạn có khoảng thời gian thoải mái mà còn là một cách độc đáo
                          để trang trí thêm cho không gian. Hãy cùng xem những cách chọn ghế Armchair đẹp dưới đây nhé!
                          Ghế&nbsp;Armchair&nbsp;là gì? Ghế Armchair còn có cách gọi khác là ghế bành. Ghế Armchair là
                          loại ghế có...
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="article-item " data-index="5">
                    <div className="article-item-wrap">
                      <div className="article-item-image">
                        <Link
                          href="/news/phong-bep-go-va-xu-huong-thiet-ke-de-chon-dung-san-pham"
                          title="Phòng bếp gỗ và xu hướng thiết kế để chọn đúng sản phẩm"
                          rel="nofollow"
                        >
                          <img
                            src="//bizweb.dktcdn.net/thumb/grande/100/482/001/articles/blog-detail-f6cbe09e8f544acab735-b52ae122f0ed41d8adacc8dd77f144d4.jpg?v=1680759066047"
                            className=" lazyloaded"
                            data-src="//bizweb.dktcdn.net/thumb/grande/100/482/001/articles/blog-detail-f6cbe09e8f544acab735-b52ae122f0ed41d8adacc8dd77f144d4.jpg?v=1680759066047"
                            alt="Phòng bếp gỗ và xu hướng thiết kế để chọn đúng sản phẩm"
                          />
                          <MagnifyingGlassIcon />
                        </Link>
                      </div>
                      <div className="article-item-detail">
                        <h3 className="article-item-detail-name">
                          <Link
                            href="/news/phong-bep-go-va-xu-huong-thiet-ke-de-chon-dung-san-pham"
                            title="Phòng bếp gỗ và xu hướng thiết kế để chọn đúng sản phẩm"
                          >
                            Phòng bếp gỗ và xu hướng thiết kế để chọn đúng sản phẩm
                          </Link>
                        </h3>
                        <strong className="article-item-detail-info">30.09.2022 / Công Ty TNHH KTCN F1GENZ</strong>
                        <p className="article-item-detail-des">
                          Phòng bếp trong mỗi gia đình là không gian mà các thành viên cùng nhau tận hưởng những bữa ăn
                          thân mật, cùng nhau trò chuyện sau một ngày làm việc mệt mỏi. Chính vì vậy mà không gian này
                          cũng được chú trọng không kém gì so với phòng khách. Và phòng bếp với...
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="article-item " data-index="6">
                    <div className="article-item-wrap">
                      <div className="article-item-image">
                        <Link
                          href="/news/tong-hop-nhung-kien-thuc-co-ban-ve-thiet-ke-noi-that"
                          title="Tổng hợp những kiến thức cơ bản về thiết kế nội thất"
                          rel="nofollow"
                        >
                          <img
                            src="//bizweb.dktcdn.net/thumb/grande/100/482/001/articles/blog12-ba27e3cb32cd40b581018f9f5-acad2b1753a8494a916c789fe5f9d884.jpg?v=1680759066120"
                            className=" lazyloaded"
                            data-src="//bizweb.dktcdn.net/thumb/grande/100/482/001/articles/blog12-ba27e3cb32cd40b581018f9f5-acad2b1753a8494a916c789fe5f9d884.jpg?v=1680759066120"
                            alt="Tổng hợp những kiến thức cơ bản về thiết kế nội thất"
                          />
                          <MagnifyingGlassIcon />
                        </Link>
                      </div>
                      <div className="article-item-detail">
                        <h3 className="article-item-detail-name">
                          <Link
                            href="/news/tong-hop-nhung-kien-thuc-co-ban-ve-thiet-ke-noi-that"
                            title="Tổng hợp những kiến thức cơ bản về thiết kế nội thất"
                          >
                            Tổng hợp những kiến thức cơ bản về thiết kế nội thất
                          </Link>
                        </h3>
                        <strong className="article-item-detail-info">29.09.2022 / Công Ty TNHH KTCN F1GENZ</strong>
                        <p className="article-item-detail-des">
                          Thiết kế nội thất là lĩnh vực đặc biệt không chỉ đòi hỏi sự sáng tạo mà còn cả kiến thức
                          chuyên môn sâu rộng. Tuy nhiên, những kiến thức chuyên môn sâu chỉ dành cho kiến trúc sư hoạt
                          động trong ngành thiết kế nội thất. Ở góc độ khác, quý vị chỉ cần nắm...
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="shop-pagination"></div>
              </div>
              <div className="main-blog-right">
                <div className="main-blog-right-newest">
                  <div className="section-title-all">
                    <span>Đừng bỏ lỡ.</span>
                  </div>
                  <article className="article-item layout-small" data-index="1">
                    <div className="article-item-wrap">
                      <div className="article-item-image">
                        <Link
                          href="/news/kinh-nghiem-lua-chon-noi-that-chung-cu"
                          title="Kinh nghiệm lựa chọn nội thất chung cư"
                          rel="nofollow"
                        >
                          <img
                            src="//bizweb.dktcdn.net/thumb/medium/100/482/001/articles/blog2-1-3524a4d36acf465e8e1f3ed9-30c9accf60e142d9886251f7730c33fd.jpg?v=1680759065870"
                            className=" lazyloaded"
                            data-src="//bizweb.dktcdn.net/thumb/medium/100/482/001/articles/blog2-1-3524a4d36acf465e8e1f3ed9-30c9accf60e142d9886251f7730c33fd.jpg?v=1680759065870"
                            alt="Kinh nghiệm lựa chọn nội thất chung cư"
                          />
                          <MagnifyingGlassIcon />
                        </Link>
                      </div>
                      <div className="article-item-detail">
                        <h3 className="article-item-detail-name">
                          <Link
                            href="/news/kinh-nghiem-lua-chon-noi-that-chung-cu"
                            title="Kinh nghiệm lựa chọn nội thất chung cư"
                          >
                            Kinh nghiệm lựa chọn nội thất chung cư
                          </Link>
                        </h3>
                        <strong className="article-item-detail-info">30.09.2022 / Công Ty TNHH KTCN F1GENZ</strong>
                        <p className="article-item-detail-des">
                          Bạn có muốn căn hộ chung cư nhỏ bé của mình đáp ứng đầy đủ công năng sử dụng mà vẫn gọn gàng,
                          đảm bảo tính thẩm mỹ? F1GENZ Nội Thất sẽ bật mí cho bạn một số kinh nghiệm lựa chọn nội thất
                          cho nhà chung cư diện tích nhỏ với phong cách sang...
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="article-item layout-small" data-index="2">
                    <div className="article-item-wrap">
                      <div className="article-item-image">
                        <Link
                          href="/news/kinh-nghiem-chon-den-led-trang-tri-noi-that"
                          title="Kinh nghiệm chọn đèn LED trang trí nội thất"
                          rel="nofollow"
                        >
                          <img
                            src="//bizweb.dktcdn.net/thumb/medium/100/482/001/articles/blog3-c747c021d13c4b889f6c3a95d6-f736f5c6938943f0b9165c8b87c7166e.jpg?v=1680759066097"
                            className=" lazyloaded"
                            data-src="//bizweb.dktcdn.net/thumb/medium/100/482/001/articles/blog3-c747c021d13c4b889f6c3a95d6-f736f5c6938943f0b9165c8b87c7166e.jpg?v=1680759066097"
                            alt="Kinh nghiệm chọn đèn LED trang trí nội thất"
                          />
                          <MagnifyingGlassIcon />
                        </Link>
                      </div>
                      <div className="article-item-detail">
                        <h3 className="article-item-detail-name">
                          <Link
                            href="/news/kinh-nghiem-chon-den-led-trang-tri-noi-that"
                            title="Kinh nghiệm chọn đèn LED trang trí nội thất"
                          >
                            Kinh nghiệm chọn đèn LED trang trí nội thất
                          </Link>
                        </h3>
                        <strong className="article-item-detail-info">30.09.2022 / F1GENZ Furniture</strong>
                        <p className="article-item-detail-des">
                          Hiện nay khoa học công nghệ phát triển, một loại thiết bị điện mới ra đời và được ưa chuộng.
                          Đó chính là đèn LED trang trí nội thất. Bởi, nó có nhiều ưu thế vượt trội hơn so với các sản
                          phẩm bóng đèn truyền thống như màu sắc đa dạng, tuổi thọ trung...
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="article-item layout-small" data-index="3">
                    <div className="article-item-wrap">
                      <div className="article-item-image">
                        <Link
                          href="/news/tai-sao-mau-nau-luon-duoc-ua-chuong-trong-thiet-ke-noi-that"
                          title="Tại sao màu nâu luôn được ưa chuộng trong thiết kế nội thất?"
                          rel="nofollow"
                        >
                          <img
                            src="//bizweb.dktcdn.net/thumb/medium/100/482/001/articles/blog7-1-642c28eca458452db72ebc36-aa47987c65b842b0839047171f834f06.jpg?v=1680759065690"
                            className=" lazyloaded"
                            data-src="//bizweb.dktcdn.net/thumb/medium/100/482/001/articles/blog7-1-642c28eca458452db72ebc36-aa47987c65b842b0839047171f834f06.jpg?v=1680759065690"
                            alt="Tại sao màu nâu luôn được ưa chuộng trong thiết kế nội thất?"
                          />
                          <MagnifyingGlassIcon />
                        </Link>
                      </div>
                      <div className="article-item-detail">
                        <h3 className="article-item-detail-name">
                          <Link
                            href="/news/tai-sao-mau-nau-luon-duoc-ua-chuong-trong-thiet-ke-noi-that"
                            title="Tại sao màu nâu luôn được ưa chuộng trong thiết kế nội thất?"
                          >
                            Tại sao màu nâu luôn được ưa chuộng trong thiết kế nội thất?
                          </Link>
                        </h3>
                        <strong className="article-item-detail-info">30.09.2022 / Công Ty TNHH KTCN F1GENZ</strong>
                        <p className="article-item-detail-des">
                          Trong thiết kế nội thất, màu sắc luôn đóng vai trò hết sức quan trọng. Trong đó có màu nâu rất
                          được ưa chuộng. Hãy xem lý do tại sao nhé! Tại sao màu nâu đang ngày càng được ưa chuộng? Màu
                          nâu – giống như một màu nền tảng Trong thập kỷ qua, màu xám, trắng...
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="article-item layout-small" data-index="4">
                    <div className="article-item-wrap">
                      <div className="article-item-image">
                        <Link
                          href="/news/ghe-armchair-dep-la-gi-cach-de-chon-ghe-armchair-dung-chuan"
                          title="Ghế Armchair đẹp là gì? Cách để chọn ghế Armchair đúng chuẩn!"
                          rel="nofollow"
                        >
                          <img
                            src="//bizweb.dktcdn.net/thumb/medium/100/482/001/articles/blog9-1-a6649f4aa0f44baa9994a0fa-4a57509aa03a48fc9226b9457732f646.png?v=1680759066187"
                            className=" lazyloaded"
                            data-src="//bizweb.dktcdn.net/thumb/medium/100/482/001/articles/blog9-1-a6649f4aa0f44baa9994a0fa-4a57509aa03a48fc9226b9457732f646.png?v=1680759066187"
                            alt="Ghế Armchair đẹp là gì? Cách để chọn ghế Armchair đúng chuẩn!"
                          />
                          <MagnifyingGlassIcon />
                        </Link>
                      </div>
                      <div className="article-item-detail">
                        <h3 className="article-item-detail-name">
                          <Link
                            href="/news/ghe-armchair-dep-la-gi-cach-de-chon-ghe-armchair-dung-chuan"
                            title="Ghế Armchair đẹp là gì? Cách để chọn ghế Armchair đúng chuẩn!"
                          >
                            Ghế Armchair đẹp là gì? Cách để chọn ghế Armchair đúng chuẩn!
                          </Link>
                        </h3>
                        <strong className="article-item-detail-info">30.09.2022 / Công Ty TNHH KTCN F1GENZ</strong>
                        <p className="article-item-detail-des">
                          Ghế Armchair đẹp không chỉ giúp bạn có khoảng thời gian thoải mái mà còn là một cách độc đáo
                          để trang trí thêm cho không gian. Hãy cùng xem những cách chọn ghế Armchair đẹp dưới đây nhé!
                          Ghế&nbsp;Armchair&nbsp;là gì? Ghế Armchair còn có cách gọi khác là ghế bành. Ghế Armchair là
                          loại ghế có...
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="main-blog-right-menu">
                  <div className="section-title-all">
                    <span>Danh mục Blog</span>
                  </div>
                  <ul className="main-blog-right-menu-data">
                    <Menu data={menu['Danh mục menu']} />
                  </ul>
                </div>
                <div className="main-blog-right-banner">
                  <Link href="/" title="Bạn cần tư vấn?">
                    <div className="section-title-all">
                      <span>Bạn cần tư vấn?</span>
                    </div>
                    <picture>
                      <source
                        media="(max-width: 767px)"
                        srcset="//bizweb.dktcdn.net/100/482/001/themes/906081/assets/main_blog_banner_image_mob.png?1684771044770"
                      />
                      <source
                        media="(min-width: 767px)"
                        srcset="//bizweb.dktcdn.net/100/482/001/themes/906081/assets/main_blog_banner_image.png?1684771044770"
                      />
                      <img
                        src="//bizweb.dktcdn.net/100/482/001/themes/906081/assets/main_blog_banner_image.png?1684771044770"
                        alt="Bạn cần tư vấn?"
                      />
                    </picture>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </NewsLayout>
  );
};

export default News;
