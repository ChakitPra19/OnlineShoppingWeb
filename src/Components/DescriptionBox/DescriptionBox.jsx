import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is a dynamic online platform designed to facilitate the buying 
                and selling of goods and services. It serves as a virtual storefront where businesses 
                can showcase their products, provide detailed descriptions, and display images or 
                videos to attract customers. Through integrated payment gateways, e-commerce websites 
                enable secure transactions, allowing users to make purchases conveniently from anywhere 
                in the world. In addition, these websites often feature order management systems, customer 
                support tools, and inventory tracking to streamline the entire shopping experience. 
                E-commerce websites are essential for modern businesses seeking to expand their reach and 
                provide a user-friendly, efficient shopping experience to a global audience.
            </p>
            <p>
                An e-commerce website typically displays products or services with detailed descriptions, 
                high-quality images, pricing information, and any available specifications or variations. 
                It may also include customer reviews, stock availability, and shipping details to help 
                consumers make informed purchasing decisions. These features are designed to enhance the 
                shopping experience by providing all the necessary information in one convenient online space.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox
