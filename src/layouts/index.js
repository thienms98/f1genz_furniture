import Head from 'next/head';
import Image from 'next/image';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

const HomeLayout = (props) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/globals.css" type="text/css" media="all" />
        <link rel="stylesheet" href="/css/home.css" type="text/css" media="all" />
        <link rel="stylesheet" href="/css/main.css" type="text/css" media="all" />
        <link rel="stylesheet" href="/css/plugin.css" type="text/css" media="all" />
        <link rel="stylesheet" href="/css/product_item.css" type="text/css" media="all" />
        <link rel="stylesheet" href="/css/styles__ltr.css" type="text/css" media="all" />
      </Head>
      <Header />
      {props.children}
      <div class="shop-social-sidebar d-none d-sm-block">
        <a style={{ backgroundColor: '#ffffff' }} href="/collections/all" title="Zalo" target="_blank">
          <Image
            class="w-100 lazyloaded"
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
            class="w-100 lazyloaded"
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
            class="w-100 lazyloaded"
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
            class="w-100 lazyloaded"
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
            class="w-100 lazyloaded"
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
            class="w-100 lazyloaded"
            width="32"
            height="32"
            src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/shop_social_sidebar_item_image_6.png?1684771044770"
            data-src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/shop_social_sidebar_item_image_6.png?1684771044770"
            alt="Social Messenger"
          />
          Messenger
        </a>

        <button class="back-to-top" title="Back to top">
          <Image
            class="w-100 lazyloaded"
            width="32"
            height="32"
            src="https://file.hstatic.net/200000588277/file/arrow-up_eb1426bb7fc647eab89f9279695752cd.png"
            data-src="https://file.hstatic.net/200000588277/file/arrow-up_eb1426bb7fc647eab89f9279695752cd.png"
            alt="Back to top"
          />
          Lên đầu trang
        </button>
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;
