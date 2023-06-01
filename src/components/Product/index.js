import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import HeartIcon from '~/static/images/heart';
import CartIcon from '~/static/images/cart';
import MagnifyingGlassIcon from '~/static/images/magnifyingGlass';

const Product = ({ id, name, uri, tag, vendor, price, images, thumbs }) => {
  return (
    <div
      className="product-item"
      dataId={id}
      dataHandle="ke-treo-tuong-f1genz-xu-huong-moi"
      dataSlickIndex="0"
      ariaHidden="false"
      tabindex="0"
      role="tabpanel"
    >
      <div className="product-item-wrap">
        <div className="product-item-image hasThumbs hasThumbsIcon relative">
          <span className="product-item-discount">{Math.floor((price.current / price.prev - 1) * 100)}%</span>
          <Link className="product-item-link" href={'/' + uri} title="Kệ treo tường F1GENZ xu hướng mới" tabindex="0">
            {images.map((image, index) => {
              return (
                <Image
                  key={index}
                  src={image.src}
                  alt={name}
                  loading="lazy"
                  width={image.width}
                  height={image.height}
                  className="w-auto"
                />
              );
            })}
          </Link>
          <ul className="product-item-thumbs">
            {thumbs.map((thumb, index) => {
              return (
                <li key={index}>
                  <Link href={`/${uri}`} title={name}>
                    <Image
                      className="w-auto lazyloaded"
                      width={thumb.width}
                      height={thumb.height}
                      dataSrc={thumb.src}
                      src={thumb.dataSrc}
                      alt={name}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="product-item-action">
          <button
            type="button"
            title="Yêu thích"
            className="shop-wishlist-button-add"
            data-type="shop-wishlist-button-add"
            tabindex="0"
          >
            <HeartIcon />
          </button>
          <button
            type="button"
            title="Xem nhanh"
            className="shop-quickview-button"
            data-type="shop-quickview-button"
            tabindex="0"
          >
            <CartIcon />
          </button>
          <button
            type="button"
            title="Thêm vào giỏ"
            className="shop-addLoop-button"
            data-type="shop-addLoop-button"
            tabindex="0"
          >
            <MagnifyingGlassIcon />
          </button>
        </div>
        <div className="product-item-detail">
          <div className="product-item-detail-info">
            <span className="product-item-detail-info-vendor">
              <Link href={`/collections/vendors?query=${vendor}`} title={vendor} tabindex="0">
                {vendor}
              </Link>
            </span>
            <span className="product-item-detail-info-tag">{tag}</span>
          </div>
          <h3 className="product-item-detail-name">
            <Link
              href={`/${uri}`}
              title="Kệ treo tường F1GENZ xu hướng mới"
              tabindex="0"
              className="whitespace-nowrap overflow-hidden"
            >
              {name}
            </Link>
          </h3>
          <div className="product-item-detail-price">
            <span>{price.current.toLocaleString('vi')}₫</span>
            <del>{price.prev.toLocaleString('vi')}₫</del>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
