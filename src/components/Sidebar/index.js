import React from 'react';

const Sidebar = () => {
  return (
    <div class="main-collection-left">
      <div class="shop-filter-wrap shop-filter-mobile">
        <div class="head-for-mobile">
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
              class=""
            >
              <g>
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="m4.59 59.41a2 2 0 0 0 2.83 0l24.58-24.58 24.59 24.58a2 2 0 0 0 2.83-2.83l-24.59-24.58 24.58-24.59a2 2 0 0 0 -2.83-2.83l-24.58 24.59-24.59-24.58a2 2 0 0 0 -2.82 2.82l24.58 24.59-24.58 24.59a2 2 0 0 0 0 2.82z"
                  fill="#000000"
                  data-original="#000000"
                  class=""
                ></path>
              </g>
            </svg>
          </button>
        </div>
        <div class="shop-filter-choose hidden">
          <label>
            Bạn chọn:
            <button type="button" data-type="shop-filter-choose-remove" title="Bỏ hết">
              Bỏ hết
            </button>
          </label>
          <ul class="shop-filter-choose-data"></ul>
        </div>
        <div class="shop-filter" data-type="vendor">
          <h4>Thương hiệu sản phẩm</h4>
          <div class="shop-filter-list">
            <div class="shop-filter-item">
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
        <div class="shop-filter" data-type="type">
          <h4>Loại sản phẩm</h4>
          <div class="shop-filter-list">
            <div class="shop-filter-item">
              <input
                type="checkbox"
                id="shop-filter-type1"
                data-group="type"
                data-field="product_type"
                data-text="Bàn"
                value="(Bàn)"
                data-operator="OR"
              />
              <label for="shop-filter-type1">Bàn</label>
            </div>
            <div class="shop-filter-item">
              <input
                type="checkbox"
                id="shop-filter-type2"
                data-group="type"
                data-field="product_type"
                data-text="Đèn"
                value="(Đèn)"
                data-operator="OR"
              />
              <label for="shop-filter-type2">Đèn</label>
            </div>
            <div class="shop-filter-item">
              <input
                type="checkbox"
                id="shop-filter-type3"
                data-group="type"
                data-field="product_type"
                data-text="Ghế"
                value="(Ghế)"
                data-operator="OR"
              />
              <label for="shop-filter-type3">Ghế</label>
            </div>
            <div class="shop-filter-item">
              <input
                type="checkbox"
                id="shop-filter-type4"
                data-group="type"
                data-field="product_type"
                data-text="Giá treo"
                value="(Giá treo)"
                data-operator="OR"
              />
              <label for="shop-filter-type4">Giá treo</label>
            </div>
            <div class="shop-filter-item">
              <input
                type="checkbox"
                id="shop-filter-type5"
                data-group="type"
                data-field="product_type"
                data-text="Kệ treo tường"
                value="(Kệ treo tường)"
                data-operator="OR"
              />
              <label for="shop-filter-type5">Kệ treo tường</label>
            </div>
            <div class="shop-filter-item">
              <input
                type="checkbox"
                id="shop-filter-type6"
                data-group="type"
                data-field="product_type"
                data-text="Tủ quần áo"
                value="(Tủ quần áo)"
                data-operator="OR"
              />
              <label for="shop-filter-type6">Tủ quần áo</label>
            </div>
          </div>
        </div>
        <div class="shop-filter" data-type="variant1">
          <h4>Kích thước</h4>
          <div class="shop-filter-list">
            <div class="shop-filter-item">
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
            <div class="shop-filter-item">
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
            <div class="shop-filter-item">
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
            <div class="shop-filter-item">
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
        <div class="shop-filter" data-type="variant3">
          <h4>Màu sắc</h4>
          <div class="shop-filter-list color">
            <div class="shop-filter-item color xanh">
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
            <div class="shop-filter-item color do">
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
            <div class="shop-filter-item color den">
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
            <div class="shop-filter-item color tim">
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
            <div class="shop-filter-item color vang">
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

        <div class="shop-filter" data-type="price">
          <h4>Giá sản phẩm</h4>
          <div class="shop-filter-list">
            <div class="shop-filter-item">
              <input
                type="checkbox"
                id="shop-filter-price-item1"
                data-group="price"
                data-field="price_min"
                data-text="Dưới 1.000.000₫"
                value="(<1000000)"
                data-operator="OR"
              />
              <label for="shop-filter-price-item1" title="Dưới 1.000.000₫">
                Dưới 1.000.000₫
              </label>
            </div>
            <div class="shop-filter-item">
              <input
                type="checkbox"
                id="shop-filter-price-item2"
                data-group="price"
                data-field="price_min"
                data-text="Từ 1.000.000₫ - 3.000.000₫"
                value="(>=1000000 AND <=3000000)"
                data-operator="OR"
              />
              <label for="shop-filter-price-item2" title="Từ 1.000.000₫ - 3.000.000₫">
                Từ 1.000.000₫ - 3.000.000₫
              </label>
            </div>
            <div class="shop-filter-item">
              <input
                type="checkbox"
                id="shop-filter-price-item3"
                data-group="price"
                data-field="price_min"
                data-text="Từ 3.000.000₫ - 5.000.000₫"
                value="(>=3000000 AND <=5000000)"
                data-operator="OR"
              />
              <label for="shop-filter-price-item3" title="Từ 3.000.000₫ - 5.000.000₫">
                Từ 3.000.000₫ - 5.000.000₫
              </label>
            </div>
            <div class="shop-filter-item">
              <input
                type="checkbox"
                id="shop-filter-price-item4"
                data-group="price"
                data-field="price_min"
                data-text="Từ 5.000.000₫ - 10.000.000₫"
                value="(>=5000000 AND <=10000000)"
                data-operator="OR"
              />
              <label for="shop-filter-price-item4" title="Từ 5.000.000₫ - 10.000.000₫">
                Từ 5.000.000₫ - 10.000.000₫
              </label>
            </div>
            <div class="shop-filter-item">
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
  );
};

export default Sidebar;
