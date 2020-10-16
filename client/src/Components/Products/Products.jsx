import React from 'react';
import '../Products/Products.scss';
import PrimeGreen from '../../assets/images/svg/primeblue-img.svg';
import PrimeBlue from '../../assets/images/svg/primegreen-img.svg';
import SamSmiths from '../../assets/images/svg/samsmith-img.svg';
import PrimeGreenText from '../../assets/images/svg/primegreen-txt.svg';
import PrimeBlueText from '../../assets/images/svg/primeblue-txt.svg';
import Leaf from '../../assets/images/svg/leaf.svg';

function Products(){
    return(
        <>
        <div className='products'>
            <div className='products-cont'>
                <div className='products-wrap'>
                    <img src={PrimeGreen} alt='PrimeGreen' className='products-img'></img>
                    <div><img src={Leaf} alt='Leaf' className='products-img-leaf'></img></div>
                    <img src={PrimeGreenText} alt='PrimeGreen Text' className='products-img-title'></img>
                </div>

                <div className='products-wrap'>
                    <img src={PrimeBlue} alt='PrimeBlue' className='products-img'></img>
                    <div><img src={Leaf} alt='Leaf' className='products-img-leaf'></img></div>
                    <img src={PrimeBlueText} alt='PrimeBlue Text' className='products-img-title'></img>
                </div>

                <div className='products-wrap'>
                    <img src={SamSmiths} alt='SamSmiths' className='products-img'></img>
                    <div><img src={Leaf} alt='Leaf' className='products-img-leaf'></img></div>
                    <div className='products-img-text-cont'>
                        <h3 className='products-img-text'>vegan</h3>
                        <h3 className='products-img-text products-img-text-2'>sam smiths</h3>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Products;