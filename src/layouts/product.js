import React from 'react';
import Head from 'next/head';

import HomeLayout from '.';

const Product = ({ children }) => {
  return (
    <HomeLayout>
      <Head>
        <link rel="stylesheet" href="/css/product_page.css" type="text/css" media="all" />
      </Head>
      {children}

      <div className="modal fade" role="dialog" id="preOrder-modal">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <h5>Tư vấn thiết kế giao diện</h5>
              <div className="preOrder-modal-wrap">
                <form method="post" action="/postcontact" id="contact" accept-charset="UTF-8">
                  <input name="FormType" type="hidden" value="contact" />
                  <input name="utf8" type="hidden" value="true" />
                  <input
                    type="hidden"
                    id="Token-fb378054ecf042c091210fe34b93bb3d"
                    name="Token"
                    value="03AL8dmw9e1a7IYLpJM7gFiPZZO80qly1EaBY8sM50w4f1Uo2E0_hZbQ6bvJYkki82yxM40MSHs_EIuMyce4H2tRTlcR12WMTslO6aqWSuzD66szvz0G92aL4Sq4C5z6rBMa7UVWTLbberU-joKcmvUQw6D7FeZvdhmHmgrxiEC5hH-fPHxnoUQZG5DVvEKcS9VUVdHz-gV6AHxJsm-3poti3eebM1gignReElq1CRxX-Yc3-A0-tYUY49-BW8dEdqSMr5uJBC3-HywNgZS8lqF3x3yaemAVe5EC1eDyV-8cBy_c4Qpg95B44mLGrUz4DKtJ7e3GlV0y23ZXs2MoOE2crPLN_g8q0_7wgYb0Hyix8hDRaMZovoXIwUJT3XabqucKdRp7-POTvO4vBby1jrRfRLjou1qvA-zS4BlZPwwSjkkxdlUBey9u54wGnAumwjhl_YXGnOIg3-N5dt86Ez5XlCEm8oLkVvmd_8Bpe5ZXLdQ1aCnsvlxar1ZWlfziKnczPNLMjUsq1TQIR7LtKtOdKJslypUn0iqf-YtaJazgMGOkE27Li-Vzs"
                  />
                  <input required="" type="text" name="contact[name]" value="" placeholder="Họ tên của bạn" />
                  <input required="" type="email" name="contact[email]" value="" placeholder="Email của bạn" />
                  <input required="" type="number" name="contact[phone]" value="" placeholder="Số điện thoại của bạn" />
                  <input type="text" readOnly="" value="" id="preOrder-hard" />
                  <textarea name="contact[body]" placeholder="Nhập nội dung bạn cần tư vấn"></textarea>
                  <button type="submit" title="Đăng ký">
                    Đăng ký
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Product;
