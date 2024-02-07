import React, { useState } from 'react'

const ProductPage = () => {


    const [images, setImages] = useState({
        img1 : "https://th.bing.com/th/id/OIP.wiBCxpomCXgP06JGK75QPwAAAA?rs=1&pid=ImgDetMain",
        img2 : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ultra-band-unselect-gallery-2-202309?wid=2560&hei=1640&fmt=p-jpg&qlt=80&.v=1693544902976",
        img3 : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ultra-band-unselect-gallery-1-202309_GEO_IN?wid=2560&hei=1640&fmt=p-jpg&qlt=80&.v=1693544574532",
        img4 : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-compare-ultra-202309_GEO_IN?wid=444&hei=512&fmt=jpeg&qlt=90&.v=1693530410569"
    })

    const [activeImg, setActiveImage] = useState(images.img1)

    const [amount, setAmount] = useState(1);


    return (
        <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
            <div className='flex flex-col gap-6 lg:w-2/4'>
                <img src={activeImg} alt="image" className='w-full h-full aspect-square object-cover rounded-xl'/>
                <div className='flex flex-row justify-between h-24'>
                    <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer ' onClick={() => setActiveImage(images.img1)}/>
                    <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
                    <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)}/>
                    <img src={images.img4} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)}/>
                </div>
            </div>
            {/* ABOUT */}
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <span className=' text-red-500 font-semibold'>Apple Products</span>
                    <h1 className='text-3xl font-bold'>Apple Ultra @ 8GB RAM + 256GB SSD - Space Grey</h1>
                </div>
                <p className='text-gray-700'>
                The Apple Ultra 2 is a high-performance, cutting-edge computer system designed by Apple Inc. It offers advanced features and specifications tailored for professional users and demanding tasks such as video editing, graphic design, and software development. With its sleek design and powerful hardware components, the Apple Ultra 2 provides users with a seamless and efficient computing experience, making it an ideal choice for professionals seeking top-notch performance and reliability.
                </p>
                <h6 className='text-2xl font-semibold'>$ 3000.00</h6>
                <div className='flex flex-row items-center gap-12'>
                    <div className='flex flex-row items-center'>
                        <button className='bg-gray-200 py-2 px-5 rounded-lg text-red-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <button className='bg-gray-200 py-2 px-4 rounded-lg text-red-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                    </div>
                    <button className='bg-red-500 text-white font-semibold py-3 px-16 rounded-xl h-full'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
