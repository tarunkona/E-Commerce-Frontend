import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">          
            <p>Welcome to SHOPPR, your ultimate destination for fashion, electronics, and home essentials. We offer a curated selection of high-quality products designed to cater to your every need, from the latest trends in apparel to cutting-edge technology and stylish home décor. Our user-friendly website ensures a seamless shopping experience with detailed product descriptions, customer reviews, and easy navigation. Enjoy secure payment options, fast shipping, and exceptional customer service as you explore our diverse collection. Discover the perfect items to enhance your lifestyle, all at competitive prices, and elevate your shopping experience with SHOPPR.</p>
        </div>
    </div>
  )
}

export default DescriptionBox