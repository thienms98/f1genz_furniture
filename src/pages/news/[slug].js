'use client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import ArticleLayout from '~/layouts/article';
import Slider from 'react-slick';
import { products } from '~/data/products';
import { news } from '~/data/news';
import settings from '~/utils/sliderSettings';

import HeartIcon from '~/components/icon/heart';
import MagnifyingGlassIcon from '~/components/icon/magnifyingGlass';
import CartIcon from '~/components/icon/cart';
import ShareIcon from '~/components/icon/share';
import FacebookIcon from '~/components/icon/facebook';
import TwitterIcon from '~/components/icon/twitter';
import LinkedinIcon from '~/components/icon/linkedin';
import WhatsappIcon from '~/components/icon/whatsapp';
import Product from '~/components/Product';

const Article = () => {
  const route = useRouter();
  const newsId = route.query.slug;
  const article = news.filter((item) => item.id === newsId)[0];
  const createdTime = article ? new Date(article.createdTime) : null;
  const menu = article?.content.filter((item) => item.type === 'header');

  return (
    <ArticleLayout>
      <div className="main-article">
        <div className="main-article-share">
          <button className="main-article-share-cta" data-type="main-article-share-menu" title="Mục lục">
            <svg
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 377 377"
              style={{ enableBackground: 'new 0 0 377 377' }}
              xmlSpace="preserve"
            >
              <g>
                <circle cx="15" cy="88.5" r="15"></circle>
                <rect x="75" y="73.5" width="302" height="30"></rect>
                <circle cx="15" cy="288.5" r="15"></circle>
                <rect x="75" y="273.5" width="302" height="30"></rect>
                <circle cx="15" cy="188.5" r="15"></circle>
                <rect x="75" y="173.5" width="302" height="30"></rect>
              </g>
            </svg>
          </button>
          <button className="main-article-share-cta" title="Chia sẻ" data-type="main-article-share-open-popup">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                fill="#595959"
                d="M19 3c-1.652 0-3 1.348-3 3 0 .46.113.895.3 1.285L12.587 11h-4.77A2.999 2.999 0 005 9c-1.652 0-3 1.348-3 3s1.348 3 3 3c1.3 0 2.402-.84 2.816-2h4.77l3.715 3.715c-.188.39-.301.824-.301 1.285 0 1.652 1.348 3 3 3s3-1.348 3-3-1.348-3-3-3c-.46 0-.895.113-1.285.3l-3.3-3.3 3.3-3.3c.39.187.824.3 1.285.3 1.652 0 3-1.348 3-3s-1.348-3-3-3z"
              ></path>
            </svg>
          </button>
          <button className="main-article-share-cta" title="Bình luận" data-type="main-article-share-comment">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="">
              <path
                fill="#595959"
                d="M12.5 16c.277 0 .5-.223.5-.5v-1c0-.277-.223-.5-.5-.5h-1c-.277 0-.5.223-.5.5v1c0 .277.223.5.5.5h1zM11 13h2c0-.447.412-1.02.863-1.645C14.404 10.603 15 9.776 15 9c0-1.477-1.121-3-3-3-2.047 0-3 1.79-3 3 0 .55.45 1 1 1s1-.45 1-1c0-.164.176-1 1-1 .988 0 1 .988 1 1 0 .537-.52 1.312-1.029 2.072-.49.732-.971 1.45-.971 1.928z"
              ></path>
              <path
                fill="#595959"
                fillRule="evenodd"
                d="M2 11c0-5.027 4.547-9 10-9s10 3.973 10 9c0 .324-.02.637-.059.945-.554 5.172-5.238 8.774-7.398 10.16L13 23.095v-3.196c-.12.012-.239.028-.356.044-.211.03-.421.058-.644.058-5.453 0-10-3.973-10-9zm18 0c0-3.809-3.508-7-8-7s-8 3.191-8 7 3.508 7 8 7c.617 0 1.219-.066 1.8-.188l1.2-.238v1.508c2.047-1.637 4.61-4.152 4.953-7.352l.004-.003v-.004c.027-.243.043-.48.043-.723z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>2</span>
          </button>
          <button className="main-article-share-cta" data-type="main-article-share-font" title="Kích cỡ chữ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                fill="#595959"
                d="M9 5.5c0 .83.67 1.5 1.5 1.5H14v10.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V7h3.5c.83 0 1.5-.67 1.5-1.5S21.33 4 20.5 4h-10C9.67 4 9 4.67 9 5.5zM4.5 12H6v5.5c0 .83.67 1.5 1.5 1.5S9 18.33 9 17.5V12h1.5c.83 0 1.5-.67 1.5-1.5S11.33 9 10.5 9h-6C3.67 9 3 9.67 3 10.5S3.67 12 4.5 12z"
              ></path>
            </svg>
          </button>
          <div className="main-article-share-popup">
            <div className="main-article-share-popup-head">
              <label>Chia sẻ</label>
              <Link
                target="_blank"
                title="Chia sẻ Facebook"
                href="https://www.facebook.com/sharer.php?u=//f1genz-furniture.mysapo.net/kinh-nghiem-lua-chon-noi-that-chung-cu"
              >
                <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27 0H5a5 5 0 00-5 5v22a5 5 0 005 5h22a5 5 0 005-5V5a5 5 0 00-5-5z" fill="#1778F2"></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.314 32V19.499h3.255L24 15.19h-3.686l.006-2.156c0-1.123.1-1.725 1.623-1.725h2.034V7h-3.255c-3.91 0-5.285 2.09-5.285 5.604v2.587H13v4.308h2.437V32h4.877z"
                    fill="#fff"
                  ></path>
                </svg>
              </Link>
              <Link
                target="_blank"
                title="Chia sẻ Twitter"
                href="https://twitter.com/intent/tweet?url=//f1genz-furniture.mysapo.net/kinh-nghiem-lua-chon-noi-that-chung-cu"
              >
                <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="4" fill="#1FA1F3"></rect>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.73 13.235l.04.634-.674-.077c-2.455-.298-4.6-1.308-6.42-3.004l-.89-.841-.23.621c-.485 1.385-.175 2.848.836 3.832.54.544.419.622-.512.298-.324-.104-.607-.181-.634-.143-.094.091.23 1.27.486 1.735.35.648 1.065 1.282 1.847 1.657l.661.298-.782.013c-.755 0-.782.013-.701.285.27.841 1.335 1.735 2.522 2.123l.836.272-.728.414a7.894 7.894 0 01-3.615.958c-.607.013-1.106.065-1.106.104 0 .13 1.646.854 2.603 1.14 2.873.84 6.285.478 8.848-.959 1.82-1.023 3.642-3.055 4.491-5.023.459-1.049.918-2.965.918-3.884 0-.596.04-.673.795-1.385.445-.415.864-.868.945-.997.134-.246.12-.246-.567-.026-1.146.388-1.308.337-.742-.246.418-.414.917-1.165.917-1.385 0-.04-.202.026-.431.142-.243.13-.783.324-1.187.44l-.729.22-.66-.427c-.364-.233-.877-.492-1.147-.57-.688-.18-1.74-.155-2.36.052-1.686.583-2.752 2.085-2.63 3.729z"
                    fill="#fff"
                  ></path>
                </svg>
              </Link>
              <Link
                target="_blank"
                title="Chia sẻ WhatsApp"
                href="https://wa.me/?text=//f1genz-furniture.mysapo.net/kinh-nghiem-lua-chon-noi-that-chung-cu"
              >
                <svg
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  strokeLinejoin="round"
                  stroke-miterlimit="2"
                >
                  <path
                    d="M116.225-.001c-11.264.512-26.112 1.536-32.768 3.072-10.24 2.048-19.968 5.12-27.648 9.216-9.728 4.608-17.92 10.752-25.088 17.92-7.68 7.68-13.824 15.872-18.432 25.6-4.096 7.68-7.168 17.408-9.216 27.648-1.536 6.656-2.56 21.504-2.56 32.768-.512 4.608-.512 10.752-.512 13.824v265.729c.512 11.264 1.536 26.112 3.072 32.768 2.048 10.24 5.12 19.968 9.216 27.648 4.608 9.728 10.752 17.92 17.92 25.088 7.68 7.68 15.872 13.824 25.6 18.432 7.68 4.096 17.408 7.168 27.648 9.216 6.656 1.536 21.504 2.56 32.768 2.56 4.608.512 10.752.512 13.824.512h265.728c11.264-.512 26.112-1.536 32.768-3.072 10.24-2.048 19.968-5.12 27.648-9.216 9.728-4.608 17.92-10.752 25.088-17.92 7.68-7.68 13.824-15.872 18.432-25.6 4.096-7.68 7.168-17.408 9.216-27.648 1.536-6.656 2.56-21.504 2.56-32.768.512-4.608.512-10.752.512-13.824V116.223c-.512-11.264-1.536-26.112-3.072-32.768-2.048-10.24-5.12-19.968-9.216-27.648-4.608-9.728-10.752-17.92-17.92-25.088-7.68-7.68-15.872-13.824-25.6-18.432-7.68-4.096-17.408-7.168-27.648-9.216-6.656-1.536-21.504-2.56-32.768-2.56-4.608-.512-10.752-.512-13.824-.512H116.225z"
                    fill="url(#whatsApp_svg___Linear1)"
                    fillRule="nonzero"
                  ></path>
                  <path
                    d="M344.754 289.698c-4.56-2.282-26.98-13.311-31.161-14.832-4.18-1.521-7.219-2.282-10.259 2.282-3.041 4.564-11.78 14.832-14.44 17.875-2.66 3.042-5.32 3.423-9.88 1.14-4.561-2.281-19.254-7.095-36.672-22.627-13.556-12.087-22.709-27.017-25.369-31.581s-.283-7.031 2-9.304c2.051-2.041 4.56-5.324 6.84-7.986 2.28-2.662 3.04-4.564 4.56-7.606 1.52-3.042.76-5.705-.38-7.987-1.14-2.282-10.26-24.72-14.06-33.848-3.701-8.889-7.461-7.686-10.26-7.826-2.657-.132-5.7-.16-8.74-.16-3.041 0-7.98 1.141-12.161 5.704-4.18 4.564-15.96 15.594-15.96 38.032 0 22.438 16.34 44.116 18.62 47.159 2.281 3.043 32.157 49.089 77.902 68.836 10.88 4.697 19.374 7.501 25.997 9.603 10.924 3.469 20.866 2.98 28.723 1.806 8.761-1.309 26.98-11.029 30.781-21.677 3.799-10.649 3.799-19.777 2.659-21.678-1.139-1.902-4.179-3.043-8.74-5.325m-83.207 113.573h-.061c-27.22-.011-53.917-7.32-77.207-21.137l-5.539-3.287-57.413 15.056 15.325-55.959-3.608-5.736c-15.184-24.145-23.203-52.051-23.192-80.704.033-83.611 68.083-151.635 151.756-151.635 40.517.016 78.603 15.811 107.243 44.474 28.64 28.663 44.404 66.764 44.389 107.283-.035 83.617-68.083 151.645-151.693 151.645m129.102-280.709c-34.457-34.486-80.281-53.487-129.103-53.507-100.595 0-182.468 81.841-182.508 182.437-.013 32.156 8.39 63.546 24.361 91.212l-25.892 94.545 96.75-25.37c26.657 14.535 56.67 22.194 87.216 22.207h.075c100.586 0 182.465-81.852 182.506-182.448.019-48.751-18.946-94.59-53.405-129.076"
                    fill="#fff"
                  ></path>
                  <defs>
                    <linearGradient
                      gradientTransform="matrix(0 -512 -512 0 256.001 512)"
                      gradientUnits="userSpaceOnUse"
                      id="whatsApp_svg___Linear1"
                      x1="0"
                      x2="1"
                      y1="0"
                      y2="0"
                    >
                      <stop offset="0" stopColor="#25cf43"></stop>
                      <stop offset="1" stopColor="#61fd7d"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
              <Link
                target="_blank"
                title="Chia sẻ Linkedin"
                href="https://www.linkedin.com/sharing/share-offsite/?url=//f1genz-furniture.mysapo.net/kinh-nghiem-lua-chon-noi-that-chung-cu"
              >
                <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="4" fill="#0077B5"></rect>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.857 9.07c-.022-1.094-.744-1.927-1.917-1.927S7 7.976 7 9.07C7 10.142 7.744 11 8.895 11h.022c1.196 0 1.94-.858 1.94-1.93zm0 3.216H7v11.571h3.857V12.286zm9.294 0c2.771 0 4.849 1.616 4.849 5.089v6.482h-4.212V17.81c0-1.52-.609-2.556-2.134-2.556-1.163 0-1.856.698-2.16 1.373-.112.242-.14.58-.14.917v6.314h-4.211s.055-10.244 0-11.305h4.212v1.601c.559-.77 1.56-1.867 3.796-1.867z"
                    fill="#fff"
                  ></path>
                </svg>
              </Link>
            </div>
            <hr />
            <div className="main-article-share-popup-body">
              <label>Sao chép đường dẫn</label>
              <form>
                <input
                  value="https://f1genz-furniture.mysapo.net/kinh-nghiem-lua-chon-noi-that-chung-cu"
                  readOnly=""
                  id="main-article-share-copy"
                />
                <button type="button" data-type="main-article-share-copy" title="Sao chép">
                  Sao chép
                </button>
              </form>
            </div>
          </div>
        </div>
        <div
          className="main-article-breadcrumb"
          title="Kinh nghiệm lựa chọn nội thất chung cư"
          style={{
            backgroundImage:
              "url('https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/main_blog_breadcrumb_bg.png?1684771044770')",
          }}
        >
          <div className="container">
            <div className="section-title-all">
              <h1>Kinh nghiệm lựa chọn nội thất chung cư</h1>
            </div>
            <div className="breadcrumb-wrap">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Trang chủ</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/blogs/news">Blog - Tin tức</Link>
                </li>
                <li className="breadcrumb-item active">
                  <span>Kinh nghiệm lựa chọn nội thất chung cư</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="main-article-menu sidebar">
            <label>Mục lục bài viết</label>
            <div className="main-article-menu-data"></div>
          </div>
          <div className="main-article-wrap">
            <div>
              Tác giả: {article?.author} - đăng vào {createdTime?.getHours()}:{createdTime?.getMinutes()} ngày{' '}
              {createdTime?.getDate()}.{createdTime?.getMonth() + 1}.{createdTime?.getFullYear()}
            </div>
            {/* {menu && (
              <div className="main-article-menu">
                <label>
                  Mục lục bài viết
                  <span className="active">
                    <svg
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 377 377"
                      style={{ enableBackground: 'new 0 0 377 377' }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <circle cx="15" cy="88.5" r="15"></circle>
                        <rect x="75" y="73.5" width="302" height="30"></rect>
                        <circle cx="15" cy="288.5" r="15"></circle>
                        <rect x="75" y="273.5" width="302" height="30"></rect>
                        <circle cx="15" cy="188.5" r="15"></circle>
                        <rect x="75" y="173.5" width="302" height="30"></rect>
                      </g>
                    </svg>
                  </span>
                </label>
                <div className="main-article-menu-data" style="display: block;">
                  {menu
                    .filter((item) => item.header === 0)
                    .map((header) => {
                      return (
                        <div className="main-article-menu-data-parent" data-id={`catalog${header.id}`} key={header.id}>
                          <span>{header.id}.</span>
                          <strong>{header.content}</strong>
                          {menu
                            .filter((item) => item.parent === header.header)
                            .map((item) => {
                              return (
                                <div
                                  className="main-article-menu-data-child"
                                  data-id={`catalog${item.id}`}
                                  key={item.id}
                                >
                                  <span>{item.id}.</span>
                                  <strong>{item.content}</strong>
                                </div>
                              );
                            })}
                        </div>
                      );
                    })}
                </div>
              </div>
            )} */}
            <div className="main-article-content" data-size="16" style={{ '--share_font': '16px' }}>
              {article &&
                article?.content.map((line, index) => {
                  if (typeof line !== 'string') {
                    if (line.type === 'html')
                      return <span key={index} dangerouslySetInnerHTML={{ __html: line.content }}></span>;

                    if (line.type === 'header') return <h2 data-id={`catalog${line.id}`}>{line.content}</h2>;

                    if (line.type === 'slide') {
                      return (
                        <Slider {...settings} key={1}>
                          {products
                            .filter((prod) => prod.group === line.group)
                            .map((product) => {
                              return <Product {...product} key={product.id} />;
                            })}
                        </Slider>
                      );
                    }
                    if (line.type === 'product') {
                      const prod = products.find((prod) => prod.uri === line.uri);
                      return (
                        prod && (
                          <div className="superContent-product-parent" key={index}>
                            <div className="superContent-product">
                              <div className="superContent-product-left">
                                <Link href={`/${prod.uri}`} title={prod.name}>
                                  <img
                                    src="https://bizweb.dktcdn.net/100/482/001/products/1-d8b7d0d1c773449bbbba8abe74a0157d-4147d239898a4b8a80b8bfa51847c0e6.png?v=1683881061087"
                                    alt={prod.name}
                                  />
                                </Link>
                              </div>
                              <div className="superContent-product-right">
                                <h3 className="superContent-product-right-title">{prod.name}</h3>
                                <div className="superContent-product-right-info">
                                  <span>
                                    Mã sản phẩm: <span>Đang cập nhật</span>
                                  </span>
                                  <span>Thương hiệu: Đang cập nhật</span>
                                </div>
                                <p className="superContent-product-right-price">
                                  <strong>{prod.price.current.toLocaleString('vi')}₫</strong>
                                  <del>{prod.price.prev.toLocaleString('vi')}₫</del>
                                  <span>{100 - Math.floor((prod.price.current / prod.price.prev) * 100)}%</span>
                                </p>
                                <div className="superContent-product-right-des">
                                  Chất liệu 18x5x10 cm Kích thước tổng thể Acrylic Dây đeo Chất Liệu kim loại Acrylic
                                  Trọng lượng 0.8KG Kiểu khóa Khóa kéo #### Chất lượng vượt trội Được sản xuất với khung
                                  được sản xuất tại Ý, lắp ráp và may tại Bỉ, Đức, Pháp, Mỹ, Nhật&nbsp;với các loại vải
                                  và da cao cấp, chăn ga gối đệm của chúng tôi là 100% của Châu Âu. Không giống như các
                                  đối thủ cạnh tranh của chúng tôi, các cơ chế của chúng tôi được thực hiện qua nhiều
                                  năm và sẽ không thất bại. F1GENZ Nội Thất có sẵn dưới dạng một chỗ ngồi hoặc hai chỗ
                                  ngồi và có thể kết...
                                </div>
                                <div className="superContent-product-right-cta">
                                  <Link
                                    className="superContent-product-right-cta-contact"
                                    title="Liên hệ"
                                    href={`/${prod.uri}`}
                                  >
                                    Liên hệ
                                  </Link>
                                  <Link
                                    className="superContent-product-right-cta-more"
                                    title="Xem ngay"
                                    href={`/${prod.uri}`}
                                  >
                                    Xem ngay
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      );
                    }
                  }
                  return <p key={index}>{line}</p>;
                })}
              <p>Thông tin liên hệ:</p>
              <p>
                Hotline: <b>1800 6750</b>
              </p>
              <p>Email: support@sapo.com</p>
              <p>VPGD: Tầng 6, Tòa Ladeco, 266 Đội Cấn, Quận Ba Đình, TP Hà Nội</p>
            </div>
            <div className="main-article-comment">
              <div className="main-article-comment-form">
                <div className="section-title-all">
                  <span>Viết bình luận</span>
                </div>
                <form
                  method="post"
                  action="/posts/kinh-nghiem-lua-chon-noi-that-chung-cu/comments"
                  id="article_comments"
                  accept-charset="UTF-8"
                >
                  <input name="FormType" type="hidden" value="article_comments" />
                  <input name="utf8" type="hidden" value="true" />
                  <input
                    type="hidden"
                    id="Token-458ab58ecb5d40e1b70dc16e384be18b"
                    name="Token"
                    value="03AL8dmw-jxHc82rILGD-dZUEZwUIa9IhwQ9daOqFj00h3wYY-sIHhaYFIUnsjpLPo8IyEadJfkD3n5SZIbF2I03L74w7ecITjIb5sX0Q2k11P96As6EAgEKr2vCNpcjLkRCMh-F8AOJWaLMGrJvYyAeyCipUGYEf0DA6ruoON1ZBqitkfxHWLEVYQbW7EsYSvXWOkadEWbrgquGB0xT_WT-QdwivBHmqJx69nD3xiCqsvK4XQktJ_tC8fkQkeFiWlaJG0_RsfbmEe7RUKdRyGXQQKTgwqftEWpnTJGfhPA79olsR-9o2qgIXSNqKSe8g7tjsr5-WTFEOIfflSwjeRjS-03-ht0ooUolzKXWBE1Cf6AdZFzMwmEnjvWxcACkqNzXsGKebmmlPw55jQeJiXvADYluabLap5cJlw7pILE-mmrHsmVNebpK4m_EGjbLImrvLxg_Vs6qnUX5buMYaq1xkAbDd615B2g_8ADOw3v90PFXZzezjl20lt7zUOTmt8dpSN4bHoPNZ3FMCcuH8OOU3e0y1ofxqiPsVRJH74Yl7L781jbojQRmc"
                  />
                  <input required="" type="text" name="Author" placeholder="Tên của bạn " value="" />
                  <input
                    required=""
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                    type="email"
                    name="Email"
                    placeholder="Email của bạn"
                    value=""
                  />
                  <textarea required="" name="Body" placeholder="Viết bình luận ..."></textarea>
                  <button type="submit">Gửi bình luận</button>
                </form>
              </div>
              <div className="main-article-comment-data">
                <div className="main-article-comment-data-head">
                  <div className="section-title-all">
                    <span>Bình luận của khách hàng</span>
                  </div>
                  <div className="main-article-comment-data-head-total">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                      <path d="M54.1 1H15.9C12.7 1 10 3.7 10 6.9V15H5.9C2.7 15 0 17.7 0 20.9V42.1C0 45.3 2.7 48 5.9 48H12v10c0 0.4 0.3 0.8 0.6 0.9C12.8 59 12.9 59 13 59c0.3 0 0.5-0.1 0.7-0.3L23.4 48H44.1c3.3 0 5.9-2.7 5.9-5.9V34h4.1c3.3 0 5.9-2.7 5.9-5.9V6.9C60 3.7 57.3 1 54.1 1zM48 42.1c0 2.2-1.8 3.9-3.9 3.9H23c-0.3 0-0.6 0.1-0.7 0.3L14 55.4V47c0-0.6-0.4-1-1-1H5.9C3.8 46 2 44.2 2 42.1V20.9C2 18.8 3.8 17 5.9 17H11h33.1c0.8 0 1.6 0.2 2.2 0.7C47.3 18.4 48 19.6 48 20.9V33 42.1zM58 28.1c0 2.2-1.8 3.9-3.9 3.9H50V20.9v0c0-2.7-1.8-4.9-4.2-5.7 -0.2-0.1-0.4-0.1-0.6-0.1C44.9 15 44.5 15 44.1 15H12V6.9C12 4.8 13.8 3 15.9 3H54.1C56.2 3 58 4.8 58 6.9V28.1z"></path>
                      <path d="M12 27h14c0.6 0 1-0.4 1-1s-0.4-1-1-1H12c-0.6 0-1 0.4-1 1S11.4 27 12 27z"></path>
                      <path d="M39 31H12c-0.6 0-1 0.4-1 1s0.4 1 1 1h27c0.6 0 1-0.4 1-1S39.6 31 39 31z"></path>
                      <path d="M39 37H12c-0.6 0-1 0.4-1 1s0.4 1 1 1h27c0.6 0 1-0.4 1-1S39.6 37 39 37z"></path>
                    </svg>
                    2 bình luận.
                  </div>
                </div>
                <div className="main-article-comment-data-list">
                  <div id="comment-6792680" className="main-article-comment-data-list-item">
                    <span>
                      <img src="https://ui-avatars.com/api/?name=company+f1genz&amp;font-size=0.35" alt="" />
                    </span>
                    <div>
                      <p>
                        <strong>Company F1GENZ</strong>
                        <span className="date">đã viết vào lúc </span>
                      </p>
                      - Duyệt bài viết này.
                    </div>
                  </div>
                  <div id="comment-6792679" className="main-article-comment-data-list-item">
                    <span>
                      <img src="https://ui-avatars.com/api/?name=company+f1genz&amp;font-size=0.35" alt="" />
                    </span>
                    <div>
                      <p>
                        <strong>Company F1GENZ</strong>
                        <span className="date">đã viết vào lúc </span>
                      </p>
                      - Bài viết hay nha
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-article-right">
            <div className="main-article-right-newest">
              <div className="section-title-all">
                <span>Bài viết liên quan</span>
              </div>
              <article className="article-item layout-small" data-index="2">
                <div className="article-item-wrap">
                  <div className="article-item-image">
                    <Link
                      href="/kinh-nghiem-chon-den-led-trang-tri-noi-that"
                      title="Kinh nghiệm chọn đèn LED trang trí nội thất"
                      rel="nofollow"
                    >
                      <img
                        src="https://bizweb.dktcdn.net/thumb/medium/100/482/001/articles/blog3-c747c021d13c4b889f6c3a95d6-f736f5c6938943f0b9165c8b87c7166e.jpg?v=1680759066097"
                        className=" ls-is-cached lazyloaded"
                        data-src="https://bizweb.dktcdn.net/thumb/medium/100/482/001/articles/blog3-c747c021d13c4b889f6c3a95d6-f736f5c6938943f0b9165c8b87c7166e.jpg?v=1680759066097"
                        alt="Kinh nghiệm chọn đèn LED trang trí nội thất"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="512"
                        height="512"
                        x="0"
                        y="0"
                        viewBox="0 0 48 48"
                        style={{ enableBackground: 'new 0 0  512 512' }}
                        xmlSpace="preserve"
                        className=""
                      >
                        <path
                          d="m40.8994141 39.4853516-7.8127441-7.8127441c2.3978882-2.734375 3.7209473-6.1942749 3.7209473-9.8649902 0-4.0068359-1.5605469-7.7734375-4.3935547-10.6064453s-6.5996094-4.3935547-10.6064453-4.3935547-7.7734375 1.5605469-10.6064453 4.3935547-4.3935547 6.5996094-4.3935547 10.6064453 1.5605469 7.7734375 4.3935547 10.6064453 6.5996094 4.3935547 10.6064453 4.3935547c3.6707153 0 7.1306152-1.3230591 9.8649902-3.7209473l7.8127441 7.8127441c.1953125.1953125.4511719.2929688.7070313.2929688s.5117188-.0976563.7070313-.2929688c.3906249-.390625.3906249-1.0234375-.0000001-1.4140625zm-28.2841797-8.4853516c-2.4550781-2.4555664-3.8076172-5.7202148-3.8076172-9.1923828s1.3525391-6.7368164 3.8076172-9.1923828c2.4555664-2.4550781 5.7202148-3.8076172 9.1923828-3.8076172s6.7368164 1.3525391 9.1923828 3.8076172c2.4550781 2.4555664 3.8076172 5.7202148 3.8076172 9.1923828s-1.3525391 6.7368164-3.8076172 9.1923828c-2.4555664 2.4550781-5.7202148 3.8076172-9.1923828 3.8076172s-6.7368164-1.3525391-9.1923828-3.8076172z"
                          fill="#ffffff"
                          data-original="#ffffff"
                        ></path>
                      </svg>
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
                      Hiện nay khoa học công nghệ phát triển, một loại thiết bị điện mới ra đời và được ưa chuộng. Đó
                      chính là đèn LED trang trí nội thất. Bởi, nó có nhiều ưu thế vượt trội hơn so với các sản phẩm
                      bóng đèn truyền thống như màu sắc đa dạng, tuổi thọ trung...
                    </p>
                  </div>
                </div>
              </article>
              <article className="article-item layout-small" data-index="3">
                <div className="article-item-wrap">
                  <div className="article-item-image">
                    <Link
                      href="/tai-sao-mau-nau-luon-duoc-ua-chuong-trong-thiet-ke-noi-that"
                      title="Tại sao màu nâu luôn được ưa chuộng trong thiết kế nội thất?"
                      rel="nofollow"
                    >
                      <img
                        src="https://bizweb.dktcdn.net/thumb/medium/100/482/001/articles/blog7-1-642c28eca458452db72ebc36-aa47987c65b842b0839047171f834f06.jpg?v=1680759065690"
                        className=" ls-is-cached lazyloaded"
                        data-src="https://bizweb.dktcdn.net/thumb/medium/100/482/001/articles/blog7-1-642c28eca458452db72ebc36-aa47987c65b842b0839047171f834f06.jpg?v=1680759065690"
                        alt="Tại sao màu nâu luôn được ưa chuộng trong thiết kế nội thất?"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="512"
                        height="512"
                        x="0"
                        y="0"
                        viewBox="0 0 48 48"
                        style={{ enableBackground: 'new 0 0  512 512' }}
                        xmlSpace="preserve"
                        className=""
                      >
                        <path
                          d="m40.8994141 39.4853516-7.8127441-7.8127441c2.3978882-2.734375 3.7209473-6.1942749 3.7209473-9.8649902 0-4.0068359-1.5605469-7.7734375-4.3935547-10.6064453s-6.5996094-4.3935547-10.6064453-4.3935547-7.7734375 1.5605469-10.6064453 4.3935547-4.3935547 6.5996094-4.3935547 10.6064453 1.5605469 7.7734375 4.3935547 10.6064453 6.5996094 4.3935547 10.6064453 4.3935547c3.6707153 0 7.1306152-1.3230591 9.8649902-3.7209473l7.8127441 7.8127441c.1953125.1953125.4511719.2929688.7070313.2929688s.5117188-.0976563.7070313-.2929688c.3906249-.390625.3906249-1.0234375-.0000001-1.4140625zm-28.2841797-8.4853516c-2.4550781-2.4555664-3.8076172-5.7202148-3.8076172-9.1923828s1.3525391-6.7368164 3.8076172-9.1923828c2.4555664-2.4550781 5.7202148-3.8076172 9.1923828-3.8076172s6.7368164 1.3525391 9.1923828 3.8076172c2.4550781 2.4555664 3.8076172 5.7202148 3.8076172 9.1923828s-1.3525391 6.7368164-3.8076172 9.1923828c-2.4555664 2.4550781-5.7202148 3.8076172-9.1923828 3.8076172s-6.7368164-1.3525391-9.1923828-3.8076172z"
                          fill="#ffffff"
                          data-original="#ffffff"
                        ></path>
                      </svg>
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
                      được ưa chuộng. Hãy xem lý do tại sao nhé! Tại sao màu nâu đang ngày càng được ưa chuộng? Màu nâu
                      – giống như một màu nền tảng Trong thập kỷ qua, màu xám, trắng...
                    </p>
                  </div>
                </div>
              </article>
              <article className="article-item layout-small" data-index="4">
                <div className="article-item-wrap">
                  <div className="article-item-image">
                    <Link
                      href="/ghe-armchair-dep-la-gi-cach-de-chon-ghe-armchair-dung-chuan"
                      title="Ghế Armchair đẹp là gì? Cách để chọn ghế Armchair đúng chuẩn!"
                      rel="nofollow"
                    >
                      <img
                        src="https://bizweb.dktcdn.net/thumb/medium/100/482/001/articles/blog9-1-a6649f4aa0f44baa9994a0fa-4a57509aa03a48fc9226b9457732f646.png?v=1680759066187"
                        className=" lazyloaded"
                        data-src="https://bizweb.dktcdn.net/thumb/medium/100/482/001/articles/blog9-1-a6649f4aa0f44baa9994a0fa-4a57509aa03a48fc9226b9457732f646.png?v=1680759066187"
                        alt="Ghế Armchair đẹp là gì? Cách để chọn ghế Armchair đúng chuẩn!"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="512"
                        height="512"
                        x="0"
                        y="0"
                        viewBox="0 0 48 48"
                        style={{ enableBackground: 'new 0 0  512 512' }}
                        xmlSpace="preserve"
                        className=""
                      >
                        <path
                          d="m40.8994141 39.4853516-7.8127441-7.8127441c2.3978882-2.734375 3.7209473-6.1942749 3.7209473-9.8649902 0-4.0068359-1.5605469-7.7734375-4.3935547-10.6064453s-6.5996094-4.3935547-10.6064453-4.3935547-7.7734375 1.5605469-10.6064453 4.3935547-4.3935547 6.5996094-4.3935547 10.6064453 1.5605469 7.7734375 4.3935547 10.6064453 6.5996094 4.3935547 10.6064453 4.3935547c3.6707153 0 7.1306152-1.3230591 9.8649902-3.7209473l7.8127441 7.8127441c.1953125.1953125.4511719.2929688.7070313.2929688s.5117188-.0976563.7070313-.2929688c.3906249-.390625.3906249-1.0234375-.0000001-1.4140625zm-28.2841797-8.4853516c-2.4550781-2.4555664-3.8076172-5.7202148-3.8076172-9.1923828s1.3525391-6.7368164 3.8076172-9.1923828c2.4555664-2.4550781 5.7202148-3.8076172 9.1923828-3.8076172s6.7368164 1.3525391 9.1923828 3.8076172c2.4550781 2.4555664 3.8076172 5.7202148 3.8076172 9.1923828s-1.3525391 6.7368164-3.8076172 9.1923828c-2.4555664 2.4550781-5.7202148 3.8076172-9.1923828 3.8076172s-6.7368164-1.3525391-9.1923828-3.8076172z"
                          fill="#ffffff"
                          data-original="#ffffff"
                        ></path>
                      </svg>
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
                      Ghế Armchair đẹp không chỉ giúp bạn có khoảng thời gian thoải mái mà còn là một cách độc đáo để
                      trang trí thêm cho không gian. Hãy cùng xem những cách chọn ghế Armchair đẹp dưới đây nhé!
                      Ghế&nbsp;Armchair&nbsp;là gì? Ghế Armchair còn có cách gọi khác là ghế bành. Ghế Armchair là loại
                      ghế có...
                    </p>
                  </div>
                </div>
              </article>
              <article className="article-item layout-small" data-index="5">
                <div className="article-item-wrap">
                  <div className="article-item-image">
                    <Link
                      href="/phong-bep-go-va-xu-huong-thiet-ke-de-chon-dung-san-pham"
                      title="Phòng bếp gỗ và xu hướng thiết kế để chọn đúng sản phẩm"
                      rel="nofollow"
                    >
                      <img
                        src="https://bizweb.dktcdn.net/thumb/medium/100/482/001/articles/blog-detail-f6cbe09e8f544acab735-b52ae122f0ed41d8adacc8dd77f144d4.jpg?v=1680759066047"
                        className=" lazyloaded"
                        data-src="https://bizweb.dktcdn.net/thumb/medium/100/482/001/articles/blog-detail-f6cbe09e8f544acab735-b52ae122f0ed41d8adacc8dd77f144d4.jpg?v=1680759066047"
                        alt="Phòng bếp gỗ và xu hướng thiết kế để chọn đúng sản phẩm"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="512"
                        height="512"
                        x="0"
                        y="0"
                        viewBox="0 0 48 48"
                        style={{ enableBackground: 'new 0 0  512 512' }}
                        xmlSpace="preserve"
                      >
                        <path
                          d="m40.8994141 39.4853516-7.8127441-7.8127441c2.3978882-2.734375 3.7209473-6.1942749 3.7209473-9.8649902 0-4.0068359-1.5605469-7.7734375-4.3935547-10.6064453s-6.5996094-4.3935547-10.6064453-4.3935547-7.7734375 1.5605469-10.6064453 4.3935547-4.3935547 6.5996094-4.3935547 10.6064453 1.5605469 7.7734375 4.3935547 10.6064453 6.5996094 4.3935547 10.6064453 4.3935547c3.6707153 0 7.1306152-1.3230591 9.8649902-3.7209473l7.8127441 7.8127441c.1953125.1953125.4511719.2929688.7070313.2929688s.5117188-.0976563.7070313-.2929688c.3906249-.390625.3906249-1.0234375-.0000001-1.4140625zm-28.2841797-8.4853516c-2.4550781-2.4555664-3.8076172-5.7202148-3.8076172-9.1923828s1.3525391-6.7368164 3.8076172-9.1923828c2.4555664-2.4550781 5.7202148-3.8076172 9.1923828-3.8076172s6.7368164 1.3525391 9.1923828 3.8076172c2.4550781 2.4555664 3.8076172 5.7202148 3.8076172 9.1923828s-1.3525391 6.7368164-3.8076172 9.1923828c-2.4555664 2.4550781-5.7202148 3.8076172-9.1923828 3.8076172s-6.7368164-1.3525391-9.1923828-3.8076172z"
                          fill="#ffffff"
                          data-original="#ffffff"
                        ></path>
                      </svg>
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
                      Phòng bếp trong mỗi gia đình là không gian mà các thành viên cùng nhau tận hưởng những bữa ăn thân
                      mật, cùng nhau trò chuyện sau một ngày làm việc mệt mỏi. Chính vì vậy mà không gian này cũng được
                      chú trọng không kém gì so với phòng khách. Và phòng bếp với...
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="main-article-right-menu">
              <div className="section-title-all">
                <span>Danh mục Blog</span>
              </div>
              <ul className="main-article-right-menu-data">
                <li className="hasChild">
                  <Link href="/den-de-ban" title="Sofa và Ghế">
                    Sofa và Ghế<span>›</span>
                  </Link>
                  <ul className="menu1">
                    <li className="hasChild">
                      <Link href="/tu-quan-ao" title="Sofa">
                        Sofa<span>›</span>
                      </Link>
                      <ul className="menu2">
                        <li className="">
                          <Link href="/den-de-ban" title="Sofa da">
                            Sofa da
                          </Link>
                        </li>
                        <li className="">
                          <Link href="/den-de-ban" title="Sofa giường">
                            Sofa giường
                          </Link>
                        </li>
                        <li className="">
                          <Link href="/ke-treo-tuong" title="Sofa gỗ">
                            Sofa gỗ
                          </Link>
                        </li>
                        <li className="">
                          <Link href="/tu-quan-ao" title="Sofa phòng khách">
                            Sofa phòng khách
                          </Link>
                        </li>
                        <li className="">
                          <Link href="/ghe-an" title="Sofa giá rẽ">
                            Sofa giá rẽ
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="hasChild">
                      <Link href="/ghe-an" title="Sofa góc">
                        Sofa góc<span>›</span>
                      </Link>
                      <ul className="menu2">
                        <li className="">
                          <Link href="/ke-treo-tuong" title="Sofa cao cấp">
                            Sofa cao cấp
                          </Link>
                        </li>
                        <li className="">
                          <Link href="/gia-treo" title="Sofa nỉ">
                            Sofa nỉ
                          </Link>
                        </li>
                        <li className="">
                          <Link href="/ban-an" title="Sofa chung cư">
                            Sofa chung cư
                          </Link>
                        </li>
                        <li className="">
                          <Link href="/den-de-ban" title="Sofa thư giãn">
                            Sofa thư giãn
                          </Link>
                        </li>
                        <li className="">
                          <Link href="/ghe-an" title="Sofa văn phòng">
                            Sofa văn phòng
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="hasChild">
                      <Link href="/ban-an" title="Ghế dài &amp; đôn">
                        Ghế dài &amp; đôn<span>›</span>
                      </Link>
                      <ul className="menu2">
                        <li className="">
                          <Link href="/ke-treo-tuong" title="Ghế dài đơn">
                            Ghế dài đơn
                          </Link>
                        </li>
                        <li className="">
                          <Link href="/gia-treo" title="Ghế dài 2 đầu">
                            Ghế dài 2 đầu
                          </Link>
                        </li>
                        <li className="">
                          <Link href="/ke-treo-tuong" title="Ghế dài massage">
                            Ghế dài massage
                          </Link>
                        </li>
                        <li className="">
                          <Link href="/den-de-ban" title="Ghế dài có tựa đầu">
                            Ghế dài có tựa đầu
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="hasChild">
                      <Link href="/ke-treo-tuong" title="Ghế thư giãn">
                        Ghế thư giãn<span>›</span>
                      </Link>
                      <ul className="menu2">
                        <li className="">
                          <Link href="/den-de-ban" title="Ghệ bập bênh">
                            Ghệ bập bênh
                          </Link>
                        </li>
                        <li className="">
                          <Link href="/tat-ca-san-pham" title="Ghế xoay 360">
                            Ghế xoay 360
                          </Link>
                        </li>
                        <li className="">
                          <Link href="/den-de-ban" title="Ghế massage thư giãn black">
                            Ghế massage thư giãn black
                          </Link>
                        </li>
                        <li className="">
                          <Link href="/tu-quan-ao" title="Ghế lười">
                            Ghế lười
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="hasChild">
                  <Link href="/den-de-ban" title="Bàn">
                    Bàn<span>›</span>
                  </Link>
                  <ul className="menu1">
                    <li className="">
                      <Link href="/den-de-ban" title="Bàn ăn">
                        Bàn ăn
                      </Link>
                    </li>
                    <li className="">
                      <Link href="/ke-treo-tuong" title="Bàn học">
                        Bàn học
                      </Link>
                    </li>
                    <li className="">
                      <Link href="/ban-an" title="Bàn trang điểm">
                        Bàn trang điểm
                      </Link>
                    </li>
                    <li className="">
                      <Link href="/ke-treo-tuong" title="Bàn phòng khách">
                        Bàn phòng khách
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="">
                  <Link href="/ke-treo-tuong" title="Giường ngủ">
                    Giường ngủ
                  </Link>
                </li>
                <li className="">
                  <Link href="/ke-treo-tuong" title="Tủ và kệ">
                    Tủ và kệ
                  </Link>
                </li>
                <li className="">
                  <Link href="/ke-treo-tuong" title="Trang trí">
                    Trang trí
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
};

export default Article;
