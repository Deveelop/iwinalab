import './Pricing.css'
export default function Pricing() {
    return(
        <div className='price_category'>
            <div className='category1'>
                <li id='header'>Enterprise</li>
            <li id='subtitle'>includes live training and expanded useage rights</li>
            </div>
            <div className='price1'>
             <li id='header'>$799</li>
             <li id='subtitle'>Per Year</li>
            </div>
            <div className='regbtn'><li><a href='/registration'>Order Now</a></li></div>
            <div className='category2'>
                <li id='header'>Self-Managed</li>
            <li id='subtitle'>All platform features no support included</li>
             </div>
             <div className='price2'>
             <li id='header'>$199</li>
             <li id='subtitle'>Per Year</li>
            </div>
            <div className='regbtn'><li><a href='/registration'>Order Now</a></li></div>
            <div className='category3'>
                <li id='header'>Startup</li>
            <li id='subtitle'>includes support ticket and all platform features</li>
             </div>
             <div className='price3'>
             <li id='header'>$499</li>
             <li id='subtitle'>Per Year</li>
            </div>
            <div className='regbtn'><li><a href='/registration'>Order Now</a></li></div>
        </div>
        
    )
};