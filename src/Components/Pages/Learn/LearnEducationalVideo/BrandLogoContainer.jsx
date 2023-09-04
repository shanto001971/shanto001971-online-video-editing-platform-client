import logo1 from '../../../../assets/learn/brands/brand1.png';
import logo2 from '../../../../assets/learn/brands/brand2.png';
import logo3 from '../../../../assets/learn/brands/brand3.png';
import logo4 from '../../../../assets/learn/brands/brand4.png';
import logo5 from '../../../../assets/learn/brands/brand5.png';
import logo6 from '../../../../assets/learn/brands/brand6.png';
import logo7 from '../../../../assets/learn/brands/brand7.png';

const BrandLogoContainer = () => {
    return (
        <div className='mx-auto flex flex-wrap items-center justify-center gap-8 pb-8 pt-12 md:py-14'>
            <img className='h-[21px]' src={logo1} alt="" />
            <img className='h-[21px]' src={logo2} alt="" />
            <img className='h-[21px]' src={logo3} alt="" />
            <img className='h-[21px]' src={logo4} alt="" />
            <img className='h-[21px]' src={logo5} alt="" />
            <img className='h-[21px]' src={logo6} alt="" />
            <img className='h-[21px]' src={logo7} alt="" />
        </div>
    );
};

export default BrandLogoContainer;