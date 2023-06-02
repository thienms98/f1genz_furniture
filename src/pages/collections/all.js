'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import CollectionsLayout from '~/layouts/collections';

import ReactPaginate from 'react-paginate';
import Product from '~/components/Product';
// icon
import HeartIcon from '~/components/icon/heart';
import CartIcon from '~/components/icon/cart';
import FilterIcon from '~/components/icon/filter';
import MagnifyingGlassIcon from '~/components/icon/magnifyingGlass';
import { products } from '~/data/products';

const AllCollection = () => {
  const offset = 20;
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('');

  // filter options
  const [type, setType] = useState([]);
  const [priceRange, setPriceRange] = useState([]);

  const [dataProducts, setDataProducts] = useState([...products].slice(0, offset));
  const [viewStyle, setViewStyle] = useState('four');

  useEffect(() => {
    let prods = [...products];
    // filter by type
    if (type.length) prods = [...prods].filter((prod) => type.includes(prod.group.toString()));
    else prods = [...products];

    // filter by price range
    if (priceRange.length) {
      prods = priceRange.reduce((prev, current) => {
        const result = [...products].filter(
          (prod) => prod.price.current >= current.min && prod.price.current <= current.max,
        );
        return [...prev, ...result];
      }, []);
    }

    // sort
    prods = sortProd([...prods], sort);

    // get top {offset : 20 } items
    setDataProducts(prods.slice(offset * (page - 1), offset * page));
  }, [priceRange, sort, page, type]);

  const sortProd = (prods, sortType) => {
    switch (sortType) {
      case 'name:asc':
        return prods.sort((a, b) => (a.name < b.name ? -1 : 1));
      case 'name:desc':
        return prods.sort((a, b) => (a.name < b.name ? 1 : -1));
      case 'price_min:asc':
        return prods.sort((a, b) => a.price.current - b.price.current);
      case 'price_min:desc':
        return prods.sort((a, b) => b.price.current - a.price.current);
      // case 'name:desc':
      //   return prods.sort((a,b) => a.name - b.name);
      // case 'name:desc':
      //   return prods.sort((a,b) => a.name - b.name);
      default:
        return prods;
    }
  };

  const handleType = (e) => {
    const value = e.target.value;
    const indexType = type.indexOf(value);
    if (indexType === -1) setType((prev) => [...prev, value]);
    else setType((prev) => [...prev.slice(0, indexType), ...prev.slice(indexType + 1)]);
  };

  const handlePriceRange = ([min, max]) => {
    const pos = priceRange.findIndex((pr) => pr.min === min && pr.max === max);
    if (pos === -1) setPriceRange((prev) => [...prev, { min, max }]);
    else setPriceRange((prev) => [...prev.slice(0, pos), ...prev.slice(pos + 1)]);
  };

  return (
    <CollectionsLayout>
      <main className="main-layout">
        <div className="main-collection" data-id="">
          <div
            title="Tất cả sản phẩm"
            className="main-collection-breadcrumb lazyloaded"
            data-bg="//bizweb.dktcdn.net/100/482/001/themes/906081/assets/main_collection_breadcrumb_bg.png?1684771044770"
            style={{
              backgroundImage:
                'url("https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/main_collection_breadcrumb_bg.png?1684771044770")',
            }}
          >
            <div className="container">
              <div className="section-title-all">
                <h1>Tất cả sản phẩm</h1>
              </div>
              <div className="breadcrumb-wrap">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Trang chủ</Link>
                  </li>

                  <li className="breadcrumb-item active">
                    <span>Tất cả sản phẩm</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="main-collection-wrap vertical">
              <div className="main-collection-left">
                <div className="shop-filter-wrap shop-filter-mobile">
                  <div className="head-for-mobile">
                    <strong>Bộ lọc</strong>
                    <button type="button" data-type="close-filter-mobile" title="Đóng">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="20"
                        height="20"
                        x="0"
                        y="0"
                        viewBox="0 0 64 64"
                        style={{ enableBackground: 'new 0 0 512 512' }}
                        xmlSpace="preserve"
                        className=""
                      >
                        <g>
                          <path
                            xmlns="http://www.w3.org/2000/svg"
                            d="m4.59 59.41a2 2 0 0 0 2.83 0l24.58-24.58 24.59 24.58a2 2 0 0 0 2.83-2.83l-24.59-24.58 24.58-24.59a2 2 0 0 0 -2.83-2.83l-24.58 24.59-24.59-24.58a2 2 0 0 0 -2.82 2.82l24.58 24.59-24.58 24.59a2 2 0 0 0 0 2.82z"
                            fill="#000000"
                            data-original="#000000"
                            className=""
                          ></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                  <div className="shop-filter-choose">
                    <label>
                      Bạn chọn:
                      <button type="button" data-type="shop-filter-choose-remove" title="Bỏ hết">
                        Bỏ hết
                      </button>
                    </label>
                    <ul className="shop-filter-choose-data"></ul>
                  </div>
                  <div className="shop-filter" data-type="vendor">
                    <h4>Thương hiệu sản phẩm</h4>
                    <div className="shop-filter-list">
                      <div className="shop-filter-item">
                        <input
                          type="checkbox"
                          id="shop-filter-vendor1"
                          data-group="vendor"
                          data-field="vendor"
                          data-text="F1GENZ"
                          value="(F1GENZ)"
                          data-operator="OR"
                        />
                        <label for="shop-filter-vendor1">F1GENZ</label>
                      </div>
                    </div>
                  </div>
                  <div className="shop-filter" data-type="type">
                    <h4>Loại sản phẩm</h4>
                    <div className="shop-filter-list">
                      <div className="shop-filter-item">
                        <input
                          type="checkbox"
                          id="shop-filter-type1"
                          data-group="type"
                          data-field="product_type"
                          data-text="Bàn"
                          value={4}
                          onClick={handleType}
                          data-operator="OR"
                        />
                        <label for="shop-filter-type1">Bàn</label>
                      </div>
                      <div className="shop-filter-item">
                        <input
                          type="checkbox"
                          id="shop-filter-type2"
                          data-group="type"
                          data-field="product_type"
                          data-text="Đèn"
                          value={2}
                          onClick={handleType}
                          data-operator="OR"
                        />
                        <label for="shop-filter-type2">Đèn</label>
                      </div>
                      <div className="shop-filter-item">
                        <input
                          type="checkbox"
                          id="shop-filter-type3"
                          data-group="type"
                          data-field="product_type"
                          data-text="Ghế"
                          value={3}
                          onClick={handleType}
                          data-operator="OR"
                        />
                        <label for="shop-filter-type3">Ghế</label>
                      </div>
                      <div className="shop-filter-item">
                        <input
                          type="checkbox"
                          id="shop-filter-type4"
                          data-group="type"
                          data-field="product_type"
                          data-text="Giá treo"
                          onClick={handleType}
                          value={1}
                          data-operator="OR"
                        />
                        <label for="shop-filter-type4">Giá treo</label>
                      </div>
                      <div className="shop-filter-item">
                        <input
                          type="checkbox"
                          id="shop-filter-type5"
                          data-group="type"
                          data-field="product_type"
                          data-text="Kệ treo tường"
                          value={5}
                          onClick={handleType}
                          data-operator="OR"
                        />
                        <label for="shop-filter-type5">Kệ treo tường</label>
                      </div>
                      <div className="shop-filter-item">
                        <input
                          type="checkbox"
                          id="shop-filter-type6"
                          data-group="type"
                          data-field="product_type"
                          data-text="Tủ quần áo"
                          value={0}
                          onClick={handleType}
                          data-operator="OR"
                        />
                        <label for="shop-filter-type6">Tủ quần áo</label>
                      </div>
                    </div>
                  </div>
                  <div className="shop-filter" data-type="variant1">
                    <h4>Kích thước</h4>
                    <div className="shop-filter-list">
                      <div className="shop-filter-item">
                        <input
                          type="checkbox"
                          id="shop-filter-tag-item11"
                          data-group="tag1"
                          data-text="33x40cm"
                          data-field="tag"
                          value="(33x40cm)"
                          data-operator="OR"
                        />
                        <label for="shop-filter-tag-item11">33x40cm</label>
                      </div>
                      <div className="shop-filter-item">
                        <input
                          type="checkbox"
                          id="shop-filter-tag-item12"
                          data-group="tag1"
                          data-text="40x30cm"
                          data-field="tag"
                          value="(40x30cm)"
                          data-operator="OR"
                        />
                        <label for="shop-filter-tag-item12">40x30cm</label>
                      </div>
                      <div className="shop-filter-item">
                        <input
                          type="checkbox"
                          id="shop-filter-tag-item13"
                          data-group="tag1"
                          data-text="100x30cm"
                          data-field="tag"
                          value="(100x30cm)"
                          data-operator="OR"
                        />
                        <label for="shop-filter-tag-item13">100x30cm</label>
                      </div>
                      <div className="shop-filter-item">
                        <input
                          type="checkbox"
                          id="shop-filter-tag-item14"
                          data-group="tag1"
                          data-text="50x30cm"
                          data-field="tag"
                          value="(50x30cm)"
                          data-operator="OR"
                        />
                        <label for="shop-filter-tag-item14">50x30cm</label>
                      </div>
                    </div>
                  </div>
                  <div className="shop-filter" data-type="variant3">
                    <h4>Màu sắc</h4>
                    <div className="shop-filter-list color">
                      <div className="shop-filter-item color xanh">
                        <input
                          type="checkbox"
                          id="shop-filter-tag-item31"
                          data-group="tag3"
                          data-field="tag"
                          data-text="Xanh"
                          value="(Xanh)"
                          data-operator="OR"
                        />
                        <label for="shop-filter-tag-item31" title="Xanh">
                          Xanh
                        </label>
                      </div>
                      <div className="shop-filter-item color do">
                        <input
                          type="checkbox"
                          id="shop-filter-tag-item32"
                          data-group="tag3"
                          data-field="tag"
                          data-text="Đỏ"
                          value="(Đỏ)"
                          data-operator="OR"
                        />
                        <label for="shop-filter-tag-item32" title="Đỏ">
                          Đỏ
                        </label>
                      </div>
                      <div className="shop-filter-item color den">
                        <input
                          type="checkbox"
                          id="shop-filter-tag-item33"
                          data-group="tag3"
                          data-field="tag"
                          data-text="Đen"
                          value="(Đen)"
                          data-operator="OR"
                        />
                        <label for="shop-filter-tag-item33" title="Đen">
                          Đen
                        </label>
                      </div>
                      <div className="shop-filter-item color tim">
                        <input
                          type="checkbox"
                          id="shop-filter-tag-item34"
                          data-group="tag3"
                          data-field="tag"
                          data-text="Tím"
                          value="(Tím)"
                          data-operator="OR"
                        />
                        <label for="shop-filter-tag-item34" title="Tím">
                          Tím
                        </label>
                      </div>
                      <div className="shop-filter-item color vang">
                        <input
                          type="checkbox"
                          id="shop-filter-tag-item35"
                          data-group="tag3"
                          data-field="tag"
                          data-text="Vàng"
                          value="(Vàng)"
                          data-operator="OR"
                        />
                        <label for="shop-filter-tag-item35" title="Vàng">
                          Vàng
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="shop-filter" data-type="price">
                    <h4>Giá sản phẩm</h4>
                    <div className="shop-filter-list">
                      <div className="shop-filter-item">
                        <input
                          type="checkbox"
                          id="shop-filter-price-item1"
                          data-group="price"
                          data-field="price_min"
                          data-text="Dưới 1.000.000₫"
                          value="(<1000000)"
                          data-operator="OR"
                          onClick={() => handlePriceRange([0, 999999])}
                        />
                        <label for="shop-filter-price-item1" title="Dưới 1.000.000₫">
                          Dưới 1.000.000₫
                        </label>
                      </div>
                      <div className="shop-filter-item">
                        <input
                          type="checkbox"
                          id="shop-filter-price-item2"
                          data-group="price"
                          data-field="price_min"
                          data-text="Từ 1.000.000₫ - 3.000.000₫"
                          value="(>=1000000 AND <=3000000)"
                          data-operator="OR"
                          onClick={() => handlePriceRange([1000000, 2999999])}
                        />
                        <label for="shop-filter-price-item2" title="Từ 1.000.000₫ - 3.000.000₫">
                          Từ 1.000.000₫ - 3.000.000₫
                        </label>
                      </div>
                      <div className="shop-filter-item">
                        <input
                          type="checkbox"
                          id="shop-filter-price-item3"
                          data-group="price"
                          data-field="price_min"
                          data-text="Từ 3.000.000₫ - 5.000.000₫"
                          value="(>=3000000 AND <=5000000)"
                          onClick={() => handlePriceRange([3000000, 4999999])}
                          data-operator="OR"
                        />
                        <label for="shop-filter-price-item3" title="Từ 3.000.000₫ - 5.000.000₫">
                          Từ 3.000.000₫ - 5.000.000₫
                        </label>
                      </div>
                      <div className="shop-filter-item">
                        <input
                          type="checkbox"
                          id="shop-filter-price-item4"
                          data-group="price"
                          data-field="price_min"
                          data-text="Từ 5.000.000₫ - 10.000.000₫"
                          value="(>=5000000 AND <=10000000)"
                          onClick={() => handlePriceRange([5000000, 10000000])}
                          data-operator="OR"
                        />
                        <label for="shop-filter-price-item4" title="Từ 5.000.000₫ - 10.000.000₫">
                          Từ 5.000.000₫ - 10.000.000₫
                        </label>
                      </div>
                      <div className="shop-filter-item">
                        <input
                          type="checkbox"
                          id="shop-filter-price-item5"
                          data-group="price"
                          data-field="price_min"
                          data-text="Trên 10.000.000₫"
                          value="(>10000000)"
                          data-operator="OR"
                        />
                        <label for="shop-filter-price-item5" title="Trên 10.000.000₫">
                          Trên 10.000.000₫
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-collection-right ">
                <div className="main-collection-head">
                  <div className="shop-sort-style">
                    <strong>Hiển thị</strong>
                    <div className="shop-filter-mobile-btn">
                      <button type="button" data-type="shop-filter-mobile-btn" title="Bộ lọc">
                        <FilterIcon />
                      </button>
                    </div>
                    <div className="shop-sort-item" data-show="two"></div>
                    <div
                      className={`shop-sort-item ${viewStyle === 'three' ? 'active' : ''}`}
                      data-show="three"
                      onClick={() => setViewStyle('three')}
                    ></div>
                    <div
                      className={`shop-sort-item ${viewStyle === 'four' ? 'active' : ''}`}
                      data-show="four"
                      onClick={() => setViewStyle('four')}
                    ></div>
                  </div>
                  <div className="shop-sort-by">
                    <label>Sắp xếp theo</label>
                    <select onChange={(e) => setSort(e.target.value)}>
                      <option value="">Mặc định</option>
                      <option value="name:asc">A → Z</option>
                      <option value="name:desc">Z → A</option>
                      <option value="price_min:asc">Giá tăng dần</option>
                      <option value="price_min:desc">Giá giảm dần</option>
                      {/* <option value="created_on:desc">Hàng mới nhất</option>
              <option value="created_on:asc">Hàng cũ nhất</option> */}
                    </select>
                  </div>
                </div>
                <div className={`main-collection-data ${viewStyle}`}>
                  {dataProducts.length ? (
                    dataProducts.map((product) => {
                      return <Product key={product.id} {...product} />;
                    })
                  ) : (
                    <p style={{ width: '100%', textAlign: 'center' }}>Chưa có sản phẩm nào trong mục này</p>
                  )}

                  <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={(event) => setPage(event.selected + 1)}
                    pageRangeDisplayed={5}
                    pageCount={Math.ceil(products.length / 20)}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    className="shop-pagination"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </CollectionsLayout>
  );
};

export default AllCollection;
