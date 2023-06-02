'use client';
import Head from 'next/head';
import Link from 'next/link';

import { useState, useEffect } from 'react';
import ProductLayout from '~/layouts/product';
import { useRouter } from 'next/router';
import { products } from '~/data/products';
import { categories } from '~/data/categories';

import Slider from 'react-slick';

import HeartIcon from '~/components/icon/heart';
import CartIcon from '~/components/icon/cart';
import MagnifyingGlassIcon from '~/components/icon/magnifyingGlass';
import ShareIcon from '~/components/icon/share';
import FacebookIcon from '~/components/icon/facebook';
import TwitterIcon from '~/components/icon/twitter';
import WhatsappIcon from '~/components/icon/whatsapp';
import LinkedinIcon from '~/components/icon/linkedin';
import Product from '~/components/Product';

const ProductPage = () => {
  const router = useRouter();

  const productUri = router.query.product;
  const [product, setProduct] = useState();
  const [amount, setAmount] = useState(1);

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  useEffect(() => {
    if (!router.isReady) return;

    setProduct(products.find((prod) => prod.uri === productUri));
  }, [router.isReady]);

  const slideSettings = {
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    draggable: true,
    arrows: true,
  };

  return (
    <ProductLayout>
      <main className="main-layout">
        <div className="main-product">
          <div className="main-product-breadcrumb" title={product?.name || 'Product'}>
            <div className="container">
              <div className="section-title-all">
                <h1>{product?.name || 'Product'}</h1>
              </div>
              <div className="breadcrumb-wrap">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Trang chủ</Link>
                  </li>

                  <li className="breadcrumb-item active">
                    <span style={{ color: 'black' }}> {product?.name || 'Product'}</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="main-product-wrap">
            <div className="main-product-left main-product-feature" datastyle="style1">
              <Slider {...slideSettings} slidesToShow={1} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                {product?.images.map((img, index) => (
                  <a
                    title="Bàn ăn 4 chân gia đình cao cấp"
                    key={index}
                    className="slick-slide slick-cloned"
                    style={{ width: '372px' }}
                  >
                    <picture>
                      <source media="(max-width: 480px)" srcset={img.src} datasrcset={img.src} />
                      <source media="(min-width: 481px)" srcset={img.src} datasrcset={img.src} />
                      <img
                        className="w-auto ls-is-cached lazyloaded"
                        width="600"
                        height="600"
                        src={img.src}
                        datasrc={img.src}
                        alt="Bàn ăn 4 chân gia đình cao cấp"
                      />
                    </picture>
                  </a>
                ))}
              </Slider>
              <Slider {...slideSettings} asNavFor={nav1} ref={(slider2) => setNav2(slider2)}>
                {product?.images.map((img, index) => (
                  <picture key={index}>
                    <source media="(max-width: 480px)" srcset={img.src} datasrcset={img.src} />
                    <source media="(min-width: 481px)" srcset={img.src} datasrcset={img.src} />
                    <img
                      className="w-auto ls-is-cached lazyloaded"
                      width="600"
                      height="600"
                      src={img.src}
                      datasrc={img.src}
                      alt="Bàn ăn 4 chân gia đình cao cấp"
                    />
                  </picture>
                ))}
              </Slider>
            </div>
            <div className="main-product-right">
              <div className="main-product-share">
                <button
                  type="button"
                  datatype="main-product-share-overplay"
                  className="main-product-share-overplay"
                  onClick={() => {
                    document.body.classList.remove('open-share');
                    document.body.classList.remove('open-noscroll');
                  }}
                ></button>
                <button
                  type="button"
                  datatype="main-product-share-open-popup"
                  className="main-product-share-cta"
                  title="Chia sẻ"
                  onClick={() => {
                    document.body.classList.toggle('open-share');
                    document.body.classList.toggle('open-noscroll');
                  }}
                >
                  <ShareIcon />
                </button>
                <div className="main-product-share-popup">
                  <div className="main-product-share-popup-head">
                    <label>Chia sẻ</label>
                    <a
                      target="_blank"
                      title="Chia sẻ Facebook"
                      href="https://www.facebook.com/sharer.php?u=https://f1genz-furniture.mysapo.net/ban-an-4-chan-gia-dinh-cao-cap"
                    >
                      <FacebookIcon />
                    </a>
                    <a
                      target="_blank"
                      title="Chia sẻ Twitter"
                      href="https://twitter.com/intent/tweet?url=https://f1genz-furniture.mysapo.net/ban-an-4-chan-gia-dinh-cao-cap"
                    >
                      <TwitterIcon />
                    </a>
                    <a
                      target="_blank"
                      title="Chia sẻ WhatsApp"
                      href="https://wa.me/?text=https://f1genz-furniture.mysapo.net/ban-an-4-chan-gia-dinh-cao-cap"
                    >
                      <WhatsappIcon />
                    </a>
                    <a
                      target="_blank"
                      title="Chia sẻ Linkedin"
                      href="https://www.linkedin.com/sharing/share-offsite/?url=https://f1genz-furniture.mysapo.net/ban-an-4-chan-gia-dinh-cao-cap"
                    >
                      <LinkedinIcon />
                    </a>
                  </div>
                  <hr />
                  <div className="main-product-share-popup-body">
                    <label>Sao chép đường dẫn</label>
                    <form>
                      <input
                        value="https://f1genz-furniture.mysapo.net/ban-an-4-chan-gia-dinh-cao-cap"
                        readOnly=""
                        id="main-product-share-copy"
                      />
                      <button type="button" title="Sao chép" datatype="main-product-share-copy">
                        Sao chép
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <h1 className="main-product-title ">{product?.name}</h1>
              <div className="main-product-info">
                <div className="main-product-info-sku">
                  <strong>Mã sản phẩm: </strong>
                  <span>Đang cập nhật</span>
                </div>
                <div className="main-product-info-barcode">
                  <strong>Barcode: </strong>
                  <span>Đang cập nhật</span>
                </div>
                <div className="main-product-info-vendor">
                  <strong>Thương hiệu: </strong>
                  <span>{product?.vendor}</span>
                </div>
                <div className="main-product-info-type">
                  <strong>Dòng sản phẩm: </strong>
                  <span>{categories.at(product?.group).name}</span>
                </div>
              </div>
              <div className="main-product-price">
                <div className="main-product-price-wrap">
                  <del className="main-product-price-compare">{product?.price.prev?.toLocaleString('vi')}₫</del>

                  <span className="main-product-price-this">{product?.price.current.toLocaleString('vi')}₫</span>

                  {product?.price.prev && (
                    <span className="main-product-price-discount">
                      Tiết kiệm {100 - Math.floor((product?.price.current / product?.price.prev) * 100)}%
                    </span>
                  )}
                </div>
              </div>

              <div className="main-product-fsale">
                <img
                  title="Flash Sale"
                  src="https://file.hstatic.net/200000306687/file/ezgif.com-gif-maker_40e5c36d115b4904babbebc78c90c34e.gif"
                  alt=" - Flash Sale"
                />
                <label>Bắt đầu sau</label>
                <div
                  className="main-product-fsale-countdown"
                  datastart="01/06/2023 16:00:00"
                  dataend="01/06/2023 20:00:00"
                >
                  <span className="hours">
                    <b>04</b>
                    <strong>Giờ</strong>
                  </span>
                  <span className="minutes">
                    <b>08</b>
                    <strong>Phút</strong>
                  </span>
                  <span className="seconds">
                    <b>10</b>
                    <strong>Giây</strong>
                  </span>
                </div>
              </div>
              <div className="d-none">
                <div className="selector-wrapper">
                  <label for="main-product-select-option-0">Color</label>
                  <select className="single-option-selector" dataoption="option1" id="main-product-select-option-0">
                    <option value="Đen">Đen</option>
                  </select>
                </div>
                <div className="selector-wrapper">
                  <label for="main-product-select-option-1">Material</label>
                  <select className="single-option-selector" dataoption="option2" id="main-product-select-option-1">
                    <option value="Quả óc chó">Quả óc chó</option>
                    <option value="Cây sồi">Cây sồi</option>
                  </select>
                </div>
                <select id="main-product-select" name="id" style={{ display: 'none' }}>
                  <option value="87903177">Đen / Quả óc chó</option>
                  <option value="87903178">Đen / Cây sồi</option>
                </select>
              </div>
              <div className="main-product-swatch">
                <div className="product-sw-line">
                  <div className="product-sw-select">
                    <div className="product-sw-title">Color</div>
                    <span className="product-sw-select-item sw-color">
                      <span className="colorHover"></span>
                      <input
                        type="radio"
                        datavalue="Đen"
                        name="product-choose-color"
                        dataname="option1"
                        value="Đen"
                        className="trigger-option-sw d-none"
                        id="product-choose-color-2"
                      />
                      <label
                        title="Đen"
                        for="product-choose-color-2"
                        className="product-sw-select-item-span sw-color-den-label"
                      >
                        <span
                          style={{
                            backgroundImage:
                              'url(//bizweb.dktcdn.net/thumb/small/100/482/001/products/2-cf9c3caad4d44eafb680ed2ce63a522c-6d1ddf61c7424f3c829d43ce91704f29.png?v=1683881102413)',
                          }}
                          className="sw-color-den"
                        ></span>
                      </label>
                    </span>
                  </div>
                </div>

                <div className="product-sw-line">
                  <div className="product-sw-select">
                    <div className="product-sw-title">Material</div>
                    <span className="product-sw-select-item">
                      <input
                        type="radio"
                        datavalue="Quả óc chó"
                        name="product-choose-material"
                        dataname="option2"
                        value="Quả óc chó"
                        className="trigger-option-sw d-none"
                        id="product-choose-material-2"
                      />
                      <label for="product-choose-material-2" className="product-sw-select-item-span">
                        Quả óc chó
                      </label>
                    </span>
                    <span className="product-sw-select-item">
                      <input
                        type="radio"
                        datavalue="Cây sồi"
                        name="product-choose-material"
                        dataname="option2"
                        value="Cây sồi"
                        className="trigger-option-sw d-none"
                        id="product-choose-material-3"
                      />
                      <label for="product-choose-material-3" className="product-sw-select-item-span">
                        Cây sồi
                      </label>
                    </span>
                  </div>
                </div>
              </div>
              <div className="main-product-quantity shop-quantity-wrap">
                <label>Số lượng</label>
                <div className="shop-quantity">
                  <button
                    type="button"
                    datatype="shop-quantity-minus"
                    title="Giảm"
                    onclick={() => setAmount(amount - 1 < 1 ? 1 : amount - 1)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    name="quantity"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value < 1 ? 1 : e.target.value)}
                    min="1"
                    readOnly=""
                  />
                  <button
                    type="button"
                    datatype="shop-quantity-plus"
                    title="Tăng"
                    onClick={() => setAmount(amount + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="main-product-coupon">
                <div className="shop-coupon">
                  <label>
                    Voucher ưu đãi:
                    <img
                      className=" lazyloaded"
                      src="https://bizweb.dktcdn.net/100/453/837/files/757cf2944edb87314287b95cd98fd731-1.gif?v=1654078396653"
                      datasrc="https://bizweb.dktcdn.net/100/453/837/files/757cf2944edb87314287b95cd98fd731-1.gif?v=1654078396653"
                      alt="coupon"
                    />
                  </label>
                  <ul>
                    <li className="shop-coupon-modal" datafancybox="" datasrc="#shop-coupon-popup">
                      <img
                        className=" ls-is-cached lazyloaded"
                        title="Coupon 1"
                        src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/shop_coupon_item_image_1.png?1684771044770"
                        datasrc="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/shop_coupon_item_image_1.png?1684771044770"
                        alt="cusPro-coupon-1"
                      />
                    </li>
                    <li className="shop-coupon-modal" datafancybox="" datasrc="#shop-coupon-popup">
                      <img
                        className=" ls-is-cached lazyloaded"
                        title="Coupon 2"
                        src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/shop_coupon_item_image_2.png?1684771044770"
                        datasrc="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/shop_coupon_item_image_2.png?1684771044770"
                        alt="cusPro-coupon-2"
                      />
                    </li>
                    <li className="shop-coupon-modal" datafancybox="" datasrc="#shop-coupon-popup">
                      <img
                        className=" ls-is-cached lazyloaded"
                        title="Coupon 3"
                        src="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/shop_coupon_item_image_3.png?1684771044770"
                        datasrc="https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/shop_coupon_item_image_3.png?1684771044770"
                        alt="cusPro-coupon-3"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="main-product-freeship">
                <div className="shop-freeship" datafreeship-price="50000000">
                  <div className="shop-freeship-bar">
                    <div className="shop-freeship-bar-main">
                      <span style={{ width: '0' }}></span>
                    </div>
                  </div>
                  <div className="shop-freeship-note">
                    Mua thêm <span>50.000.000₫</span> để được miễn phí giao hàng trên toàn quốc
                  </div>
                </div>
              </div>
              <div className="main-product-cta">
                <button type="button" datatype="main-product-add" title="Thêm vào giỏ">
                  <strong>Thêm vào giỏ</strong>
                  <span>Chọn ngay sản phẩm bạn yêu thích</span>
                </button>
                <button type="button" datatype="main-product-send-help" title="Tư vấn">
                  <strong>Tư vấn</strong>
                  <span>Tư vấn thiết kế nội thất tùy chọn</span>
                </button>
                <button
                  type="button"
                  datatype="main-product-send-info"
                  onclick="window.open('/pages/lien-he')"
                  title="Kết nối"
                >
                  <strong>Kết nối</strong>
                  <span>Chúng tôi luôn bên bạn 24/7</span>
                </button>
              </div>
            </div>
          </div>

          <div className="main-product-description">
            <div className="main-product-description-left ">
              <ul className="main-product-description-left-head">
                <li datatype="des" className="active">
                  <span>Mô tả sản phẩm</span>
                </li>
                <li datatype="page1">
                  <span>Chính sách bảo mật</span>
                </li>
                <li datatype="page2">
                  <span>Chính sách đổi trả</span>
                </li>
              </ul>
              <div className="main-product-description-left-item" datatype="des">
                <div className="main-product-description-item-data short">
                  <h3>
                    <strong>Chất lượng vượt trội</strong>
                  </h3>
                  <p>
                    <em>
                      Được sản xuất với khung được sản xuất tại Ý, lắp ráp và may tại Bỉ, Đức, Pháp, Mỹ, Nhật&nbsp;với
                      các loại vải và da cao cấp, chăn ga gối đệm của chúng tôi là 100% của Châu Âu. Không giống như các
                      đối thủ cạnh tranh của chúng tôi, các cơ chế của chúng tôi được thực hiện qua nhiều năm và sẽ
                      không thất bại.
                    </em>
                  </p>
                  <p>
                    <strong>F1GENZ Nội Thất</strong> có sẵn dưới dạng một chỗ ngồi hoặc hai chỗ ngồi và có thể kết hợp
                    với ghế dài hoặc ghế đôn.
                  </p>
                  <p>
                    Sau đây là những đặc điểm nên mua ghế tại <strong>F1GENZ Nội Thất</strong>:
                  </p>
                  <p>1.1. Thiết kế chắc chắn</p>
                  <p></p>
                  <p>
                    Lấy chất lượng sản phẩm là ưu thế cạnh tranh, các bộ&nbsp;
                    <strong>bàn ghế gỗ cao cấp</strong>&nbsp;thường sử dụng&nbsp;chất liệu&nbsp;gỗ tự nhiên, gỗ công
                    nghiệp cao cấp cùng công nghệ sản xuất hiện đại mang đến cho người dùng sản phẩm có chất lượng hoàn
                    hảo vượt trội.
                  </p>
                  <p>
                    Những mẫu bàn ghế ăn bằng gỗ đẹp có ưu điểm cứng cáp, thiết kế chắc chắn cùng khả năng chịu lực tốt
                    cho sản phẩm có độ bền cao.
                  </p>
                  <p>1.2. Tuổi thọ cao</p>
                  <p></p>
                  <p></p>
                  <p>
                    Sở hữu trong mình ưu điểm bền chắc trong thiết kế, các bộ bàn ghế gỗ cao cấp có tuổi thọ sản phẩm
                    cao và lâu dài cùng thời gian.
                  </p>
                  <p>
                    So với các mẫu bàn ăn gỗ được bày bán phổ biến trên thị trường hiện nay, bộ bàn ghế gỗ cao cấp cho
                    tuổi thọ sản phẩm cao hơn nhờ quá trình xử lý, tẩm sấy kĩ lưỡng và kiểm tra chọn lọc. Thường thì
                    những&nbsp;<strong>mẫu bàn ăn đẹp bằng gỗ tự nhiên</strong>&nbsp;sẽ cho tuổi thọ sản phẩm lên đến 30
                    năm. Còn&nbsp;bàn ghế gỗ công nghiệp&nbsp;cao cấp là 10 năm đến 15 năm.
                  </p>
                  <p>1.3. Tính thẩm mỹ cao</p>
                  <p>
                    Được thiết kế tỉ mỉ cùng những đường nét chạm khắc tinh xảo, bộ bàn ghế gỗ cao cấp sở hữu vẻ đẹp
                    sang trọng, đẳng cấp khiến bạn không thể bỏ qua ngay từ cái nhìn đầu tiên.
                  </p>
                  <p>
                    <strong>Những mẫu bàn ghế ăn bằng gỗ đẹp</strong>&nbsp;được thiết kế đa dạng mẫu mã, kiểu dáng cùng
                    màu gỗ đặc trưng nổi bật giúp tôn lên vẻ đẹp sang trọng và tinh tế mà không kém phần gần gũi, ấm áp
                    cho không gian phòng ăn gia đình. Không những mang vẻ đẹp thẩm mỹ cao, bộ bàn ăn cao cấp còn góp
                    phần thể hiện phong cách và cá tính của gia chủ.
                  </p>
                  <p>
                    Sử dụng chất liệu bằng gỗ có thể thiết kế nhiều mẫu mã đa dạng nên dựa vào sở thích và phong cách
                    nội thất mà bạn hãy lựa chọn bộ bàn ghế gỗ thiết kế phù hợp không gian phòng ăn gia đình.
                  </p>
                  <p>Xem thêm:&nbsp;Muốn sở hữu bộ bàn ăn đẹp cho chung cư chớ bỏ qua bài này</p>
                  <p>1.4. Giá bán tương đối cao</p>
                  <p></p>
                  <p></p>
                  <p>
                    Với tổng hợp những ưu điểm về tính thẩm mỹ cũng như chất lượng sản phẩm hoàn hảo, những bộ bàn ghế
                    gỗ cao cấp có giá thành tương đối cao. Giá thành của bộ bàn ghế sẽ dựa vào mức độ đắt đỏ của từng
                    loại gỗ, kiểu dáng thiết kế và kích thước của sản phẩm.
                  </p>
                  <p>
                    Tuy nhiên, để sử dụng lâu dài thì đây lại là lựa chọn mang tính kinh tế cho không gian ăn gia đình
                    bạn.
                  </p>
                  <p>Xét về tính thẩm mỹ:</p>
                  <p>
                    Bộ bàn ghế gỗ óc chó có tông màu nâu chủ đạo mang đến vẻ đẹp gần gũi, mộc mạc cho không gian. Thêm
                    các đường vân thẳng hoặc cuộn xoáy bắt mắt và ấn tượng tạo điểm nhấn nổi bật, tôn lên vẻ đẹp sang
                    trọng, đẳng cấp và tinh tế vô cùng cho căn phòng.
                  </p>
                  <p>Xét về chất lượng gỗ:</p>
                  <p>
                    Loại gỗ thượng hạng này với ưu điểm bền chắc, tuổi thọ sản phẩm cao chính là lựa chọn mà bạn không
                    bao giờ cảm thấy thất vọng.
                  </p>
                  <p style={{ textAlign: 'center' }}>
                    <img
                      className="w-auto"
                      width="1"
                      height="1"
                      alt="Bàn ăn 4 chân gia đình cao cấp"
                      src="https://file.hstatic.net/200000566183/file/123_1ed365727ba94eab835b7ca04ee8c369_master.jpeg"
                    />
                  </p>
                  <p>
                    Gỗ óc chó với tính năng ưu Việt, khắc phục hiệu quả những yếu tố bất lợi của điều kiện thời tiết
                    Việt Nam mang đến những sản phẩm có tính ổn định cao, không có các hiện tượng co ngót cong vênh, nứt
                    nẻ. Bởi vậy bạn hoàn toàn có thể yên tâm sử dụng loại gỗ này trong thời gian dài mà không phải lo
                    lắng về chất lượng của chúng.
                  </p>
                  <p style={{ textAlign: 'center' }}>
                    <img
                      className="w-auto"
                      width="1"
                      height="1"
                      alt="Bàn ăn 4 chân gia đình cao cấp"
                      src="https://file.hstatic.net/200000566183/file/blog-10_11493334d5614e2aa573139dc966f7e2_master.jpeg"
                    />
                  </p>
                  <p>
                    Ngoài ra, gỗ óc chó có tính dẻo dai, độ đàn hồi cao nên có khả năng uốn cong rất tốt. Chế tác nên
                    các bộ bàn ghế gỗ cao cấp thật đẹp mắt, tinh tế cùng những đường cong mềm mại.
                  </p>
                  <p>Video sản phẩm của chúng tôi tại Mỹ:&nbsp;</p>
                  <p>&nbsp;</p>
                  <p
                    className="youtube-embed-wrapper"
                    style={{ position: 'relative', paddingBottom: '56.25%', height: '0' }}
                  >
                    <iframe
                      width="100%"
                      height="400"
                      className="w-auto"
                      alt="Bàn ăn 4 chân gia đình cao cấp"
                      src="https://www.youtube.com/embed/sOz6kVUc-fc"
                      frameborder="0"
                      style={{ aspectRatio: '16 / 9', width: '100%', height: '100%', position: 'absolute' }}
                    ></iframe>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>
                      <em>
                        Cảm ơn bạn đã theo dõi thông tin từ chúng tôi, đừng ngừng ngại nhắn tin để chúng tôi hổ trợ.
                      </em>
                    </strong>
                  </p>
                  <p></p>
                </div>
                <a
                  href="javascript:void(0);"
                  className="main-product-description-item-readmore"
                  title="Xem đầy đủ Mô tả sản phẩm"
                >
                  Xem thêm
                </a>
              </div>
              <div className="main-product-description-left-item" datatype="page1">
                <div className="main-product-description-item-data">
                  <p>
                    Chính sách bảo mật này nhằm giúp Quý khách hiểu về cách website thu thập và sử dụng thông tin cá
                    nhân của mình thông qua việc sử dụng trang web, bao gồm mọi thông tin có thể cung cấp thông qua
                    trang web khi Quý khách đăng ký tài khoản, đăng ký nhận thông tin liên lạc từ chúng tôi, hoặc khi
                    Quý khách mua sản phẩm, dịch vụ, yêu cầu thêm thông tin dịch vụ từ chúng tôi.
                  </p>
                  <p>
                    Chúng tôi sử dụng thông tin cá nhân của Quý khách để liên lạc khi cần thiết liên quan đến việc Quý
                    khách sử dụng website của chúng tôi, để trả lời các câu hỏi hoặc gửi tài liệu và thông tin Quý khách
                    yêu cầu.
                  </p>
                  <p>
                    <span className="wysiwyg-font-size-medium">
                      Trang web của chúng tôi coi trọng việc bảo mật thông tin và sử dụng các biện pháp tốt nhất để bảo
                      vệ thông tin cũng như việc thanh toán của khách hàng.&nbsp;
                    </span>
                  </p>
                  <p>
                    <span className="wysiwyg-font-size-medium">
                      Mọi thông tin giao dịch sẽ được bảo mật ngoại trừ trong trường hợp cơ quan pháp luật yêu cầu.
                    </span>
                  </p>
                </div>
                <a
                  href="javascript:void(0);"
                  className="main-product-description-item-readmore"
                  title="Xem đầy đủ Chính sách bảo mật"
                  style={{ display: 'none' }}
                >
                  Xem thêm
                </a>
              </div>
              <div className="main-product-description-left-item" datatype="page2">
                <div className="main-product-description-item-data">
                  <p>
                    <strong>1. Điều kiện đổi trả</strong>
                  </p>
                  <p>
                    Quý Khách hàng cần kiểm tra tình trạng hàng hóa và có thể đổi hàng/ trả lại hàng&nbsp;ngay tại thời
                    điểm giao/nhận hàng&nbsp;trong những trường hợp sau:
                  </p>
                  <ul>
                    <li>
                      Hàng không đúng chủng loại, mẫu mã trong đơn hàng đã đặt hoặc như trên website tại thời điểm đặt
                      hàng.
                    </li>
                    <li>Không đủ số lượng, không đủ bộ như trong đơn hàng.</li>
                    <li>Tình trạng bên ngoài bị ảnh hưởng như rách bao bì, bong tróc, bể vỡ…</li>
                  </ul>
                  <p>
                    &nbsp;Khách hàng có trách nhiệm trình giấy tờ liên quan chứng minh sự thiếu sót trên để hoàn thành
                    việc&nbsp;hoàn trả/đổi trả hàng hóa.&nbsp;
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <strong>2. Quy định về thời gian thông báo và gửi sản phẩm đổi trả</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>Thời gian thông báo đổi trả</strong>:&nbsp;trong vòng 48h kể từ khi nhận sản phẩm đối với
                      trường hợp sản phẩm thiếu phụ kiện, quà tặng hoặc bể vỡ.
                    </li>
                    <li>
                      <strong>Thời gian gửi chuyển trả sản phẩm</strong>: trong vòng 14 ngày kể từ khi nhận sản phẩm.
                    </li>
                    <li>
                      <strong>Địa điểm đổi trả sản phẩm</strong>: Khách hàng có thể mang hàng trực tiếp đến văn phòng/
                      cửa hàng của chúng tôi hoặc chuyển qua đường bưu điện.
                    </li>
                  </ul>
                  <p>
                    Trong trường hợp Quý Khách hàng có ý kiến đóng góp/khiếu nại liên quan đến chất lượng sản phẩm, Quý
                    Khách hàng vui lòng liên hệ đường dây chăm sóc khách hàng&nbsp;của chúng tôi.
                  </p>
                </div>
                <a
                  href="javascript:void(0);"
                  className="main-product-description-item-readmore"
                  title="Xem đầy đủ Chính sách đổi trả"
                  style={{ display: 'none' }}
                >
                  Xem thêm
                </a>
              </div>
            </div>
            <div className="main-product-description-right">
              <label>
                <span>Thông số kỹ thuật</span>
              </label>
              <div className="main-product-description-item-data">
                <div className="table-responsive">
                  <table className="table table-striped table-bordered">
                    <tbody>
                      <tr>
                        <td>Chất liệu</td>
                        <td>18x5x10 cm</td>
                      </tr>
                      <tr>
                        <td>Kích thước tổng thể</td>
                        <td>Acrylic</td>
                      </tr>
                      <tr>
                        <td>Dây đeo Chất Liệu</td>
                        <td>kim loại Acrylic</td>
                      </tr>
                      <tr>
                        <td>Trọng lượng</td>
                        <td>0.8KG</td>
                      </tr>
                      <tr>
                        <td>Kiểu khóa</td>
                        <td>Khóa kéo</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3></h3>
              </div>
            </div>
          </div>

          <div className="main-product-relate">
            <div className="section-title-all">
              <span>Sản phẩm liên quan</span>
            </div>
            <Slider {...slideSettings}>
              {products
                .filter((prod) => prod.group === 4)
                .map((prod) => (
                  <Product {...prod} key={prod.id} />
                ))}
            </Slider>
          </div>

          <div className="main-product-seen">
            <div className="section-title-all">
              <span>Sản phẩm đã xem</span>
            </div>
            <Slider {...slideSettings}>
              {products.slice(4, 13).map((prod) => (
                <Product key={prod.id} {...prod} />
              ))}
            </Slider>
          </div>
        </div>
      </main>
    </ProductLayout>
  );
};

export default ProductPage;
