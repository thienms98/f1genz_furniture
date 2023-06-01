'use client';

import React from 'react';
import Image from 'next/image';
import './all.css';
import CollectionsLayout from '~/layouts/collections';

const AllProduct = () => {
  const [style, setStyle] = React.useState('three');

  return (
    <CollectionsLayout>
      <div class="main-collection-right ">
        <div class="main-collection-head">
          <div class="shop-sort-style">
            <strong>Hiển thị</strong>
            <div class="shop-filter-mobile-btn">
              <button type="button" data-type="shop-filter-mobile-btn" title="Bộ lọc">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="512"
                  height="512"
                  x="0"
                  y="0"
                  viewBox="0 0 512 512"
                  style="enable-background:new 0 0 512 512"
                  xmlSpace="preserve"
                  class=""
                >
                  <g>
                    <path
                      d="m486.585 243.429-15.502-8.401c-1.179-.639-1.82-1.981-1.596-3.339 1.048-6.346 1.58-12.843 1.58-19.309 0-6.467-.532-12.963-1.58-19.308-.225-1.359.417-2.701 1.596-3.34l15.502-8.4c4.266-2.311 7.376-6.145 8.757-10.796 1.382-4.65.87-9.561-1.441-13.825l-17.226-31.788c-4.772-8.804-15.817-12.085-24.621-7.314l-15.518 8.409c-1.178.64-2.641.453-3.637-.461-12.001-11.015-25.858-19.283-41.188-24.576-1.341-.463-2.242-1.679-2.242-3.025v-17.615c0-10.015-8.148-18.162-18.162-18.162h-36.154c-10.014 0-18.162 8.147-18.162 18.162v17.615c0 1.346-.901 2.562-2.241 3.025-15.331 5.293-29.189 13.562-41.188 24.576-.997.915-2.459 1.1-3.638.461l-15.518-8.41c-8.805-4.771-19.849-1.488-24.621 7.316l-17.225 31.787c-2.311 4.265-2.823 9.175-1.441 13.825.563 1.896 1.427 3.646 2.525 5.222h-95.46c-4.143 0-7.502 3.358-7.502 7.502 0 4.143 3.359 7.502 7.502 7.502h237.64c.436 0 .791.355.791.791v42.447h-325.714v-42.446c0-.437.355-.791.791-.791h52.484c4.143 0 7.502-3.358 7.502-7.502 0-4.143-3.359-7.502-7.502-7.502h-52.484c-8.709 0-15.794 7.085-15.794 15.794v49.948c0 .053.007.104.008.156.002.085.008.168.013.253.014.267.042.531.084.79.01.062.017.124.028.185.061.325.141.642.242.95.013.041.03.081.044.121.097.279.21.55.338.812.026.055.051.11.079.164.15.291.316.571.502.839.03.043.064.084.095.127.171.236.356.461.553.675.029.032.051.068.081.099l134.961 141.809c1.399 1.47 2.169 3.397 2.169 5.425v76.002c0 4.577 2.475 8.82 6.457 11.072l51.878 29.35c1.967 1.113 4.118 1.669 6.267 1.668 2.204 0 4.406-.584 6.407-1.75 3.953-2.305 6.313-6.413 6.313-10.99v-36.555c0-4.143-3.359-7.502-7.502-7.502s-7.502 3.358-7.502 7.502v32.643l-47.316-26.769v-74.671c0-5.896-2.239-11.496-6.305-15.768l-122.898-129.135h305.726l-15.143 15.912c-.015.016-.03.032-.045.048l-107.713 113.178c-4.065 4.271-6.304 9.871-6.304 15.767v33.79c0 4.143 3.359 7.502 7.502 7.502s7.502-3.358 7.502-7.502v-33.79c0-2.029.77-3.955 2.169-5.424l66.857-70.25c4.322 2.116 8.773 3.983 13.304 5.547 1.341.463 2.242 1.679 2.242 3.025v17.615c0 10.015 8.148 18.162 18.162 18.162h36.154c10.014 0 18.162-8.147 18.162-18.162v-17.615c0-1.346.901-2.562 2.242-3.025 15.332-5.294 29.19-13.562 41.188-24.576.998-.914 2.459-1.098 3.638-.461l15.518 8.41c8.804 4.771 19.849 1.489 24.621-7.316l17.224-31.788c2.311-4.265 2.823-9.175 1.441-13.825-1.381-4.652-4.491-8.485-8.756-10.796zm-5.876 17.473-17.225 31.786c-.83 1.532-2.75 2.103-4.283 1.274l-15.516-8.409c-6.806-3.688-15.218-2.646-20.932 2.598-10.473 9.614-22.565 16.831-35.939 21.449-7.386 2.55-12.348 9.465-12.348 17.206v17.615c0 1.742-1.417 3.159-3.159 3.159h-36.154c-1.742 0-3.159-1.417-3.159-3.159v-17.615c0-7.741-4.962-14.655-12.349-17.207-2.456-.848-4.881-1.809-7.274-2.846l26.897-28.262c4.571.961 9.249 1.446 13.962 1.446 11.949 0 23.695-3.164 33.968-9.148 3.579-2.085 4.791-6.678 2.705-10.258s-6.678-4.788-10.259-2.706c-7.982 4.65-17.115 7.109-26.414 7.109-.348 0-.695-.011-1.043-.018l17.362-18.243c.03-.031.052-.067.081-.099.197-.214.382-.439.553-.675.031-.043.065-.084.095-.127.186-.267.352-.548.502-.839.028-.054.052-.109.079-.164.128-.263.241-.533.338-.812.014-.041.031-.08.044-.121.101-.308.182-.625.242-.95.012-.061.018-.123.028-.185.042-.259.07-.523.084-.79.005-.084.011-.168.013-.253.001-.053.008-.104.008-.156v-49.948c0-8.709-7.085-15.794-15.794-15.794h-40.281c9.773-10.043 23.314-15.931 37.688-15.931 28.978 0 52.554 23.575 52.554 52.553 0 8.256-1.857 16.154-5.52 23.476-1.853 3.705-.353 8.212 3.352 10.065 1.078.539 2.223.795 3.351.795 2.751-.001 5.4-1.52 6.715-4.147 4.715-9.424 7.105-19.58 7.105-30.188 0-37.251-30.306-67.556-67.557-67.556-23.022 0-44.383 11.746-56.777 30.934h-55.375l-14.056-7.618c-1.001-.542-1.383-1.409-1.522-1.876-.139-.469-.292-1.404.251-2.405l17.225-31.786c.83-1.532 2.752-2.102 4.283-1.274l15.516 8.409c6.807 3.689 15.219 2.647 20.932-2.598 10.474-9.614 22.566-16.831 35.94-21.449 7.386-2.549 12.348-9.465 12.348-17.206v-17.617c0-1.742 1.417-3.159 3.159-3.159h36.154c1.742 0 3.159 1.417 3.159 3.159v17.615c0 7.741 4.962 14.655 12.348 17.206 13.373 4.618 25.465 11.835 35.94 21.449 5.712 5.244 14.124 6.287 20.931 2.598l15.517-8.408c1.532-.831 3.453-.26 4.283 1.272l17.225 31.787c.543 1.001.39 1.936.251 2.405-.139.468-.522 1.334-1.523 1.877l-15.503 8.401c-6.799 3.684-10.516 11.31-9.25 18.976.915 5.539 1.379 11.212 1.379 16.862s-.464 11.323-1.38 16.863c-1.266 7.665 2.451 15.29 9.25 18.975l15.503 8.402c1.001.542 1.383 1.409 1.522 1.876.14.469.293 1.404-.25 2.405z"
                      fill="#000000"
                      data-original="#000000"
                      class=""
                    ></path>
                    <path
                      d="m23.399 75.926c4.143 0 7.502-3.358 7.502-7.502v-33.162c0-4.143-3.359-7.502-7.502-7.502s-7.502 3.358-7.502 7.502v33.162c.001 4.144 3.359 7.502 7.502 7.502z"
                      fill="#000000"
                      data-original="#000000"
                      class=""
                    ></path>
                    <path
                      d="m148.977 154.757c4.143 0 7.502-3.358 7.502-7.502v-33.163c0-4.143-3.359-7.502-7.502-7.502s-7.502 3.358-7.502 7.502v33.163c0 4.144 3.359 7.502 7.502 7.502z"
                      fill="#000000"
                      data-original="#000000"
                      class=""
                    ></path>
                    <path
                      d="m117.03 48.165c4.143 0 7.502-3.358 7.502-7.502v-33.161c0-4.143-3.359-7.502-7.502-7.502s-7.502 3.358-7.502 7.502v33.162c0 4.143 3.359 7.501 7.502 7.501z"
                      fill="#000000"
                      data-original="#000000"
                      class=""
                    ></path>
                    <path
                      d="m269.664 64.747c4.143 0 7.502-3.358 7.502-7.502v-33.162c0-4.143-3.359-7.502-7.502-7.502s-7.502 3.358-7.502 7.502v33.162c.001 4.144 3.359 7.502 7.502 7.502z"
                      fill="#000000"
                      data-original="#000000"
                      class=""
                    ></path>
                    <path
                      d="m82.593 119.291c14.073 0 25.522-11.449 25.522-25.521s-11.449-25.521-25.522-25.521c-14.072 0-25.521 11.449-25.521 25.521s11.449 25.521 25.521 25.521zm0-36.039c5.8 0 10.518 4.718 10.518 10.518s-4.718 10.518-10.518 10.518-10.518-4.718-10.518-10.518 4.719-10.518 10.518-10.518z"
                      fill="#000000"
                      data-original="#000000"
                      class=""
                    ></path>
                    <path
                      d="m198.079 99.711c14.072 0 25.521-11.449 25.521-25.521 0-14.073-11.449-25.522-25.521-25.522-14.073 0-25.522 11.449-25.522 25.522.001 14.072 11.45 25.521 25.522 25.521zm0-36.04c5.8 0 10.518 4.719 10.518 10.519s-4.718 10.518-10.518 10.518-10.518-4.718-10.518-10.518 4.718-10.519 10.518-10.519z"
                      fill="#000000"
                      data-original="#000000"
                      class=""
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
            <div class="shop-sort-item" data-show="two"></div>
            <div class="shop-sort-item" data-show="three"></div>
            <div class="shop-sort-item active" data-show="four"></div>
          </div>
          <div class="shop-sort-by">
            <label>Sắp xếp theo</label>
            <select>
              <option value="">Mặc định</option>
              <option value="name:asc">A → Z</option>
              <option value="name:desc">Z → A</option>
              <option value="price_min:asc">Giá tăng dần</option>
              <option value="price_min:desc">Giá giảm dần</option>
              <option value="created_on:desc">Hàng mới nhất</option>
              <option value="created_on:asc">Hàng cũ nhất</option>
            </select>
          </div>
        </div>
        <div class="main-collection-data four">
          <div class="product-item" data-id="87903177" data-handle="ban-an-4-chan-gia-dinh-cao-cap">
            <div class="product-item-wrap">
              <div class="product-item-image hasThumbs hasThumbsIcon">
                <span class="product-item-discount">-9%</span>
                <a
                  class="product-item-link"
                  href="/ban-an-4-chan-gia-dinh-cao-cap"
                  title="Bàn ăn 4 chân gia đình cao cấp"
                >
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/1-5acd9b1760c24d398ebcfacdf7a29a2c-e92c34fb179e4b219283683d0714d7d8.png?v=1683881102413"
                    alt="Bàn ăn 4 chân gia đình cao cấp"
                  />
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/2-cf9c3caad4d44eafb680ed2ce63a522c-6d1ddf61c7424f3c829d43ce91704f29.png?v=1683881102413"
                    alt="Bàn ăn 4 chân gia đình cao cấp"
                  />
                </a>
                <ul class="product-item-thumbs">
                  <li>
                    <a href="/ban-an-4-chan-gia-dinh-cao-cap" title="Bàn ăn 4 chân gia đình cao cấp">
                      <img
                        class="w-auto ls-is-cached lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-cf9c3caad4d44eafb680ed2ce63a522c-6d1ddf61c7424f3c829d43ce91704f29.png?v=1683881102413"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-cf9c3caad4d44eafb680ed2ce63a522c-6d1ddf61c7424f3c829d43ce91704f29.png?v=1683881102413"
                        alt="Bàn ăn 4 chân gia đình cao cấp"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ban-an-4-chan-gia-dinh-cao-cap" title="Bàn ăn 4 chân gia đình cao cấp">
                      <img
                        class="w-auto ls-is-cached lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-2b4d0eae0c994f9eb41bd5534819682b-5601114662c543c29b4f68f70b27cde6.png?v=1683881102413"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-2b4d0eae0c994f9eb41bd5534819682b-5601114662c543c29b4f68f70b27cde6.png?v=1683881102413"
                        alt="Bàn ăn 4 chân gia đình cao cấp"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ban-an-4-chan-gia-dinh-cao-cap" title="Bàn ăn 4 chân gia đình cao cấp">
                      <img
                        class="w-auto ls-is-cached lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-63a9c6e0799f4049a754cf0c61630f02-bae72b7c565042afb1742641f66e5287.png?v=1683881102413"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-63a9c6e0799f4049a754cf0c61630f02-bae72b7c565042afb1742641f66e5287.png?v=1683881102413"
                        alt="Bàn ăn 4 chân gia đình cao cấp"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-item-action">
                <button
                  type="button"
                  title="Yêu thích"
                  class="shop-wishlist-button-add"
                  data-type="shop-wishlist-button-add"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
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
                </button>
                <button type="button" title="Xem nhanh" class="shop-quickview-button" data-type="shop-quickview-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 612.01 612.01"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0 C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586 l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8 c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407 S377.82,467.8,257.493,467.8z"
                      fill="#000000"
                      data-original="#000000"
                      class=""
                    ></path>
                  </svg>
                </button>
                <button type="button" title="Thêm vào giỏ" class="shop-addLoop-button" data-type="shop-addLoop-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 459.361 459.361"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M371.2,325.731c19.1-0.2,35.8-13.1,40.7-31.6l47.1-175.4c1.5-5.7-1.8-11.5-7.5-13.1c-0.9-0.2-1.8-0.4-2.7-0.4H94.5 l-24.1-89c-1.2-4.6-5.4-7.9-10.2-7.9H0v21.3h51.8l23.3,87c-0.1,0.7-0.1,1.4,0,2.1l48,176c0.3,1.4,0.8,2.9,1.3,4.3l16.2,59 c-15.6,8.3-26.2,24.7-26.2,43.6c0,27.3,22.1,49.4,49.4,49.4c27.3,0,49.4-22.1,49.4-49.4c0-8.5-2.2-16.6-6-23.6 c-0.9-1.6-1.8-3.2-2.9-4.8H330c-5.6,8-9,17.8-9,28.4c0,27.3,22.1,49.4,49.4,49.4s49.4-22.1,49.4-49.4c0-12.9-4.9-24.6-13-33.4 c-8.7-9.9-21.5-16.2-35.8-16.3H161.9l-7.5-27.5c3.2,0.8,6.5,1.3,9.8,1.3H371.2z M370.5,373.231c15.7,0,28.4,12.7,28.4,28.4 s-12.7,28.4-28.4,28.4c-15.7,0-28.4-12.7-28.4-28.4S354.8,373.231,370.5,373.231z M163.8,373.231c15.7,0,28.3,12.8,28.3,28.4 c0,15.7-12.7,28.4-28.4,28.4c-15.7,0-28.3-12.7-28.3-28.4S148.1,373.231,163.8,373.231z M144.8,290.931l-23.9-87.4l-21.3-76.8 h334.9l-43.3,162.6c-2.4,9.3-10.7,15.8-20.3,16H164C155.3,304.831,147.7,299.231,144.8,290.931z"
                      fill="#000000"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="product-item-detail">
                <div class="product-item-detail-info">
                  <span class="product-item-detail-info-vendor">
                    <a href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                      F1GENZ
                    </a>
                  </span>
                  <span class="product-item-detail-info-tag">F1GENZMall</span>
                </div>
                <h3 class="product-item-detail-name">
                  <a href="/ban-an-4-chan-gia-dinh-cao-cap" title="Bàn ăn 4 chân gia đình cao cấp">
                    Bàn ăn 4 chân gia đình cao cấp
                  </a>
                </h3>
                <div class="product-item-detail-price">
                  <span>23.690.000₫</span>
                  <del>25.900.000₫</del>
                </div>
              </div>
            </div>
          </div>
          <div class="product-item" data-id="87903043" data-handle="ban-an-da-thieu-ket">
            <div class="product-item-wrap">
              <div class="product-item-image hasThumbs hasThumbsIcon">
                <span class="product-item-discount">-5%</span>
                <a class="product-item-link" href="/ban-an-da-thieu-ket" title="Bàn ăn đá thiêu kết">
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/1-1aecf2e2a39a4f6f98a7841f0083c10a-5397b58f672b4090989562633ffbb294.png?v=1683881096573"
                    alt="Bàn ăn đá thiêu kết"
                  />
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/2-35fdcb2d1a56422bb7616496873d6ca8-a22e728de7f243ef89e3c3f13f67682a.png?v=1683881096573"
                    alt="Bàn ăn đá thiêu kết"
                  />
                </a>
                <ul class="product-item-thumbs">
                  <li>
                    <a href="/ban-an-da-thieu-ket" title="Bàn ăn đá thiêu kết">
                      <img
                        class="w-auto ls-is-cached lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-35fdcb2d1a56422bb7616496873d6ca8-a22e728de7f243ef89e3c3f13f67682a.png?v=1683881096573"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-35fdcb2d1a56422bb7616496873d6ca8-a22e728de7f243ef89e3c3f13f67682a.png?v=1683881096573"
                        alt="Bàn ăn đá thiêu kết"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ban-an-da-thieu-ket" title="Bàn ăn đá thiêu kết">
                      <img
                        class="w-auto ls-is-cached lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-cb2e0b0bf72040be86a0bff9ff06be41-b3664e3f5d5d4af996e239e6d74544b8.png?v=1683881096573"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-cb2e0b0bf72040be86a0bff9ff06be41-b3664e3f5d5d4af996e239e6d74544b8.png?v=1683881096573"
                        alt="Bàn ăn đá thiêu kết"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ban-an-da-thieu-ket" title="Bàn ăn đá thiêu kết">
                      <img
                        class="w-auto ls-is-cached lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-b821173d805e4da48e575a7d8c8a1315-175f4a9b1e9041e68070c0245703bb92.png?v=1683881096573"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-b821173d805e4da48e575a7d8c8a1315-175f4a9b1e9041e68070c0245703bb92.png?v=1683881096573"
                        alt="Bàn ăn đá thiêu kết"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-item-action">
                <button
                  type="button"
                  title="Yêu thích"
                  class="shop-wishlist-button-add"
                  data-type="shop-wishlist-button-add"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
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
                </button>
                <button type="button" title="Xem nhanh" class="shop-quickview-button" data-type="shop-quickview-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 612.01 612.01"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0 C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586 l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8 c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407 S377.82,467.8,257.493,467.8z"
                      fill="#000000"
                      data-original="#000000"
                      class=""
                    ></path>
                  </svg>
                </button>
                <button type="button" title="Thêm vào giỏ" class="shop-addLoop-button" data-type="shop-addLoop-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 459.361 459.361"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M371.2,325.731c19.1-0.2,35.8-13.1,40.7-31.6l47.1-175.4c1.5-5.7-1.8-11.5-7.5-13.1c-0.9-0.2-1.8-0.4-2.7-0.4H94.5 l-24.1-89c-1.2-4.6-5.4-7.9-10.2-7.9H0v21.3h51.8l23.3,87c-0.1,0.7-0.1,1.4,0,2.1l48,176c0.3,1.4,0.8,2.9,1.3,4.3l16.2,59 c-15.6,8.3-26.2,24.7-26.2,43.6c0,27.3,22.1,49.4,49.4,49.4c27.3,0,49.4-22.1,49.4-49.4c0-8.5-2.2-16.6-6-23.6 c-0.9-1.6-1.8-3.2-2.9-4.8H330c-5.6,8-9,17.8-9,28.4c0,27.3,22.1,49.4,49.4,49.4s49.4-22.1,49.4-49.4c0-12.9-4.9-24.6-13-33.4 c-8.7-9.9-21.5-16.2-35.8-16.3H161.9l-7.5-27.5c3.2,0.8,6.5,1.3,9.8,1.3H371.2z M370.5,373.231c15.7,0,28.4,12.7,28.4,28.4 s-12.7,28.4-28.4,28.4c-15.7,0-28.4-12.7-28.4-28.4S354.8,373.231,370.5,373.231z M163.8,373.231c15.7,0,28.3,12.8,28.3,28.4 c0,15.7-12.7,28.4-28.4,28.4c-15.7,0-28.3-12.7-28.3-28.4S148.1,373.231,163.8,373.231z M144.8,290.931l-23.9-87.4l-21.3-76.8 h334.9l-43.3,162.6c-2.4,9.3-10.7,15.8-20.3,16H164C155.3,304.831,147.7,299.231,144.8,290.931z"
                      fill="#000000"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="product-item-detail">
                <div class="product-item-detail-info">
                  <span class="product-item-detail-info-vendor">
                    <a href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                      F1GENZ
                    </a>
                  </span>
                  <span class="product-item-detail-info-tag">Độc quyền</span>
                </div>
                <h3 class="product-item-detail-name">
                  <a href="/ban-an-da-thieu-ket" title="Bàn ăn đá thiêu kết">
                    Bàn ăn đá thiêu kết
                  </a>
                </h3>
                <div class="product-item-detail-price">
                  <span>21.199.000₫</span>
                  <del>22.390.000₫</del>
                </div>
              </div>
            </div>
          </div>
          <div class="product-item" data-id="87902947" data-handle="ban-an-maeve-cao-cap-tu-f1genz">
            <div class="product-item-wrap">
              <div class="product-item-image hasThumbs hasThumbsIcon">
                <span class="product-item-discount">-7%</span>
                <a
                  class="product-item-link"
                  href="/ban-an-maeve-cao-cap-tu-f1genz"
                  title="Bàn ăn Maeve cao cấp từ F1GENZ"
                >
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/maeve-by-hipvan-maeve-dining-ta-1-01f67cc6e6ae4964a296639f966feb57-3da2d89c1ea74e8b91eccd92df71c367.png?v=1683881092520"
                    alt="Bàn ăn Maeve cao cấp từ F1GENZ"
                  />
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/maeve-by-hipvan-maeve-dining-ta-2-ce3a064301ab4dcead63b6a32723a7f5-3c36c74e2d694ecd8e5fa8af7f905011.png?v=1683881092520"
                    alt="Bàn ăn Maeve cao cấp từ F1GENZ"
                  />
                </a>
                <ul class="product-item-thumbs">
                  <li>
                    <a href="/ban-an-maeve-cao-cap-tu-f1genz" title="Bàn ăn Maeve cao cấp từ F1GENZ">
                      <img
                        class="w-auto ls-is-cached lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/maeve-by-hipvan-maeve-dining-ta-2-ce3a064301ab4dcead63b6a32723a7f5-3c36c74e2d694ecd8e5fa8af7f905011.png?v=1683881092520"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/maeve-by-hipvan-maeve-dining-ta-2-ce3a064301ab4dcead63b6a32723a7f5-3c36c74e2d694ecd8e5fa8af7f905011.png?v=1683881092520"
                        alt="Bàn ăn Maeve cao cấp từ F1GENZ"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ban-an-maeve-cao-cap-tu-f1genz" title="Bàn ăn Maeve cao cấp từ F1GENZ">
                      <img
                        class="w-auto ls-is-cached lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/maeve-by-hipvan-maeve-dining-ta-3-6739baa0d90e4f3db56eec522b435869-0c4f666927534955991a8e99dd77bba0.png?v=1683881092520"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/maeve-by-hipvan-maeve-dining-ta-3-6739baa0d90e4f3db56eec522b435869-0c4f666927534955991a8e99dd77bba0.png?v=1683881092520"
                        alt="Bàn ăn Maeve cao cấp từ F1GENZ"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ban-an-maeve-cao-cap-tu-f1genz" title="Bàn ăn Maeve cao cấp từ F1GENZ">
                      <img
                        class="w-auto ls-is-cached lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/maeve-by-hipvan-maeve-dining-ta-4-3af961a1466548c6b6b8d67182eb35aa-8bb284e0da06405fae6ee482c3575533.png?v=1683881092520"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/maeve-by-hipvan-maeve-dining-ta-4-3af961a1466548c6b6b8d67182eb35aa-8bb284e0da06405fae6ee482c3575533.png?v=1683881092520"
                        alt="Bàn ăn Maeve cao cấp từ F1GENZ"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-item-action">
                <button
                  type="button"
                  title="Yêu thích"
                  class="shop-wishlist-button-add"
                  data-type="shop-wishlist-button-add"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
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
                </button>
                <button type="button" title="Xem nhanh" class="shop-quickview-button" data-type="shop-quickview-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 612.01 612.01"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0 C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586 l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8 c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407 S377.82,467.8,257.493,467.8z"
                      fill="#000000"
                      data-original="#000000"
                      class=""
                    ></path>
                  </svg>
                </button>
                <button type="button" title="Thêm vào giỏ" class="shop-addLoop-button" data-type="shop-addLoop-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 459.361 459.361"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M371.2,325.731c19.1-0.2,35.8-13.1,40.7-31.6l47.1-175.4c1.5-5.7-1.8-11.5-7.5-13.1c-0.9-0.2-1.8-0.4-2.7-0.4H94.5 l-24.1-89c-1.2-4.6-5.4-7.9-10.2-7.9H0v21.3h51.8l23.3,87c-0.1,0.7-0.1,1.4,0,2.1l48,176c0.3,1.4,0.8,2.9,1.3,4.3l16.2,59 c-15.6,8.3-26.2,24.7-26.2,43.6c0,27.3,22.1,49.4,49.4,49.4c27.3,0,49.4-22.1,49.4-49.4c0-8.5-2.2-16.6-6-23.6 c-0.9-1.6-1.8-3.2-2.9-4.8H330c-5.6,8-9,17.8-9,28.4c0,27.3,22.1,49.4,49.4,49.4s49.4-22.1,49.4-49.4c0-12.9-4.9-24.6-13-33.4 c-8.7-9.9-21.5-16.2-35.8-16.3H161.9l-7.5-27.5c3.2,0.8,6.5,1.3,9.8,1.3H371.2z M370.5,373.231c15.7,0,28.4,12.7,28.4,28.4 s-12.7,28.4-28.4,28.4c-15.7,0-28.4-12.7-28.4-28.4S354.8,373.231,370.5,373.231z M163.8,373.231c15.7,0,28.3,12.8,28.3,28.4 c0,15.7-12.7,28.4-28.4,28.4c-15.7,0-28.3-12.7-28.3-28.4S148.1,373.231,163.8,373.231z M144.8,290.931l-23.9-87.4l-21.3-76.8 h334.9l-43.3,162.6c-2.4,9.3-10.7,15.8-20.3,16H164C155.3,304.831,147.7,299.231,144.8,290.931z"
                      fill="#000000"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="product-item-detail">
                <div class="product-item-detail-info">
                  <span class="product-item-detail-info-vendor">
                    <a href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                      F1GENZ
                    </a>
                  </span>
                  <span class="product-item-detail-info-tag">Quà tặng</span>
                </div>
                <h3 class="product-item-detail-name">
                  <a href="/ban-an-maeve-cao-cap-tu-f1genz" title="Bàn ăn Maeve cao cấp từ F1GENZ">
                    Bàn ăn Maeve cao cấp từ F1GENZ
                  </a>
                </h3>
                <div class="product-item-detail-price">
                  <span>25.900.000₫</span>
                  <del>27.950.000₫</del>
                </div>
              </div>
            </div>
          </div>
          <div class="product-item" data-id="87902799" data-handle="ban-an-mo-rong-f1genz-cao-cap-2">
            <div class="product-item-wrap">
              <div class="product-item-image hasThumbs hasThumbsIcon">
                <span class="product-item-discount">-7%</span>
                <a
                  class="product-item-link"
                  href="/ban-an-mo-rong-f1genz-cao-cap-2"
                  title="Bàn ăn mở rộng F1GENZ cao cấp"
                >
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/1-75b2434091ac4e47a0b4e33fdadf5885-71435115a0824f2abf40e3c4a4906a90.png?v=1683881085973"
                    alt="Bàn ăn mở rộng F1GENZ cao cấp"
                  />
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/19-739ed517f1464e84bbd449eabf9a54f5-a966afaa39074e0cb24a8eff19d0f816.png?v=1683881085973"
                    alt="Bàn ăn mở rộng F1GENZ cao cấp"
                  />
                </a>
                <ul class="product-item-thumbs">
                  <li>
                    <a href="/ban-an-mo-rong-f1genz-cao-cap-2" title="Bàn ăn mở rộng F1GENZ cao cấp">
                      <img
                        class="w-auto ls-is-cached lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/19-739ed517f1464e84bbd449eabf9a54f5-a966afaa39074e0cb24a8eff19d0f816.png?v=1683881085973"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/19-739ed517f1464e84bbd449eabf9a54f5-a966afaa39074e0cb24a8eff19d0f816.png?v=1683881085973"
                        alt="Bàn ăn mở rộng F1GENZ cao cấp"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ban-an-mo-rong-f1genz-cao-cap-2" title="Bàn ăn mở rộng F1GENZ cao cấp">
                      <img
                        class="w-auto ls-is-cached lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/18-e7ca767a40db483cbc77ab57bed894ca-19052961ba6e4520a017bf6b2ab7ecdf.png?v=1683881085973"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/18-e7ca767a40db483cbc77ab57bed894ca-19052961ba6e4520a017bf6b2ab7ecdf.png?v=1683881085973"
                        alt="Bàn ăn mở rộng F1GENZ cao cấp"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ban-an-mo-rong-f1genz-cao-cap-2" title="Bàn ăn mở rộng F1GENZ cao cấp">
                      <img
                        class="w-auto ls-is-cached lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/17-37f60f791ec145fa80b9cc0fad5fbde9-190442e64e72435290d239a3e30cd5fc.png?v=1683881085973"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/17-37f60f791ec145fa80b9cc0fad5fbde9-190442e64e72435290d239a3e30cd5fc.png?v=1683881085973"
                        alt="Bàn ăn mở rộng F1GENZ cao cấp"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-item-action">
                <button
                  type="button"
                  title="Yêu thích"
                  class="shop-wishlist-button-add"
                  data-type="shop-wishlist-button-add"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
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
                </button>
                <button type="button" title="Xem nhanh" class="shop-quickview-button" data-type="shop-quickview-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 612.01 612.01"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0 C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586 l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8 c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407 S377.82,467.8,257.493,467.8z"
                      fill="#000000"
                      data-original="#000000"
                      class=""
                    ></path>
                  </svg>
                </button>
                <button type="button" title="Thêm vào giỏ" class="shop-addLoop-button" data-type="shop-addLoop-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 459.361 459.361"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M371.2,325.731c19.1-0.2,35.8-13.1,40.7-31.6l47.1-175.4c1.5-5.7-1.8-11.5-7.5-13.1c-0.9-0.2-1.8-0.4-2.7-0.4H94.5 l-24.1-89c-1.2-4.6-5.4-7.9-10.2-7.9H0v21.3h51.8l23.3,87c-0.1,0.7-0.1,1.4,0,2.1l48,176c0.3,1.4,0.8,2.9,1.3,4.3l16.2,59 c-15.6,8.3-26.2,24.7-26.2,43.6c0,27.3,22.1,49.4,49.4,49.4c27.3,0,49.4-22.1,49.4-49.4c0-8.5-2.2-16.6-6-23.6 c-0.9-1.6-1.8-3.2-2.9-4.8H330c-5.6,8-9,17.8-9,28.4c0,27.3,22.1,49.4,49.4,49.4s49.4-22.1,49.4-49.4c0-12.9-4.9-24.6-13-33.4 c-8.7-9.9-21.5-16.2-35.8-16.3H161.9l-7.5-27.5c3.2,0.8,6.5,1.3,9.8,1.3H371.2z M370.5,373.231c15.7,0,28.4,12.7,28.4,28.4 s-12.7,28.4-28.4,28.4c-15.7,0-28.4-12.7-28.4-28.4S354.8,373.231,370.5,373.231z M163.8,373.231c15.7,0,28.3,12.8,28.3,28.4 c0,15.7-12.7,28.4-28.4,28.4c-15.7,0-28.3-12.7-28.3-28.4S148.1,373.231,163.8,373.231z M144.8,290.931l-23.9-87.4l-21.3-76.8 h334.9l-43.3,162.6c-2.4,9.3-10.7,15.8-20.3,16H164C155.3,304.831,147.7,299.231,144.8,290.931z"
                      fill="#000000"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="product-item-detail">
                <div class="product-item-detail-info">
                  <span class="product-item-detail-info-vendor">
                    <a href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                      F1GENZ
                    </a>
                  </span>
                  <span class="product-item-detail-info-tag">Freeship</span>
                </div>
                <h3 class="product-item-detail-name">
                  <a href="/ban-an-mo-rong-f1genz-cao-cap-2" title="Bàn ăn mở rộng F1GENZ cao cấp">
                    Bàn ăn mở rộng F1GENZ cao cấp
                  </a>
                </h3>
                <div class="product-item-detail-price">
                  <span>17.590.000₫</span>
                  <del>18.900.000₫</del>
                </div>
              </div>
            </div>
          </div>
          <div class="product-item" data-id="87902553" data-handle="ban-go-cao-cap-4-chan-haynes">
            <div class="product-item-wrap">
              <div class="product-item-image hasThumbs hasThumbsIcon">
                <span class="product-item-discount">-10%</span>
                <a class="product-item-link" href="/ban-go-cao-cap-4-chan-haynes" title="Bàn gỗ cao cấp 4 chân Haynes">
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/malmo-haynes-table-2-2m-oak-10-a3166bf52c7447e1ac35c7cf0d932dfe-23bd6bda876d431f99a2f7dade596cf3.png?v=1683881074473"
                    alt="Bàn gỗ cao cấp 4 chân Haynes"
                  />
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/haynes-side-eb449953bc504af8b229608740009e1e-09179b37ea52432db6dd468dabf180f9.png?v=1683881074473"
                    alt="Bàn gỗ cao cấp 4 chân Haynes"
                  />
                </a>
                <ul class="product-item-thumbs">
                  <li>
                    <a href="/ban-go-cao-cap-4-chan-haynes" title="Bàn gỗ cao cấp 4 chân Haynes">
                      <img
                        class="w-auto ls-is-cached lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/haynes-side-eb449953bc504af8b229608740009e1e-09179b37ea52432db6dd468dabf180f9.png?v=1683881074473"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/haynes-side-eb449953bc504af8b229608740009e1e-09179b37ea52432db6dd468dabf180f9.png?v=1683881074473"
                        alt="Bàn gỗ cao cấp 4 chân Haynes"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ban-go-cao-cap-4-chan-haynes" title="Bàn gỗ cao cấp 4 chân Haynes">
                      <img
                        class="w-auto ls-is-cached lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/malmo-haynes-dining-table-2-2m-be65aabfe43044e884378e92218e3c5e-eb7ee8203cd64481899adf4ab7f27409.png?v=1683881074473"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/malmo-haynes-dining-table-2-2m-be65aabfe43044e884378e92218e3c5e-eb7ee8203cd64481899adf4ab7f27409.png?v=1683881074473"
                        alt="Bàn gỗ cao cấp 4 chân Haynes"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ban-go-cao-cap-4-chan-haynes" title="Bàn gỗ cao cấp 4 chân Haynes">
                      <img
                        class="w-auto ls-is-cached lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/malmo-haynes-table-2-2m-oak-12-18ed7eae350d480d82e1668434bd338c-22496ecb81a74e6d9d4ec2cadcd941f4.png?v=1683881074473"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/malmo-haynes-table-2-2m-oak-12-18ed7eae350d480d82e1668434bd338c-22496ecb81a74e6d9d4ec2cadcd941f4.png?v=1683881074473"
                        alt="Bàn gỗ cao cấp 4 chân Haynes"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-item-action">
                <button
                  type="button"
                  title="Yêu thích"
                  class="shop-wishlist-button-add"
                  data-type="shop-wishlist-button-add"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
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
                </button>
                <button type="button" title="Xem nhanh" class="shop-quickview-button" data-type="shop-quickview-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 612.01 612.01"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0 C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586 l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8 c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407 S377.82,467.8,257.493,467.8z"
                      fill="#000000"
                      data-original="#000000"
                      class=""
                    ></path>
                  </svg>
                </button>
                <button type="button" title="Thêm vào giỏ" class="shop-addLoop-button" data-type="shop-addLoop-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 459.361 459.361"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M371.2,325.731c19.1-0.2,35.8-13.1,40.7-31.6l47.1-175.4c1.5-5.7-1.8-11.5-7.5-13.1c-0.9-0.2-1.8-0.4-2.7-0.4H94.5 l-24.1-89c-1.2-4.6-5.4-7.9-10.2-7.9H0v21.3h51.8l23.3,87c-0.1,0.7-0.1,1.4,0,2.1l48,176c0.3,1.4,0.8,2.9,1.3,4.3l16.2,59 c-15.6,8.3-26.2,24.7-26.2,43.6c0,27.3,22.1,49.4,49.4,49.4c27.3,0,49.4-22.1,49.4-49.4c0-8.5-2.2-16.6-6-23.6 c-0.9-1.6-1.8-3.2-2.9-4.8H330c-5.6,8-9,17.8-9,28.4c0,27.3,22.1,49.4,49.4,49.4s49.4-22.1,49.4-49.4c0-12.9-4.9-24.6-13-33.4 c-8.7-9.9-21.5-16.2-35.8-16.3H161.9l-7.5-27.5c3.2,0.8,6.5,1.3,9.8,1.3H371.2z M370.5,373.231c15.7,0,28.4,12.7,28.4,28.4 s-12.7,28.4-28.4,28.4c-15.7,0-28.4-12.7-28.4-28.4S354.8,373.231,370.5,373.231z M163.8,373.231c15.7,0,28.3,12.8,28.3,28.4 c0,15.7-12.7,28.4-28.4,28.4c-15.7,0-28.3-12.7-28.3-28.4S148.1,373.231,163.8,373.231z M144.8,290.931l-23.9-87.4l-21.3-76.8 h334.9l-43.3,162.6c-2.4,9.3-10.7,15.8-20.3,16H164C155.3,304.831,147.7,299.231,144.8,290.931z"
                      fill="#000000"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="product-item-detail">
                <div class="product-item-detail-info">
                  <span class="product-item-detail-info-vendor">
                    <a href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                      F1GENZ
                    </a>
                  </span>
                  <span class="product-item-detail-info-tag">Giá tốt</span>
                </div>
                <h3 class="product-item-detail-name">
                  <a href="/ban-go-cao-cap-4-chan-haynes" title="Bàn gỗ cao cấp 4 chân Haynes">
                    Bàn gỗ cao cấp 4 chân Haynes
                  </a>
                </h3>
                <div class="product-item-detail-price">
                  <span>17.900.000₫</span>
                  <del>19.890.000₫</del>
                </div>
              </div>
            </div>
          </div>
          <div class="product-item" data-id="87902429" data-handle="den-ban-cao-cap-f1genz">
            <div class="product-item-wrap">
              <div class="product-item-image hasThumbs hasThumbsIcon">
                <span class="product-item-discount">-13%</span>
                <a class="product-item-link" href="/den-ban-cao-cap-f1genz" title="Đèn bàn cao cấp F1GENZ">
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/1-88a5914f173a452384a997ee258d23db-2e585f9a3c514f8790f580c7d75f4314.png?v=1683881068243"
                    alt="Đèn bàn cao cấp F1GENZ"
                  />
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/2-cd3711d9836f4b33b5b4e92f6c5ac719-7e2f8801668b4c4d8ed4825847b2f230.png?v=1683881068243"
                    alt="Đèn bàn cao cấp F1GENZ"
                  />
                </a>
                <ul class="product-item-thumbs">
                  <li>
                    <a href="/den-ban-cao-cap-f1genz" title="Đèn bàn cao cấp F1GENZ">
                      <img
                        class="w-auto ls-is-cached lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-cd3711d9836f4b33b5b4e92f6c5ac719-7e2f8801668b4c4d8ed4825847b2f230.png?v=1683881068243"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-cd3711d9836f4b33b5b4e92f6c5ac719-7e2f8801668b4c4d8ed4825847b2f230.png?v=1683881068243"
                        alt="Đèn bàn cao cấp F1GENZ"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/den-ban-cao-cap-f1genz" title="Đèn bàn cao cấp F1GENZ">
                      <img
                        class="w-auto ls-is-cached lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-ebcca6a30c3742459452eded51d6a594-7de5957af9b74ad18103e8404f80f3b7.png?v=1683881068243"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-ebcca6a30c3742459452eded51d6a594-7de5957af9b74ad18103e8404f80f3b7.png?v=1683881068243"
                        alt="Đèn bàn cao cấp F1GENZ"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/den-ban-cao-cap-f1genz" title="Đèn bàn cao cấp F1GENZ">
                      <img
                        class="w-auto ls-is-cached lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-e7f3a6a5607f46c9b083eea2ee27c4e7-5e041b6dd8384f97beb0d099e25121b5.png?v=1683881068243"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-e7f3a6a5607f46c9b083eea2ee27c4e7-5e041b6dd8384f97beb0d099e25121b5.png?v=1683881068243"
                        alt="Đèn bàn cao cấp F1GENZ"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-item-action">
                <button
                  type="button"
                  title="Yêu thích"
                  class="shop-wishlist-button-add"
                  data-type="shop-wishlist-button-add"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
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
                </button>
                <button type="button" title="Xem nhanh" class="shop-quickview-button" data-type="shop-quickview-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 612.01 612.01"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0 C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586 l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8 c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407 S377.82,467.8,257.493,467.8z"
                      fill="#000000"
                      data-original="#000000"
                      class=""
                    ></path>
                  </svg>
                </button>
                <button type="button" title="Thêm vào giỏ" class="shop-addLoop-button" data-type="shop-addLoop-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 459.361 459.361"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M371.2,325.731c19.1-0.2,35.8-13.1,40.7-31.6l47.1-175.4c1.5-5.7-1.8-11.5-7.5-13.1c-0.9-0.2-1.8-0.4-2.7-0.4H94.5 l-24.1-89c-1.2-4.6-5.4-7.9-10.2-7.9H0v21.3h51.8l23.3,87c-0.1,0.7-0.1,1.4,0,2.1l48,176c0.3,1.4,0.8,2.9,1.3,4.3l16.2,59 c-15.6,8.3-26.2,24.7-26.2,43.6c0,27.3,22.1,49.4,49.4,49.4c27.3,0,49.4-22.1,49.4-49.4c0-8.5-2.2-16.6-6-23.6 c-0.9-1.6-1.8-3.2-2.9-4.8H330c-5.6,8-9,17.8-9,28.4c0,27.3,22.1,49.4,49.4,49.4s49.4-22.1,49.4-49.4c0-12.9-4.9-24.6-13-33.4 c-8.7-9.9-21.5-16.2-35.8-16.3H161.9l-7.5-27.5c3.2,0.8,6.5,1.3,9.8,1.3H371.2z M370.5,373.231c15.7,0,28.4,12.7,28.4,28.4 s-12.7,28.4-28.4,28.4c-15.7,0-28.4-12.7-28.4-28.4S354.8,373.231,370.5,373.231z M163.8,373.231c15.7,0,28.3,12.8,28.3,28.4 c0,15.7-12.7,28.4-28.4,28.4c-15.7,0-28.3-12.7-28.3-28.4S148.1,373.231,163.8,373.231z M144.8,290.931l-23.9-87.4l-21.3-76.8 h334.9l-43.3,162.6c-2.4,9.3-10.7,15.8-20.3,16H164C155.3,304.831,147.7,299.231,144.8,290.931z"
                      fill="#000000"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="product-item-detail">
                <div class="product-item-detail-info">
                  <span class="product-item-detail-info-vendor">
                    <a href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                      F1GENZ
                    </a>
                  </span>
                  <span class="product-item-detail-info-tag">Hot</span>
                </div>
                <h3 class="product-item-detail-name">
                  <a href="/den-ban-cao-cap-f1genz" title="Đèn bàn cao cấp F1GENZ">
                    Đèn bàn cao cấp F1GENZ
                  </a>
                </h3>
                <div class="product-item-detail-price">
                  <span>1.290.000₫</span>
                  <del>1.490.000₫</del>
                </div>
              </div>
            </div>
          </div>
          <div class="product-item" data-id="87902340" data-handle="den-ban-dong-thau-cao-cap">
            <div class="product-item-wrap">
              <div class="product-item-image hasThumbs hasThumbsIcon">
                <span class="product-item-discount">-12%</span>
                <a class="product-item-link" href="/den-ban-dong-thau-cao-cap" title="Đèn bàn đồng thau cao cấp">
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/1-8dbf7792d23e476d917d0f58963d51e6-e70389703abc4a33992abae4d772a574.png?v=1683881064127"
                    alt="Đèn bàn đồng thau cao cấp"
                  />
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/2-aad7314dc7794b41a78ef833aaef1af6-4e5651bd0c7f496f9f2a0526a9585b99.png?v=1683881064127"
                    alt="Đèn bàn đồng thau cao cấp"
                  />
                </a>
                <ul class="product-item-thumbs">
                  <li>
                    <a href="/den-ban-dong-thau-cao-cap" title="Đèn bàn đồng thau cao cấp">
                      <img
                        class="w-auto ls-is-cached lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-aad7314dc7794b41a78ef833aaef1af6-4e5651bd0c7f496f9f2a0526a9585b99.png?v=1683881064127"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-aad7314dc7794b41a78ef833aaef1af6-4e5651bd0c7f496f9f2a0526a9585b99.png?v=1683881064127"
                        alt="Đèn bàn đồng thau cao cấp"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/den-ban-dong-thau-cao-cap" title="Đèn bàn đồng thau cao cấp">
                      <img
                        class="w-auto ls-is-cached lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-72abc83bb4b94056ae969535931094d4-f989b7583f9e484690d84ac9a5810148.png?v=1683881064127"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-72abc83bb4b94056ae969535931094d4-f989b7583f9e484690d84ac9a5810148.png?v=1683881064127"
                        alt="Đèn bàn đồng thau cao cấp"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/den-ban-dong-thau-cao-cap" title="Đèn bàn đồng thau cao cấp">
                      <img
                        class="w-auto ls-is-cached lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-8f6a82fbd4ae41ff827599f4ce98afe8-1f4c8c394797400784fde34e7133c5f5.png?v=1683881064127"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-8f6a82fbd4ae41ff827599f4ce98afe8-1f4c8c394797400784fde34e7133c5f5.png?v=1683881064127"
                        alt="Đèn bàn đồng thau cao cấp"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-item-action">
                <button
                  type="button"
                  title="Yêu thích"
                  class="shop-wishlist-button-add"
                  data-type="shop-wishlist-button-add"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
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
                </button>
                <button type="button" title="Xem nhanh" class="shop-quickview-button" data-type="shop-quickview-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 612.01 612.01"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0 C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586 l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8 c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407 S377.82,467.8,257.493,467.8z"
                      fill="#000000"
                      data-original="#000000"
                      class=""
                    ></path>
                  </svg>
                </button>
                <button type="button" title="Thêm vào giỏ" class="shop-addLoop-button" data-type="shop-addLoop-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 459.361 459.361"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M371.2,325.731c19.1-0.2,35.8-13.1,40.7-31.6l47.1-175.4c1.5-5.7-1.8-11.5-7.5-13.1c-0.9-0.2-1.8-0.4-2.7-0.4H94.5 l-24.1-89c-1.2-4.6-5.4-7.9-10.2-7.9H0v21.3h51.8l23.3,87c-0.1,0.7-0.1,1.4,0,2.1l48,176c0.3,1.4,0.8,2.9,1.3,4.3l16.2,59 c-15.6,8.3-26.2,24.7-26.2,43.6c0,27.3,22.1,49.4,49.4,49.4c27.3,0,49.4-22.1,49.4-49.4c0-8.5-2.2-16.6-6-23.6 c-0.9-1.6-1.8-3.2-2.9-4.8H330c-5.6,8-9,17.8-9,28.4c0,27.3,22.1,49.4,49.4,49.4s49.4-22.1,49.4-49.4c0-12.9-4.9-24.6-13-33.4 c-8.7-9.9-21.5-16.2-35.8-16.3H161.9l-7.5-27.5c3.2,0.8,6.5,1.3,9.8,1.3H371.2z M370.5,373.231c15.7,0,28.4,12.7,28.4,28.4 s-12.7,28.4-28.4,28.4c-15.7,0-28.4-12.7-28.4-28.4S354.8,373.231,370.5,373.231z M163.8,373.231c15.7,0,28.3,12.8,28.3,28.4 c0,15.7-12.7,28.4-28.4,28.4c-15.7,0-28.3-12.7-28.3-28.4S148.1,373.231,163.8,373.231z M144.8,290.931l-23.9-87.4l-21.3-76.8 h334.9l-43.3,162.6c-2.4,9.3-10.7,15.8-20.3,16H164C155.3,304.831,147.7,299.231,144.8,290.931z"
                      fill="#000000"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="product-item-detail">
                <div class="product-item-detail-info">
                  <span class="product-item-detail-info-vendor">
                    <a href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                      F1GENZ
                    </a>
                  </span>
                  <span class="product-item-detail-info-tag">Freeship</span>
                </div>
                <h3 class="product-item-detail-name">
                  <a href="/den-ban-dong-thau-cao-cap" title="Đèn bàn đồng thau cao cấp">
                    Đèn bàn đồng thau cao cấp
                  </a>
                </h3>
                <div class="product-item-detail-price">
                  <span>2.819.000₫</span>
                  <del>3.199.000₫</del>
                </div>
              </div>
            </div>
          </div>
          <div class="product-item" data-id="87902289" data-handle="den-ban-pooping-dog-f1genz">
            <div class="product-item-wrap">
              <div class="product-item-image hasThumbs hasThumbsIcon">
                <span class="product-item-discount">-7%</span>
                <a class="product-item-link" href="/den-ban-pooping-dog-f1genz" title="Đèn bàn Pooping Dog F1GENZ">
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/1-d8b7d0d1c773449bbbba8abe74a0157d-4147d239898a4b8a80b8bfa51847c0e6.png?v=1683881061000"
                    alt="Đèn bàn Pooping Dog F1GENZ"
                  />
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/2-7c4a4e6dcc8b49098540d50ce3a89735-44c31c5b7bd441c28fc613395abe6ab8.png?v=1683881061000"
                    alt="Đèn bàn Pooping Dog F1GENZ"
                  />
                </a>
                <ul class="product-item-thumbs">
                  <li>
                    <a href="/den-ban-pooping-dog-f1genz" title="Đèn bàn Pooping Dog F1GENZ">
                      <img
                        class="w-auto ls-is-cached lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-7c4a4e6dcc8b49098540d50ce3a89735-44c31c5b7bd441c28fc613395abe6ab8.png?v=1683881061000"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-7c4a4e6dcc8b49098540d50ce3a89735-44c31c5b7bd441c28fc613395abe6ab8.png?v=1683881061000"
                        alt="Đèn bàn Pooping Dog F1GENZ"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/den-ban-pooping-dog-f1genz" title="Đèn bàn Pooping Dog F1GENZ">
                      <img
                        class="w-auto ls-is-cached lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-cc67f0197e6e40a994a9cbd3514ac16d-b52bf8ecb7e64cefb1035aae24b5782b.png?v=1683881061000"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-cc67f0197e6e40a994a9cbd3514ac16d-b52bf8ecb7e64cefb1035aae24b5782b.png?v=1683881061000"
                        alt="Đèn bàn Pooping Dog F1GENZ"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/den-ban-pooping-dog-f1genz" title="Đèn bàn Pooping Dog F1GENZ">
                      <img
                        class="w-auto ls-is-cached lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-cdaf861c82424286b5a54a87a0d73921-682d7309c8e8442f9961c87d8307debf.png?v=1683881061000"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-cdaf861c82424286b5a54a87a0d73921-682d7309c8e8442f9961c87d8307debf.png?v=1683881061000"
                        alt="Đèn bàn Pooping Dog F1GENZ"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-item-action">
                <button
                  type="button"
                  title="Yêu thích"
                  class="shop-wishlist-button-add"
                  data-type="shop-wishlist-button-add"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
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
                </button>
                <button type="button" title="Xem nhanh" class="shop-quickview-button" data-type="shop-quickview-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 612.01 612.01"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0 C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586 l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8 c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407 S377.82,467.8,257.493,467.8z"
                      fill="#000000"
                      data-original="#000000"
                      class=""
                    ></path>
                  </svg>
                </button>
                <button type="button" title="Thêm vào giỏ" class="shop-addLoop-button" data-type="shop-addLoop-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 459.361 459.361"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M371.2,325.731c19.1-0.2,35.8-13.1,40.7-31.6l47.1-175.4c1.5-5.7-1.8-11.5-7.5-13.1c-0.9-0.2-1.8-0.4-2.7-0.4H94.5 l-24.1-89c-1.2-4.6-5.4-7.9-10.2-7.9H0v21.3h51.8l23.3,87c-0.1,0.7-0.1,1.4,0,2.1l48,176c0.3,1.4,0.8,2.9,1.3,4.3l16.2,59 c-15.6,8.3-26.2,24.7-26.2,43.6c0,27.3,22.1,49.4,49.4,49.4c27.3,0,49.4-22.1,49.4-49.4c0-8.5-2.2-16.6-6-23.6 c-0.9-1.6-1.8-3.2-2.9-4.8H330c-5.6,8-9,17.8-9,28.4c0,27.3,22.1,49.4,49.4,49.4s49.4-22.1,49.4-49.4c0-12.9-4.9-24.6-13-33.4 c-8.7-9.9-21.5-16.2-35.8-16.3H161.9l-7.5-27.5c3.2,0.8,6.5,1.3,9.8,1.3H371.2z M370.5,373.231c15.7,0,28.4,12.7,28.4,28.4 s-12.7,28.4-28.4,28.4c-15.7,0-28.4-12.7-28.4-28.4S354.8,373.231,370.5,373.231z M163.8,373.231c15.7,0,28.3,12.8,28.3,28.4 c0,15.7-12.7,28.4-28.4,28.4c-15.7,0-28.3-12.7-28.3-28.4S148.1,373.231,163.8,373.231z M144.8,290.931l-23.9-87.4l-21.3-76.8 h334.9l-43.3,162.6c-2.4,9.3-10.7,15.8-20.3,16H164C155.3,304.831,147.7,299.231,144.8,290.931z"
                      fill="#000000"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="product-item-detail">
                <div class="product-item-detail-info">
                  <span class="product-item-detail-info-vendor">
                    <a href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                      F1GENZ
                    </a>
                  </span>
                  <span class="product-item-detail-info-tag">Flashsale</span>
                </div>
                <h3 class="product-item-detail-name">
                  <a href="/den-ban-pooping-dog-f1genz" title="Đèn bàn Pooping Dog F1GENZ">
                    Đèn bàn Pooping Dog F1GENZ
                  </a>
                </h3>
                <div class="product-item-detail-price">
                  <span>3.529.000₫</span>
                  <del>3.789.000₫</del>
                </div>
              </div>
            </div>
          </div>
          <div class="product-item" data-id="87902188" data-handle="den-san-f1genz-cao-cap">
            <div class="product-item-wrap">
              <div class="product-item-image hasThumbs hasThumbsIcon">
                <span class="product-item-discount">-6%</span>
                <a class="product-item-link" href="/den-san-f1genz-cao-cap" title="Đèn sàn F1GENZ cao cấp">
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/1-d1d27878e84b497282e2c10780ab7d73-202bf7d605a14ee288aa401f9213d668.png?v=1683881056433"
                    alt="Đèn sàn F1GENZ cao cấp"
                  />
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/2-e359d34ae6cf492e9c3d625ca59236fd-f8f9b68097224122a77891c13a171c23.png?v=1683881056433"
                    alt="Đèn sàn F1GENZ cao cấp"
                  />
                </a>
                <ul class="product-item-thumbs">
                  <li>
                    <a href="/den-san-f1genz-cao-cap" title="Đèn sàn F1GENZ cao cấp">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-e359d34ae6cf492e9c3d625ca59236fd-f8f9b68097224122a77891c13a171c23.png?v=1683881056433"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-e359d34ae6cf492e9c3d625ca59236fd-f8f9b68097224122a77891c13a171c23.png?v=1683881056433"
                        alt="Đèn sàn F1GENZ cao cấp"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/den-san-f1genz-cao-cap" title="Đèn sàn F1GENZ cao cấp">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-c9ef801af5954b7f9487225920a38e84-acef636d069048cabb325db6b9c4fe11.png?v=1683881056433"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-c9ef801af5954b7f9487225920a38e84-acef636d069048cabb325db6b9c4fe11.png?v=1683881056433"
                        alt="Đèn sàn F1GENZ cao cấp"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/den-san-f1genz-cao-cap" title="Đèn sàn F1GENZ cao cấp">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/5-2776589ed41b4047a1f75410c514830f-914f81216da340cb84125c046ab63c5f.png?v=1683881056433"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/5-2776589ed41b4047a1f75410c514830f-914f81216da340cb84125c046ab63c5f.png?v=1683881056433"
                        alt="Đèn sàn F1GENZ cao cấp"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-item-action">
                <button
                  type="button"
                  title="Yêu thích"
                  class="shop-wishlist-button-add"
                  data-type="shop-wishlist-button-add"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
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
                </button>
                <button type="button" title="Xem nhanh" class="shop-quickview-button" data-type="shop-quickview-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 612.01 612.01"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0 C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586 l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8 c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407 S377.82,467.8,257.493,467.8z"
                      fill="#000000"
                      data-original="#000000"
                      class=""
                    ></path>
                  </svg>
                </button>
                <button type="button" title="Thêm vào giỏ" class="shop-addLoop-button" data-type="shop-addLoop-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 459.361 459.361"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M371.2,325.731c19.1-0.2,35.8-13.1,40.7-31.6l47.1-175.4c1.5-5.7-1.8-11.5-7.5-13.1c-0.9-0.2-1.8-0.4-2.7-0.4H94.5 l-24.1-89c-1.2-4.6-5.4-7.9-10.2-7.9H0v21.3h51.8l23.3,87c-0.1,0.7-0.1,1.4,0,2.1l48,176c0.3,1.4,0.8,2.9,1.3,4.3l16.2,59 c-15.6,8.3-26.2,24.7-26.2,43.6c0,27.3,22.1,49.4,49.4,49.4c27.3,0,49.4-22.1,49.4-49.4c0-8.5-2.2-16.6-6-23.6 c-0.9-1.6-1.8-3.2-2.9-4.8H330c-5.6,8-9,17.8-9,28.4c0,27.3,22.1,49.4,49.4,49.4s49.4-22.1,49.4-49.4c0-12.9-4.9-24.6-13-33.4 c-8.7-9.9-21.5-16.2-35.8-16.3H161.9l-7.5-27.5c3.2,0.8,6.5,1.3,9.8,1.3H371.2z M370.5,373.231c15.7,0,28.4,12.7,28.4,28.4 s-12.7,28.4-28.4,28.4c-15.7,0-28.4-12.7-28.4-28.4S354.8,373.231,370.5,373.231z M163.8,373.231c15.7,0,28.3,12.8,28.3,28.4 c0,15.7-12.7,28.4-28.4,28.4c-15.7,0-28.3-12.7-28.3-28.4S148.1,373.231,163.8,373.231z M144.8,290.931l-23.9-87.4l-21.3-76.8 h334.9l-43.3,162.6c-2.4,9.3-10.7,15.8-20.3,16H164C155.3,304.831,147.7,299.231,144.8,290.931z"
                      fill="#000000"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="product-item-detail">
                <div class="product-item-detail-info">
                  <span class="product-item-detail-info-vendor">
                    <a href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                      F1GENZ
                    </a>
                  </span>
                  <span class="product-item-detail-info-tag">Best seller</span>
                </div>
                <h3 class="product-item-detail-name">
                  <a href="/den-san-f1genz-cao-cap" title="Đèn sàn F1GENZ cao cấp">
                    Đèn sàn F1GENZ cao cấp
                  </a>
                </h3>
                <div class="product-item-detail-price">
                  <span>4.990.000₫</span>
                  <del>5.290.000₫</del>
                </div>
              </div>
            </div>
          </div>
          <div class="product-item" data-id="87902104" data-handle="den-san-bang-da-cam-thach">
            <div class="product-item-wrap">
              <div class="product-item-image hasThumbs hasThumbsIcon">
                <span class="product-item-discount">-5%</span>
                <a class="product-item-link" href="/den-san-bang-da-cam-thach" title="Đèn sàn bằng đá cẩm thạch">
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/1-8856b3adac2b4c4793969785f43819b9-0fa9e8fa0a684cfeb70140f86ca90c41.png?v=1683881052893"
                    alt="Đèn sàn bằng đá cẩm thạch"
                  />
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/2-67130494f95e49c68ec9466831827a12-9df68d8bfd5e4bae9919cdc1a0516f79.png?v=1683881052893"
                    alt="Đèn sàn bằng đá cẩm thạch"
                  />
                </a>
                <ul class="product-item-thumbs">
                  <li>
                    <a href="/den-san-bang-da-cam-thach" title="Đèn sàn bằng đá cẩm thạch">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-67130494f95e49c68ec9466831827a12-9df68d8bfd5e4bae9919cdc1a0516f79.png?v=1683881052893"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-67130494f95e49c68ec9466831827a12-9df68d8bfd5e4bae9919cdc1a0516f79.png?v=1683881052893"
                        alt="Đèn sàn bằng đá cẩm thạch"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/den-san-bang-da-cam-thach" title="Đèn sàn bằng đá cẩm thạch">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-0a82fbd2ebea4e5daef497271ce48faa-9b49312c42b14dcdbec60f361e641292.png?v=1683881052893"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-0a82fbd2ebea4e5daef497271ce48faa-9b49312c42b14dcdbec60f361e641292.png?v=1683881052893"
                        alt="Đèn sàn bằng đá cẩm thạch"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/den-san-bang-da-cam-thach" title="Đèn sàn bằng đá cẩm thạch">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-f9f1619929b040578c001470414f6737-18a8a4beba1542d093190be53c940ef6.png?v=1683881052893"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-f9f1619929b040578c001470414f6737-18a8a4beba1542d093190be53c940ef6.png?v=1683881052893"
                        alt="Đèn sàn bằng đá cẩm thạch"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-item-action">
                <button
                  type="button"
                  title="Yêu thích"
                  class="shop-wishlist-button-add"
                  data-type="shop-wishlist-button-add"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
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
                </button>
                <button type="button" title="Xem nhanh" class="shop-quickview-button" data-type="shop-quickview-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 612.01 612.01"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0 C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586 l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8 c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407 S377.82,467.8,257.493,467.8z"
                      fill="#000000"
                      data-original="#000000"
                      class=""
                    ></path>
                  </svg>
                </button>
                <button type="button" title="Thêm vào giỏ" class="shop-addLoop-button" data-type="shop-addLoop-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 459.361 459.361"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M371.2,325.731c19.1-0.2,35.8-13.1,40.7-31.6l47.1-175.4c1.5-5.7-1.8-11.5-7.5-13.1c-0.9-0.2-1.8-0.4-2.7-0.4H94.5 l-24.1-89c-1.2-4.6-5.4-7.9-10.2-7.9H0v21.3h51.8l23.3,87c-0.1,0.7-0.1,1.4,0,2.1l48,176c0.3,1.4,0.8,2.9,1.3,4.3l16.2,59 c-15.6,8.3-26.2,24.7-26.2,43.6c0,27.3,22.1,49.4,49.4,49.4c27.3,0,49.4-22.1,49.4-49.4c0-8.5-2.2-16.6-6-23.6 c-0.9-1.6-1.8-3.2-2.9-4.8H330c-5.6,8-9,17.8-9,28.4c0,27.3,22.1,49.4,49.4,49.4s49.4-22.1,49.4-49.4c0-12.9-4.9-24.6-13-33.4 c-8.7-9.9-21.5-16.2-35.8-16.3H161.9l-7.5-27.5c3.2,0.8,6.5,1.3,9.8,1.3H371.2z M370.5,373.231c15.7,0,28.4,12.7,28.4,28.4 s-12.7,28.4-28.4,28.4c-15.7,0-28.4-12.7-28.4-28.4S354.8,373.231,370.5,373.231z M163.8,373.231c15.7,0,28.3,12.8,28.3,28.4 c0,15.7-12.7,28.4-28.4,28.4c-15.7,0-28.3-12.7-28.3-28.4S148.1,373.231,163.8,373.231z M144.8,290.931l-23.9-87.4l-21.3-76.8 h334.9l-43.3,162.6c-2.4,9.3-10.7,15.8-20.3,16H164C155.3,304.831,147.7,299.231,144.8,290.931z"
                      fill="#000000"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="product-item-detail">
                <div class="product-item-detail-info">
                  <span class="product-item-detail-info-vendor">
                    <a href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                      F1GENZ
                    </a>
                  </span>
                  <span class="product-item-detail-info-tag">Trả góp</span>
                </div>
                <h3 class="product-item-detail-name">
                  <a href="/den-san-bang-da-cam-thach" title="Đèn sàn bằng đá cẩm thạch">
                    Đèn sàn bằng đá cẩm thạch
                  </a>
                </h3>
                <div class="product-item-detail-price">
                  <span>3.990.000₫</span>
                  <del>4.190.000₫</del>
                </div>
              </div>
            </div>
          </div>
          <div class="product-item" data-id="87902035" data-handle="den-san-cao-cap-tu-f1genz">
            <div class="product-item-wrap">
              <div class="product-item-image hasThumbs hasThumbsIcon">
                <span class="product-item-discount">-5%</span>
                <a class="product-item-link" href="/den-san-cao-cap-tu-f1genz" title="Đèn sàn cao cấp từ F1GENZ">
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/1-fbd5653f65fb49cfaf9743a7c0d012df-e6bc2bc37bc94eb198fd8dce0620e999.png?v=1683881049763"
                    alt="Đèn sàn cao cấp từ F1GENZ"
                  />
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/2-d22ab689affd4a0382d90631d5e22274-3075bf2e74e04f8a869b15a9ca64b447.png?v=1683881049763"
                    alt="Đèn sàn cao cấp từ F1GENZ"
                  />
                </a>
                <ul class="product-item-thumbs">
                  <li>
                    <a href="/den-san-cao-cap-tu-f1genz" title="Đèn sàn cao cấp từ F1GENZ">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-d22ab689affd4a0382d90631d5e22274-3075bf2e74e04f8a869b15a9ca64b447.png?v=1683881049763"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-d22ab689affd4a0382d90631d5e22274-3075bf2e74e04f8a869b15a9ca64b447.png?v=1683881049763"
                        alt="Đèn sàn cao cấp từ F1GENZ"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/den-san-cao-cap-tu-f1genz" title="Đèn sàn cao cấp từ F1GENZ">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-8a789d53dbfe4a10809d513fcd086a69-8cc818c0b217415d80c9bc2ef9b39da4.png?v=1683881049763"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-8a789d53dbfe4a10809d513fcd086a69-8cc818c0b217415d80c9bc2ef9b39da4.png?v=1683881049763"
                        alt="Đèn sàn cao cấp từ F1GENZ"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/den-san-cao-cap-tu-f1genz" title="Đèn sàn cao cấp từ F1GENZ">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-fb837f9969534af3bf6aa026f2e78f7f-02429989b0f146b780245df15976e67f.png?v=1683881049763"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-fb837f9969534af3bf6aa026f2e78f7f-02429989b0f146b780245df15976e67f.png?v=1683881049763"
                        alt="Đèn sàn cao cấp từ F1GENZ"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-item-action">
                <button
                  type="button"
                  title="Yêu thích"
                  class="shop-wishlist-button-add"
                  data-type="shop-wishlist-button-add"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
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
                </button>
                <button type="button" title="Xem nhanh" class="shop-quickview-button" data-type="shop-quickview-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 612.01 612.01"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0 C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586 l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8 c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407 S377.82,467.8,257.493,467.8z"
                      fill="#000000"
                      data-original="#000000"
                      class=""
                    ></path>
                  </svg>
                </button>
                <button type="button" title="Thêm vào giỏ" class="shop-addLoop-button" data-type="shop-addLoop-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 459.361 459.361"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M371.2,325.731c19.1-0.2,35.8-13.1,40.7-31.6l47.1-175.4c1.5-5.7-1.8-11.5-7.5-13.1c-0.9-0.2-1.8-0.4-2.7-0.4H94.5 l-24.1-89c-1.2-4.6-5.4-7.9-10.2-7.9H0v21.3h51.8l23.3,87c-0.1,0.7-0.1,1.4,0,2.1l48,176c0.3,1.4,0.8,2.9,1.3,4.3l16.2,59 c-15.6,8.3-26.2,24.7-26.2,43.6c0,27.3,22.1,49.4,49.4,49.4c27.3,0,49.4-22.1,49.4-49.4c0-8.5-2.2-16.6-6-23.6 c-0.9-1.6-1.8-3.2-2.9-4.8H330c-5.6,8-9,17.8-9,28.4c0,27.3,22.1,49.4,49.4,49.4s49.4-22.1,49.4-49.4c0-12.9-4.9-24.6-13-33.4 c-8.7-9.9-21.5-16.2-35.8-16.3H161.9l-7.5-27.5c3.2,0.8,6.5,1.3,9.8,1.3H371.2z M370.5,373.231c15.7,0,28.4,12.7,28.4,28.4 s-12.7,28.4-28.4,28.4c-15.7,0-28.4-12.7-28.4-28.4S354.8,373.231,370.5,373.231z M163.8,373.231c15.7,0,28.3,12.8,28.3,28.4 c0,15.7-12.7,28.4-28.4,28.4c-15.7,0-28.3-12.7-28.3-28.4S148.1,373.231,163.8,373.231z M144.8,290.931l-23.9-87.4l-21.3-76.8 h334.9l-43.3,162.6c-2.4,9.3-10.7,15.8-20.3,16H164C155.3,304.831,147.7,299.231,144.8,290.931z"
                      fill="#000000"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="product-item-detail">
                <div class="product-item-detail-info">
                  <span class="product-item-detail-info-vendor">
                    <a href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                      F1GENZ
                    </a>
                  </span>
                  <span class="product-item-detail-info-tag">Độc quyền</span>
                </div>
                <h3 class="product-item-detail-name">
                  <a href="/den-san-cao-cap-tu-f1genz" title="Đèn sàn cao cấp từ F1GENZ">
                    Đèn sàn cao cấp từ F1GENZ
                  </a>
                </h3>
                <div class="product-item-detail-price">
                  <span>3.998.000₫</span>
                  <del>4.210.000₫</del>
                </div>
              </div>
            </div>
          </div>
          <div class="product-item" data-id="87901931" data-handle="ghe-an-4-chan-f1genz-cao-cap-3">
            <div class="product-item-wrap">
              <div class="product-item-image hasThumbs hasThumbsIcon">
                <span class="product-item-discount">-14%</span>
                <a
                  class="product-item-link"
                  href="/ghe-an-4-chan-f1genz-cao-cap-3"
                  title="Ghế ăn 4 chân F1GENZ cao cấp"
                >
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/7-b4c95003f2eb4878addb04eb5ed9c6b0-748ee609e8214151aa2f5f05fdfced27.png?v=1683881045433"
                    alt="Ghế ăn 4 chân F1GENZ cao cấp"
                  />
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/15-ffeec44020454f32834955e517e33291-5a860504da9c457ca4744def64878cab.png?v=1683881045433"
                    alt="Ghế ăn 4 chân F1GENZ cao cấp"
                  />
                </a>
                <ul class="product-item-thumbs">
                  <li>
                    <a href="/ghe-an-4-chan-f1genz-cao-cap-3" title="Ghế ăn 4 chân F1GENZ cao cấp">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/15-ffeec44020454f32834955e517e33291-5a860504da9c457ca4744def64878cab.png?v=1683881045433"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/15-ffeec44020454f32834955e517e33291-5a860504da9c457ca4744def64878cab.png?v=1683881045433"
                        alt="Ghế ăn 4 chân F1GENZ cao cấp"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ghe-an-4-chan-f1genz-cao-cap-3" title="Ghế ăn 4 chân F1GENZ cao cấp">
                      <img
                        class="w-auto ls-is-cached lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/14-92c82ac8d06f478c880f3080d2729c1e-cfa585abcbf24a5291f55bbd10990a00.png?v=1683881045433"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/14-92c82ac8d06f478c880f3080d2729c1e-cfa585abcbf24a5291f55bbd10990a00.png?v=1683881045433"
                        alt="Ghế ăn 4 chân F1GENZ cao cấp"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ghe-an-4-chan-f1genz-cao-cap-3" title="Ghế ăn 4 chân F1GENZ cao cấp">
                      <img
                        class="w-auto ls-is-cached lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/13-b369582020214698bb9cf1850d77a740-cc2b18eb1ad0490cac7b434ab117deab.png?v=1683881045433"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/13-b369582020214698bb9cf1850d77a740-cc2b18eb1ad0490cac7b434ab117deab.png?v=1683881045433"
                        alt="Ghế ăn 4 chân F1GENZ cao cấp"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-item-action">
                <button
                  type="button"
                  title="Yêu thích"
                  class="shop-wishlist-button-add"
                  data-type="shop-wishlist-button-add"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
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
                </button>
                <button type="button" title="Xem nhanh" class="shop-quickview-button" data-type="shop-quickview-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 612.01 612.01"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0 C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586 l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8 c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407 S377.82,467.8,257.493,467.8z"
                      fill="#000000"
                      data-original="#000000"
                      class=""
                    ></path>
                  </svg>
                </button>
                <button type="button" title="Thêm vào giỏ" class="shop-addLoop-button" data-type="shop-addLoop-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 459.361 459.361"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M371.2,325.731c19.1-0.2,35.8-13.1,40.7-31.6l47.1-175.4c1.5-5.7-1.8-11.5-7.5-13.1c-0.9-0.2-1.8-0.4-2.7-0.4H94.5 l-24.1-89c-1.2-4.6-5.4-7.9-10.2-7.9H0v21.3h51.8l23.3,87c-0.1,0.7-0.1,1.4,0,2.1l48,176c0.3,1.4,0.8,2.9,1.3,4.3l16.2,59 c-15.6,8.3-26.2,24.7-26.2,43.6c0,27.3,22.1,49.4,49.4,49.4c27.3,0,49.4-22.1,49.4-49.4c0-8.5-2.2-16.6-6-23.6 c-0.9-1.6-1.8-3.2-2.9-4.8H330c-5.6,8-9,17.8-9,28.4c0,27.3,22.1,49.4,49.4,49.4s49.4-22.1,49.4-49.4c0-12.9-4.9-24.6-13-33.4 c-8.7-9.9-21.5-16.2-35.8-16.3H161.9l-7.5-27.5c3.2,0.8,6.5,1.3,9.8,1.3H371.2z M370.5,373.231c15.7,0,28.4,12.7,28.4,28.4 s-12.7,28.4-28.4,28.4c-15.7,0-28.4-12.7-28.4-28.4S354.8,373.231,370.5,373.231z M163.8,373.231c15.7,0,28.3,12.8,28.3,28.4 c0,15.7-12.7,28.4-28.4,28.4c-15.7,0-28.3-12.7-28.3-28.4S148.1,373.231,163.8,373.231z M144.8,290.931l-23.9-87.4l-21.3-76.8 h334.9l-43.3,162.6c-2.4,9.3-10.7,15.8-20.3,16H164C155.3,304.831,147.7,299.231,144.8,290.931z"
                      fill="#000000"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="product-item-detail">
                <div class="product-item-detail-info">
                  <span class="product-item-detail-info-vendor">
                    <a href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                      F1GENZ
                    </a>
                  </span>
                  <span class="product-item-detail-info-tag">Trả góp</span>
                </div>
                <h3 class="product-item-detail-name">
                  <a href="/ghe-an-4-chan-f1genz-cao-cap-3" title="Ghế ăn 4 chân F1GENZ cao cấp">
                    Ghế ăn 4 chân F1GENZ cao cấp
                  </a>
                </h3>
                <div class="product-item-detail-price">
                  <span>2.819.000₫</span>
                  <del>3.290.000₫</del>
                </div>
              </div>
            </div>
          </div>
          <div class="product-item" data-id="87901666" data-handle="ghe-an-4-chan-cao-cap-1">
            <div class="product-item-wrap">
              <div class="product-item-image hasThumbs hasThumbsIcon">
                <span class="product-item-discount">-25%</span>
                <a class="product-item-link" href="/ghe-an-4-chan-cao-cap-1" title="Ghế ăn 4 chân cao cấp">
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/2-9883f5e6b0fa4facbaa5dae6cbcbd6fa-00a5e3fa3bf04615b8b032f056be937d.png?v=1683881033297"
                    alt="Ghế ăn 4 chân cao cấp"
                  />
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/1-91f1ac7a73984bf691c8d92d4b849887-8799f804597043798e44fe0ac637a666.png?v=1683881033297"
                    alt="Ghế ăn 4 chân cao cấp"
                  />
                </a>
                <ul class="product-item-thumbs">
                  <li>
                    <a href="/ghe-an-4-chan-cao-cap-1" title="Ghế ăn 4 chân cao cấp">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/1-91f1ac7a73984bf691c8d92d4b849887-8799f804597043798e44fe0ac637a666.png?v=1683881033297"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/1-91f1ac7a73984bf691c8d92d4b849887-8799f804597043798e44fe0ac637a666.png?v=1683881033297"
                        alt="Ghế ăn 4 chân cao cấp"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ghe-an-4-chan-cao-cap-1" title="Ghế ăn 4 chân cao cấp">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-b9fcd276c5fe434bab0e244a1b501264-7e1a3c6db16c40e192b1d8519da78816.png?v=1683881033297"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-b9fcd276c5fe434bab0e244a1b501264-7e1a3c6db16c40e192b1d8519da78816.png?v=1683881033297"
                        alt="Ghế ăn 4 chân cao cấp"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ghe-an-4-chan-cao-cap-1" title="Ghế ăn 4 chân cao cấp">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-2e6994f60a3e46d7a1822b46d9687890-2bad70ca74194fcab2f3df552c7ee7d1.png?v=1683881033297"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-2e6994f60a3e46d7a1822b46d9687890-2bad70ca74194fcab2f3df552c7ee7d1.png?v=1683881033297"
                        alt="Ghế ăn 4 chân cao cấp"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-item-action">
                <button
                  type="button"
                  title="Yêu thích"
                  class="shop-wishlist-button-add"
                  data-type="shop-wishlist-button-add"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
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
                </button>
                <button type="button" title="Xem nhanh" class="shop-quickview-button" data-type="shop-quickview-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 612.01 612.01"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0 C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586 l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8 c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407 S377.82,467.8,257.493,467.8z"
                      fill="#000000"
                      data-original="#000000"
                      class=""
                    ></path>
                  </svg>
                </button>
                <button type="button" title="Thêm vào giỏ" class="shop-addLoop-button" data-type="shop-addLoop-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 459.361 459.361"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M371.2,325.731c19.1-0.2,35.8-13.1,40.7-31.6l47.1-175.4c1.5-5.7-1.8-11.5-7.5-13.1c-0.9-0.2-1.8-0.4-2.7-0.4H94.5 l-24.1-89c-1.2-4.6-5.4-7.9-10.2-7.9H0v21.3h51.8l23.3,87c-0.1,0.7-0.1,1.4,0,2.1l48,176c0.3,1.4,0.8,2.9,1.3,4.3l16.2,59 c-15.6,8.3-26.2,24.7-26.2,43.6c0,27.3,22.1,49.4,49.4,49.4c27.3,0,49.4-22.1,49.4-49.4c0-8.5-2.2-16.6-6-23.6 c-0.9-1.6-1.8-3.2-2.9-4.8H330c-5.6,8-9,17.8-9,28.4c0,27.3,22.1,49.4,49.4,49.4s49.4-22.1,49.4-49.4c0-12.9-4.9-24.6-13-33.4 c-8.7-9.9-21.5-16.2-35.8-16.3H161.9l-7.5-27.5c3.2,0.8,6.5,1.3,9.8,1.3H371.2z M370.5,373.231c15.7,0,28.4,12.7,28.4,28.4 s-12.7,28.4-28.4,28.4c-15.7,0-28.4-12.7-28.4-28.4S354.8,373.231,370.5,373.231z M163.8,373.231c15.7,0,28.3,12.8,28.3,28.4 c0,15.7-12.7,28.4-28.4,28.4c-15.7,0-28.3-12.7-28.3-28.4S148.1,373.231,163.8,373.231z M144.8,290.931l-23.9-87.4l-21.3-76.8 h334.9l-43.3,162.6c-2.4,9.3-10.7,15.8-20.3,16H164C155.3,304.831,147.7,299.231,144.8,290.931z"
                      fill="#000000"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="product-item-detail">
                <div class="product-item-detail-info">
                  <span class="product-item-detail-info-vendor">
                    <a href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                      F1GENZ
                    </a>
                  </span>
                  <span class="product-item-detail-info-tag">Quà tặng</span>
                </div>
                <h3 class="product-item-detail-name">
                  <a href="/ghe-an-4-chan-cao-cap-1" title="Ghế ăn 4 chân cao cấp">
                    Ghế ăn 4 chân cao cấp
                  </a>
                </h3>
                <div class="product-item-detail-price">
                  <span>11.199.000₫</span>
                  <del>14.900.000₫</del>
                </div>
              </div>
            </div>
          </div>
          <div class="product-item" data-id="87901526" data-handle="ghe-an-f1genz-cao-cap-1">
            <div class="product-item-wrap">
              <div class="product-item-image hasThumbs hasThumbsIcon">
                <span class="product-item-discount">-14%</span>
                <a class="product-item-link" href="/ghe-an-f1genz-cao-cap-1" title="Ghế ăn F1GENZ cao cấp">
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/1-b83fda81dad54ff6be5a77d9ff957468-4e3f8c8db5aa4fbea1834d7cafce5513.png?v=1683881027370"
                    alt="Ghế ăn F1GENZ cao cấp"
                  />
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/12-cfe4d39184964725a137278cefd86b36-c0ba1f324986433d97377fce5f8bbf6f.png?v=1683881027370"
                    alt="Ghế ăn F1GENZ cao cấp"
                  />
                </a>
                <ul class="product-item-thumbs">
                  <li>
                    <a href="/ghe-an-f1genz-cao-cap-1" title="Ghế ăn F1GENZ cao cấp">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/12-cfe4d39184964725a137278cefd86b36-c0ba1f324986433d97377fce5f8bbf6f.png?v=1683881027370"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/12-cfe4d39184964725a137278cefd86b36-c0ba1f324986433d97377fce5f8bbf6f.png?v=1683881027370"
                        alt="Ghế ăn F1GENZ cao cấp"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ghe-an-f1genz-cao-cap-1" title="Ghế ăn F1GENZ cao cấp">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/11-b273ec99de6d47a782ac8e516d1fa9fb-55522eb0ed134ffbb8d0fbd7a9213188.png?v=1683881027370"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/11-b273ec99de6d47a782ac8e516d1fa9fb-55522eb0ed134ffbb8d0fbd7a9213188.png?v=1683881027370"
                        alt="Ghế ăn F1GENZ cao cấp"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ghe-an-f1genz-cao-cap-1" title="Ghế ăn F1GENZ cao cấp">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/10-a1e1765eb2474dc29cc0b99547a29207-4c3db7361f724259b51abe0c0e5c473b.png?v=1683881027370"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/10-a1e1765eb2474dc29cc0b99547a29207-4c3db7361f724259b51abe0c0e5c473b.png?v=1683881027370"
                        alt="Ghế ăn F1GENZ cao cấp"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-item-action">
                <button
                  type="button"
                  title="Yêu thích"
                  class="shop-wishlist-button-add"
                  data-type="shop-wishlist-button-add"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
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
                </button>
                <button type="button" title="Xem nhanh" class="shop-quickview-button" data-type="shop-quickview-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 612.01 612.01"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0 C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586 l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8 c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407 S377.82,467.8,257.493,467.8z"
                      fill="#000000"
                      data-original="#000000"
                      class=""
                    ></path>
                  </svg>
                </button>
                <button type="button" title="Thêm vào giỏ" class="shop-addLoop-button" data-type="shop-addLoop-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 459.361 459.361"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M371.2,325.731c19.1-0.2,35.8-13.1,40.7-31.6l47.1-175.4c1.5-5.7-1.8-11.5-7.5-13.1c-0.9-0.2-1.8-0.4-2.7-0.4H94.5 l-24.1-89c-1.2-4.6-5.4-7.9-10.2-7.9H0v21.3h51.8l23.3,87c-0.1,0.7-0.1,1.4,0,2.1l48,176c0.3,1.4,0.8,2.9,1.3,4.3l16.2,59 c-15.6,8.3-26.2,24.7-26.2,43.6c0,27.3,22.1,49.4,49.4,49.4c27.3,0,49.4-22.1,49.4-49.4c0-8.5-2.2-16.6-6-23.6 c-0.9-1.6-1.8-3.2-2.9-4.8H330c-5.6,8-9,17.8-9,28.4c0,27.3,22.1,49.4,49.4,49.4s49.4-22.1,49.4-49.4c0-12.9-4.9-24.6-13-33.4 c-8.7-9.9-21.5-16.2-35.8-16.3H161.9l-7.5-27.5c3.2,0.8,6.5,1.3,9.8,1.3H371.2z M370.5,373.231c15.7,0,28.4,12.7,28.4,28.4 s-12.7,28.4-28.4,28.4c-15.7,0-28.4-12.7-28.4-28.4S354.8,373.231,370.5,373.231z M163.8,373.231c15.7,0,28.3,12.8,28.3,28.4 c0,15.7-12.7,28.4-28.4,28.4c-15.7,0-28.3-12.7-28.3-28.4S148.1,373.231,163.8,373.231z M144.8,290.931l-23.9-87.4l-21.3-76.8 h334.9l-43.3,162.6c-2.4,9.3-10.7,15.8-20.3,16H164C155.3,304.831,147.7,299.231,144.8,290.931z"
                      fill="#000000"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="product-item-detail">
                <div class="product-item-detail-info">
                  <span class="product-item-detail-info-vendor">
                    <a href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                      F1GENZ
                    </a>
                  </span>
                  <span class="product-item-detail-info-tag">Giá tốt</span>
                </div>
                <h3 class="product-item-detail-name">
                  <a href="/ghe-an-f1genz-cao-cap-1" title="Ghế ăn F1GENZ cao cấp">
                    Ghế ăn F1GENZ cao cấp
                  </a>
                </h3>
                <div class="product-item-detail-price">
                  <span>2.819.000₫</span>
                  <del>3.290.000₫</del>
                </div>
              </div>
            </div>
          </div>
          <div class="product-item" data-id="87901387" data-handle="ghe-an-f1genz-cao-cap-loai-dac-biet">
            <div class="product-item-wrap">
              <div class="product-item-image hasThumbs hasThumbsIcon">
                <a
                  class="product-item-link"
                  href="/ghe-an-f1genz-cao-cap-loai-dac-biet"
                  title="Ghế ăn F1GENZ cao cấp loại đặc biệt"
                >
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/1-a5ec45bc87c2439782bee53b0e27c508-737c055b25a24e95bc40bfd4796104ce.png?v=1683881021203"
                    alt="Ghế ăn F1GENZ cao cấp loại đặc biệt"
                  />
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/2-51f5c1dccd8a4dd9a4dd0e81151ce6ce-579e8431a63944719f322fd6a653d609.png?v=1683881021203"
                    alt="Ghế ăn F1GENZ cao cấp loại đặc biệt"
                  />
                </a>
                <ul class="product-item-thumbs">
                  <li>
                    <a href="/ghe-an-f1genz-cao-cap-loai-dac-biet" title="Ghế ăn F1GENZ cao cấp loại đặc biệt">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-51f5c1dccd8a4dd9a4dd0e81151ce6ce-579e8431a63944719f322fd6a653d609.png?v=1683881021203"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-51f5c1dccd8a4dd9a4dd0e81151ce6ce-579e8431a63944719f322fd6a653d609.png?v=1683881021203"
                        alt="Ghế ăn F1GENZ cao cấp loại đặc biệt"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ghe-an-f1genz-cao-cap-loai-dac-biet" title="Ghế ăn F1GENZ cao cấp loại đặc biệt">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-b5ff76a3f4b54cc28d20c9536fa59ab9-5ba88c3067384a1ebc3646912b0515a5.png?v=1683881021203"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-b5ff76a3f4b54cc28d20c9536fa59ab9-5ba88c3067384a1ebc3646912b0515a5.png?v=1683881021203"
                        alt="Ghế ăn F1GENZ cao cấp loại đặc biệt"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ghe-an-f1genz-cao-cap-loai-dac-biet" title="Ghế ăn F1GENZ cao cấp loại đặc biệt">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-7c0f7e12b4804990a7257d608f58ed86-64e4ae95c0194c739b77aef2ad85ada0.png?v=1683881021203"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-7c0f7e12b4804990a7257d608f58ed86-64e4ae95c0194c739b77aef2ad85ada0.png?v=1683881021203"
                        alt="Ghế ăn F1GENZ cao cấp loại đặc biệt"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-item-action">
                <button
                  type="button"
                  title="Yêu thích"
                  class="shop-wishlist-button-add"
                  data-type="shop-wishlist-button-add"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
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
                </button>
                <button type="button" title="Xem nhanh" class="shop-quickview-button" data-type="shop-quickview-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 612.01 612.01"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0 C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586 l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8 c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407 S377.82,467.8,257.493,467.8z"
                      fill="#000000"
                      data-original="#000000"
                      class=""
                    ></path>
                  </svg>
                </button>
                <button type="button" title="Thêm vào giỏ" class="shop-addLoop-button" data-type="shop-addLoop-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 459.361 459.361"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M371.2,325.731c19.1-0.2,35.8-13.1,40.7-31.6l47.1-175.4c1.5-5.7-1.8-11.5-7.5-13.1c-0.9-0.2-1.8-0.4-2.7-0.4H94.5 l-24.1-89c-1.2-4.6-5.4-7.9-10.2-7.9H0v21.3h51.8l23.3,87c-0.1,0.7-0.1,1.4,0,2.1l48,176c0.3,1.4,0.8,2.9,1.3,4.3l16.2,59 c-15.6,8.3-26.2,24.7-26.2,43.6c0,27.3,22.1,49.4,49.4,49.4c27.3,0,49.4-22.1,49.4-49.4c0-8.5-2.2-16.6-6-23.6 c-0.9-1.6-1.8-3.2-2.9-4.8H330c-5.6,8-9,17.8-9,28.4c0,27.3,22.1,49.4,49.4,49.4s49.4-22.1,49.4-49.4c0-12.9-4.9-24.6-13-33.4 c-8.7-9.9-21.5-16.2-35.8-16.3H161.9l-7.5-27.5c3.2,0.8,6.5,1.3,9.8,1.3H371.2z M370.5,373.231c15.7,0,28.4,12.7,28.4,28.4 s-12.7,28.4-28.4,28.4c-15.7,0-28.4-12.7-28.4-28.4S354.8,373.231,370.5,373.231z M163.8,373.231c15.7,0,28.3,12.8,28.3,28.4 c0,15.7-12.7,28.4-28.4,28.4c-15.7,0-28.3-12.7-28.3-28.4S148.1,373.231,163.8,373.231z M144.8,290.931l-23.9-87.4l-21.3-76.8 h334.9l-43.3,162.6c-2.4,9.3-10.7,15.8-20.3,16H164C155.3,304.831,147.7,299.231,144.8,290.931z"
                      fill="#000000"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="product-item-detail">
                <div class="product-item-detail-info">
                  <span class="product-item-detail-info-vendor">
                    <a href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                      F1GENZ
                    </a>
                  </span>
                  <span class="product-item-detail-info-tag">New</span>
                </div>
                <h3 class="product-item-detail-name">
                  <a href="/ghe-an-f1genz-cao-cap-loai-dac-biet" title="Ghế ăn F1GENZ cao cấp loại đặc biệt">
                    Ghế ăn F1GENZ cao cấp loại đặc biệt
                  </a>
                </h3>
                <div class="product-item-detail-price">
                  <span>5.199.000₫</span>
                </div>
              </div>
            </div>
          </div>
          <div class="product-item" data-id="87901233" data-handle="ghe-cay-4-chan-cao-cap">
            <div class="product-item-wrap">
              <div class="product-item-image hasThumbs hasThumbsIcon">
                <span class="product-item-discount">-21%</span>
                <a class="product-item-link" href="/ghe-cay-4-chan-cao-cap" title="Ghế cây 4 chân cao cấp">
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/1-28b196b78bfd4b4e9a05ce543fce0eff-d10c56f38ce54cab92a11712afcecc29.png?v=1683881014757"
                    alt="Ghế cây 4 chân cao cấp"
                  />
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/2-21de4dd8edb74c8ba14060b0370fc367-5347bf4a46a943d88711532d8027f628.png?v=1683881014757"
                    alt="Ghế cây 4 chân cao cấp"
                  />
                </a>
                <ul class="product-item-thumbs">
                  <li>
                    <a href="/ghe-cay-4-chan-cao-cap" title="Ghế cây 4 chân cao cấp">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-21de4dd8edb74c8ba14060b0370fc367-5347bf4a46a943d88711532d8027f628.png?v=1683881014757"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-21de4dd8edb74c8ba14060b0370fc367-5347bf4a46a943d88711532d8027f628.png?v=1683881014757"
                        alt="Ghế cây 4 chân cao cấp"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ghe-cay-4-chan-cao-cap" title="Ghế cây 4 chân cao cấp">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-cce931bc87724783acff7976b0fcc19d-53cf45ed17a746a29f8826209c815874.png?v=1683881014757"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-cce931bc87724783acff7976b0fcc19d-53cf45ed17a746a29f8826209c815874.png?v=1683881014757"
                        alt="Ghế cây 4 chân cao cấp"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ghe-cay-4-chan-cao-cap" title="Ghế cây 4 chân cao cấp">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-0c5e637c09134f4494c2c6f60b6470df-58d1da5a0442458fbc5c018201c11c7f.png?v=1683881014757"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-0c5e637c09134f4494c2c6f60b6470df-58d1da5a0442458fbc5c018201c11c7f.png?v=1683881014757"
                        alt="Ghế cây 4 chân cao cấp"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-item-action">
                <button
                  type="button"
                  title="Yêu thích"
                  class="shop-wishlist-button-add"
                  data-type="shop-wishlist-button-add"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
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
                </button>
                <button type="button" title="Xem nhanh" class="shop-quickview-button" data-type="shop-quickview-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 612.01 612.01"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0 C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586 l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8 c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407 S377.82,467.8,257.493,467.8z"
                      fill="#000000"
                      data-original="#000000"
                      class=""
                    ></path>
                  </svg>
                </button>
                <button type="button" title="Thêm vào giỏ" class="shop-addLoop-button" data-type="shop-addLoop-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 459.361 459.361"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M371.2,325.731c19.1-0.2,35.8-13.1,40.7-31.6l47.1-175.4c1.5-5.7-1.8-11.5-7.5-13.1c-0.9-0.2-1.8-0.4-2.7-0.4H94.5 l-24.1-89c-1.2-4.6-5.4-7.9-10.2-7.9H0v21.3h51.8l23.3,87c-0.1,0.7-0.1,1.4,0,2.1l48,176c0.3,1.4,0.8,2.9,1.3,4.3l16.2,59 c-15.6,8.3-26.2,24.7-26.2,43.6c0,27.3,22.1,49.4,49.4,49.4c27.3,0,49.4-22.1,49.4-49.4c0-8.5-2.2-16.6-6-23.6 c-0.9-1.6-1.8-3.2-2.9-4.8H330c-5.6,8-9,17.8-9,28.4c0,27.3,22.1,49.4,49.4,49.4s49.4-22.1,49.4-49.4c0-12.9-4.9-24.6-13-33.4 c-8.7-9.9-21.5-16.2-35.8-16.3H161.9l-7.5-27.5c3.2,0.8,6.5,1.3,9.8,1.3H371.2z M370.5,373.231c15.7,0,28.4,12.7,28.4,28.4 s-12.7,28.4-28.4,28.4c-15.7,0-28.4-12.7-28.4-28.4S354.8,373.231,370.5,373.231z M163.8,373.231c15.7,0,28.3,12.8,28.3,28.4 c0,15.7-12.7,28.4-28.4,28.4c-15.7,0-28.3-12.7-28.3-28.4S148.1,373.231,163.8,373.231z M144.8,290.931l-23.9-87.4l-21.3-76.8 h334.9l-43.3,162.6c-2.4,9.3-10.7,15.8-20.3,16H164C155.3,304.831,147.7,299.231,144.8,290.931z"
                      fill="#000000"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="product-item-detail">
                <div class="product-item-detail-info">
                  <span class="product-item-detail-info-vendor">
                    <a href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                      F1GENZ
                    </a>
                  </span>
                  <span class="product-item-detail-info-tag">Freeship</span>
                </div>
                <h3 class="product-item-detail-name">
                  <a href="/ghe-cay-4-chan-cao-cap" title="Ghế cây 4 chân cao cấp">
                    Ghế cây 4 chân cao cấp
                  </a>
                </h3>
                <div class="product-item-detail-price">
                  <span>8.900.000₫</span>
                  <del>11.290.000₫</del>
                </div>
              </div>
            </div>
          </div>
          <div class="product-item" data-id="87901113" data-handle="ghe-dua-cao-cap-phong-an">
            <div class="product-item-wrap">
              <div class="product-item-image hasThumbs hasThumbsIcon">
                <span class="product-item-discount">-13%</span>
                <a class="product-item-link" href="/ghe-dua-cao-cap-phong-an" title="Ghế dựa cao cấp phòng ăn">
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/1-3205635d45b748d195f97c41a8abd0bd-ac0e9bac8a5d42ccba9253acd65531f4.png?v=1683881009470"
                    alt="Ghế dựa cao cấp phòng ăn"
                  />
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/2-d6b80505107c44fa96f141c061b28a70-643e7b2e7e354d089a9dc4b2282c8373.png?v=1683881009470"
                    alt="Ghế dựa cao cấp phòng ăn"
                  />
                </a>
                <ul class="product-item-thumbs">
                  <li>
                    <a href="/ghe-dua-cao-cap-phong-an" title="Ghế dựa cao cấp phòng ăn">
                      <img
                        class="w-auto ls-is-cached lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-d6b80505107c44fa96f141c061b28a70-643e7b2e7e354d089a9dc4b2282c8373.png?v=1683881009470"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-d6b80505107c44fa96f141c061b28a70-643e7b2e7e354d089a9dc4b2282c8373.png?v=1683881009470"
                        alt="Ghế dựa cao cấp phòng ăn"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ghe-dua-cao-cap-phong-an" title="Ghế dựa cao cấp phòng ăn">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-95461e910d7b4f9fa57f34cb31f5d31d-8ef634ad4d284a3891021cb1818322e3.png?v=1683881009470"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-95461e910d7b4f9fa57f34cb31f5d31d-8ef634ad4d284a3891021cb1818322e3.png?v=1683881009470"
                        alt="Ghế dựa cao cấp phòng ăn"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ghe-dua-cao-cap-phong-an" title="Ghế dựa cao cấp phòng ăn">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-53ada3b93c0e40fd902959480216c74a-957ba38b360544acaa0d918fa660765e.png?v=1683881009470"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-53ada3b93c0e40fd902959480216c74a-957ba38b360544acaa0d918fa660765e.png?v=1683881009470"
                        alt="Ghế dựa cao cấp phòng ăn"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-item-action">
                <button
                  type="button"
                  title="Yêu thích"
                  class="shop-wishlist-button-add"
                  data-type="shop-wishlist-button-add"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
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
                </button>
                <button type="button" title="Xem nhanh" class="shop-quickview-button" data-type="shop-quickview-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 612.01 612.01"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0 C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586 l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8 c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407 S377.82,467.8,257.493,467.8z"
                      fill="#000000"
                      data-original="#000000"
                      class=""
                    ></path>
                  </svg>
                </button>
                <button type="button" title="Thêm vào giỏ" class="shop-addLoop-button" data-type="shop-addLoop-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 459.361 459.361"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M371.2,325.731c19.1-0.2,35.8-13.1,40.7-31.6l47.1-175.4c1.5-5.7-1.8-11.5-7.5-13.1c-0.9-0.2-1.8-0.4-2.7-0.4H94.5 l-24.1-89c-1.2-4.6-5.4-7.9-10.2-7.9H0v21.3h51.8l23.3,87c-0.1,0.7-0.1,1.4,0,2.1l48,176c0.3,1.4,0.8,2.9,1.3,4.3l16.2,59 c-15.6,8.3-26.2,24.7-26.2,43.6c0,27.3,22.1,49.4,49.4,49.4c27.3,0,49.4-22.1,49.4-49.4c0-8.5-2.2-16.6-6-23.6 c-0.9-1.6-1.8-3.2-2.9-4.8H330c-5.6,8-9,17.8-9,28.4c0,27.3,22.1,49.4,49.4,49.4s49.4-22.1,49.4-49.4c0-12.9-4.9-24.6-13-33.4 c-8.7-9.9-21.5-16.2-35.8-16.3H161.9l-7.5-27.5c3.2,0.8,6.5,1.3,9.8,1.3H371.2z M370.5,373.231c15.7,0,28.4,12.7,28.4,28.4 s-12.7,28.4-28.4,28.4c-15.7,0-28.4-12.7-28.4-28.4S354.8,373.231,370.5,373.231z M163.8,373.231c15.7,0,28.3,12.8,28.3,28.4 c0,15.7-12.7,28.4-28.4,28.4c-15.7,0-28.3-12.7-28.3-28.4S148.1,373.231,163.8,373.231z M144.8,290.931l-23.9-87.4l-21.3-76.8 h334.9l-43.3,162.6c-2.4,9.3-10.7,15.8-20.3,16H164C155.3,304.831,147.7,299.231,144.8,290.931z"
                      fill="#000000"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="product-item-detail">
                <div class="product-item-detail-info">
                  <span class="product-item-detail-info-vendor">
                    <a href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                      F1GENZ
                    </a>
                  </span>
                  <span class="product-item-detail-info-tag">Saleoff</span>
                </div>
                <h3 class="product-item-detail-name">
                  <a href="/ghe-dua-cao-cap-phong-an" title="Ghế dựa cao cấp phòng ăn">
                    Ghế dựa cao cấp phòng ăn
                  </a>
                </h3>
                <div class="product-item-detail-price">
                  <span>1.399.000₫</span>
                  <del>1.599.000₫</del>
                </div>
              </div>
            </div>
          </div>
          <div class="product-item" data-id="87901033" data-handle="ghe-kieu-hien-dai-2022">
            <div class="product-item-wrap">
              <div class="product-item-image hasThumbs hasThumbsIcon">
                <span class="product-item-discount">-21%</span>
                <a class="product-item-link" href="/ghe-kieu-hien-dai-2022" title="Ghế kiểu hiện đại 2022">
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/1-caa7df09ccc1437a89ffeb6499b27cb8-7c7e8148b4f54252bd16f00c014328d3.png?v=1683881006230"
                    alt="Ghế kiểu hiện đại 2022"
                  />
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/2-410112266dea4cadb4eeaa73261a49d0-4b05099cf4554e53bf5498afc4196afd.png?v=1683881006230"
                    alt="Ghế kiểu hiện đại 2022"
                  />
                </a>
                <ul class="product-item-thumbs">
                  <li>
                    <a href="/ghe-kieu-hien-dai-2022" title="Ghế kiểu hiện đại 2022">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-410112266dea4cadb4eeaa73261a49d0-4b05099cf4554e53bf5498afc4196afd.png?v=1683881006230"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/2-410112266dea4cadb4eeaa73261a49d0-4b05099cf4554e53bf5498afc4196afd.png?v=1683881006230"
                        alt="Ghế kiểu hiện đại 2022"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ghe-kieu-hien-dai-2022" title="Ghế kiểu hiện đại 2022">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-7ca10f446cb74e15a09b036581aaf5ad-7bb38acbdb154fd19dc24ee871ffc295.png?v=1683881006230"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/3-7ca10f446cb74e15a09b036581aaf5ad-7bb38acbdb154fd19dc24ee871ffc295.png?v=1683881006230"
                        alt="Ghế kiểu hiện đại 2022"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ghe-kieu-hien-dai-2022" title="Ghế kiểu hiện đại 2022">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-1e5d1019b5c94f1fa6617862c90678ae-959f902b70a046ea824f3aafc701ef23.png?v=1683881006230"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/4-1e5d1019b5c94f1fa6617862c90678ae-959f902b70a046ea824f3aafc701ef23.png?v=1683881006230"
                        alt="Ghế kiểu hiện đại 2022"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-item-action">
                <button
                  type="button"
                  title="Yêu thích"
                  class="shop-wishlist-button-add"
                  data-type="shop-wishlist-button-add"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
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
                </button>
                <button type="button" title="Xem nhanh" class="shop-quickview-button" data-type="shop-quickview-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 612.01 612.01"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0 C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586 l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8 c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407 S377.82,467.8,257.493,467.8z"
                      fill="#000000"
                      data-original="#000000"
                      class=""
                    ></path>
                  </svg>
                </button>
                <button type="button" title="Thêm vào giỏ" class="shop-addLoop-button" data-type="shop-addLoop-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 459.361 459.361"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M371.2,325.731c19.1-0.2,35.8-13.1,40.7-31.6l47.1-175.4c1.5-5.7-1.8-11.5-7.5-13.1c-0.9-0.2-1.8-0.4-2.7-0.4H94.5 l-24.1-89c-1.2-4.6-5.4-7.9-10.2-7.9H0v21.3h51.8l23.3,87c-0.1,0.7-0.1,1.4,0,2.1l48,176c0.3,1.4,0.8,2.9,1.3,4.3l16.2,59 c-15.6,8.3-26.2,24.7-26.2,43.6c0,27.3,22.1,49.4,49.4,49.4c27.3,0,49.4-22.1,49.4-49.4c0-8.5-2.2-16.6-6-23.6 c-0.9-1.6-1.8-3.2-2.9-4.8H330c-5.6,8-9,17.8-9,28.4c0,27.3,22.1,49.4,49.4,49.4s49.4-22.1,49.4-49.4c0-12.9-4.9-24.6-13-33.4 c-8.7-9.9-21.5-16.2-35.8-16.3H161.9l-7.5-27.5c3.2,0.8,6.5,1.3,9.8,1.3H371.2z M370.5,373.231c15.7,0,28.4,12.7,28.4,28.4 s-12.7,28.4-28.4,28.4c-15.7,0-28.4-12.7-28.4-28.4S354.8,373.231,370.5,373.231z M163.8,373.231c15.7,0,28.3,12.8,28.3,28.4 c0,15.7-12.7,28.4-28.4,28.4c-15.7,0-28.3-12.7-28.3-28.4S148.1,373.231,163.8,373.231z M144.8,290.931l-23.9-87.4l-21.3-76.8 h334.9l-43.3,162.6c-2.4,9.3-10.7,15.8-20.3,16H164C155.3,304.831,147.7,299.231,144.8,290.931z"
                      fill="#000000"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="product-item-detail">
                <div class="product-item-detail-info">
                  <span class="product-item-detail-info-vendor">
                    <a href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                      F1GENZ
                    </a>
                  </span>
                  <span class="product-item-detail-info-tag">Best seller</span>
                </div>
                <h3 class="product-item-detail-name">
                  <a href="/ghe-kieu-hien-dai-2022" title="Ghế kiểu hiện đại 2022">
                    Ghế kiểu hiện đại 2022
                  </a>
                </h3>
                <div class="product-item-detail-price">
                  <span>1.899.000₫</span>
                  <del>2.390.000₫</del>
                </div>
              </div>
            </div>
          </div>
          <div class="product-item" data-id="87900949" data-handle="ghe-tron-4-chan-cao-cap-3">
            <div class="product-item-wrap">
              <div class="product-item-image hasThumbs hasThumbsIcon">
                <span class="product-item-discount">-42%</span>
                <a class="product-item-link" href="/ghe-tron-4-chan-cao-cap-3" title="Ghế trơn 4 chân cao cấp">
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/7-2f06c085cb084d15954234920131ae23-1fbf13e8b40248abbd385fc42dc26f21.png?v=1683881002767"
                    alt="Ghế trơn 4 chân cao cấp"
                  />
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/15-32c5f7f1181c43698d60ad6cdbe45c3a-6e576bf0203c4355bcb38fa9dbe34201.png?v=1683881002767"
                    alt="Ghế trơn 4 chân cao cấp"
                  />
                </a>
                <ul class="product-item-thumbs">
                  <li>
                    <a href="/ghe-tron-4-chan-cao-cap-3" title="Ghế trơn 4 chân cao cấp">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/15-32c5f7f1181c43698d60ad6cdbe45c3a-6e576bf0203c4355bcb38fa9dbe34201.png?v=1683881002767"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/15-32c5f7f1181c43698d60ad6cdbe45c3a-6e576bf0203c4355bcb38fa9dbe34201.png?v=1683881002767"
                        alt="Ghế trơn 4 chân cao cấp"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ghe-tron-4-chan-cao-cap-3" title="Ghế trơn 4 chân cao cấp">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/14-f8969d6bf3ec45f59e2ca4c7ec89aafd-40d5102a186a4221b9bdcf0dbd9382e2.png?v=1683881002767"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/14-f8969d6bf3ec45f59e2ca4c7ec89aafd-40d5102a186a4221b9bdcf0dbd9382e2.png?v=1683881002767"
                        alt="Ghế trơn 4 chân cao cấp"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ghe-tron-4-chan-cao-cap-3" title="Ghế trơn 4 chân cao cấp">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/13-4519a09cbdae414f9122644a6b6bfb96-fa078fcea5854567a8f84bcbd5b42f92.png?v=1683881002767"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/13-4519a09cbdae414f9122644a6b6bfb96-fa078fcea5854567a8f84bcbd5b42f92.png?v=1683881002767"
                        alt="Ghế trơn 4 chân cao cấp"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-item-action">
                <button
                  type="button"
                  title="Yêu thích"
                  class="shop-wishlist-button-add"
                  data-type="shop-wishlist-button-add"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
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
                </button>
                <button type="button" title="Xem nhanh" class="shop-quickview-button" data-type="shop-quickview-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 612.01 612.01"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0 C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586 l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8 c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407 S377.82,467.8,257.493,467.8z"
                      fill="#000000"
                      data-original="#000000"
                      class=""
                    ></path>
                  </svg>
                </button>
                <button type="button" title="Thêm vào giỏ" class="shop-addLoop-button" data-type="shop-addLoop-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 459.361 459.361"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M371.2,325.731c19.1-0.2,35.8-13.1,40.7-31.6l47.1-175.4c1.5-5.7-1.8-11.5-7.5-13.1c-0.9-0.2-1.8-0.4-2.7-0.4H94.5 l-24.1-89c-1.2-4.6-5.4-7.9-10.2-7.9H0v21.3h51.8l23.3,87c-0.1,0.7-0.1,1.4,0,2.1l48,176c0.3,1.4,0.8,2.9,1.3,4.3l16.2,59 c-15.6,8.3-26.2,24.7-26.2,43.6c0,27.3,22.1,49.4,49.4,49.4c27.3,0,49.4-22.1,49.4-49.4c0-8.5-2.2-16.6-6-23.6 c-0.9-1.6-1.8-3.2-2.9-4.8H330c-5.6,8-9,17.8-9,28.4c0,27.3,22.1,49.4,49.4,49.4s49.4-22.1,49.4-49.4c0-12.9-4.9-24.6-13-33.4 c-8.7-9.9-21.5-16.2-35.8-16.3H161.9l-7.5-27.5c3.2,0.8,6.5,1.3,9.8,1.3H371.2z M370.5,373.231c15.7,0,28.4,12.7,28.4,28.4 s-12.7,28.4-28.4,28.4c-15.7,0-28.4-12.7-28.4-28.4S354.8,373.231,370.5,373.231z M163.8,373.231c15.7,0,28.3,12.8,28.3,28.4 c0,15.7-12.7,28.4-28.4,28.4c-15.7,0-28.3-12.7-28.3-28.4S148.1,373.231,163.8,373.231z M144.8,290.931l-23.9-87.4l-21.3-76.8 h334.9l-43.3,162.6c-2.4,9.3-10.7,15.8-20.3,16H164C155.3,304.831,147.7,299.231,144.8,290.931z"
                      fill="#000000"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="product-item-detail">
                <div class="product-item-detail-info">
                  <span class="product-item-detail-info-vendor">
                    <a href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                      F1GENZ
                    </a>
                  </span>
                  <span class="product-item-detail-info-tag">Flashsale</span>
                </div>
                <h3 class="product-item-detail-name">
                  <a href="/ghe-tron-4-chan-cao-cap-3" title="Ghế trơn 4 chân cao cấp">
                    Ghế trơn 4 chân cao cấp
                  </a>
                </h3>
                <div class="product-item-detail-price">
                  <span>1.380.000₫</span>
                  <del>2.359.000₫</del>
                </div>
              </div>
            </div>
          </div>
          <div class="product-item" data-id="87900753" data-handle="ghe-tron-den-cao-cap">
            <div class="product-item-wrap">
              <div class="product-item-image hasThumbs hasThumbsIcon">
                <span class="product-item-discount">-6%</span>
                <a class="product-item-link" href="/ghe-tron-den-cao-cap" title="Ghế trơn đen cao cấp">
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/by-hipvan-axel-chair-black-carbon-2-d2489b15a8ef4e2eaec286e0da37e083-800511dcee2d42c2b583f344225d2c27.png?v=1683880993983"
                    alt="Ghế trơn đen cao cấp"
                  />
                  <img
                    class="w-auto"
                    loading="lazy"
                    width="480"
                    height="480"
                    src="//bizweb.dktcdn.net/thumb/large/100/482/001/products/s-by-hipvan-axel-chair-black-grey-7-cdfac9061f414105a7109de0dbf752e8-a72d724a7d924849a2d80e107a4cb8d0.png?v=1683880993983"
                    alt="Ghế trơn đen cao cấp"
                  />
                </a>
                <ul class="product-item-thumbs">
                  <li>
                    <a href="/ghe-tron-den-cao-cap" title="Ghế trơn đen cao cấp">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/s-by-hipvan-axel-chair-black-grey-7-cdfac9061f414105a7109de0dbf752e8-a72d724a7d924849a2d80e107a4cb8d0.png?v=1683880993983"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/s-by-hipvan-axel-chair-black-grey-7-cdfac9061f414105a7109de0dbf752e8-a72d724a7d924849a2d80e107a4cb8d0.png?v=1683880993983"
                        alt="Ghế trơn đen cao cấp"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ghe-tron-den-cao-cap" title="Ghế trơn đen cao cấp">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/hipvan-axel-chair-black-grey-7-1-8e6d216590ba4b8fa8fe5bb81c622313-bbf7e9b397ed4964b2be6dec723f9167.png?v=1683880993983"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/hipvan-axel-chair-black-grey-7-1-8e6d216590ba4b8fa8fe5bb81c622313-bbf7e9b397ed4964b2be6dec723f9167.png?v=1683880993983"
                        alt="Ghế trơn đen cao cấp"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/ghe-tron-den-cao-cap" title="Ghế trơn đen cao cấp">
                      <img
                        class="w-auto lazyloaded"
                        width="50"
                        height="50"
                        src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/s-by-hipvan-axel-chair-black-grey-6-4042709ec2f14f9fbebb3b6782490f2d-5a04e64f338d42b9a47a2b271a5b9bdb.png?v=1683880993983"
                        data-src="//bizweb.dktcdn.net/thumb/thumb/100/482/001/products/s-by-hipvan-axel-chair-black-grey-6-4042709ec2f14f9fbebb3b6782490f2d-5a04e64f338d42b9a47a2b271a5b9bdb.png?v=1683880993983"
                        alt="Ghế trơn đen cao cấp"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-item-action">
                <button
                  type="button"
                  title="Yêu thích"
                  class="shop-wishlist-button-add"
                  data-type="shop-wishlist-button-add"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
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
                </button>
                <button type="button" title="Xem nhanh" class="shop-quickview-button" data-type="shop-quickview-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 612.01 612.01"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0 C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586 l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8 c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407 S377.82,467.8,257.493,467.8z"
                      fill="#000000"
                      data-original="#000000"
                      class=""
                    ></path>
                  </svg>
                </button>
                <button type="button" title="Thêm vào giỏ" class="shop-addLoop-button" data-type="shop-addLoop-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    viewBox="0 0 459.361 459.361"
                    style="enable-background: new 0 0 512 512"
                    xmlSpace="preserve"
                    class=""
                  >
                    <path
                      d="M371.2,325.731c19.1-0.2,35.8-13.1,40.7-31.6l47.1-175.4c1.5-5.7-1.8-11.5-7.5-13.1c-0.9-0.2-1.8-0.4-2.7-0.4H94.5 l-24.1-89c-1.2-4.6-5.4-7.9-10.2-7.9H0v21.3h51.8l23.3,87c-0.1,0.7-0.1,1.4,0,2.1l48,176c0.3,1.4,0.8,2.9,1.3,4.3l16.2,59 c-15.6,8.3-26.2,24.7-26.2,43.6c0,27.3,22.1,49.4,49.4,49.4c27.3,0,49.4-22.1,49.4-49.4c0-8.5-2.2-16.6-6-23.6 c-0.9-1.6-1.8-3.2-2.9-4.8H330c-5.6,8-9,17.8-9,28.4c0,27.3,22.1,49.4,49.4,49.4s49.4-22.1,49.4-49.4c0-12.9-4.9-24.6-13-33.4 c-8.7-9.9-21.5-16.2-35.8-16.3H161.9l-7.5-27.5c3.2,0.8,6.5,1.3,9.8,1.3H371.2z M370.5,373.231c15.7,0,28.4,12.7,28.4,28.4 s-12.7,28.4-28.4,28.4c-15.7,0-28.4-12.7-28.4-28.4S354.8,373.231,370.5,373.231z M163.8,373.231c15.7,0,28.3,12.8,28.3,28.4 c0,15.7-12.7,28.4-28.4,28.4c-15.7,0-28.3-12.7-28.3-28.4S148.1,373.231,163.8,373.231z M144.8,290.931l-23.9-87.4l-21.3-76.8 h334.9l-43.3,162.6c-2.4,9.3-10.7,15.8-20.3,16H164C155.3,304.831,147.7,299.231,144.8,290.931z"
                      fill="#000000"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="product-item-detail">
                <div class="product-item-detail-info">
                  <span class="product-item-detail-info-vendor">
                    <a href="/collections/vendors?query=F1GENZ" title="F1GENZ">
                      F1GENZ
                    </a>
                  </span>
                  <span class="product-item-detail-info-tag">F1GENZMall</span>
                </div>
                <h3 class="product-item-detail-name">
                  <a href="/ghe-tron-den-cao-cap" title="Ghế trơn đen cao cấp">
                    Ghế trơn đen cao cấp
                  </a>
                </h3>
                <div class="product-item-detail-price">
                  <span>2.100.000₫</span>
                  <del>2.230.000₫</del>
                </div>
              </div>
            </div>
          </div>
          <div class="shop-pagination">
            <span class="current">1</span>

            <a href="/collections/all?page=2" title="Trang 2" data-page="2">
              2
            </a>

            <a href="/collections/all?page=2" title="Trang sau" data-page="2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="16"
                height="16"
                x="0"
                y="0"
                viewBox="0 0 240.823 240.823"
                style="enable-background:new 0 0 512 512"
                xmlSpace="preserve"
                class=""
              >
                <path
                  id="Chevron_Right_1_"
                  d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261C187.881,124.315,187.881,116.495,183.189,111.816z"
                  fill="#000000"
                  data-original="#000000"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </CollectionsLayout>
  );
};

export default AllProduct;
