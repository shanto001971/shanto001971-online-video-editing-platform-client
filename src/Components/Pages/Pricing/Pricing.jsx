import './Pricing.css'
import Tabs from './Tabs';

const Pricing = () => {
    return (
        <div className='mb-10'>
            <div className='flex justify-center '>
                <div className='BG p-10 mb-10 cursor-pointer'>
                    <div> <p className='corner p-0'>Limited offer</p></div>
                    <h3 className="text-center font-bold text-3xl">Lifetime plans for MingleMotion Express</h3>
                    <div className="flex justify-center gap-8 mt-10 ">
                        <div className="bg text-xl">Business <span className='font-bold'>$399</span> / <span className='text-sm'>billed once</span></div>
                        <div className="bg text-xl">Unlimited <span className='font-bold'>$1099</span> / <span className='text-sm'>billed once</span> </div>
                    </div>
                    <div className='bgP text-white mt-6 flex justify-center mx-auto items-center '>Get lifetime plan</div>
                    <div className='flex justify-end mt-3 font-semibold'>*Talk to our live chat support team to grab this deal today</div>
                </div>
            </div>

            <div><h3 className='text-center font-semibold text-2xl'>The right plans,for the right price</h3></div>
            <Tabs />
        </div >
    );
};

export default Pricing;