import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-neutral-100 text-sm text-gray-700 py-12'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Grid columns */}
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-10'>
          {/* DỊCH VỤ KHÁCH HÀNG */}
          <div>
            <h3 className='font-semibold mb-2'>DỊCH VỤ KHÁCH HÀNG</h3>
            <ul className='space-y-1'>
              <li>Trung Tâm Trợ Giúp Shopee</li>
              <li>Shopee Blog</li>
              <li>Shopee Mall</li>
              <li>Hướng Dẫn Mua Hàng</li>
              <li>Hướng Dẫn Bán Hàng</li>
              <li>Ví ShopeePay</li>
              <li>Shopee Xu</li>
              <li>Đơn Hàng</li>
              <li>Trả Hàng/Hoàn Tiền</li>
              <li>Liên Hệ Shopee</li>
              <li>Chính Sách Bảo Hành</li>
            </ul>
          </div>

          {/* SHOPEE VIỆT NAM */}
          <div>
            <h3 className='font-semibold mb-2'>SHOPEE VIỆT NAM</h3>
            <ul className='space-y-1'>
              <li>Về Shopee</li>
              <li>Tuyển Dụng</li>
              <li>Điều Khoản Shopee</li>
              <li>Chính Sách Bảo Mật</li>
              <li>Shopee Mall</li>
              <li>Kênh Người Bán</li>
              <li>Flash Sale</li>
              <li>Tiếp Thị Liên Kết</li>
              <li>Liên Hệ Truyền Thông</li>
            </ul>
          </div>

          {/* THANH TOÁN */}
          <div>
            <h3 className='font-semibold mb-2'>THANH TOÁN</h3>
            <div className='grid grid-cols-3 gap-2'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg'
                alt='visa'
                className='w-12 h-auto'
              />
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png'
                alt='mastercard'
                className='w-12 h-auto'
              />
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/2/2a/Amex-logo.svg'
                alt='amex'
                className='w-12 h-auto'
              />
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/f/f4/JCB_credit_card_logo.svg'
                alt='jcb'
                className='w-12 h-auto'
              />
              <img
                src='https://logowik.com/content/uploads/images/shopeepay6278.jpg'
                alt='shopeepay'
                className='w-12 h-auto'
              />
              <img
                src='https://cdn.worldvectorlogo.com/logos/installment.svg'
                alt='installment'
                className='w-12 h-auto'
              />
            </div>
          </div>

          {/* ĐƠN VỊ VẬN CHUYỂN */}
          <div>
            <h3 className='font-semibold mb-2'>ĐƠN VỊ VẬN CHUYỂN</h3>
            <div className='grid grid-cols-3 gap-2'>
              <img
                src='https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-Viettel-Post-Red.png'
                alt='viettel post'
                className='w-14 h-auto'
              />
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/3/32/Giao_hang_nhanh_logo.png'
                alt='GHN'
                className='w-14 h-auto'
              />
              <img
                src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-jt-512.png'
                alt='J&T'
                className='w-10 h-auto'
              />
              <img
                src='https://seeklogo.com/images/G/grabexpress-logo-FCBBFD34A6-seeklogo.com.png'
                alt='GrabExpress'
                className='w-14 h-auto'
              />
              <img
                src='https://static.ninjavan.co/assets/common/images/nv_logo.svg'
                alt='Ninja Van'
                className='w-16 h-auto'
              />
              <img src='https://static.be.com.vn/logo/og-be.png' alt='Be' className='w-14 h-auto' />
            </div>
          </div>

          {/* THEO DÕI SHOPEE */}
          <div>
            <h3 className='font-semibold mb-2'>THEO DÕI SHOPEE</h3>
            <ul className='space-y-1'>
              <li>
                <a href='https://facebook.com'>Facebook</a>
              </li>
              <li>
                <a href='https://instagram.com'>Instagram</a>
              </li>
              <li>
                <a href='https://linkedin.com'>LinkedIn</a>
              </li>
            </ul>
          </div>

          {/* TẢI ỨNG DỤNG SHOPEE */}
          <div>
            <h3 className='font-semibold mb-2'>TẢI ỨNG DỤNG SHOPEE</h3>
            <div className='flex gap-2'>
              <img
                src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/7b5fa188df9d807d6afbb89ab7b0e0b5.png'
                alt='QR'
                className='w-16 h-16'
              />
              <div className='flex flex-col gap-1'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/5/5f/Available_on_the_App_Store_%28black%29.png'
                  alt='App Store'
                  className='w-24'
                />
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg'
                  alt='Google Play'
                  className='w-24'
                />
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/d/d1/Huawei_AppGallery_Logo.svg'
                  alt='AppGallery'
                  className='w-24'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quốc gia & Khu vực */}
        <div className='border-t pt-6 mt-8 text-center text-xs text-gray-500 space-y-4'>
          <div className='flex flex-wrap justify-center gap-4'>
            <a href='#' className='hover:underline'>
              CHÍNH SÁCH BẢO MẬT
            </a>
            <a href='#' className='hover:underline'>
              QUY CHẾ HOẠT ĐỘNG
            </a>
            <a href='#' className='hover:underline'>
              CHÍNH SÁCH VẬN CHUYỂN
            </a>
            <a href='#' className='hover:underline'>
              CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN
            </a>
          </div>

          <div>© 2025 Shopee. Tất cả các quyền được bảo lưu.</div>

          <div>
            Quốc gia & Khu vực: Singapore | Indonesia | Thái Lan | Malaysia | Việt Nam | Philippines | Brazil | México |
            Colombia | Chile | Đài Loan
          </div>

          <div className='flex justify-center gap-6 mt-4 flex-wrap'>
            <img
              src='https://cdn1.tuoitre.vn/zoom/480_300/2020/4/3/dadangkybocongthuong-15858839987011801269717-crop-15858840054791186497320.png'
              alt='Đã đăng ký Bộ Công Thương'
              className='h-10'
            />
            <img
              src='https://inkythuatso.com/uploads/thumbnails/800/2022/05/logo-dadangky-bo-cong-thuong-inkythuatso-13-15-05-54.jpg'
              alt='Bộ Công Thương'
              className='h-10'
            />
            <img
              src='https://cdn.haitrieu.com/wp-content/uploads/2022/12/Logo-Shopee-Mall-Do.png'
              alt='Shopee Mall'
              className='h-10'
            />
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-6 leading-relaxed">
  <p><strong>Công ty TNHH Shopee</strong></p>
  <p>
    Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh,
    Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Chăm sóc khách hàng: Gọi tổng đài Shopee (miễn phí) 
    hoặc Trò chuyện với Shopee ngay trên Trung tâm trợ giúp
  </p>
  <p>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Bùi Anh Tuấn</p>
  <p>
    Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015
  </p>
  <p>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</p>
</div>

    </footer>
  )
}
