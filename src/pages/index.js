'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
//components
import Product from '~/components/Product';
import ArticleItem from '~/components/ArticleItem';
import FsaleTimer from '~/components/FsaleTimer';
import HomeLayout from '~/layouts';
import Slider from 'react-slick';
// icon
import CartIcon from '~/components/icon/heart';
import HeartIcon from '~/components/icon/heart';
import MagnifyingGlassIcon from '~/components/icon/heart';
// utils
import classNames from 'classnames';
import { homeSlider, homeBanner, flashSaleEvents } from '~/data/home';
import { categories } from '~/data/categories';
import { products } from '~/data/products';

import { fsaleTimer, remainingTime, zeroTen } from '~/utils';

export default function Home() {
  const [fsaling, setFsaling] = useState(
    () => flashSaleEvents.map((fsale) => fsaleTimer(fsale.start, fsale.end)).indexOf(0) || 0,
  );
  const [prodTab, setProdtab] = useState(0);
  const [prodPos, setProdPos] = useState(-1);

  var settings = {
    dots: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  flashSaleEvents.map((fsale) => {
    const fsaleType = fsaleTimer(fsale.start, fsale.end);
    const { hour, min, sec } = remainingTime(fsale.end);
  });

  return (
    <HomeLayout>
      <main>
        <h1 className="d-none">F1GENZ Furniture</h1>
        <Slider {...settings}>
          {homeSlider.map((item) => {
            return (
              <Link href="#" title={item.title} key={item.id}>
                <picture>
                  <source media="(max-width: 480px)" srcset={item.sources[0].url} data-srcset={item.sources[0].url} />
                  <source
                    media="(min-width: 481px) and (max-width: 767px)"
                    srcset={item.sources[1].url}
                    data-srcset={item.sources[1].url}
                  />
                  <source media="(min-width: 768px)" srcset={item.sources[2].url} data-srcset={item.sources[2].url} />
                  <img
                    className="w-100 ls-is-cached lazyloaded"
                    width="1920"
                    height="640"
                    alt="Banner slider 1"
                    src={item.sources[0].url}
                    data-srcset={item.sources[0].url}
                  />
                </picture>
              </Link>
            );
          })}
        </Slider>

        <section className="home-four-banner">
          <div className="container">
            <div className="home-four-banner-main">
              {homeBanner.map((banner) => {
                return (
                  <div className="home-four-banner-main-item has-spin" key={banner.id}>
                    <h2 className="d-none">{banner.title}</h2>
                    <Link href="/" title={banner.title}>
                      <picture>
                        <source
                          media="(max-width: 480px)"
                          width={banner.sources[0].width}
                          height={banner.sources[0].height}
                          srcset={banner.sources[0].src}
                        />
                        <source
                          media="(min-width: 481px) and (max-width: 767px)"
                          width={banner.sources[1].width}
                          height={banner.sources[1].height}
                          srcset={banner.sources[1].src}
                        />
                        <source
                          media="(min-width: 767px)"
                          width={banner.sources[2].width}
                          height={banner.sources[2].height}
                          srcset={banner.sources[2].src}
                        />
                        <img
                          loading="eager"
                          width={banner.sources[0].width}
                          height={banner.sources[0].height}
                          alt="Hàng mới"
                          src={banner.sources[0].src}
                        />
                      </picture>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="home-fsale">
          <div className="container">
            <div className="home-fsale-wrap">
              <div className="home-fsale-head">
                {/* {flashSaleEvents.map((fsale, index) => {
                  return <FsaleTimer fsale={fsale} fsaling={fsaling} key={index} />;
                })} */}
                <FsaleTimer fsale={flashSaleEvents[fsaling] || flashSaleEvents[0]} fsaling={fsaling} />
              </div>
              <div className="home-fsale-banner has-spin">
                {flashSaleEvents.map((fsale) => {
                  return (
                    <picture
                      className={classNames('home-fsale-banner-item', { active: fsale.id === fsaling })}
                      title={fsale.title}
                      key={fsale.id}
                    >
                      <source media="(max-width: 480px)" srcset={fsale.banner[0]} />
                      <source media="(min-width: 481px) and (max-width: 767px)" srcset={fsale.banner[1]} />
                      <source media="(min-width: 768px)" width="1920" height="480" srcset={fsale.banner[2]} />
                      <img loading="lazy" src={fsale.banner[2]} width="1920" height="480" alt={fsale.title} />
                    </picture>
                  );
                })}
              </div>
              <div className="home-fsale-tab">
                {flashSaleEvents.map((fsale) => {
                  const type = fsaleTimer(fsale.start, fsale.end);

                  return (
                    <div
                      className={classNames(
                        'home-fsale-tab-item',
                        { started: type !== -1 },
                        { ended: type === 1 },
                        { active: fsale.id === fsaling },
                      )}
                      data-start={fsale.start}
                      data-end={fsale.end}
                      key={fsale.id}
                      onClick={() => setFsaling(fsale.id)}
                    >
                      <strong>
                        {new Date(fsale.start).getHours()}:{zeroTen(new Date(fsale.start).getMinutes())}
                      </strong>
                      <span>{type === -1 ? 'Sắp diễn ra' : type === 0 ? 'Đang diễn ra' : 'Đã kết thúc'}</span>
                    </div>
                  );
                })}
              </div>
              <div className="home-fsale-body">
                <div className="home-fsale-body-item started active">
                  <Slider {...settings} draggable slidesToShow={4} slidesToScroll={1}>
                    {products
                      .filter((prod) => prod.group === fsaling && prod.flashSale)
                      .map((product) => {
                        return <Product {...product} key={product.id} />;
                      })}
                  </Slider>
                  <Link className="home-fsale-cta d-block d-sm-none" href="/gia-treo" title="Giá treo">
                    Xem tất cả
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="home-six-banner">
          <div className="container">
            <div className="home-six-banner-head section-title-all">
              <h2>Bộ sưu tập</h2>
              <p>Sản phẩm bán chạy nhất tuần này!</p>
            </div>
            <div className="home-six-banner-body">
              <ul className="home-six-banner-body-main home-six-banner-body-main-left">
                <li className="home-six-banner-item">
                  <Link href="/collections/all" title="Khuyến mãi">
                    <picture>
                      <source
                        media="(max-width: 480px)"
                        srcset="https://bizweb.dktcdn.net/thumb/large/100/482/001/themes/906081/assets/home_six_banner_item_image_1.png?1684771044770"
                      />
                      <source
                        media="(min-width: 481px)"
                        srcset="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_six_banner_item_image_1.png?1684771044770"
                      />
                      <img
                        className="w-100"
                        loading="lazy"
                        width="450"
                        height="450"
                        alt="Khuyến mãi"
                        src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_six_banner_item_image_1.png?1684771044770"
                      />
                    </picture>
                    <span>Khuyến mãi</span>
                  </Link>
                </li>
                <li className="home-six-banner-item">
                  <Link href="/collections/all" title="Sale Off">
                    <picture>
                      <source
                        media="(max-width: 480px)"
                        srcset="https://bizweb.dktcdn.net/thumb/large/100/482/001/themes/906081/assets/home_six_banner_item_image_2.png?1684771044770"
                      />
                      <source
                        media="(min-width: 481px)"
                        srcset="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_six_banner_item_image_2.png?1684771044770"
                      />
                      <img
                        className="w-100"
                        loading="lazy"
                        width="450"
                        height="450"
                        alt="Sale Off"
                        src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_six_banner_item_image_2.png?1684771044770"
                      />
                    </picture>
                    <span>Sale Off</span>
                  </Link>
                </li>
                <li className="home-six-banner-item">
                  <Link href="/collections/all" title="Mới nhất">
                    <picture>
                      <source
                        media="(max-width: 480px)"
                        srcset="https://bizweb.dktcdn.net/thumb/large/100/482/001/themes/906081/assets/home_six_banner_item_image_3.png?1684771044770"
                      />
                      <source
                        media="(min-width: 481px)"
                        srcset="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_six_banner_item_image_3.png?1684771044770"
                      />
                      <img
                        className="w-100"
                        loading="lazy"
                        width="450"
                        height="450"
                        alt="Mới nhất"
                        src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_six_banner_item_image_3.png?1684771044770"
                      />
                    </picture>
                    <span>Mới nhất</span>
                  </Link>
                </li>
              </ul>
              <ul className="home-six-banner-body-main home-six-banner-body-main-right">
                <li className="home-six-banner-item">
                  <Link href="/collections/all" title="New Sale">
                    <picture>
                      <source
                        media="(max-width: 480px)"
                        srcset="https://bizweb.dktcdn.net/thumb/large/100/482/001/themes/906081/assets/home_six_banner_item_image_4.png?1684771044770"
                      />
                      <source
                        media="(min-width: 481px)"
                        srcset="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_six_banner_item_image_4.png?1684771044770"
                      />
                      <img
                        className="w-100"
                        loading="lazy"
                        width="450"
                        height="450"
                        alt="New Sale"
                        src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_six_banner_item_image_4.png?1684771044770"
                      />
                    </picture>
                    <span>New Sale</span>
                  </Link>
                </li>
                <li className="home-six-banner-item">
                  <Link href="/collections/all" title="Hot Trend">
                    <picture>
                      <source
                        media="(max-width: 480px)"
                        srcset="https://bizweb.dktcdn.net/thumb/large/100/482/001/themes/906081/assets/home_six_banner_item_image_5.png?1684771044770"
                      />
                      <source
                        media="(min-width: 481px)"
                        srcset="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_six_banner_item_image_5.png?1684771044770"
                      />
                      <img
                        className="w-100"
                        loading="lazy"
                        width="450"
                        height="450"
                        alt="Hot Trend"
                        src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_six_banner_item_image_5.png?1684771044770"
                      />
                    </picture>
                    <span>Hot Trend</span>
                  </Link>
                </li>
                <li className="home-six-banner-item">
                  <Link href="/collections/all" title="Giảm giá">
                    <picture>
                      <source
                        media="(max-width: 480px)"
                        srcset="https://bizweb.dktcdn.net/thumb/large/100/482/001/themes/906081/assets/home_six_banner_item_image_6.png?1684771044770"
                      />
                      <source
                        media="(min-width: 481px)"
                        srcset="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_six_banner_item_image_6.png?1684771044770"
                      />
                      <img
                        className="w-100"
                        loading="lazy"
                        width="450"
                        height="450"
                        alt="Giảm giá"
                        src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_six_banner_item_image_6.png?1684771044770"
                      />
                    </picture>
                    <span>Giảm giá</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="home-product-pos">
          <picture title="F1GENZ Furniture">
            <source
              media="(max-width: 480px)"
              srcset="https://bizweb.dktcdn.net/thumb/large/100/482/001/themes/906081/assets/home_product_pos_image.png?1684771044770"
              data-srcset="https://bizweb.dktcdn.net/thumb/large/100/482/001/themes/906081/assets/home_product_pos_image.png?1684771044770"
            />
            <source
              media="(min-width: 481px)"
              srcset="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_product_pos_image.png?1684771044770"
              data-srcset="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_product_pos_image.png?1684771044770"
            />
            <img
              className="lazyload w-100"
              width="1920"
              height="960"
              alt="/"
              src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_product_pos_image.png?1684771044770"
              data-src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_product_pos_image.png?1684771044770"
            />
          </picture>
          <div
            className={`home-product-pos-item ${prodPos === 0 ? 'left' : ''}`}
            onClick={() => setProdPos(0)}
            style={{ top: '25%', left: '5%' }}
          >
            <span className="home-product-pos-item-dots"></span>
            <div className="home-product-pos-item-contents">
              <picture>
                <source
                  media="(max-width: 480px)"
                  data-srcset="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/1-5acd9b1760c24d398ebcfacdf7a29a2c-e92c34fb179e4b219283683d0714d7d8.png?v=1683881102413"
                  width="480"
                  height="480"
                  srcset="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/1-5acd9b1760c24d398ebcfacdf7a29a2c-e92c34fb179e4b219283683d0714d7d8.png?v=1683881102413"
                />
                <source
                  media="(min-width: 481px)"
                  data-srcset="https://bizweb.dktcdn.net/thumb/compact/100/482/001/products/1-5acd9b1760c24d398ebcfacdf7a29a2c-e92c34fb179e4b219283683d0714d7d8.png?v=1683881102413"
                  width="160"
                  height="160"
                  srcset="https://bizweb.dktcdn.net/thumb/compact/100/482/001/products/1-5acd9b1760c24d398ebcfacdf7a29a2c-e92c34fb179e4b219283683d0714d7d8.png?v=1683881102413"
                />
                <img
                  className="lazyload"
                  alt="Bàn ăn 4 chân gia đình cao cấp"
                  width="480"
                  height="480"
                  src="https://bizweb.dktcdn.net/thumb/compact/100/482/001/products/1-5acd9b1760c24d398ebcfacdf7a29a2c-e92c34fb179e4b219283683d0714d7d8.png?v=1683881102413"
                  data-src="https://bizweb.dktcdn.net/thumb/compact/100/482/001/products/1-5acd9b1760c24d398ebcfacdf7a29a2c-e92c34fb179e4b219283683d0714d7d8.png?v=1683881102413"
                />
              </picture>
              <Link href="/ban-an-4-chan-gia-dinh-cao-cap" title="Bàn ăn 4 chân gia đình cao cấp">
                <h3>
                  Bàn ăn 4 chân gia đình cao cấp
                  <br />
                  <small>Đen / Quả óc chó</small>
                  <i className="fa fa-chevron-right"></i>
                </h3>
                <span>23.690.000₫</span>
              </Link>
            </div>
          </div>
          <div
            className={`home-product-pos-item ${prodPos === 1 ? 'left' : ''}`}
            onClick={() => setProdPos(1)}
            style={{ top: '66%', left: '27%' }}
          >
            <span className="home-product-pos-item-dots"></span>
            <div className="home-product-pos-item-contents">
              <picture>
                <source
                  media="(max-width: 480px)"
                  data-srcset="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/1-d1d27878e84b497282e2c10780ab7d73-202bf7d605a14ee288aa401f9213d668.png?v=1683881056433"
                  width="480"
                  height="480"
                  srcset="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/1-d1d27878e84b497282e2c10780ab7d73-202bf7d605a14ee288aa401f9213d668.png?v=1683881056433"
                />
                <source
                  media="(min-width: 481px)"
                  data-srcset="https://bizweb.dktcdn.net/thumb/compact/100/482/001/products/1-d1d27878e84b497282e2c10780ab7d73-202bf7d605a14ee288aa401f9213d668.png?v=1683881056433"
                  width="160"
                  height="160"
                  srcset="https://bizweb.dktcdn.net/thumb/compact/100/482/001/products/1-d1d27878e84b497282e2c10780ab7d73-202bf7d605a14ee288aa401f9213d668.png?v=1683881056433"
                />
                <img
                  className="lazyload"
                  alt="Đèn sàn F1GENZ cao cấp"
                  width="480"
                  height="480"
                  src="https://bizweb.dktcdn.net/thumb/compact/100/482/001/products/1-d1d27878e84b497282e2c10780ab7d73-202bf7d605a14ee288aa401f9213d668.png?v=1683881056433"
                  data-src="https://bizweb.dktcdn.net/thumb/compact/100/482/001/products/1-d1d27878e84b497282e2c10780ab7d73-202bf7d605a14ee288aa401f9213d668.png?v=1683881056433"
                />
              </picture>
              <Link href="/den-san-f1genz-cao-cap" title="Đèn sàn F1GENZ cao cấp">
                <h3>
                  Đèn sàn F1GENZ cao cấp
                  <br />
                  <small>Đồng thau</small>
                  <i className="fa fa-chevron-right"></i>
                </h3>
                <span>4.990.000₫</span>
              </Link>
            </div>
          </div>
          <div
            className={`home-product-pos-item ${prodPos === 3 ? 'left' : ''}`}
            onClick={() => setProdPos(3)}
            style={{ top: '41%', left: '80%' }}
          >
            <span className="home-product-pos-item-dots"></span>
            <div className="home-product-pos-item-contents">
              <picture>
                <source
                  media="(max-width: 480px)"
                  data-srcset="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/1-8856b3adac2b4c4793969785f43819b9-0fa9e8fa0a684cfeb70140f86ca90c41.png?v=1683881052893"
                  width="480"
                  height="480"
                  srcset="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/1-8856b3adac2b4c4793969785f43819b9-0fa9e8fa0a684cfeb70140f86ca90c41.png?v=1683881052893"
                />
                <source
                  media="(min-width: 481px)"
                  data-srcset="https://bizweb.dktcdn.net/thumb/compact/100/482/001/products/1-8856b3adac2b4c4793969785f43819b9-0fa9e8fa0a684cfeb70140f86ca90c41.png?v=1683881052893"
                  width="160"
                  height="160"
                  srcset="https://bizweb.dktcdn.net/thumb/compact/100/482/001/products/1-8856b3adac2b4c4793969785f43819b9-0fa9e8fa0a684cfeb70140f86ca90c41.png?v=1683881052893"
                />
                <img
                  className="lazyload"
                  alt="Đèn sàn bằng đá cẩm thạch"
                  width="480"
                  height="480"
                  src="https://bizweb.dktcdn.net/thumb/compact/100/482/001/products/1-8856b3adac2b4c4793969785f43819b9-0fa9e8fa0a684cfeb70140f86ca90c41.png?v=1683881052893"
                  data-src="https://bizweb.dktcdn.net/thumb/compact/100/482/001/products/1-8856b3adac2b4c4793969785f43819b9-0fa9e8fa0a684cfeb70140f86ca90c41.png?v=1683881052893"
                />
              </picture>
              <Link href="/den-san-bang-da-cam-thach" title="Đèn sàn bằng đá cẩm thạch">
                <h3>
                  Đèn sàn bằng đá cẩm thạch
                  <br />
                  <small>Trắng</small>
                  <i className="fa fa-chevron-right"></i>
                </h3>
                <span>3.990.000₫</span>
              </Link>
            </div>
          </div>
          <div
            className={`home-product-pos-item ${prodPos === 4 ? 'left' : ''}`}
            onClick={() => setProdPos(4)}
            style={{ top: '75%', left: '60%' }}
          >
            <span className="home-product-pos-item-dots"></span>
            <div className="home-product-pos-item-contents">
              <picture title="F1GENZ Furniture">
                <source
                  media="(max-width: 480px)"
                  srcset="https://bizweb.dktcdn.net/thumb/large/100/482/001/themes/906081/assets/home_product_pos_image.png?1684771044770"
                  data-srcset="https://bizweb.dktcdn.net/thumb/large/100/482/001/themes/906081/assets/home_product_pos_image.png?1684771044770"
                />
                <source
                  media="(min-width: 481px)"
                  srcset="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_product_pos_image.png?1684771044770"
                  data-srcset="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_product_pos_image.png?1684771044770"
                />
                <Image
                  className="w-100 lazyloaded"
                  width="1920"
                  height="960"
                  alt="/"
                  src="https://bizweb.dktcdn.net/thumb/compact/100/482/001/products/1-1aecf2e2a39a4f6f98a7841f0083c10a-5397b58f672b4090989562633ffbb294.png?v=1683881096573"
                  data-src="https://bizweb.dktcdn.net/thumb/compact/100/482/001/products/1-1aecf2e2a39a4f6f98a7841f0083c10a-5397b58f672b4090989562633ffbb294.png?v=1683881096573"
                />
              </picture>
              <Link href="/ban-an-da-thieu-ket" title="Bàn ăn đá thiêu kết">
                <h3>
                  Bàn ăn đá thiêu kết
                  <br />
                  <small>Trắng / Đá thiêu kết</small>
                  <i className="fa fa-chevron-right"></i>
                </h3>
                <span>21.199.000₫</span>
              </Link>
            </div>
          </div>
        </section>
        <section className="home-product-grid">
          <div className="container">
            <div className="home-product-grid-head section-title-all">
              <h2>Hot Trend</h2>
              <p>Cập nhật các sản phẩm bán chạy nhất trong tuần</p>
            </div>
            <div className="home-product-grid-body">
              {products
                .filter((prod) => prod.hotTrend)
                .map((product) => {
                  return <Product {...product} key={product.id} />;
                })}
            </div>
          </div>
        </section>
        <section className="home-insta">
          <div className="container">
            <div className="home-insta-body">
              <div className="home-insta-body-left">
                <Link
                  href="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_insta_item_image_1.png?1684771044770"
                  className="home-insta-body-item"
                  title="Banner"
                  data-fancybox="gallery"
                >
                  <img
                    loading="lazy"
                    width="240"
                    height="240"
                    src="https://bizweb.dktcdn.net/thumb/medium/100/482/001/themes/906081/assets/home_insta_item_image_1.png?1684771044770"
                    alt="Banner"
                  />
                </Link>
                <Link
                  href="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_insta_item_image_2.png?1684771044770"
                  className="home-insta-body-item"
                  title="Banner"
                  data-fancybox="gallery"
                >
                  <img
                    loading="lazy"
                    width="240"
                    height="240"
                    src="https://bizweb.dktcdn.net/thumb/medium/100/482/001/themes/906081/assets/home_insta_item_image_2.png?1684771044770"
                    alt="Banner"
                  />
                </Link>
                <Link
                  href="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_insta_item_image_3.png?1684771044770"
                  className="home-insta-body-item"
                  title="Banner"
                  data-fancybox="gallery"
                >
                  <img
                    loading="lazy"
                    width="240"
                    height="240"
                    src="https://bizweb.dktcdn.net/thumb/medium/100/482/001/themes/906081/assets/home_insta_item_image_3.png?1684771044770"
                    alt="Banner"
                  />
                </Link>
                <Link
                  href="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_insta_item_image_4.png?1684771044770"
                  className="home-insta-body-item"
                  title="Banner"
                  data-fancybox="gallery"
                >
                  <img
                    loading="lazy"
                    width="240"
                    height="240"
                    src="https://bizweb.dktcdn.net/thumb/medium/100/482/001/themes/906081/assets/home_insta_item_image_4.png?1684771044770"
                    alt="Banner"
                  />
                </Link>
                <Link
                  href="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_insta_item_image_5.png?1684771044770"
                  className="home-insta-body-item"
                  title="Banner"
                  data-fancybox="gallery"
                >
                  <img
                    loading="lazy"
                    width="240"
                    height="240"
                    src="https://bizweb.dktcdn.net/thumb/medium/100/482/001/themes/906081/assets/home_insta_item_image_5.png?1684771044770"
                    alt="Banner"
                  />
                </Link>
                <Link
                  href="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_insta_item_image_6.png?1684771044770"
                  className="home-insta-body-item"
                  title="Banner"
                  data-fancybox="gallery"
                >
                  <img
                    loading="lazy"
                    width="240"
                    height="240"
                    src="https://bizweb.dktcdn.net/thumb/medium/100/482/001/themes/906081/assets/home_insta_item_image_6.png?1684771044770"
                    alt="Banner"
                  />
                </Link>
              </div>
              <div className="home-insta-body-center section-title-all">
                <h2>Bộ sưu tập Instagram</h2>
                <p>Chúng tôi luôn cập nhật những hình ảnh mới nhất từ các nhà sưu tập trên thế giới về nội thất.</p>
                <div className="insta-logo" title="Insta">
                  <img
                    loading="lazy"
                    width="450"
                    height="450"
                    src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_insta_image.png?1684771044770"
                    alt="F1GENZ Furniture - Instagram"
                  />
                </div>
                <Link href="/collections/all" title="Xem ngay">
                  Xem ngay <span>›</span>
                </Link>
              </div>
              <div className="home-insta-body-right">
                <Link
                  href="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_insta_item_image_7.png?1684771044770"
                  className="home-insta-body-item"
                  title="Banner"
                  data-fancybox="gallery"
                >
                  <img
                    loading="lazy"
                    width="240"
                    height="240"
                    src="https://bizweb.dktcdn.net/thumb/medium/100/482/001/themes/906081/assets/home_insta_item_image_7.png?1684771044770"
                    alt="Banner"
                  />
                </Link>
                <Link
                  href="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_insta_item_image_8.png?1684771044770"
                  className="home-insta-body-item"
                  title="Banner"
                  data-fancybox="gallery"
                >
                  <img
                    loading="lazy"
                    width="240"
                    height="240"
                    src="https://bizweb.dktcdn.net/thumb/medium/100/482/001/themes/906081/assets/home_insta_item_image_8.png?1684771044770"
                    alt="Banner"
                  />
                </Link>
                <Link
                  href="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_insta_item_image_9.png?1684771044770"
                  className="home-insta-body-item"
                  title="Banner"
                  data-fancybox="gallery"
                >
                  <img
                    loading="lazy"
                    width="240"
                    height="240"
                    src="https://bizweb.dktcdn.net/thumb/medium/100/482/001/themes/906081/assets/home_insta_item_image_9.png?1684771044770"
                    alt="Banner"
                  />
                </Link>
                <Link
                  href="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_insta_item_image_10.png?1684771044770"
                  className="home-insta-body-item"
                  title="Banner"
                  data-fancybox="gallery"
                >
                  <img
                    loading="lazy"
                    width="240"
                    height="240"
                    src="https://bizweb.dktcdn.net/thumb/medium/100/482/001/themes/906081/assets/home_insta_item_image_10.png?1684771044770"
                    alt="Banner"
                  />
                </Link>
                <Link
                  href="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_insta_item_image_11.png?1684771044770"
                  className="home-insta-body-item"
                  title="Banner"
                  data-fancybox="gallery"
                >
                  <img
                    loading="lazy"
                    width="240"
                    height="240"
                    src="https://bizweb.dktcdn.net/thumb/medium/100/482/001/themes/906081/assets/home_insta_item_image_11.png?1684771044770"
                    alt="Banner"
                  />
                </Link>
                <Link
                  href="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_insta_item_image_12.png?1684771044770"
                  className="home-insta-body-item"
                  title="Banner"
                  data-fancybox="gallery"
                >
                  <img
                    loading="lazy"
                    width="240"
                    height="240"
                    src="https://bizweb.dktcdn.net/thumb/medium/100/482/001/themes/906081/assets/home_insta_item_image_12.png?1684771044770"
                    alt="Banner"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="home-product-tab">
          <div className="container">
            <div className="home-product-tab-head">
              <div className="home-product-tab-head-left">
                <ul>
                  {categories.map((category) => {
                    return (
                      <li
                        className={classNames({ active: category.id === prodTab })}
                        key={category.id}
                        onClick={() => setProdtab(category.id)}
                      >
                        <Link
                          href="/"
                          onClick={(e) => e.preventDefault()}
                          // href={category.url}
                          title={category.name}
                        >
                          <Image
                            className="lazyload w-100"
                            width="64"
                            height="64"
                            src={category.thumb}
                            data-src={category.thumb}
                            alt={`${category.name} - Icon`}
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="home-product-tab-head-right has-spin">
                {categories.map((category) => {
                  return (
                    <Link
                      href={category.url}
                      title={category.name}
                      key={category.id}
                      className={classNames({ active: category.id === prodTab })}
                    >
                      <Image
                        className="lazyload w-100"
                        width="1920"
                        height="640"
                        src={category.banner}
                        data-src={category.banner}
                        alt={`${category.name} - Banner`}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="home-product-tab-body">
              <div className="home-product-tab-body-item active">
                <Slider {...settings} slidesToShow={4}>
                  {products
                    .filter((prod) => prod.group === prodTab)
                    .map((product) => {
                      return <Product {...product} key={product.id} />;
                    })}
                </Slider>
              </div>
              <div className="home-product-tab-body-item">
                <div className="home-product-tab-body-item-data">
                  <div className="product-item" data-id="87900655" data-handle="gia-treo-cau-thang-cao-cap">
                    <div className="product-item-wrap">
                      <div className="product-item-image hasThumbs hasThumbsIcon">
                        <span className="product-item-discount">-23%</span>
                        <Link
                          className="product-item-link"
                          href="/gia-treo-cau-thang-cao-cap"
                          title="Giá treo cầu thang cao cấp"
                        >
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/1-7f77cf167de94ccc84ea612df64f5ba1-77145adb6b554eed8f9c54d8cafa6ba2.png?v=1683880989677"
                            alt="Giá treo cầu thang cao cấp"
                          />
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/2-cd96f0e75a054146b1191d377e947660-3898bfde72584e15aee8cda23ab11b2d.png?v=1683880989677"
                            alt="Giá treo cầu thang cao cấp"
                          />
                        </Link>
                        <ul className="product-item-thumbs">
                          <li>
                            <Link href="/gia-treo-cau-thang-cao-cap" title="Giá treo cầu thang cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-cd96f0e75a054146b1191d377e947660-3898bfde72584e15aee8cda23ab11b2d.png?v=1683880989677"
                                alt="Giá treo cầu thang cao cấp"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/gia-treo-cau-thang-cao-cap" title="Giá treo cầu thang cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-b836c9d654f541d791553d8682ca9569-7ae084b225614000a0595ca230477843.png?v=1683880989677"
                                alt="Giá treo cầu thang cao cấp"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/gia-treo-cau-thang-cao-cap" title="Giá treo cầu thang cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-8d2f51f5d5ff4d0daf8279a56097dd58-90361fc2a32c49e8ac512268026b893a.png?v=1683880989677"
                                alt="Giá treo cầu thang cao cấp"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product-item-action">
                        <button
                          type="button"
                          title="Yêu thích"
                          className="shop-wishlist-button-add"
                          data-type="shop-wishlist-button-add"
                        >
                          <HeartIcon />
                        </button>
                        <button
                          type="button"
                          title="Xem nhanh"
                          className="shop-quickview-button"
                          data-type="shop-quickview-button"
                        >
                          <CartIcon />
                        </button>
                        <button
                          type="button"
                          title="Thêm vào giỏ"
                          className="shop-addLoop-button"
                          data-type="shop-addLoop-button"
                        >
                          <MagnifyingGlassIcon />
                        </button>
                      </div>
                      <div className="product-item-detail">
                        <div className="product-item-detail-info">
                          <span className="product-item-detail-info-vendor">
                            <Link href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                              F1GENZ
                            </Link>
                          </span>
                          <span className="product-item-detail-info-tag">Quà tặng</span>
                        </div>
                        <h3 className="product-item-detail-name">
                          <Link href="/gia-treo-cau-thang-cao-cap" title="Giá treo cầu thang cao cấp">
                            Giá treo cầu thang cao cấp
                          </Link>
                        </h3>
                        <div className="product-item-detail-price">
                          <span>2.459.000₫</span>
                          <del>3.190.000₫</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item" data-id="87900517" data-handle="gia-treo-quan-ao-f1genz-chan-tron">
                    <div className="product-item-wrap">
                      <div className="product-item-image hasThumbs hasThumbsIcon">
                        <span className="product-item-discount">-11%</span>
                        <Link
                          className="product-item-link"
                          href="/gia-treo-quan-ao-f1genz-chan-tron"
                          title="Giá treo quần áo F1GENZ chân tròn"
                        >
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/1-e02be5bb051c46079acb540b2edc1848-3acad74ece4446d3b28479c18f3a6af7.png?v=1683880984143"
                            alt="Giá treo quần áo F1GENZ chân tròn"
                          />
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/2-eb937a0d98d6430487fdb9d79e5abe1e-ed44747fcace4b9a8b6730d1bc0a8083.png?v=1683880984143"
                            alt="Giá treo quần áo F1GENZ chân tròn"
                          />
                        </Link>
                        <ul className="product-item-thumbs">
                          <li>
                            <Link href="/gia-treo-quan-ao-f1genz-chan-tron" title="Giá treo quần áo F1GENZ chân tròn">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-eb937a0d98d6430487fdb9d79e5abe1e-ed44747fcace4b9a8b6730d1bc0a8083.png?v=1683880984143"
                                alt="Giá treo quần áo F1GENZ chân tròn"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/gia-treo-quan-ao-f1genz-chan-tron" title="Giá treo quần áo F1GENZ chân tròn">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-b46cd37f0c1b438386f0aea52beac28b-4f61400f49674754a99c005bde58905b.png?v=1683880984143"
                                alt="Giá treo quần áo F1GENZ chân tròn"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/gia-treo-quan-ao-f1genz-chan-tron" title="Giá treo quần áo F1GENZ chân tròn">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-8f910792bb414342a994bf757c30df3b-1203c9a78ceb43e29ceaacfe767805bc.png?v=1683880984143"
                                alt="Giá treo quần áo F1GENZ chân tròn"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product-item-action">
                        <button
                          type="button"
                          title="Yêu thích"
                          className="shop-wishlist-button-add"
                          data-type="shop-wishlist-button-add"
                        >
                          <HeartIcon />
                        </button>
                        <button
                          type="button"
                          title="Xem nhanh"
                          className="shop-quickview-button"
                          data-type="shop-quickview-button"
                        >
                          <CartIcon />
                        </button>
                        <button
                          type="button"
                          title="Thêm vào giỏ"
                          className="shop-addLoop-button"
                          data-type="shop-addLoop-button"
                        >
                          <MagnifyingGlassIcon />
                        </button>
                      </div>
                      <div className="product-item-detail">
                        <div className="product-item-detail-info">
                          <span className="product-item-detail-info-vendor">
                            <Link href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                              F1GENZ
                            </Link>
                          </span>
                          <span className="product-item-detail-info-tag">Freeship</span>
                        </div>
                        <h3 className="product-item-detail-name">
                          <Link href="/gia-treo-quan-ao-f1genz-chan-tron" title="Giá treo quần áo F1GENZ chân tròn">
                            Giá treo quần áo F1GENZ chân tròn
                          </Link>
                        </h3>
                        <div className="product-item-detail-price">
                          <span>5.490.000₫</span>
                          <del>6.199.000₫</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item" data-id="87900418" data-handle="gia-treo-quan-ao-cao-cap-3-chan">
                    <div className="product-item-wrap">
                      <div className="product-item-image hasThumbs hasThumbsIcon">
                        <span className="product-item-discount">-15%</span>
                        <Link
                          className="product-item-link"
                          href="/gia-treo-quan-ao-cao-cap-3-chan"
                          title="Giá treo quần áo cao cấp 3 chân"
                        >
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/1-dca94d17f250421582b4be45a04da1fc-3d08e4fa41054af9b1aace9ade19adb8.png?v=1683880979307"
                            alt="Giá treo quần áo cao cấp 3 chân"
                          />
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/2-f77898b395ad42dea49aa144e46614a4-262a3394cce2466b901a6557f0285ae7.png?v=1683880979307"
                            alt="Giá treo quần áo cao cấp 3 chân"
                          />
                        </Link>
                        <ul className="product-item-thumbs">
                          <li>
                            <Link href="/gia-treo-quan-ao-cao-cap-3-chan" title="Giá treo quần áo cao cấp 3 chân">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-f77898b395ad42dea49aa144e46614a4-262a3394cce2466b901a6557f0285ae7.png?v=1683880979307"
                                alt="Giá treo quần áo cao cấp 3 chân"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/gia-treo-quan-ao-cao-cap-3-chan" title="Giá treo quần áo cao cấp 3 chân">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-98f4dd8b7ace4d8ab6a6bb8d7f518381-1e1ec19d1ab24fd3ab2d11411f5ae65d.png?v=1683880979307"
                                alt="Giá treo quần áo cao cấp 3 chân"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/gia-treo-quan-ao-cao-cap-3-chan" title="Giá treo quần áo cao cấp 3 chân">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-aff1f9f7322a4e42b3612ac9d37151ba-e8ee2887aa5841e8bc21f87dee3aba66.png?v=1683880979307"
                                alt="Giá treo quần áo cao cấp 3 chân"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product-item-action">
                        <button
                          type="button"
                          title="Yêu thích"
                          className="shop-wishlist-button-add"
                          data-type="shop-wishlist-button-add"
                        >
                          <HeartIcon />
                        </button>
                        <button
                          type="button"
                          title="Xem nhanh"
                          className="shop-quickview-button"
                          data-type="shop-quickview-button"
                        >
                          <CartIcon />
                        </button>
                        <button
                          type="button"
                          title="Thêm vào giỏ"
                          className="shop-addLoop-button"
                          data-type="shop-addLoop-button"
                        >
                          <MagnifyingGlassIcon />
                        </button>
                      </div>
                      <div className="product-item-detail">
                        <div className="product-item-detail-info">
                          <span className="product-item-detail-info-vendor">
                            <Link href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                              F1GENZ
                            </Link>
                          </span>
                          <span className="product-item-detail-info-tag">Hot</span>
                        </div>
                        <h3 className="product-item-detail-name">
                          <Link href="/gia-treo-quan-ao-cao-cap-3-chan" title="Giá treo quần áo cao cấp 3 chân">
                            Giá treo quần áo cao cấp 3 chân
                          </Link>
                        </h3>
                        <div className="product-item-detail-price">
                          <span>6.199.000₫</span>
                          <del>7.299.000₫</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item" data-id="87900298" data-handle="gia-treo-quan-ao-cao-cap-chan-tru">
                    <div className="product-item-wrap">
                      <div className="product-item-image hasThumbs ">
                        <span className="product-item-discount">-7%</span>
                        <Link
                          className="product-item-link"
                          href="/gia-treo-quan-ao-cao-cap-chan-tru"
                          title="Giá treo quần áo cao cấp chân trụ"
                        >
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/1-526974a82c6d4b41ae8629d883540752-5ee2b48f1053425088b0fecd71991f89.png?v=1683880974367"
                            alt="Giá treo quần áo cao cấp chân trụ"
                          />
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/2-0b0bba0f61434f95a15889a2fe9ee904-2ca4fb8fa48445178f1e2ccd7d649621.png?v=1683880974367"
                            alt="Giá treo quần áo cao cấp chân trụ"
                          />
                        </Link>
                      </div>
                      <div className="product-item-action">
                        <button
                          type="button"
                          title="Yêu thích"
                          className="shop-wishlist-button-add"
                          data-type="shop-wishlist-button-add"
                        >
                          <HeartIcon />
                        </button>
                        <button
                          type="button"
                          title="Xem nhanh"
                          className="shop-quickview-button"
                          data-type="shop-quickview-button"
                        >
                          <CartIcon />
                        </button>
                        <button
                          type="button"
                          title="Thêm vào giỏ"
                          className="shop-addLoop-button"
                          data-type="shop-addLoop-button"
                        >
                          <MagnifyingGlassIcon />
                        </button>
                      </div>
                      <div className="product-item-detail">
                        <div className="product-item-detail-info">
                          <span className="product-item-detail-info-vendor">
                            <Link href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                              F1GENZ
                            </Link>
                          </span>
                          <span className="product-item-detail-info-tag">Flashsale</span>
                        </div>
                        <h3 className="product-item-detail-name">
                          <Link href="/gia-treo-quan-ao-cao-cap-chan-tru" title="Giá treo quần áo cao cấp chân trụ">
                            Giá treo quần áo cao cấp chân trụ
                          </Link>
                        </h3>
                        <div className="product-item-detail-price">
                          <span>4.219.000₫</span>
                          <del>4.560.000₫</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-product-tab-body-item">
                <div className="home-product-tab-body-item-data">
                  <div className="product-item" data-id="87902429" data-handle="den-ban-cao-cap-f1genz">
                    <div className="product-item-wrap">
                      <div className="product-item-image hasThumbs hasThumbsIcon">
                        <span className="product-item-discount">-13%</span>
                        <Link
                          className="product-item-link"
                          href="/den-ban-cao-cap-f1genz"
                          title="Đèn bàn cao cấp F1GENZ"
                        >
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/1-88a5914f173a452384a997ee258d23db-2e585f9a3c514f8790f580c7d75f4314.png?v=1683881068243"
                            alt="Đèn bàn cao cấp F1GENZ"
                          />
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/2-cd3711d9836f4b33b5b4e92f6c5ac719-7e2f8801668b4c4d8ed4825847b2f230.png?v=1683881068243"
                            alt="Đèn bàn cao cấp F1GENZ"
                          />
                        </Link>
                        <ul className="product-item-thumbs">
                          <li>
                            <Link href="/den-ban-cao-cap-f1genz" title="Đèn bàn cao cấp F1GENZ">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-cd3711d9836f4b33b5b4e92f6c5ac719-7e2f8801668b4c4d8ed4825847b2f230.png?v=1683881068243"
                                alt="Đèn bàn cao cấp F1GENZ"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/den-ban-cao-cap-f1genz" title="Đèn bàn cao cấp F1GENZ">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-ebcca6a30c3742459452eded51d6a594-7de5957af9b74ad18103e8404f80f3b7.png?v=1683881068243"
                                alt="Đèn bàn cao cấp F1GENZ"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/den-ban-cao-cap-f1genz" title="Đèn bàn cao cấp F1GENZ">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-e7f3a6a5607f46c9b083eea2ee27c4e7-5e041b6dd8384f97beb0d099e25121b5.png?v=1683881068243"
                                alt="Đèn bàn cao cấp F1GENZ"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product-item-action">
                        <button
                          type="button"
                          title="Yêu thích"
                          className="shop-wishlist-button-add"
                          data-type="shop-wishlist-button-add"
                        >
                          <HeartIcon />
                        </button>
                        <button
                          type="button"
                          title="Xem nhanh"
                          className="shop-quickview-button"
                          data-type="shop-quickview-button"
                        >
                          <CartIcon />
                        </button>
                        <button
                          type="button"
                          title="Thêm vào giỏ"
                          className="shop-addLoop-button"
                          data-type="shop-addLoop-button"
                        >
                          <MagnifyingGlassIcon />
                        </button>
                      </div>
                      <div className="product-item-detail">
                        <div className="product-item-detail-info">
                          <span className="product-item-detail-info-vendor">
                            <Link href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                              F1GENZ
                            </Link>
                          </span>
                          <span className="product-item-detail-info-tag">Hot</span>
                        </div>
                        <h3 className="product-item-detail-name">
                          <Link href="/den-ban-cao-cap-f1genz" title="Đèn bàn cao cấp F1GENZ">
                            Đèn bàn cao cấp F1GENZ
                          </Link>
                        </h3>
                        <div className="product-item-detail-price">
                          <span>1.290.000₫</span>
                          <del>1.490.000₫</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item" data-id="87902340" data-handle="den-ban-dong-thau-cao-cap">
                    <div className="product-item-wrap">
                      <div className="product-item-image hasThumbs hasThumbsIcon">
                        <span className="product-item-discount">-12%</span>
                        <Link
                          className="product-item-link"
                          href="/den-ban-dong-thau-cao-cap"
                          title="Đèn bàn đồng thau cao cấp"
                        >
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/1-8dbf7792d23e476d917d0f58963d51e6-e70389703abc4a33992abae4d772a574.png?v=1683881064127"
                            alt="Đèn bàn đồng thau cao cấp"
                          />
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/2-aad7314dc7794b41a78ef833aaef1af6-4e5651bd0c7f496f9f2a0526a9585b99.png?v=1683881064127"
                            alt="Đèn bàn đồng thau cao cấp"
                          />
                        </Link>
                        <ul className="product-item-thumbs">
                          <li>
                            <Link href="/den-ban-dong-thau-cao-cap" title="Đèn bàn đồng thau cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-aad7314dc7794b41a78ef833aaef1af6-4e5651bd0c7f496f9f2a0526a9585b99.png?v=1683881064127"
                                alt="Đèn bàn đồng thau cao cấp"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/den-ban-dong-thau-cao-cap" title="Đèn bàn đồng thau cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-72abc83bb4b94056ae969535931094d4-f989b7583f9e484690d84ac9a5810148.png?v=1683881064127"
                                alt="Đèn bàn đồng thau cao cấp"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/den-ban-dong-thau-cao-cap" title="Đèn bàn đồng thau cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-8f6a82fbd4ae41ff827599f4ce98afe8-1f4c8c394797400784fde34e7133c5f5.png?v=1683881064127"
                                alt="Đèn bàn đồng thau cao cấp"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product-item-action">
                        <button
                          type="button"
                          title="Yêu thích"
                          className="shop-wishlist-button-add"
                          data-type="shop-wishlist-button-add"
                        >
                          <HeartIcon />
                        </button>
                        <button
                          type="button"
                          title="Xem nhanh"
                          className="shop-quickview-button"
                          data-type="shop-quickview-button"
                        >
                          <CartIcon />
                        </button>
                        <button
                          type="button"
                          title="Thêm vào giỏ"
                          className="shop-addLoop-button"
                          data-type="shop-addLoop-button"
                        >
                          <MagnifyingGlassIcon />
                        </button>
                      </div>
                      <div className="product-item-detail">
                        <div className="product-item-detail-info">
                          <span className="product-item-detail-info-vendor">
                            <Link href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                              F1GENZ
                            </Link>
                          </span>
                          <span className="product-item-detail-info-tag">Freeship</span>
                        </div>
                        <h3 className="product-item-detail-name">
                          <Link href="/den-ban-dong-thau-cao-cap" title="Đèn bàn đồng thau cao cấp">
                            Đèn bàn đồng thau cao cấp
                          </Link>
                        </h3>
                        <div className="product-item-detail-price">
                          <span>2.819.000₫</span>
                          <del>3.199.000₫</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item" data-id="87902289" data-handle="den-ban-pooping-dog-f1genz">
                    <div className="product-item-wrap">
                      <div className="product-item-image hasThumbs hasThumbsIcon">
                        <span className="product-item-discount">-7%</span>
                        <Link
                          className="product-item-link"
                          href="/den-ban-pooping-dog-f1genz"
                          title="Đèn bàn Pooping Dog F1GENZ"
                        >
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/1-d8b7d0d1c773449bbbba8abe74a0157d-4147d239898a4b8a80b8bfa51847c0e6.png?v=1683881061000"
                            alt="Đèn bàn Pooping Dog F1GENZ"
                          />
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/2-7c4a4e6dcc8b49098540d50ce3a89735-44c31c5b7bd441c28fc613395abe6ab8.png?v=1683881061000"
                            alt="Đèn bàn Pooping Dog F1GENZ"
                          />
                        </Link>
                        <ul className="product-item-thumbs">
                          <li>
                            <Link href="/den-ban-pooping-dog-f1genz" title="Đèn bàn Pooping Dog F1GENZ">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-7c4a4e6dcc8b49098540d50ce3a89735-44c31c5b7bd441c28fc613395abe6ab8.png?v=1683881061000"
                                alt="Đèn bàn Pooping Dog F1GENZ"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/den-ban-pooping-dog-f1genz" title="Đèn bàn Pooping Dog F1GENZ">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-cc67f0197e6e40a994a9cbd3514ac16d-b52bf8ecb7e64cefb1035aae24b5782b.png?v=1683881061000"
                                alt="Đèn bàn Pooping Dog F1GENZ"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/den-ban-pooping-dog-f1genz" title="Đèn bàn Pooping Dog F1GENZ">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-cdaf861c82424286b5a54a87a0d73921-682d7309c8e8442f9961c87d8307debf.png?v=1683881061000"
                                alt="Đèn bàn Pooping Dog F1GENZ"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product-item-action">
                        <button
                          type="button"
                          title="Yêu thích"
                          className="shop-wishlist-button-add"
                          data-type="shop-wishlist-button-add"
                        >
                          <HeartIcon />
                        </button>
                        <button
                          type="button"
                          title="Xem nhanh"
                          className="shop-quickview-button"
                          data-type="shop-quickview-button"
                        >
                          <CartIcon />
                        </button>
                        <button
                          type="button"
                          title="Thêm vào giỏ"
                          className="shop-addLoop-button"
                          data-type="shop-addLoop-button"
                        >
                          <MagnifyingGlassIcon />
                        </button>
                      </div>
                      <div className="product-item-detail">
                        <div className="product-item-detail-info">
                          <span className="product-item-detail-info-vendor">
                            <Link href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                              F1GENZ
                            </Link>
                          </span>
                          <span className="product-item-detail-info-tag">Flashsale</span>
                        </div>
                        <h3 className="product-item-detail-name">
                          <Link href="/den-ban-pooping-dog-f1genz" title="Đèn bàn Pooping Dog F1GENZ">
                            Đèn bàn Pooping Dog F1GENZ
                          </Link>
                        </h3>
                        <div className="product-item-detail-price">
                          <span>3.529.000₫</span>
                          <del>3.789.000₫</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item" data-id="87902188" data-handle="den-san-f1genz-cao-cap">
                    <div className="product-item-wrap">
                      <div className="product-item-image hasThumbs hasThumbsIcon">
                        <span className="product-item-discount">-6%</span>
                        <Link
                          className="product-item-link"
                          href="/den-san-f1genz-cao-cap"
                          title="Đèn sàn F1GENZ cao cấp"
                        >
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/1-d1d27878e84b497282e2c10780ab7d73-202bf7d605a14ee288aa401f9213d668.png?v=1683881056433"
                            alt="Đèn sàn F1GENZ cao cấp"
                          />
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/2-e359d34ae6cf492e9c3d625ca59236fd-f8f9b68097224122a77891c13a171c23.png?v=1683881056433"
                            alt="Đèn sàn F1GENZ cao cấp"
                          />
                        </Link>
                        <ul className="product-item-thumbs">
                          <li>
                            <Link href="/den-san-f1genz-cao-cap" title="Đèn sàn F1GENZ cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-e359d34ae6cf492e9c3d625ca59236fd-f8f9b68097224122a77891c13a171c23.png?v=1683881056433"
                                alt="Đèn sàn F1GENZ cao cấp"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/den-san-f1genz-cao-cap" title="Đèn sàn F1GENZ cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-c9ef801af5954b7f9487225920a38e84-acef636d069048cabb325db6b9c4fe11.png?v=1683881056433"
                                alt="Đèn sàn F1GENZ cao cấp"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/den-san-f1genz-cao-cap" title="Đèn sàn F1GENZ cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/5-2776589ed41b4047a1f75410c514830f-914f81216da340cb84125c046ab63c5f.png?v=1683881056433"
                                alt="Đèn sàn F1GENZ cao cấp"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product-item-action">
                        <button
                          type="button"
                          title="Yêu thích"
                          className="shop-wishlist-button-add"
                          data-type="shop-wishlist-button-add"
                        >
                          <HeartIcon />
                        </button>
                        <button
                          type="button"
                          title="Xem nhanh"
                          className="shop-quickview-button"
                          data-type="shop-quickview-button"
                        >
                          <CartIcon />
                        </button>
                        <button
                          type="button"
                          title="Thêm vào giỏ"
                          className="shop-addLoop-button"
                          data-type="shop-addLoop-button"
                        >
                          <MagnifyingGlassIcon />
                        </button>
                      </div>
                      <div className="product-item-detail">
                        <div className="product-item-detail-info">
                          <span className="product-item-detail-info-vendor">
                            <Link href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                              F1GENZ
                            </Link>
                          </span>
                          <span className="product-item-detail-info-tag">Best seller</span>
                        </div>
                        <h3 className="product-item-detail-name">
                          <Link href="/den-san-f1genz-cao-cap" title="Đèn sàn F1GENZ cao cấp">
                            Đèn sàn F1GENZ cao cấp
                          </Link>
                        </h3>
                        <div className="product-item-detail-price">
                          <span>4.990.000₫</span>
                          <del>5.290.000₫</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item" data-id="87902104" data-handle="den-san-bang-da-cam-thach">
                    <div className="product-item-wrap">
                      <div className="product-item-image hasThumbs hasThumbsIcon">
                        <span className="product-item-discount">-5%</span>
                        <Link
                          className="product-item-link"
                          href="/den-san-bang-da-cam-thach"
                          title="Đèn sàn bằng đá cẩm thạch"
                        >
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/1-8856b3adac2b4c4793969785f43819b9-0fa9e8fa0a684cfeb70140f86ca90c41.png?v=1683881052893"
                            alt="Đèn sàn bằng đá cẩm thạch"
                          />
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/2-67130494f95e49c68ec9466831827a12-9df68d8bfd5e4bae9919cdc1a0516f79.png?v=1683881052893"
                            alt="Đèn sàn bằng đá cẩm thạch"
                          />
                        </Link>
                        <ul className="product-item-thumbs">
                          <li>
                            <Link href="/den-san-bang-da-cam-thach" title="Đèn sàn bằng đá cẩm thạch">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-67130494f95e49c68ec9466831827a12-9df68d8bfd5e4bae9919cdc1a0516f79.png?v=1683881052893"
                                alt="Đèn sàn bằng đá cẩm thạch"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/den-san-bang-da-cam-thach" title="Đèn sàn bằng đá cẩm thạch">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-0a82fbd2ebea4e5daef497271ce48faa-9b49312c42b14dcdbec60f361e641292.png?v=1683881052893"
                                alt="Đèn sàn bằng đá cẩm thạch"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/den-san-bang-da-cam-thach" title="Đèn sàn bằng đá cẩm thạch">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-f9f1619929b040578c001470414f6737-18a8a4beba1542d093190be53c940ef6.png?v=1683881052893"
                                alt="Đèn sàn bằng đá cẩm thạch"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product-item-action">
                        <button
                          type="button"
                          title="Yêu thích"
                          className="shop-wishlist-button-add"
                          data-type="shop-wishlist-button-add"
                        >
                          <HeartIcon />
                        </button>
                        <button
                          type="button"
                          title="Xem nhanh"
                          className="shop-quickview-button"
                          data-type="shop-quickview-button"
                        >
                          <CartIcon />
                        </button>
                        <button
                          type="button"
                          title="Thêm vào giỏ"
                          className="shop-addLoop-button"
                          data-type="shop-addLoop-button"
                        >
                          <MagnifyingGlassIcon />
                        </button>
                      </div>
                      <div className="product-item-detail">
                        <div className="product-item-detail-info">
                          <span className="product-item-detail-info-vendor">
                            <Link href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                              F1GENZ
                            </Link>
                          </span>
                          <span className="product-item-detail-info-tag">Trả góp</span>
                        </div>
                        <h3 className="product-item-detail-name">
                          <Link href="/den-san-bang-da-cam-thach" title="Đèn sàn bằng đá cẩm thạch">
                            Đèn sàn bằng đá cẩm thạch
                          </Link>
                        </h3>
                        <div className="product-item-detail-price">
                          <span>3.990.000₫</span>
                          <del>4.190.000₫</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item" data-id="87902035" data-handle="den-san-cao-cap-tu-f1genz">
                    <div className="product-item-wrap">
                      <div className="product-item-image hasThumbs hasThumbsIcon">
                        <span className="product-item-discount">-5%</span>
                        <Link
                          className="product-item-link"
                          href="/den-san-cao-cap-tu-f1genz"
                          title="Đèn sàn cao cấp từ F1GENZ"
                        >
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/1-fbd5653f65fb49cfaf9743a7c0d012df-e6bc2bc37bc94eb198fd8dce0620e999.png?v=1683881049763"
                            alt="Đèn sàn cao cấp từ F1GENZ"
                          />
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/2-d22ab689affd4a0382d90631d5e22274-3075bf2e74e04f8a869b15a9ca64b447.png?v=1683881049763"
                            alt="Đèn sàn cao cấp từ F1GENZ"
                          />
                        </Link>
                        <ul className="product-item-thumbs">
                          <li>
                            <Link href="/den-san-cao-cap-tu-f1genz" title="Đèn sàn cao cấp từ F1GENZ">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-d22ab689affd4a0382d90631d5e22274-3075bf2e74e04f8a869b15a9ca64b447.png?v=1683881049763"
                                alt="Đèn sàn cao cấp từ F1GENZ"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/den-san-cao-cap-tu-f1genz" title="Đèn sàn cao cấp từ F1GENZ">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-8a789d53dbfe4a10809d513fcd086a69-8cc818c0b217415d80c9bc2ef9b39da4.png?v=1683881049763"
                                alt="Đèn sàn cao cấp từ F1GENZ"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/den-san-cao-cap-tu-f1genz" title="Đèn sàn cao cấp từ F1GENZ">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-fb837f9969534af3bf6aa026f2e78f7f-02429989b0f146b780245df15976e67f.png?v=1683881049763"
                                alt="Đèn sàn cao cấp từ F1GENZ"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product-item-action">
                        <button
                          type="button"
                          title="Yêu thích"
                          className="shop-wishlist-button-add"
                          data-type="shop-wishlist-button-add"
                        >
                          <HeartIcon />
                        </button>
                        <button
                          type="button"
                          title="Xem nhanh"
                          className="shop-quickview-button"
                          data-type="shop-quickview-button"
                        >
                          <CartIcon />
                        </button>
                        <button
                          type="button"
                          title="Thêm vào giỏ"
                          className="shop-addLoop-button"
                          data-type="shop-addLoop-button"
                        >
                          <MagnifyingGlassIcon />
                        </button>
                      </div>
                      <div className="product-item-detail">
                        <div className="product-item-detail-info">
                          <span className="product-item-detail-info-vendor">
                            <Link href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                              F1GENZ
                            </Link>
                          </span>
                          <span className="product-item-detail-info-tag">Độc quyền</span>
                        </div>
                        <h3 className="product-item-detail-name">
                          <Link href="/den-san-cao-cap-tu-f1genz" title="Đèn sàn cao cấp từ F1GENZ">
                            Đèn sàn cao cấp từ F1GENZ
                          </Link>
                        </h3>
                        <div className="product-item-detail-price">
                          <span>3.998.000₫</span>
                          <del>4.210.000₫</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-product-tab-body-item">
                <div className="home-product-tab-body-item-data">
                  <div className="product-item" data-id="87901931" data-handle="ghe-an-4-chan-f1genz-cao-cap-3">
                    <div className="product-item-wrap">
                      <div className="product-item-image hasThumbs hasThumbsIcon">
                        <span className="product-item-discount">-14%</span>
                        <Link
                          className="product-item-link"
                          href="/ghe-an-4-chan-f1genz-cao-cap-3"
                          title="Ghế ăn 4 chân F1GENZ cao cấp"
                        >
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/7-b4c95003f2eb4878addb04eb5ed9c6b0-748ee609e8214151aa2f5f05fdfced27.png?v=1683881045433"
                            alt="Ghế ăn 4 chân F1GENZ cao cấp"
                          />
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/15-ffeec44020454f32834955e517e33291-5a860504da9c457ca4744def64878cab.png?v=1683881045433"
                            alt="Ghế ăn 4 chân F1GENZ cao cấp"
                          />
                        </Link>
                        <ul className="product-item-thumbs">
                          <li>
                            <Link href="/ghe-an-4-chan-f1genz-cao-cap-3" title="Ghế ăn 4 chân F1GENZ cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/15-ffeec44020454f32834955e517e33291-5a860504da9c457ca4744def64878cab.png?v=1683881045433"
                                alt="Ghế ăn 4 chân F1GENZ cao cấp"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ghe-an-4-chan-f1genz-cao-cap-3" title="Ghế ăn 4 chân F1GENZ cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/14-92c82ac8d06f478c880f3080d2729c1e-cfa585abcbf24a5291f55bbd10990a00.png?v=1683881045433"
                                alt="Ghế ăn 4 chân F1GENZ cao cấp"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ghe-an-4-chan-f1genz-cao-cap-3" title="Ghế ăn 4 chân F1GENZ cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/13-b369582020214698bb9cf1850d77a740-cc2b18eb1ad0490cac7b434ab117deab.png?v=1683881045433"
                                alt="Ghế ăn 4 chân F1GENZ cao cấp"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product-item-action">
                        <button
                          type="button"
                          title="Yêu thích"
                          className="shop-wishlist-button-add"
                          data-type="shop-wishlist-button-add"
                        >
                          <HeartIcon />
                        </button>
                        <button
                          type="button"
                          title="Xem nhanh"
                          className="shop-quickview-button"
                          data-type="shop-quickview-button"
                        >
                          <CartIcon />
                        </button>
                        <button
                          type="button"
                          title="Thêm vào giỏ"
                          className="shop-addLoop-button"
                          data-type="shop-addLoop-button"
                        >
                          <MagnifyingGlassIcon />
                        </button>
                      </div>
                      <div className="product-item-detail">
                        <div className="product-item-detail-info">
                          <span className="product-item-detail-info-vendor">
                            <Link href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                              F1GENZ
                            </Link>
                          </span>
                          <span className="product-item-detail-info-tag">Trả góp</span>
                        </div>
                        <h3 className="product-item-detail-name">
                          <Link href="/ghe-an-4-chan-f1genz-cao-cap-3" title="Ghế ăn 4 chân F1GENZ cao cấp">
                            Ghế ăn 4 chân F1GENZ cao cấp
                          </Link>
                        </h3>
                        <div className="product-item-detail-price">
                          <span>2.819.000₫</span>
                          <del>3.290.000₫</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item" data-id="87901666" data-handle="ghe-an-4-chan-cao-cap-1">
                    <div className="product-item-wrap">
                      <div className="product-item-image hasThumbs hasThumbsIcon">
                        <span className="product-item-discount">-25%</span>
                        <Link
                          className="product-item-link"
                          href="/ghe-an-4-chan-cao-cap-1"
                          title="Ghế ăn 4 chân cao cấp"
                        >
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/2-9883f5e6b0fa4facbaa5dae6cbcbd6fa-00a5e3fa3bf04615b8b032f056be937d.png?v=1683881033297"
                            alt="Ghế ăn 4 chân cao cấp"
                          />
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/1-91f1ac7a73984bf691c8d92d4b849887-8799f804597043798e44fe0ac637a666.png?v=1683881033297"
                            alt="Ghế ăn 4 chân cao cấp"
                          />
                        </Link>
                        <ul className="product-item-thumbs">
                          <li>
                            <Link href="/ghe-an-4-chan-cao-cap-1" title="Ghế ăn 4 chân cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/1-91f1ac7a73984bf691c8d92d4b849887-8799f804597043798e44fe0ac637a666.png?v=1683881033297"
                                alt="Ghế ăn 4 chân cao cấp"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ghe-an-4-chan-cao-cap-1" title="Ghế ăn 4 chân cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-b9fcd276c5fe434bab0e244a1b501264-7e1a3c6db16c40e192b1d8519da78816.png?v=1683881033297"
                                alt="Ghế ăn 4 chân cao cấp"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ghe-an-4-chan-cao-cap-1" title="Ghế ăn 4 chân cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-2e6994f60a3e46d7a1822b46d9687890-2bad70ca74194fcab2f3df552c7ee7d1.png?v=1683881033297"
                                alt="Ghế ăn 4 chân cao cấp"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product-item-action">
                        <button
                          type="button"
                          title="Yêu thích"
                          className="shop-wishlist-button-add"
                          data-type="shop-wishlist-button-add"
                        >
                          <HeartIcon />
                        </button>
                        <button
                          type="button"
                          title="Xem nhanh"
                          className="shop-quickview-button"
                          data-type="shop-quickview-button"
                        >
                          <CartIcon />
                        </button>
                        <button
                          type="button"
                          title="Thêm vào giỏ"
                          className="shop-addLoop-button"
                          data-type="shop-addLoop-button"
                        >
                          <MagnifyingGlassIcon />
                        </button>
                      </div>
                      <div className="product-item-detail">
                        <div className="product-item-detail-info">
                          <span className="product-item-detail-info-vendor">
                            <Link href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                              F1GENZ
                            </Link>
                          </span>
                          <span className="product-item-detail-info-tag">Quà tặng</span>
                        </div>
                        <h3 className="product-item-detail-name">
                          <Link href="/ghe-an-4-chan-cao-cap-1" title="Ghế ăn 4 chân cao cấp">
                            Ghế ăn 4 chân cao cấp
                          </Link>
                        </h3>
                        <div className="product-item-detail-price">
                          <span>11.199.000₫</span>
                          <del>14.900.000₫</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item" data-id="87901526" data-handle="ghe-an-f1genz-cao-cap-1">
                    <div className="product-item-wrap">
                      <div className="product-item-image hasThumbs hasThumbsIcon">
                        <span className="product-item-discount">-14%</span>
                        <Link
                          className="product-item-link"
                          href="/ghe-an-f1genz-cao-cap-1"
                          title="Ghế ăn F1GENZ cao cấp"
                        >
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/1-b83fda81dad54ff6be5a77d9ff957468-4e3f8c8db5aa4fbea1834d7cafce5513.png?v=1683881027370"
                            alt="Ghế ăn F1GENZ cao cấp"
                          />
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/12-cfe4d39184964725a137278cefd86b36-c0ba1f324986433d97377fce5f8bbf6f.png?v=1683881027370"
                            alt="Ghế ăn F1GENZ cao cấp"
                          />
                        </Link>
                        <ul className="product-item-thumbs">
                          <li>
                            <Link href="/ghe-an-f1genz-cao-cap-1" title="Ghế ăn F1GENZ cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/12-cfe4d39184964725a137278cefd86b36-c0ba1f324986433d97377fce5f8bbf6f.png?v=1683881027370"
                                alt="Ghế ăn F1GENZ cao cấp"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ghe-an-f1genz-cao-cap-1" title="Ghế ăn F1GENZ cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/11-b273ec99de6d47a782ac8e516d1fa9fb-55522eb0ed134ffbb8d0fbd7a9213188.png?v=1683881027370"
                                alt="Ghế ăn F1GENZ cao cấp"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ghe-an-f1genz-cao-cap-1" title="Ghế ăn F1GENZ cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/10-a1e1765eb2474dc29cc0b99547a29207-4c3db7361f724259b51abe0c0e5c473b.png?v=1683881027370"
                                alt="Ghế ăn F1GENZ cao cấp"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product-item-action">
                        <button
                          type="button"
                          title="Yêu thích"
                          className="shop-wishlist-button-add"
                          data-type="shop-wishlist-button-add"
                        >
                          <HeartIcon />
                        </button>
                        <button
                          type="button"
                          title="Xem nhanh"
                          className="shop-quickview-button"
                          data-type="shop-quickview-button"
                        >
                          <CartIcon />
                        </button>
                        <button
                          type="button"
                          title="Thêm vào giỏ"
                          className="shop-addLoop-button"
                          data-type="shop-addLoop-button"
                        >
                          <MagnifyingGlassIcon />
                        </button>
                      </div>
                      <div className="product-item-detail">
                        <div className="product-item-detail-info">
                          <span className="product-item-detail-info-vendor">
                            <Link href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                              F1GENZ
                            </Link>
                          </span>
                          <span className="product-item-detail-info-tag">Giá tốt</span>
                        </div>
                        <h3 className="product-item-detail-name">
                          <Link href="/ghe-an-f1genz-cao-cap-1" title="Ghế ăn F1GENZ cao cấp">
                            Ghế ăn F1GENZ cao cấp
                          </Link>
                        </h3>
                        <div className="product-item-detail-price">
                          <span>2.819.000₫</span>
                          <del>3.290.000₫</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item" data-id="87901387" data-handle="ghe-an-f1genz-cao-cap-loai-dac-biet">
                    <div className="product-item-wrap">
                      <div className="product-item-image hasThumbs hasThumbsIcon">
                        <Link
                          className="product-item-link"
                          href="/ghe-an-f1genz-cao-cap-loai-dac-biet"
                          title="Ghế ăn F1GENZ cao cấp loại đặc biệt"
                        >
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/1-a5ec45bc87c2439782bee53b0e27c508-737c055b25a24e95bc40bfd4796104ce.png?v=1683881021203"
                            alt="Ghế ăn F1GENZ cao cấp loại đặc biệt"
                          />
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/2-51f5c1dccd8a4dd9a4dd0e81151ce6ce-579e8431a63944719f322fd6a653d609.png?v=1683881021203"
                            alt="Ghế ăn F1GENZ cao cấp loại đặc biệt"
                          />
                        </Link>
                        <ul className="product-item-thumbs">
                          <li>
                            <Link
                              href="/ghe-an-f1genz-cao-cap-loai-dac-biet"
                              title="Ghế ăn F1GENZ cao cấp loại đặc biệt"
                            >
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-51f5c1dccd8a4dd9a4dd0e81151ce6ce-579e8431a63944719f322fd6a653d609.png?v=1683881021203"
                                alt="Ghế ăn F1GENZ cao cấp loại đặc biệt"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/ghe-an-f1genz-cao-cap-loai-dac-biet"
                              title="Ghế ăn F1GENZ cao cấp loại đặc biệt"
                            >
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-b5ff76a3f4b54cc28d20c9536fa59ab9-5ba88c3067384a1ebc3646912b0515a5.png?v=1683881021203"
                                alt="Ghế ăn F1GENZ cao cấp loại đặc biệt"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/ghe-an-f1genz-cao-cap-loai-dac-biet"
                              title="Ghế ăn F1GENZ cao cấp loại đặc biệt"
                            >
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-7c0f7e12b4804990a7257d608f58ed86-64e4ae95c0194c739b77aef2ad85ada0.png?v=1683881021203"
                                alt="Ghế ăn F1GENZ cao cấp loại đặc biệt"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product-item-action">
                        <button
                          type="button"
                          title="Yêu thích"
                          className="shop-wishlist-button-add"
                          data-type="shop-wishlist-button-add"
                        >
                          <HeartIcon />
                        </button>
                        <button
                          type="button"
                          title="Xem nhanh"
                          className="shop-quickview-button"
                          data-type="shop-quickview-button"
                        >
                          <CartIcon />
                        </button>
                        <button
                          type="button"
                          title="Thêm vào giỏ"
                          className="shop-addLoop-button"
                          data-type="shop-addLoop-button"
                        >
                          <MagnifyingGlassIcon />
                        </button>
                      </div>
                      <div className="product-item-detail">
                        <div className="product-item-detail-info">
                          <span className="product-item-detail-info-vendor">
                            <Link href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                              F1GENZ
                            </Link>
                          </span>
                          <span className="product-item-detail-info-tag">New</span>
                        </div>
                        <h3 className="product-item-detail-name">
                          <Link href="/ghe-an-f1genz-cao-cap-loai-dac-biet" title="Ghế ăn F1GENZ cao cấp loại đặc biệt">
                            Ghế ăn F1GENZ cao cấp loại đặc biệt
                          </Link>
                        </h3>
                        <div className="product-item-detail-price">
                          <span>5.199.000₫</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item" data-id="87901233" data-handle="ghe-cay-4-chan-cao-cap">
                    <div className="product-item-wrap">
                      <div className="product-item-image hasThumbs hasThumbsIcon">
                        <span className="product-item-discount">-21%</span>
                        <Link
                          className="product-item-link"
                          href="/ghe-cay-4-chan-cao-cap"
                          title="Ghế cây 4 chân cao cấp"
                        >
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/1-28b196b78bfd4b4e9a05ce543fce0eff-d10c56f38ce54cab92a11712afcecc29.png?v=1683881014757"
                            alt="Ghế cây 4 chân cao cấp"
                          />
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/2-21de4dd8edb74c8ba14060b0370fc367-5347bf4a46a943d88711532d8027f628.png?v=1683881014757"
                            alt="Ghế cây 4 chân cao cấp"
                          />
                        </Link>
                        <ul className="product-item-thumbs">
                          <li>
                            <Link href="/ghe-cay-4-chan-cao-cap" title="Ghế cây 4 chân cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-21de4dd8edb74c8ba14060b0370fc367-5347bf4a46a943d88711532d8027f628.png?v=1683881014757"
                                alt="Ghế cây 4 chân cao cấp"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ghe-cay-4-chan-cao-cap" title="Ghế cây 4 chân cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-cce931bc87724783acff7976b0fcc19d-53cf45ed17a746a29f8826209c815874.png?v=1683881014757"
                                alt="Ghế cây 4 chân cao cấp"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ghe-cay-4-chan-cao-cap" title="Ghế cây 4 chân cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-0c5e637c09134f4494c2c6f60b6470df-58d1da5a0442458fbc5c018201c11c7f.png?v=1683881014757"
                                alt="Ghế cây 4 chân cao cấp"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product-item-action">
                        <button
                          type="button"
                          title="Yêu thích"
                          className="shop-wishlist-button-add"
                          data-type="shop-wishlist-button-add"
                        >
                          <HeartIcon />
                        </button>
                        <button
                          type="button"
                          title="Xem nhanh"
                          className="shop-quickview-button"
                          data-type="shop-quickview-button"
                        >
                          <CartIcon />
                        </button>
                        <button
                          type="button"
                          title="Thêm vào giỏ"
                          className="shop-addLoop-button"
                          data-type="shop-addLoop-button"
                        >
                          <MagnifyingGlassIcon />
                        </button>
                      </div>
                      <div className="product-item-detail">
                        <div className="product-item-detail-info">
                          <span className="product-item-detail-info-vendor">
                            <Link href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                              F1GENZ
                            </Link>
                          </span>
                          <span className="product-item-detail-info-tag">Freeship</span>
                        </div>
                        <h3 className="product-item-detail-name">
                          <Link href="/ghe-cay-4-chan-cao-cap" title="Ghế cây 4 chân cao cấp">
                            Ghế cây 4 chân cao cấp
                          </Link>
                        </h3>
                        <div className="product-item-detail-price">
                          <span>8.900.000₫</span>
                          <del>11.290.000₫</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item" data-id="87901113" data-handle="ghe-dua-cao-cap-phong-an">
                    <div className="product-item-wrap">
                      <div className="product-item-image hasThumbs hasThumbsIcon">
                        <span className="product-item-discount">-13%</span>
                        <Link
                          className="product-item-link"
                          href="/ghe-dua-cao-cap-phong-an"
                          title="Ghế dựa cao cấp phòng ăn"
                        >
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/1-3205635d45b748d195f97c41a8abd0bd-ac0e9bac8a5d42ccba9253acd65531f4.png?v=1683881009470"
                            alt="Ghế dựa cao cấp phòng ăn"
                          />
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/2-d6b80505107c44fa96f141c061b28a70-643e7b2e7e354d089a9dc4b2282c8373.png?v=1683881009470"
                            alt="Ghế dựa cao cấp phòng ăn"
                          />
                        </Link>
                        <ul className="product-item-thumbs">
                          <li>
                            <Link href="/ghe-dua-cao-cap-phong-an" title="Ghế dựa cao cấp phòng ăn">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-d6b80505107c44fa96f141c061b28a70-643e7b2e7e354d089a9dc4b2282c8373.png?v=1683881009470"
                                alt="Ghế dựa cao cấp phòng ăn"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ghe-dua-cao-cap-phong-an" title="Ghế dựa cao cấp phòng ăn">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-95461e910d7b4f9fa57f34cb31f5d31d-8ef634ad4d284a3891021cb1818322e3.png?v=1683881009470"
                                alt="Ghế dựa cao cấp phòng ăn"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ghe-dua-cao-cap-phong-an" title="Ghế dựa cao cấp phòng ăn">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-53ada3b93c0e40fd902959480216c74a-957ba38b360544acaa0d918fa660765e.png?v=1683881009470"
                                alt="Ghế dựa cao cấp phòng ăn"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product-item-action">
                        <button
                          type="button"
                          title="Yêu thích"
                          className="shop-wishlist-button-add"
                          data-type="shop-wishlist-button-add"
                        >
                          <HeartIcon />
                        </button>
                        <button
                          type="button"
                          title="Xem nhanh"
                          className="shop-quickview-button"
                          data-type="shop-quickview-button"
                        >
                          <CartIcon />
                        </button>
                        <button
                          type="button"
                          title="Thêm vào giỏ"
                          className="shop-addLoop-button"
                          data-type="shop-addLoop-button"
                        >
                          <MagnifyingGlassIcon />
                        </button>
                      </div>
                      <div className="product-item-detail">
                        <div className="product-item-detail-info">
                          <span className="product-item-detail-info-vendor">
                            <Link href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                              F1GENZ
                            </Link>
                          </span>
                          <span className="product-item-detail-info-tag">Saleoff</span>
                        </div>
                        <h3 className="product-item-detail-name">
                          <Link href="/ghe-dua-cao-cap-phong-an" title="Ghế dựa cao cấp phòng ăn">
                            Ghế dựa cao cấp phòng ăn
                          </Link>
                        </h3>
                        <div className="product-item-detail-price">
                          <span>1.399.000₫</span>
                          <del>1.599.000₫</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item" data-id="87901033" data-handle="ghe-kieu-hien-dai-2022">
                    <div className="product-item-wrap">
                      <div className="product-item-image hasThumbs hasThumbsIcon">
                        <span className="product-item-discount">-21%</span>
                        <Link
                          className="product-item-link"
                          href="/ghe-kieu-hien-dai-2022"
                          title="Ghế kiểu hiện đại 2022"
                        >
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/1-caa7df09ccc1437a89ffeb6499b27cb8-7c7e8148b4f54252bd16f00c014328d3.png?v=1683881006230"
                            alt="Ghế kiểu hiện đại 2022"
                          />
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/2-410112266dea4cadb4eeaa73261a49d0-4b05099cf4554e53bf5498afc4196afd.png?v=1683881006230"
                            alt="Ghế kiểu hiện đại 2022"
                          />
                        </Link>
                        <ul className="product-item-thumbs">
                          <li>
                            <Link href="/ghe-kieu-hien-dai-2022" title="Ghế kiểu hiện đại 2022">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-410112266dea4cadb4eeaa73261a49d0-4b05099cf4554e53bf5498afc4196afd.png?v=1683881006230"
                                alt="Ghế kiểu hiện đại 2022"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ghe-kieu-hien-dai-2022" title="Ghế kiểu hiện đại 2022">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-7ca10f446cb74e15a09b036581aaf5ad-7bb38acbdb154fd19dc24ee871ffc295.png?v=1683881006230"
                                alt="Ghế kiểu hiện đại 2022"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ghe-kieu-hien-dai-2022" title="Ghế kiểu hiện đại 2022">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-1e5d1019b5c94f1fa6617862c90678ae-959f902b70a046ea824f3aafc701ef23.png?v=1683881006230"
                                alt="Ghế kiểu hiện đại 2022"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product-item-action">
                        <button
                          type="button"
                          title="Yêu thích"
                          className="shop-wishlist-button-add"
                          data-type="shop-wishlist-button-add"
                        >
                          <HeartIcon />
                        </button>
                        <button
                          type="button"
                          title="Xem nhanh"
                          className="shop-quickview-button"
                          data-type="shop-quickview-button"
                        >
                          <CartIcon />
                        </button>
                        <button
                          type="button"
                          title="Thêm vào giỏ"
                          className="shop-addLoop-button"
                          data-type="shop-addLoop-button"
                        >
                          <MagnifyingGlassIcon />
                        </button>
                      </div>
                      <div className="product-item-detail">
                        <div className="product-item-detail-info">
                          <span className="product-item-detail-info-vendor">
                            <Link href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                              F1GENZ
                            </Link>
                          </span>
                          <span className="product-item-detail-info-tag">Best seller</span>
                        </div>
                        <h3 className="product-item-detail-name">
                          <Link href="/ghe-kieu-hien-dai-2022" title="Ghế kiểu hiện đại 2022">
                            Ghế kiểu hiện đại 2022
                          </Link>
                        </h3>
                        <div className="product-item-detail-price">
                          <span>1.899.000₫</span>
                          <del>2.390.000₫</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item" data-id="87900949" data-handle="ghe-tron-4-chan-cao-cap-3">
                    <div className="product-item-wrap">
                      <div className="product-item-image hasThumbs hasThumbsIcon">
                        <span className="product-item-discount">-42%</span>
                        <Link
                          className="product-item-link"
                          href="/ghe-tron-4-chan-cao-cap-3"
                          title="Ghế trơn 4 chân cao cấp"
                        >
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/7-2f06c085cb084d15954234920131ae23-1fbf13e8b40248abbd385fc42dc26f21.png?v=1683881002767"
                            alt="Ghế trơn 4 chân cao cấp"
                          />
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/15-32c5f7f1181c43698d60ad6cdbe45c3a-6e576bf0203c4355bcb38fa9dbe34201.png?v=1683881002767"
                            alt="Ghế trơn 4 chân cao cấp"
                          />
                        </Link>
                        <ul className="product-item-thumbs">
                          <li>
                            <Link href="/ghe-tron-4-chan-cao-cap-3" title="Ghế trơn 4 chân cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/15-32c5f7f1181c43698d60ad6cdbe45c3a-6e576bf0203c4355bcb38fa9dbe34201.png?v=1683881002767"
                                alt="Ghế trơn 4 chân cao cấp"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ghe-tron-4-chan-cao-cap-3" title="Ghế trơn 4 chân cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/14-f8969d6bf3ec45f59e2ca4c7ec89aafd-40d5102a186a4221b9bdcf0dbd9382e2.png?v=1683881002767"
                                alt="Ghế trơn 4 chân cao cấp"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ghe-tron-4-chan-cao-cap-3" title="Ghế trơn 4 chân cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/13-4519a09cbdae414f9122644a6b6bfb96-fa078fcea5854567a8f84bcbd5b42f92.png?v=1683881002767"
                                alt="Ghế trơn 4 chân cao cấp"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product-item-action">
                        <button
                          type="button"
                          title="Yêu thích"
                          className="shop-wishlist-button-add"
                          data-type="shop-wishlist-button-add"
                        >
                          <HeartIcon />
                        </button>
                        <button
                          type="button"
                          title="Xem nhanh"
                          className="shop-quickview-button"
                          data-type="shop-quickview-button"
                        >
                          <CartIcon />
                        </button>
                        <button
                          type="button"
                          title="Thêm vào giỏ"
                          className="shop-addLoop-button"
                          data-type="shop-addLoop-button"
                        >
                          <MagnifyingGlassIcon />
                        </button>
                      </div>
                      <div className="product-item-detail">
                        <div className="product-item-detail-info">
                          <span className="product-item-detail-info-vendor">
                            <Link href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                              F1GENZ
                            </Link>
                          </span>
                          <span className="product-item-detail-info-tag">Flashsale</span>
                        </div>
                        <h3 className="product-item-detail-name">
                          <Link href="/ghe-tron-4-chan-cao-cap-3" title="Ghế trơn 4 chân cao cấp">
                            Ghế trơn 4 chân cao cấp
                          </Link>
                        </h3>
                        <div className="product-item-detail-price">
                          <span>1.380.000₫</span>
                          <del>2.359.000₫</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-product-tab-body-item">
                <div className="home-product-tab-body-item-data">
                  <div className="product-item" data-id="87903177" data-handle="ban-an-4-chan-gia-dinh-cao-cap">
                    <div className="product-item-wrap">
                      <div className="product-item-image hasThumbs hasThumbsIcon">
                        <span className="product-item-discount">-9%</span>
                        <Link
                          className="product-item-link"
                          href="/ban-an-4-chan-gia-dinh-cao-cap"
                          title="Bàn ăn 4 chân gia đình cao cấp"
                        >
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/1-5acd9b1760c24d398ebcfacdf7a29a2c-e92c34fb179e4b219283683d0714d7d8.png?v=1683881102413"
                            alt="Bàn ăn 4 chân gia đình cao cấp"
                          />
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/2-cf9c3caad4d44eafb680ed2ce63a522c-6d1ddf61c7424f3c829d43ce91704f29.png?v=1683881102413"
                            alt="Bàn ăn 4 chân gia đình cao cấp"
                          />
                        </Link>
                        <ul className="product-item-thumbs">
                          <li>
                            <Link href="/ban-an-4-chan-gia-dinh-cao-cap" title="Bàn ăn 4 chân gia đình cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-cf9c3caad4d44eafb680ed2ce63a522c-6d1ddf61c7424f3c829d43ce91704f29.png?v=1683881102413"
                                alt="Bàn ăn 4 chân gia đình cao cấp"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ban-an-4-chan-gia-dinh-cao-cap" title="Bàn ăn 4 chân gia đình cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-2b4d0eae0c994f9eb41bd5534819682b-5601114662c543c29b4f68f70b27cde6.png?v=1683881102413"
                                alt="Bàn ăn 4 chân gia đình cao cấp"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ban-an-4-chan-gia-dinh-cao-cap" title="Bàn ăn 4 chân gia đình cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-63a9c6e0799f4049a754cf0c61630f02-bae72b7c565042afb1742641f66e5287.png?v=1683881102413"
                                alt="Bàn ăn 4 chân gia đình cao cấp"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product-item-action">
                        <button
                          type="button"
                          title="Yêu thích"
                          className="shop-wishlist-button-add"
                          data-type="shop-wishlist-button-add"
                        >
                          <HeartIcon />
                        </button>
                        <button
                          type="button"
                          title="Xem nhanh"
                          className="shop-quickview-button"
                          data-type="shop-quickview-button"
                        >
                          <CartIcon />
                        </button>
                        <button
                          type="button"
                          title="Thêm vào giỏ"
                          className="shop-addLoop-button"
                          data-type="shop-addLoop-button"
                        >
                          <MagnifyingGlassIcon />
                        </button>
                      </div>
                      <div className="product-item-detail">
                        <div className="product-item-detail-info">
                          <span className="product-item-detail-info-vendor">
                            <Link href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                              F1GENZ
                            </Link>
                          </span>
                          <span className="product-item-detail-info-tag">F1GENZMall</span>
                        </div>
                        <h3 className="product-item-detail-name">
                          <Link href="/ban-an-4-chan-gia-dinh-cao-cap" title="Bàn ăn 4 chân gia đình cao cấp">
                            Bàn ăn 4 chân gia đình cao cấp
                          </Link>
                        </h3>
                        <div className="product-item-detail-price">
                          <span>23.690.000₫</span>
                          <del>25.900.000₫</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item" data-id="87903043" data-handle="ban-an-da-thieu-ket">
                    <div className="product-item-wrap">
                      <div className="product-item-image hasThumbs hasThumbsIcon">
                        <span className="product-item-discount">-5%</span>
                        <Link className="product-item-link" href="/ban-an-da-thieu-ket" title="Bàn ăn đá thiêu kết">
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/1-1aecf2e2a39a4f6f98a7841f0083c10a-5397b58f672b4090989562633ffbb294.png?v=1683881096573"
                            alt="Bàn ăn đá thiêu kết"
                          />
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/2-35fdcb2d1a56422bb7616496873d6ca8-a22e728de7f243ef89e3c3f13f67682a.png?v=1683881096573"
                            alt="Bàn ăn đá thiêu kết"
                          />
                        </Link>
                        <ul className="product-item-thumbs">
                          <li>
                            <Link href="/ban-an-da-thieu-ket" title="Bàn ăn đá thiêu kết">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-35fdcb2d1a56422bb7616496873d6ca8-a22e728de7f243ef89e3c3f13f67682a.png?v=1683881096573"
                                alt="Bàn ăn đá thiêu kết"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ban-an-da-thieu-ket" title="Bàn ăn đá thiêu kết">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-cb2e0b0bf72040be86a0bff9ff06be41-b3664e3f5d5d4af996e239e6d74544b8.png?v=1683881096573"
                                alt="Bàn ăn đá thiêu kết"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ban-an-da-thieu-ket" title="Bàn ăn đá thiêu kết">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-b821173d805e4da48e575a7d8c8a1315-175f4a9b1e9041e68070c0245703bb92.png?v=1683881096573"
                                alt="Bàn ăn đá thiêu kết"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product-item-action">
                        <button
                          type="button"
                          title="Yêu thích"
                          className="shop-wishlist-button-add"
                          data-type="shop-wishlist-button-add"
                        >
                          <HeartIcon />
                        </button>
                        <button
                          type="button"
                          title="Xem nhanh"
                          className="shop-quickview-button"
                          data-type="shop-quickview-button"
                        >
                          <CartIcon />
                        </button>
                        <button
                          type="button"
                          title="Thêm vào giỏ"
                          className="shop-addLoop-button"
                          data-type="shop-addLoop-button"
                        >
                          <MagnifyingGlassIcon />
                        </button>
                      </div>
                      <div className="product-item-detail">
                        <div className="product-item-detail-info">
                          <span className="product-item-detail-info-vendor">
                            <Link href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                              F1GENZ
                            </Link>
                          </span>
                          <span className="product-item-detail-info-tag">Độc quyền</span>
                        </div>
                        <h3 className="product-item-detail-name">
                          <Link href="/ban-an-da-thieu-ket" title="Bàn ăn đá thiêu kết">
                            Bàn ăn đá thiêu kết
                          </Link>
                        </h3>
                        <div className="product-item-detail-price">
                          <span>21.199.000₫</span>
                          <del>22.390.000₫</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item" data-id="87902947" data-handle="ban-an-maeve-cao-cap-tu-f1genz">
                    <div className="product-item-wrap">
                      <div className="product-item-image hasThumbs hasThumbsIcon">
                        <span className="product-item-discount">-7%</span>
                        <Link
                          className="product-item-link"
                          href="/ban-an-maeve-cao-cap-tu-f1genz"
                          title="Bàn ăn Maeve cao cấp từ F1GENZ"
                        >
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/maeve-by-hipvan-maeve-dining-ta-1-01f67cc6e6ae4964a296639f966feb57-3da2d89c1ea74e8b91eccd92df71c367.png?v=1683881092520"
                            alt="Bàn ăn Maeve cao cấp từ F1GENZ"
                          />
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/maeve-by-hipvan-maeve-dining-ta-2-ce3a064301ab4dcead63b6a32723a7f5-3c36c74e2d694ecd8e5fa8af7f905011.png?v=1683881092520"
                            alt="Bàn ăn Maeve cao cấp từ F1GENZ"
                          />
                        </Link>
                        <ul className="product-item-thumbs">
                          <li>
                            <Link href="/ban-an-maeve-cao-cap-tu-f1genz" title="Bàn ăn Maeve cao cấp từ F1GENZ">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/maeve-by-hipvan-maeve-dining-ta-2-ce3a064301ab4dcead63b6a32723a7f5-3c36c74e2d694ecd8e5fa8af7f905011.png?v=1683881092520"
                                alt="Bàn ăn Maeve cao cấp từ F1GENZ"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ban-an-maeve-cao-cap-tu-f1genz" title="Bàn ăn Maeve cao cấp từ F1GENZ">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/maeve-by-hipvan-maeve-dining-ta-3-6739baa0d90e4f3db56eec522b435869-0c4f666927534955991a8e99dd77bba0.png?v=1683881092520"
                                alt="Bàn ăn Maeve cao cấp từ F1GENZ"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ban-an-maeve-cao-cap-tu-f1genz" title="Bàn ăn Maeve cao cấp từ F1GENZ">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/maeve-by-hipvan-maeve-dining-ta-4-3af961a1466548c6b6b8d67182eb35aa-8bb284e0da06405fae6ee482c3575533.png?v=1683881092520"
                                alt="Bàn ăn Maeve cao cấp từ F1GENZ"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product-item-action">
                        <button
                          type="button"
                          title="Yêu thích"
                          className="shop-wishlist-button-add"
                          data-type="shop-wishlist-button-add"
                        >
                          <HeartIcon />
                        </button>
                        <button
                          type="button"
                          title="Xem nhanh"
                          className="shop-quickview-button"
                          data-type="shop-quickview-button"
                        >
                          <CartIcon />
                        </button>
                        <button
                          type="button"
                          title="Thêm vào giỏ"
                          className="shop-addLoop-button"
                          data-type="shop-addLoop-button"
                        >
                          <MagnifyingGlassIcon />
                        </button>
                      </div>
                      <div className="product-item-detail">
                        <div className="product-item-detail-info">
                          <span className="product-item-detail-info-vendor">
                            <Link href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                              F1GENZ
                            </Link>
                          </span>
                          <span className="product-item-detail-info-tag">Quà tặng</span>
                        </div>
                        <h3 className="product-item-detail-name">
                          <Link href="/ban-an-maeve-cao-cap-tu-f1genz" title="Bàn ăn Maeve cao cấp từ F1GENZ">
                            Bàn ăn Maeve cao cấp từ F1GENZ
                          </Link>
                        </h3>
                        <div className="product-item-detail-price">
                          <span>25.900.000₫</span>
                          <del>27.950.000₫</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item" data-id="87902799" data-handle="ban-an-mo-rong-f1genz-cao-cap-2">
                    <div className="product-item-wrap">
                      <div className="product-item-image hasThumbs hasThumbsIcon">
                        <span className="product-item-discount">-7%</span>
                        <Link
                          className="product-item-link"
                          href="/ban-an-mo-rong-f1genz-cao-cap-2"
                          title="Bàn ăn mở rộng F1GENZ cao cấp"
                        >
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/1-75b2434091ac4e47a0b4e33fdadf5885-71435115a0824f2abf40e3c4a4906a90.png?v=1683881085973"
                            alt="Bàn ăn mở rộng F1GENZ cao cấp"
                          />
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/19-739ed517f1464e84bbd449eabf9a54f5-a966afaa39074e0cb24a8eff19d0f816.png?v=1683881085973"
                            alt="Bàn ăn mở rộng F1GENZ cao cấp"
                          />
                        </Link>
                        <ul className="product-item-thumbs">
                          <li>
                            <Link href="/ban-an-mo-rong-f1genz-cao-cap-2" title="Bàn ăn mở rộng F1GENZ cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/19-739ed517f1464e84bbd449eabf9a54f5-a966afaa39074e0cb24a8eff19d0f816.png?v=1683881085973"
                                alt="Bàn ăn mở rộng F1GENZ cao cấp"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ban-an-mo-rong-f1genz-cao-cap-2" title="Bàn ăn mở rộng F1GENZ cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/18-e7ca767a40db483cbc77ab57bed894ca-19052961ba6e4520a017bf6b2ab7ecdf.png?v=1683881085973"
                                alt="Bàn ăn mở rộng F1GENZ cao cấp"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ban-an-mo-rong-f1genz-cao-cap-2" title="Bàn ăn mở rộng F1GENZ cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/17-37f60f791ec145fa80b9cc0fad5fbde9-190442e64e72435290d239a3e30cd5fc.png?v=1683881085973"
                                alt="Bàn ăn mở rộng F1GENZ cao cấp"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product-item-action">
                        <button
                          type="button"
                          title="Yêu thích"
                          className="shop-wishlist-button-add"
                          data-type="shop-wishlist-button-add"
                        >
                          <HeartIcon />
                        </button>
                        <button
                          type="button"
                          title="Xem nhanh"
                          className="shop-quickview-button"
                          data-type="shop-quickview-button"
                        >
                          <CartIcon />
                        </button>
                        <button
                          type="button"
                          title="Thêm vào giỏ"
                          className="shop-addLoop-button"
                          data-type="shop-addLoop-button"
                        >
                          <MagnifyingGlassIcon />
                        </button>
                      </div>
                      <div className="product-item-detail">
                        <div className="product-item-detail-info">
                          <span className="product-item-detail-info-vendor">
                            <Link href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                              F1GENZ
                            </Link>
                          </span>
                          <span className="product-item-detail-info-tag">Freeship</span>
                        </div>
                        <h3 className="product-item-detail-name">
                          <Link href="/ban-an-mo-rong-f1genz-cao-cap-2" title="Bàn ăn mở rộng F1GENZ cao cấp">
                            Bàn ăn mở rộng F1GENZ cao cấp
                          </Link>
                        </h3>
                        <div className="product-item-detail-price">
                          <span>17.590.000₫</span>
                          <del>18.900.000₫</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item" data-id="87902553" data-handle="ban-go-cao-cap-4-chan-haynes">
                    <div className="product-item-wrap">
                      <div className="product-item-image hasThumbs hasThumbsIcon">
                        <span className="product-item-discount">-10%</span>
                        <Link
                          className="product-item-link"
                          href="/ban-go-cao-cap-4-chan-haynes"
                          title="Bàn gỗ cao cấp 4 chân Haynes"
                        >
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/malmo-haynes-table-2-2m-oak-10-a3166bf52c7447e1ac35c7cf0d932dfe-23bd6bda876d431f99a2f7dade596cf3.png?v=1683881074473"
                            alt="Bàn gỗ cao cấp 4 chân Haynes"
                          />
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/haynes-side-eb449953bc504af8b229608740009e1e-09179b37ea52432db6dd468dabf180f9.png?v=1683881074473"
                            alt="Bàn gỗ cao cấp 4 chân Haynes"
                          />
                        </Link>
                        <ul className="product-item-thumbs">
                          <li>
                            <Link href="/ban-go-cao-cap-4-chan-haynes" title="Bàn gỗ cao cấp 4 chân Haynes">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/haynes-side-eb449953bc504af8b229608740009e1e-09179b37ea52432db6dd468dabf180f9.png?v=1683881074473"
                                alt="Bàn gỗ cao cấp 4 chân Haynes"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ban-go-cao-cap-4-chan-haynes" title="Bàn gỗ cao cấp 4 chân Haynes">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/malmo-haynes-dining-table-2-2m-be65aabfe43044e884378e92218e3c5e-eb7ee8203cd64481899adf4ab7f27409.png?v=1683881074473"
                                alt="Bàn gỗ cao cấp 4 chân Haynes"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ban-go-cao-cap-4-chan-haynes" title="Bàn gỗ cao cấp 4 chân Haynes">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/malmo-haynes-table-2-2m-oak-12-18ed7eae350d480d82e1668434bd338c-22496ecb81a74e6d9d4ec2cadcd941f4.png?v=1683881074473"
                                alt="Bàn gỗ cao cấp 4 chân Haynes"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product-item-action">
                        <button
                          type="button"
                          title="Yêu thích"
                          className="shop-wishlist-button-add"
                          data-type="shop-wishlist-button-add"
                        >
                          <HeartIcon />
                        </button>
                        <button
                          type="button"
                          title="Xem nhanh"
                          className="shop-quickview-button"
                          data-type="shop-quickview-button"
                        >
                          <CartIcon />
                        </button>
                        <button
                          type="button"
                          title="Thêm vào giỏ"
                          className="shop-addLoop-button"
                          data-type="shop-addLoop-button"
                        >
                          <MagnifyingGlassIcon />
                        </button>
                      </div>
                      <div className="product-item-detail">
                        <div className="product-item-detail-info">
                          <span className="product-item-detail-info-vendor">
                            <Link href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                              F1GENZ
                            </Link>
                          </span>
                          <span className="product-item-detail-info-tag">Giá tốt</span>
                        </div>
                        <h3 className="product-item-detail-name">
                          <Link href="/ban-go-cao-cap-4-chan-haynes" title="Bàn gỗ cao cấp 4 chân Haynes">
                            Bàn gỗ cao cấp 4 chân Haynes
                          </Link>
                        </h3>
                        <div className="product-item-detail-price">
                          <span>17.900.000₫</span>
                          <del>19.890.000₫</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-item" data-id="87899137" data-handle="ban-an-4-chan-cao-cap">
                    <div className="product-item-wrap">
                      <div className="product-item-image hasThumbs hasThumbsIcon">
                        <span className="product-item-discount">-14%</span>
                        <Link className="product-item-link" href="/ban-an-4-chan-cao-cap" title="Bàn ăn 4 chân cao cấp">
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/1-279c18d961424754a83cefcb8265f7da-26532009efc9498698848a917b01b363.png?v=1683880923067"
                            alt="Bàn ăn 4 chân cao cấp"
                          />
                          <img
                            className="w-auto"
                            loading="lazy"
                            width="480"
                            height="480"
                            src="https://bizweb.dktcdn.net/thumb/large/100/482/001/products/2-2deb4589b2de4f16862a5ce8908eab92-0a6d229b7c954737ad3e86821423fc80.png?v=1683880923067"
                            alt="Bàn ăn 4 chân cao cấp"
                          />
                        </Link>
                        <ul className="product-item-thumbs">
                          <li>
                            <Link href="/ban-an-4-chan-cao-cap" title="Bàn ăn 4 chân cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-2deb4589b2de4f16862a5ce8908eab92-0a6d229b7c954737ad3e86821423fc80.png?v=1683880923067"
                                alt="Bàn ăn 4 chân cao cấp"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ban-an-4-chan-cao-cap" title="Bàn ăn 4 chân cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-422bbc35a1884281a26b5772222f3388-eb226959e4a1431f911b353796688e5f.png?v=1683880923067"
                                alt="Bàn ăn 4 chân cao cấp"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ban-an-4-chan-cao-cap" title="Bàn ăn 4 chân cao cấp">
                              <img
                                className="w-auto lazyload"
                                width="50"
                                height="50"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                data-src="https://bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-cb3516f04a8649cc9588074be6267627-6dae0b8598764b45b56f5f0e5ef21426.png?v=1683880923067"
                                alt="Bàn ăn 4 chân cao cấp"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product-item-action">
                        <button
                          type="button"
                          title="Yêu thích"
                          className="shop-wishlist-button-add"
                          data-type="shop-wishlist-button-add"
                        >
                          <HeartIcon />
                        </button>
                        <button
                          type="button"
                          title="Xem nhanh"
                          className="shop-quickview-button"
                          data-type="shop-quickview-button"
                        >
                          <CartIcon />
                        </button>
                        <button
                          type="button"
                          title="Thêm vào giỏ"
                          className="shop-addLoop-button"
                          data-type="shop-addLoop-button"
                        >
                          <MagnifyingGlassIcon />
                        </button>
                      </div>
                      <div className="product-item-detail">
                        <div className="product-item-detail-info">
                          <span className="product-item-detail-info-vendor">
                            <Link href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                              F1GENZ
                            </Link>
                          </span>
                          <span className="product-item-detail-info-tag">Hot</span>
                        </div>
                        <h3 className="product-item-detail-name">
                          <Link href="/ban-an-4-chan-cao-cap" title="Bàn ăn 4 chân cao cấp">
                            Bàn ăn 4 chân cao cấp
                          </Link>
                        </h3>
                        <div className="product-item-detail-price">
                          <span>11.990.000₫</span>
                          <del>13.990.000₫</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-blog">
          <div className="container">
            <div className="home-blog-wrap">
              <div className="home-blog-left">
                <div className="section-title-all">
                  <h2>Kiến thức mua hàng</h2>
                  <p>
                    Cùng tìm hiểu kiến thức về mua hàng: định nghĩa của trang sản phẩm nội thất, các loại nội thất sẽ
                    như thế nào nhé!
                  </p>
                </div>
                <div className="home-blog-data">
                  <ArticleItem
                    title={'Kinh nghiệm lựa chọn nội thất chung cư'}
                    url={'/kinh-nghiem-lua-chon-noi-that-chung-cu'}
                    thumbnail={
                      'https://bizweb.dktcdn.net/thumb/grande/100/482/001/articles/blog2-1-3524a4d36acf465e8e1f3ed9-30c9accf60e142d9886251f7730c33fd.jpg?v=1680759065870'
                    }
                    preview={'30.09.2022 / Công Ty TNHH KTCN F1GENZ'}
                    detail={`Bạn có muốn căn hộ chung cư nhỏ bé của mình đáp ứng đầy đủ công năng sử dụng mà vẫn gọn gàng,
                          đảm bảo tính thẩm mỹ? F1GENZ Nội Thất sẽ bật mí cho bạn một số kinh nghiệm lựa chọn nội thất
                          cho nhà chung cư diện tích nhỏ với phong cách sang...`}
                  />
                </div>
              </div>
              <div className="home-blog-right">
                <div className="home-blog-data">
                  <ArticleItem
                    layoutSmall={true}
                    url={'/kinh-nghiem-chon-den-led-trang-tri-noi-that'}
                    title={'Kinh nghiệm chọn đèn LED trang trí nội thất'}
                    thumbnail={
                      'https://bizweb.dktcdn.net/thumb/medium/100/482/001/articles/blog7-1-642c28eca458452db72ebc36-aa47987c65b842b0839047171f834f06.jpg?v=1680759065690'
                    }
                    detail={'30.09.2022 / Công Ty TNHH KTCN F1GENZ'}
                  />
                  <ArticleItem
                    layoutSmall={true}
                    url={'/tai-sao-mau-nau-luon-duoc-ua-chuong-trong-thiet-ke-noi-that'}
                    title={'Tại sao màu nâu luôn được ưa chuộng trong thiết kế nội thất?'}
                    thumbnail={
                      'https://bizweb.dktcdn.net/thumb/medium/100/482/001/articles/blog3-c747c021d13c4b889f6c3a95d6-f736f5c6938943f0b9165c8b87c7166e.jpg?v=1680759066097'
                    }
                    detail={'30.09.2022 / Công Ty TNHH KTCN F1GENZ'}
                  />
                  <ArticleItem
                    layoutSmall={true}
                    url={'/ghe-armchair-dep-la-gi-cach-de-chon-ghe-armchair-dung-chuan'}
                    title={'Ghế Armchair đẹp là gì? Cách để chọn ghế Armchair đúng chuẩn!'}
                    thumbnail={
                      'https://bizweb.dktcdn.net/thumb/medium/100/482/001/articles/blog9-1-a6649f4aa0f44baa9994a0fa-4a57509aa03a48fc9226b9457732f646.png?v=1680759066187'
                    }
                    detail={'30.09.2022 / F1GENZ Furniture'}
                  />
                  <ArticleItem
                    layoutSmall={true}
                    url={'/phong-bep-go-va-xu-huong-thiet-ke-de-chon-dung-san-pham'}
                    title={'Phòng bếp gỗ và xu hướng thiết kế để chọn đúng sản phẩm'}
                    thumbnail={
                      'https://bizweb.dktcdn.net/thumb/medium/100/482/001/articles/blog-detail-f6cbe09e8f544acab735-b52ae122f0ed41d8adacc8dd77f144d4.jpg?v=1680759066047'
                    }
                    detail={'30.09.2022 / Công Ty TNHH KTCN F1GENZ'}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-store">
          <div className="home-store-wrap">
            <div className="home-store-wrap-left section-title-all">
              <h2>Showroom Nội thất F1genz</h2>
              <p>
                Luôn cập nhật những xu hướng mới nhất của thị trường nội thất, mang đến các sản phẩm chất lượng cho
                người tiêu dùng.
              </p>
              <Link href="/collections/all" title="Showroom Nội thất F1genz">
                Xem ngay
              </Link>
            </div>
            <div className="home-store-wrap-right">
              <picture title="Showroom Nội thất F1genz">
                <source
                  media="(max-width: 480px)"
                  srcset="https://bizweb.dktcdn.net/thumb/large/100/482/001/themes/906081/assets/home_store_image.png?1684771044770"
                  data-srcset="https://bizweb.dktcdn.net/thumb/large/100/482/001/themes/906081/assets/home_store_image.png?1684771044770"
                />
                <img
                  className="lazyload w-100"
                  width="1200"
                  height="800"
                  src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_store_image.png?1684771044770"
                  data-src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_store_image.png?1684771044770"
                  alt="Showroom Nội thất F1genz"
                />
              </picture>
            </div>
          </div>
        </section>
        <section className="home-policy">
          <div className="container">
            <ul className="home-policy-wrap">
              <li className="home-policy-item">
                <h4 className="d-none">Giao hàng nhanh, miễn phí</h4>
                <img
                  className="lazyload w-100"
                  title="Giao hàng nhanh, miễn phí"
                  src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_policy_item_image_1.png?1684771044770"
                  BF
                  data-src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_policy_item_image_1.png?1684771044770"
                  alt="Giao hàng nhanh, miễn phí"
                />
                <strong>Giao hàng nhanh, miễn phí</strong>
                <span>Đơn hàng &gt; 900k hoặc đăng ký tài khoản được giao hàng miễn phí</span>
                <Link href="/collections/all" title="Giao hàng nhanh, miễn phí">
                  Xem chi tiết
                </Link>
              </li>
              <li className="home-policy-item">
                <h4 className="d-none">Trả hàng, Bảo hành</h4>
                <img
                  className="lazyload w-100"
                  title="Trả hàng, Bảo hành"
                  src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_policy_item_image_2.png?1684771044770"
                  BF
                  data-src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_policy_item_image_2.png?1684771044770"
                  alt="Trả hàng, Bảo hành"
                />
                <strong>Trả hàng, Bảo hành</strong>
                <span>Không thích? Trả lại hoặc đổi hàng của bạn miễn phí trong vòng 30 ngày.</span>
                <Link href="/collections/all" title="Trả hàng, Bảo hành">
                  Xem chi tiết
                </Link>
              </li>
              <li className="home-policy-item">
                <h4 className="d-none">Thành viên</h4>
                <img
                  className="lazyload w-100"
                  title="Thành viên"
                  src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_policy_item_image_3.png?1684771044770"
                  BF
                  data-src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_policy_item_image_3.png?1684771044770"
                  alt="Thành viên"
                />
                <strong>Thành viên</strong>
                <span>Ưu đã theo từng cấp bậc hạng thành viên. Sinh nhật quà tặng thành viên</span>
                <Link href="/collections/all" title="Thành viên">
                  Xem chi tiết
                </Link>
              </li>
              <li className="home-policy-item">
                <h4 className="d-none">Chính hãng</h4>
                <img
                  className="lazyload w-100"
                  title="Chính hãng"
                  src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_policy_item_image_4.png?1684771044770"
                  BF
                  data-src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_policy_item_image_4.png?1684771044770"
                  alt="Chính hãng"
                />
                <strong>Chính hãng</strong>
                <span>Sản phẩm chính hãng. Được nhập khẩu 100% từ hãng.</span>
                <Link href="/collections/all" title="Chính hãng">
                  Xem chi tiết
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </HomeLayout>
  );
}
