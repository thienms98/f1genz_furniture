'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import HeaderMenu from './Menu';
import CloseIcon from '~/components/icon/close';
import PhoneIcon from '~/components/icon/phone';
import { products } from '~/data/products';
import { menu } from '~/data/menu';
import classNames from 'classnames';

const Header = () => {
  const template = ['Bạn cần tìm gì ...?', 'Nhập tên sản phẩm', 'Tìm kiếm sản phẩm ...'];
  const [pos, setPos] = useState([0, 5]);
  const [inc, setInc] = useState(1);
  const [placeholder, setPlaceholder] = useState('Bạn c');
  const [searchText, setSearchText] = useState('');
  const [searchData, setSearchData] = useState(null);

  const headerMenuSidebarRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    let inc = 1;
    const timeout = setTimeout(() => {
      let a = pos[0],
        b = pos[1];

      b = b + inc;
      if (b >= template[a].length * 2) {
        b = 0;
        a = a + 1;
      }
      if (a >= template.length) a = 0;
      setPos([a, b]);
      setPlaceholder(() => {
        if (b > template[a].length) return template[a].slice(0, template[a].length - b);
        return template[a].slice(0, b);
      });
    }, 200);
    if (searchText) clearTimeout(timeout);
    return () => clearTimeout(timeout);
  }, [placeholder, pos, template, searchText]);

  useEffect(() => {
    setSearchData(products.filter((prod) => prod.name.toLowerCase().includes(searchText.trim().toLowerCase())));
  }, [searchText]);

  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <div className="header-left">
            <Link href="/" title="F1GENZ Furniture">
              <Image
                src="https://bizweb.dktcdn.net/thumb/large/100/482/001/themes/906081/assets/shop_logo_image.png?1684771044770"
                alt="F1GENZ Furniture"
                width="188"
                height="50"
              />
            </Link>
          </div>
          <div className="header-center">
            <form className={`tool-search ${searchText.trim() ? 'active' : ''}`} action="/search" ref={searchRef}>
              <input type="hidden" name="type" value="product" />
              <input
                required=""
                name="q"
                autoComplete="off"
                type="text"
                placeholder={placeholder}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button type="submit" title="Tìm kiếm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="512"
                  height="512"
                  x="0"
                  y="0"
                  viewBox="0 0 612.01 612.01"
                  style={{ enableBackground: 'new 0 0 512 512' }}
                  xmlSpace="preserve"
                  className=""
                >
                  <path
                    d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0 C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586 l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8 c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407 S377.82,467.8,257.493,467.8z"
                    fill="#000000"
                    data-original="#000000"
                    className=""
                  ></path>
                </svg>
              </button>
              <button
                className="tool-search-overplay"
                title="Đóng"
                onClick={() => {
                  setSearchText('');
                  setSearchData([]);
                }}
              ></button>
              {searchText.trim() && (
                <div class="tool-search-smart">
                  <div class="tool-search-smart-product tool-search-smart-data">
                    <label>Sản phẩm ({searchData.length})</label>
                    <ul>
                      {searchData.map((prod) => (
                        <li key={prod.id}>
                          <a href={`/${prod.uri}`} title={prod.name}>
                            <Image src={prod.images[0].src} width={50} height={50} alt={prod.name} />
                            <span>{prod.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </form>
          </div>
          <div className="header-right">
            <div className="header-right-phone">
              <Link href="tel:" title="Gọi ngay ">
                <svg
                  style={{ fill: '#4c4c4c' }}
                  version="1.1"
                  width="30"
                  height="30"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 473.806 473.806"
                  xmlSpace="preserve"
                >
                  <path
                    d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4
							c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8
							c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6
							c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5
							c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26
							c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9
							c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806
							C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20
							c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6
							c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1
							c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3
							c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5
							c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8
							c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9
							l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1
							C420.456,377.706,420.456,388.206,410.256,398.806z"
                  ></path>
                  <path
                    d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2
							c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11
							S248.656,111.506,256.056,112.706z"
                  ></path>
                  <path
                    d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11
							c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2
							c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"
                  ></path>
                </svg>
              </Link>
              <div className="header-right-phone-detail">
                <span>Hotline</span>
                <Link href="tel:1800.67.50">1800.67.50</Link>
              </div>
            </div>
            <button
              className="shop-tool"
              type="button"
              data-type="shop-customer-header"
              data-toggle="modal"
              data-target="#accountLogin"
              data-whatever="@accountLogin"
              title="Tài khoản"
            >
              <svg data-name="Layer 1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M16,20a8,8,0,1,1,8-8A8,8,0,0,1,16,20ZM16,6a6,6,0,1,0,6,6A6,6,0,0,0,16,6Z"></path>
                <path d="M30,32H28A12,12,0,0,0,4,32H2a14,14,0,0,1,28,0Z"></path>
              </svg>
            </button>
            <button
              className="shop-tool"
              type="button"
              data-type="shop-search-mobile"
              data-toggle="modal"
              data-target="#accountLogin"
              data-whatever="@accountLogin"
              title="Tài khoản"
              onClick={() => {
                if (document.body.offsetWidth < 1200) searchRef.current.classList.toggle('show');
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="512"
                height="512"
                x="0"
                y="0"
                viewBox="0 0 612.01 612.01"
                style={{ enableBackground: 'new 0 0 512 512' }}
                xmlSpace="preserve"
                className=""
              >
                <path
                  d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0 C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586 l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8 c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407 S377.82,467.8,257.493,467.8z"
                  fill="#000000"
                  data-original="#000000"
                  className=""
                ></path>
              </svg>
            </button>
            <button className="shop-tool has-count" type="button" data-type="shop-wishlist-header" title="Yêu thích">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="128"
                height="128"
                x="0"
                y="0"
                viewBox="0 0 512 512"
                style={{ enableBackground: 'new 0 0 512 512' }}
                xmlSpace="preserve"
                className=""
              >
                <path
                  d="M359.511,37.984c-38.907,0-75.282,14.653-103.511,41.478c-28.229-26.825-64.605-41.478-103.511-41.478 C68.406,37.984,0,108.033,0,194.135c0,49.918,42.543,112.126,126.449,184.895c61.346,53.204,123.555,93.023,124.176,93.419 c1.639,1.045,3.507,1.567,5.375,1.567c1.868,0,3.736-0.523,5.376-1.568c0.621-0.396,62.83-40.215,124.176-93.419 C469.457,306.26,512,244.052,512,194.135C512,108.033,443.594,37.984,359.511,37.984z M372.62,363.771 c-49.885,43.284-100.379,77.567-116.62,88.301c-16.216-10.715-66.578-44.903-116.448-88.153C61.34,296.089,20,237.378,20,194.135 C20,119.06,79.435,57.984,152.489,57.984c36.726,0,70.877,15.094,96.161,42.501c1.893,2.052,4.558,3.219,7.35,3.219 s5.457-1.167,7.35-3.219c25.285-27.406,59.435-42.5,96.161-42.5C432.565,57.984,492,119.06,492,194.135 C492,237.344,450.719,296.003,372.62,363.771z"
                  fill="#000000"
                  data-original="#000000"
                ></path>
                <path
                  d="M347.379,93.307l-0.376,0.065c-5.438,0.966-9.063,6.157-8.097,11.595c0.861,4.846,5.078,8.252,9.834,8.252 c0.581,0,1.17-0.051,1.76-0.156l0.199-0.034c5.446-0.917,9.118-6.075,8.201-11.521C357.983,96.06,352.82,92.393,347.379,93.307z"
                  fill="#000000"
                  data-original="#000000"
                ></path>
                <path
                  d="M439.056,131.382c-12.278-16.867-29.718-29.43-49.106-35.375c-5.281-1.621-10.873,1.349-12.492,6.629 c-1.619,5.28,1.349,10.873,6.629,12.492c31.959,9.8,54.279,41.078,54.279,76.063c0,5.523,4.477,10,10,10s10-4.477,9.999-10.001 C458.365,169.416,451.688,148.735,439.056,131.382z"
                  fill="#000000"
                  data-original="#000000"
                ></path>
              </svg>
              <span className="shop-wishlist-count">0</span>
            </button>
            <button className="shop-tool has-count" type="button" data-type="shop-cart-header" title="Giỏ hàng">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="128"
                height="128"
                x="0"
                y="0"
                viewBox="0 0 459.361 459.361"
                style={{ enableBackground: 'new 0 0 512 512' }}
                xmlSpace="preserve"
                className=""
              >
                <path
                  d="M371.2,325.731c19.1-0.2,35.8-13.1,40.7-31.6l47.1-175.4c1.5-5.7-1.8-11.5-7.5-13.1c-0.9-0.2-1.8-0.4-2.7-0.4H94.5 l-24.1-89c-1.2-4.6-5.4-7.9-10.2-7.9H0v21.3h51.8l23.3,87c-0.1,0.7-0.1,1.4,0,2.1l48,176c0.3,1.4,0.8,2.9,1.3,4.3l16.2,59 c-15.6,8.3-26.2,24.7-26.2,43.6c0,27.3,22.1,49.4,49.4,49.4c27.3,0,49.4-22.1,49.4-49.4c0-8.5-2.2-16.6-6-23.6 c-0.9-1.6-1.8-3.2-2.9-4.8H330c-5.6,8-9,17.8-9,28.4c0,27.3,22.1,49.4,49.4,49.4s49.4-22.1,49.4-49.4c0-12.9-4.9-24.6-13-33.4 c-8.7-9.9-21.5-16.2-35.8-16.3H161.9l-7.5-27.5c3.2,0.8,6.5,1.3,9.8,1.3H371.2z M370.5,373.231c15.7,0,28.4,12.7,28.4,28.4 s-12.7,28.4-28.4,28.4c-15.7,0-28.4-12.7-28.4-28.4S354.8,373.231,370.5,373.231z M163.8,373.231c15.7,0,28.3,12.8,28.3,28.4 c0,15.7-12.7,28.4-28.4,28.4c-15.7,0-28.3-12.7-28.3-28.4S148.1,373.231,163.8,373.231z M144.8,290.931l-23.9-87.4l-21.3-76.8 h334.9l-43.3,162.6c-2.4,9.3-10.7,15.8-20.3,16H164C155.3,304.831,147.7,299.231,144.8,290.931z"
                  fill="#000000"
                  data-original="#000000"
                ></path>
              </svg>
              <span className="shop-cart-count">2</span>
            </button>
            <button
              className="shop-tool"
              type="button"
              data-type="shop-menu-mobile-header"
              title="Menu"
              onClick={() => {
                document.body.classList.toggle('open-overplay');
                document.body.classList.toggle('open-noscroll');
                document.body.classList.toggle('open-menu-mobile');
              }}
            >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 384.97 384.97"
                style={{ enableBackground: 'new 0 0 384.97 384.97' }}
                xmlSpace="preserve"
              >
                <g>
                  <path d="M12.03,84.212h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03 C5.39,60.152,0,65.541,0,72.182C0,78.823,5.39,84.212,12.03,84.212z"></path>
                  <path d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03 S379.58,180.455,372.939,180.455z"></path>
                  <path d="M372.939,300.758H12.03c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h360.909 c6.641,0,12.03-5.39,12.03-12.03C384.97,306.147,379.58,300.758,372.939,300.758z"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="header-menu">
        <div className="container items-center">
          <div className="header-menu-wrap flex-1">
            <div className="header-menu-left">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 384.97 384.97"
                style={{ enableBackground: 'new 0 0 384.97 384.97' }}
                xmlSpace="preserve"
              >
                <g>
                  <path d="M12.03,84.212h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03 C5.39,60.152,0,65.541,0,72.182C0,78.823,5.39,84.212,12.03,84.212z"></path>
                  <path d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03 S379.58,180.455,372.939,180.455z"></path>
                  <path d="M372.939,300.758H12.03c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h360.909 c6.641,0,12.03-5.39,12.03-12.03C384.97,306.147,379.58,300.758,372.939,300.758z"></path>
                </g>
              </svg>
              <span
                onClick={() => {
                  headerMenuSidebarRef.current.classList.toggle('active');
                  document.body.classList.toggle('open-overplay');
                }}
              >
                Danh mục menu
              </span>
              <nav className="header-menu-sidebar text-black" ref={headerMenuSidebarRef}>
                <ul>
                  <HeaderMenu data={menu['Danh mục menu']} />
                </ul>
              </nav>
            </div>

            <div className="header-menu-center">
              <ul className="mb-0">
                <HeaderMenu data={menu.middleMenu} />
                {/* <li className="">
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
                        href="/tu-quan-ao-3-cua-2-ngan-f1genz-cao-cap-4?view=style1"
                        title="Chi tiết Style 1"
                      >
                        Chi tiết Style 1
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href="/tu-quan-ao-3-cua-2-ngan-f1genz-cao-cap-4?view=style2"
                        title="Chi tiết Style 2"
                      >
                        Chi tiết Style 2
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href="/tu-quan-ao-3-cua-2-ngan-f1genz-cao-cap-4?view=style3"
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
                </li> */}
              </ul>
            </div>
            <div className="header-menu-right w-full">
              <Link href="https://www.youtube.com/watch?v=zvkN-cIphMQ" data-fancybox="" title="Video">
                Video Hot
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="512"
                  height="512"
                  x="0"
                  y="0"
                  viewBox="0 0 512 512"
                  style={{ enableBackground: 'new 0 0 512 512' }}
                  xmlSpace="preserve"
                  className=""
                >
                  <g>
                    <path
                      fill="#ff4f6b"
                      d="M417.249 350.751H163.392V161.249h253.857C469.579 161.249 512 203.67 512 256c0 52.33-42.421 94.751-94.751 94.751z"
                      data-original="#ff4f6b"
                      className=""
                    ></path>
                    <path
                      fill="#fb2b3a"
                      d="M417.249 161.249h-30.905c52.329 0 94.751 42.421 94.751 94.751 0 52.33-42.422 94.751-94.751 94.751h30.905C469.578 350.751 512 308.33 512 256c0-52.33-42.422-94.751-94.751-94.751z"
                      data-original="#fb2b3a"
                    ></path>
                    <g fill="#fff">
                      <path
                        d="M303.605 282.447h-.044c-5.617.031-11.651.054-16.203.057V221.77a7.725 7.725 0 0 0-7.726-7.726 7.725 7.725 0 0 0-7.726 7.726v68.403a7.725 7.725 0 0 0 6.421 7.615c.556.096 17.5.155 25.322.112a7.726 7.726 0 0 0-.044-15.453zM330.338 214.043a7.725 7.725 0 0 0-7.726 7.726v68.461a7.725 7.725 0 0 0 7.726 7.726 7.725 7.725 0 0 0 7.726-7.726v-68.46a7.726 7.726 0 0 0-7.726-7.727zM461.069 282.192h-20.857v-18.466h18.749a7.726 7.726 0 1 0 0-15.452h-18.749v-18.466h20.857a7.725 7.725 0 0 0 7.726-7.726 7.725 7.725 0 0 0-7.726-7.726h-28.584a7.725 7.725 0 0 0-7.726 7.726v67.837a7.725 7.725 0 0 0 7.726 7.726h28.584c4.268 0 7.726-3.459 7.726-7.726s-3.458-7.727-7.726-7.727zM408.187 214.563a7.725 7.725 0 0 0-9.768 4.896l-16.613 50.007-17.436-50.23c-1.398-4.032-5.803-6.17-9.832-4.766a7.726 7.726 0 0 0-4.766 9.832l23.426 67.49a9.28 9.28 0 0 0 8.735 6.165l.065-.001c3.942-.027 7.444-2.553 8.73-6.338l22.353-67.288a7.722 7.722 0 0 0-4.894-9.767z"
                        fill="#ffffff"
                        data-original="#ffffff"
                        className=""
                      ></path>
                    </g>
                    <circle
                      cx="120.466"
                      cy="256"
                      r="120.466"
                      fill="#ff4f6b"
                      data-original="#ff4f6b"
                      className=""
                    ></circle>
                    <path
                      fill="#fb2b3a"
                      d="M120.466 135.534c-5.235 0-10.392.337-15.453.988C164.168 144.13 210.027 194.81 210.027 256s-45.86 111.87-105.014 119.478c5.061.651 10.218.988 15.453.988 66.425 0 120.467-54.04 120.467-120.466 0-66.425-54.041-120.466-120.467-120.466z"
                      data-original="#fb2b3a"
                    ></path>
                    <ellipse
                      cx="120.467"
                      cy="256"
                      fill="#ffffff"
                      rx="89.56"
                      ry="89.561"
                      transform="rotate(-80.8 120.424 256.008)"
                      data-original="#ffffff"
                      className=""
                    ></ellipse>
                    <path
                      fill="#ff4f6b"
                      d="M95.54 291.375v-70.751c0-7.166 8.153-11.282 13.92-7.028l47.945 35.375c4.731 3.491 4.731 10.565 0 14.056l-47.945 35.375c-5.767 4.256-13.92.139-13.92-7.027z"
                      data-original="#ff4f6b"
                      className=""
                    ></path>
                    <path
                      fill="#fb2b3a"
                      d="m157.404 248.972-47.945-35.375c-5.766-4.254-13.92-.138-13.92 7.028v5.505c20.109 14.837 20.109 44.904 0 59.741v5.505c0 7.166 8.153 11.282 13.92 7.028l47.945-35.375c4.731-3.492 4.731-10.566 0-14.057z"
                      data-original="#fb2b3a"
                    ></path>
                  </g>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
