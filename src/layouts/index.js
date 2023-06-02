import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { useRef, useEffect } from 'react';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import CloseIcon from '~/components/icon/close';

const HomeLayout = (props) => {
  const bttRef = useRef(null); // btt: back to top

  useEffect(() => {
    const toggleBtt = () => {
      if (window.scrollY > 200) bttRef.current.classList.add('active');
      else bttRef.current.classList.remove('active');
    };
    window.addEventListener('scroll', toggleBtt);
    return () => window.removeEventListener('scroll', toggleBtt);
  }, []);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/static/css/globals.css" type="text/css" media="all" />
        <link rel="stylesheet" href="/static/css/home.css" type="text/css" media="all" />
        <link rel="stylesheet" href="/static/css/main.css" type="text/css" media="all" />
        <link rel="stylesheet" href="/static/css/plugin.css" type="text/css" media="all" />
        <link rel="stylesheet" href="/static/css/product_item.css" type="text/css" media="all" />
        <link rel="stylesheet" href="/static/css/styles__ltr.css" type="text/css" media="all" />
      </Head>
      <Header />
      {props.children}
      <div className="shop-social-sidebar d-none d-sm-block">
        <a style={{ backgroundColor: '#ffffff' }} href="/collections/all" title="Zalo" target="_blank">
          <Image
            className="w-100 lazyloaded"
            width="32"
            height="32"
            src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/shop_social_sidebar_item_image_1.png?1684771044770"
            data-src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/shop_social_sidebar_item_image_1.png?1684771044770"
            alt="Social Zalo"
          />
          Zalo
        </a>

        <a style={{ backgroundColor: '#ffffff' }} href="/collections/all" title="Snapchat" target="_blank">
          <Image
            className="w-100 lazyloaded"
            width="32"
            height="32"
            src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/shop_social_sidebar_item_image_2.png?1684771044770"
            data-src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/shop_social_sidebar_item_image_2.png?1684771044770"
            alt="Social Snapchat"
          />
          Snapchat
        </a>

        <a style={{ backgroundColor: '#ffffff' }} href="/collections/all" title="Tiktok" target="_blank">
          <Image
            className="w-100 lazyloaded"
            width="32"
            height="32"
            src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/shop_social_sidebar_item_image_3.png?1684771044770"
            data-src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/shop_social_sidebar_item_image_3.png?1684771044770"
            alt="Social Tiktok"
          />
          Tiktok
        </a>

        <a style={{ backgroundColor: '#ffffff' }} href="/collections/all" title="Instagram" target="_blank">
          <Image
            className="w-100 lazyloaded"
            width="32"
            height="32"
            src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/shop_social_sidebar_item_image_4.png?1684771044770"
            data-src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/shop_social_sidebar_item_image_4.png?1684771044770"
            alt="Social Instagram"
          />
          Instagram
        </a>

        <a style={{ backgroundColor: '#ffffff' }} href="/collections/all" title="Youtube" target="_blank">
          <Image
            className="w-100 lazyloaded"
            width="32"
            height="32"
            src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/shop_social_sidebar_item_image_5.png?1684771044770"
            data-src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/shop_social_sidebar_item_image_5.png?1684771044770"
            alt="Social Youtube"
          />
          Youtube
        </a>

        <a style={{ backgroundColor: '#ffffff' }} href="/collections/all" title="Messenger" target="_blank">
          <Image
            className="w-100 lazyloaded"
            width="32"
            height="32"
            src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/shop_social_sidebar_item_image_6.png?1684771044770"
            data-src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/shop_social_sidebar_item_image_6.png?1684771044770"
            alt="Social Messenger"
          />
          Messenger
        </a>

        <button
          className="back-to-top"
          title="Back to top"
          ref={bttRef}
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
        >
          <Image
            className="w-100 lazyloaded"
            width="32"
            height="32"
            src="https://file.hstatic.net/200000588277/file/arrow-up_eb1426bb7fc647eab89f9279695752cd.png"
            data-src="https://file.hstatic.net/200000588277/file/arrow-up_eb1426bb7fc647eab89f9279695752cd.png"
            alt="Back to top"
          />
          Lên đầu trang
        </button>
      </div>
      <div className="shop-menu-mobile" style={{ zIndex: 301 }}>
        <div className="shop-menu-mobile-head">
          <label>Menu</label>
          <button
            type="button"
            data-type="close-menu-mobile"
            title="Đóng"
            onClick={() => {
              document.body.classList.remove('open-overplay');
              document.body.classList.remove('open-noscroll');
              document.body.classList.remove('open-menu-mobile');
            }}
          >
            <CloseIcon />
          </button>
        </div>
        <ul className="shop-menu-mobile-body">
          <li className="">
            <Link href="/collections/all" title="Tất cả sản phẩm">
              Tất cả sản phẩm
            </Link>
          </li>
          <li className="hasChild">
            <Link href="/collections/all" title="Danh mục sản phẩm">
              Danh mục sản phẩm<span>›</span>
            </Link>
            <ul className="menu1">
              <li className="">
                <Link href="/collections/all?view=vertical" title="Danh mục Style 1">
                  Danh mục Style 1
                </Link>
              </li>
              <li className="">
                <Link href="/collections/all?view=horizontal" title="Danh mục Style 2">
                  Danh mục Style 2
                </Link>
              </li>
            </ul>
          </li>
          <li className="hasChild">
            <Link href="/products/tu-quan-ao-3-cua-f1genz-cao-cap" title="Chi tiết sản phẩm">
              Chi tiết sản phẩm<span>›</span>
            </Link>
            <ul className="menu1">
              <li className="">
                <Link
                  href="https://f1genz-furniture.mysapo.net/tu-quan-ao-3-cua-2-ngan-f1genz-cao-cap-4?view=style1"
                  title="Chi tiết Style 1"
                >
                  Chi tiết Style 1
                </Link>
              </li>
              <li className="">
                <Link
                  href="https://f1genz-furniture.mysapo.net/tu-quan-ao-3-cua-2-ngan-f1genz-cao-cap-4?view=style2"
                  title="Chi tiết Style 2"
                >
                  Chi tiết Style 2
                </Link>
              </li>
              <li className="">
                <Link
                  href="https://f1genz-furniture.mysapo.net/tu-quan-ao-3-cua-2-ngan-f1genz-cao-cap-4?view=style3"
                  title="Chi tiết Style 3"
                >
                  Chi tiết Style 3
                </Link>
              </li>
            </ul>
          </li>
          <li className="">
            <Link href="/news" title="Blogs">
              Blogs
            </Link>
          </li>
          <li className="">
            <Link href="/lien-he" title="Liên hệ">
              Liên hệ
            </Link>
          </li>
        </ul>
        <div className="shop-menu-mobile-foot">
          <div className="section-title-all">
            <span>Hổ trợ 24/7</span>
            <p>Đừng ngừng ngại liên hệ chúng tôi, hổ trợ 24/7 từ thứ 2 - thứ 7. Hotline: 1900.63.60.99</p>
          </div>
          <form
            id="mc-form3"
            action="https://gmail.us21.list-manage.com/subscribe/post?u=ddd0880c66f534593afa12e75&amp;id=fe6449bc79&amp;f_id=00cd9be1f0"
            novalidate="true"
          >
            <input
              aria-label="Địa chỉ Email"
              type="email"
              placeholder="Nhập địa ch"
              name="EMAIL"
              required=""
              autoComplete="off"
            />
            <button type="submit" title="Đăng ký nhận tin" name="subscribe">
              Đăng ký
            </button>
          </form>
          <ul className="shop-social">
            <li>
              <Link href="/collections/all" target="_blank" title="Chia sẻ qua Facebook">
                <img
                  width="30"
                  height="30"
                  className=" lazyloaded"
                  src="https://file.hstatic.net/200000588277/file/facebook__6__53aaa8d352524d3eb025af5203eaa437_icon.png"
                  data-src="https://file.hstatic.net/200000588277/file/facebook__6__53aaa8d352524d3eb025af5203eaa437_icon.png"
                  alt=" - Facebook"
                />
              </Link>
            </li>

            <li>
              <Link href="/collections/all" target="_blank" title="Chia sẻ qua Youtube">
                <img
                  width="30"
                  height="30"
                  className=" lazyloaded"
                  src="https://file.hstatic.net/200000588277/file/youtube__5__4f04522e10494557a651f53a33ad4d76_icon.png"
                  data-src="https://file.hstatic.net/200000588277/file/youtube__5__4f04522e10494557a651f53a33ad4d76_icon.png"
                  alt=" - Youtube"
                />
              </Link>
            </li>

            <li>
              <Link href="/collections/all" target="_blank" title="Chia sẻ qua Pinterest">
                <img
                  width="30"
                  height="30"
                  className=" lazyloaded"
                  src="https://file.hstatic.net/200000588277/file/pinterest_a1a15995132a4275845412deba5f1193_icon.png"
                  data-src="https://file.hstatic.net/200000588277/file/pinterest_a1a15995132a4275845412deba5f1193_icon.png"
                  alt=" - Pinterest"
                />
              </Link>
            </li>

            <li>
              <Link href="/collections/all" target="_blank" title="Chia sẻ qua Tiktok">
                <img
                  width="30"
                  height="30"
                  className=" lazyloaded"
                  src="https://file.hstatic.net/200000588277/file/tik-tok_d85bb4e7468c43ac9ed5437649b7405c_icon.png"
                  data-src="https://file.hstatic.net/200000588277/file/tik-tok_d85bb4e7468c43ac9ed5437649b7405c_icon.png"
                  alt=" - Twitter"
                />
              </Link>
            </li>

            <li>
              <Link href="/collections/all" target="_blank" title="Chia sẻ qua Instagram">
                <img
                  width="30"
                  height="30"
                  className=" lazyloaded"
                  src="https://file.hstatic.net/200000588277/file/instagram__3__7de3ebbce1f24003b516ca6c1d7c24d5_icon.png"
                  data-src="https://file.hstatic.net/200000588277/file/instagram__3__7de3ebbce1f24003b516ca6c1d7c24d5_icon.png"
                  alt=" - Linkedin"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <button
        className="overplay-all"
        style={{ zIndex: 5 }}
        title="Đóng"
        onClick={() => {
          document.body.classList.remove('open-overplay');
          document.body.classList.remove('open-noscroll');
          document.body.classList.remove('open-menu-mobile');
        }}
      ></button>
      <Footer />
    </>
  );
};

export default HomeLayout;
