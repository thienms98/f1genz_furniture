export const menu = [
  {
    id: 'category-menu',
    title: 'Danh mục menu',
    children: [
      {
        title: 'Sofa và Ghế',
        children: [
          {
            title: 'Sofa',
            children: [
              {
                title: 'Sofa da',
                url: '/collections/sofa_n_ghe',
              },
              {
                title: 'Sofa giường',
                url: '/collections/sofa_n_ghe',
              },
              {
                title: 'Sofa gỗ',
                url: '/collections/sofa_n_ghe',
              },
              {
                title: 'Sofa phòng khách',
                url: '/collections/sofa_n_ghe',
              },
              {
                title: 'Sofa giá rẻ',
                url: '/collections/sofa_n_ghe',
              },
            ],
          },
          {
            title: 'Sofa góc',
            children: [
              {
                title: 'Sofa cao cấp',
                url: '/collections/sofa_n_ghe',
              },
              {
                title: 'Sofa nỉ',
                url: '/collections/sofa_n_ghe',
              },
              {
                title: 'Sofa chung cử',
                url: '/collections/sofa_n_ghe',
              },
              {
                title: 'Sofa thư giãn',
                url: '/collections/sofa_n_ghe',
              },
              {
                title: 'Sofa văn phòng',
                url: '/collections/sofa_n_ghe',
              },
            ],
          },
          {
            title: 'Ghế dài & đôn',
            children: [
              { title: 'Ghế dài đơn', url: '/collections/sofa_n_ghe' },
              { title: 'Ghế dài 2 đầu', url: '/collections/sofa_n_ghe' },
              { title: 'Ghế dài massage', url: '/collections/sofa_n_ghe' },
              { title: 'Ghế dài có tựa đầu', url: '/collections/sofa_n_ghe' },
            ],
          },
          {
            title: 'Ghế thư giãn',
            children: [
              { title: 'Ghế bập bênh', url: '/collections/sofa_n_ghe' },
              { title: 'Ghế xoay 360', url: '/collections/sofa_n_ghe' },
              { title: 'Ghế massage thư giãn black', url: '/collections/sofa_n_ghe' },
              { title: 'Ghế lười', url: '/collections/sofa_n_ghe' },
            ],
          },
        ],
      },
      {
        title: 'Bàn',
        children: [
          { title: 'Bàn ăn', url: '/collections/ban' },
          { title: 'Bàn học', url: '/collections/ban' },
          { title: 'Bàn trang điểm', url: '/collections/ban' },
          { title: 'Bàn phòng khách', url: '/collections/ban}' },
        ],
      },
      { title: 'Giường ngủ', url: '/collections/giuong' },
      { title: 'Tủ và kệ', url: '/collections/tu-va-ke' },
      { title: 'Trang trí', url: '/collections/trang-tri' },
    ],
  },
  {
    id: 'mid-menu',
    children: [
      { title: 'Tất cả sản phẩm', url: '/collections/all' },
      {
        title: 'Danh mục sản phẩm',
        children: [
          { title: 'Danh mục Style 1', url: '/collections/all?view=vertical' },
          { title: 'Danh mục Style 2', urll: '/collections/all?view=horizontal' },
        ],
      },
      {
        title: 'Chi tiết sản phẩm',
        children: [
          { title: 'Chi tiết  Style 1', url: '/tu-quan-ao-3-cua-2-ngan-f1genz-cao-cap-4?view=style1' },
          { title: 'Chi tiết  Style 2', url: '/tu-quan-ao-3-cua-2-ngan-f1genz-cao-cap-4?view=style2' },
          { title: 'Chi tiết  Style 3', url: '/tu-quan-ao-3-cua-2-ngan-f1genz-cao-cap-4?view=style3' },
        ],
      },
      { title: 'Blog', url: '/news' },
      { title: 'Liên hệ', url: '/lien-he' },
    ],
  },
  {
    id: 'foot-menu',
    children: [
      {
        title: 'Dịch vụ khách hàng',
        children: [
          { title: 'Giới thiệu', url: '/gioi-thieu' },
          { title: 'Chính sách đổi trả', url: '/chinh-sach-doi-tra' },
          { title: 'Chính sách bảo mật', url: '/chinh-sach-bao-mat' },
          { title: 'Chính sách khiếu nại', url: '/chinh-sach-khieu-nai' },
          { title: 'Điều khoản dịch vụ', url: '/dieu-khoan-dich-vu' },
          { title: 'Liên hệ', url: '/lien-he' },
        ],
      },
      {
        title: 'Thông tin',
        children: [
          { title: 'Tất cả sản phẩm', url: '/collections/all' },
          { title: 'Nội thất phòng ngủ', url: '/collections/all' },
          { title: 'Nội thất phòng bếp', url: '/collections/all' },
          { title: 'Nội thất phòng khách', url: '/collections/all' },
          { title: 'Nội thất thông minh', url: '/collections/all' },
        ],
      },
      {
        title: 'Về chúng tôi',
        children: [
          { title: 'Giới thiệu', url: '/gioi-thieu' },
          { title: 'Chính sách đổi trả', url: '/chinh-sach-doi-tra' },
          { title: 'Chính sách bảo mật', url: '/chinh-sach-bao-mat' },
          { title: 'Chính sách khiếu nại', url: '/chinh-sach-khieu-nai' },
          { title: 'Điều khoản dịch vụ', url: '/dieu-khoan-dich-vu' },
          { title: 'Liên hệ', url: '/lien-he' },
        ],
      },
      {
        title: 'Liên hệ',
        children: [
          {
            title:
              'Chúng tôi hướng tới sự khác biệt trong từng chi tiết, tạo nên ngôn ngữ riêng cho bày trí nội thất, đem đến một không gian tinh tế trong từng đường nét. Nhưng trên tất cả, sự tin tưởng của khách hàng là điều F1GENZ FURNITURE 2 đề cao nhất, và đây cũng là tôn chỉ hoạt động của công ty. Do đó, đến với chúng tôi, hơn cả một không gian hoàn mỹ, khách...',
          },
        ],
      },
    ],
  },
];

// export const m = {
//   'Danh mục menu': {
//     'Sofa và Ghế': {
//       Sofa: {
//         'Sofa da': '/collections/sofa_n_ghe',
//         'Sofa giường': '/collections/sofa_n_ghe',
//         'Sofa gỗ': '/collections/sofa_n_ghe',
//         'Sofa phòng khách': '/collections/sofa_n_ghe',
//         'Sofa giá rẻ': '/collections/sofa_n_ghe',
//       },
//       'Sofa góc': {
//         'Sofa cao cấp': '/collections/sofa_n_ghe',
//         'Sofa nỉ': '/collections/sofa_n_ghe',
//         'Sofa chung cử': '/collections/sofa_n_ghe',
//         'Sofa thư giãn': '/collections/sofa_n_ghe',
//         'Sofa văn phòng': '/collections/sofa_n_ghe',
//       },
//       'Ghế dài & đôn': {
//         'Ghế dài đơn': '/collections/sofa_n_ghe',
//         'Ghế dài 2 đầu': '/collections/sofa_n_ghe',
//         'Ghế dài massage': '/collections/sofa_n_ghe',
//         'Ghế dài có tựa đầu': '/collections/sofa_n_ghe',
//       },
//       'Ghế thư giãn': {
//         'Ghế bập bênh': '/collections/sofa_n_ghe',
//         'Ghế xoay 360': '/collections/sofa_n_ghe',
//         'Ghế massage thư giãn black': '/collections/sofa_n_ghe',
//         'Ghế lười': '/collections/sofa_n_ghe',
//       },
//     },
//     Bàn: {
//       'Bàn ăn': '/collections/ban',
//       'Bàn học': '/collections/ban',
//       'Bàn trang điểm': '/collections/ban',
//       'Bàn phòng khách': '/collections/ban',
//     },
//     'Giường ngủ': '/collections/giuong',
//     'Tủ và kệ': '/collections/tu-va-ke',
//     'Trang trí': '/collections/trang-tri',
//   },
//   middleMenu: {
//     'Tất cả sản phẩm': '/collections/all',
//     'Danh mục sản phẩm': {
//       'Danh mục Style 1': '/collections/all?view=vertical',
//       'Danh mục Style 2': '/collections/all?view=horizontal',
//     },
//     'Chi tiết sản phẩm': {
//       'Chi tiết  Style 1': '/tu-quan-ao-3-cua-2-ngan-f1genz-cao-cap-4?view=style1',
//       'Chi tiết  Style 2': '/tu-quan-ao-3-cua-2-ngan-f1genz-cao-cap-4?view=style2',
//       'Chi tiết  Style 3': '/tu-quan-ao-3-cua-2-ngan-f1genz-cao-cap-4?view=style3',
//     },
//     Blog: '/news',
//     'Liên hệ': '/lien-he',
//   },
//   footer: {
//     'Dịch vụ khách hàng': {
//       'Giới thiệu': '/gioi-thieu',
//       'Chính sách đổi trả': '/chinh-sach-doi-tra',
//       'Chính sách bảo mật': '/chinh-sach-bao-mat',
//       'Chính sách khiếu nại': '/chinh-sach-khieu-nai',
//       'Điều khoản dịch vụ': '/dieu-khoan-dich-vu',
//       'Liên hệ': '/lien-he',
//     },
//     'Thông tin': {
//       'Tất cả sản phẩm': '/collections/all',
//       'Nội thất phòng ngủ': '/collections/all',
//       'Nội thất phòng bếp': '/collections/all',
//       'Nội thất phòng khách': '/collections/all',
//       'Nội thất thông minh': '/collections/all',
//     },
//     'Về chúng tôi': {
//       'Giới thiệu': '/gioi-thieu',
//       'Chính sách đổi trả': '/chinh-sach-doi-tra',
//       'Chính sách bảo mật': '/chinh-sach-bao-mat',
//       'Chính sách khiếu nại': '/chinh-sach-khieu-nai',
//       'Điều khoản dịch vụ': '/dieu-khoan-dich-vu',
//       'Liên hệ': '/lien-he',
//     },
//     'Liên hệ':
//       'Chúng tôi hướng tới sự khác biệt trong từng chi tiết, tạo nên ngôn ngữ riêng cho bày trí nội thất, đem đến một không gian tinh tế trong từng đường nét. Nhưng trên tất cả, sự tin tưởng của khách hàng là điều F1GENZ FURNITURE 2 đề cao nhất, và đây cũng là tôn chỉ hoạt động của công ty. Do đó, đến với chúng tôi, hơn cả một không gian hoàn mỹ, khách...',
//   },
// };
