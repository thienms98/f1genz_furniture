'use client';
import { useState, useEffect } from 'react';
import CollectionsLayout from '~/layouts/collections';

import ReactPaginate from 'react-paginate';
import Product from '~/components/Product';
// icon
import HeartIcon from '~/static/images/heart';
import CartIcon from '~/static/images/cart';
import FilterIcon from '~/static/images/filter';
import MagnifyingGlassIcon from '~/static/images/magnifyingGlass';
import { products } from '~/data/products';

const AllCollection = () => {
  const offset = 20;
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('');
  const [filter, setFilter] = useState(null);
  const [dataProducts, setDataProducts] = useState([...products].slice(0, offset));

  const [viewStyle, setViewStyle] = useState('four');

  useEffect(() => {
    let prods = [...products];
    prods = sortProd(prods, sort);

    setDataProducts(prods.slice(offset * (page - 1), offset * page));
  }, [page, sort, filter]);

  const sortProd = (prods, sortType) => {
    switch (sortType) {
      case 'name:asc':
        return prods.sort((a, b) => a.name - b.name);
      case 'name:desc':
        return prods.sort((a, b) => b.name - a.name);
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

  return (
    <CollectionsLayout>
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
    </CollectionsLayout>
  );
};

export default AllCollection;
