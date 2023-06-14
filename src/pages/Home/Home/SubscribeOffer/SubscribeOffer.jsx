import { MdMarkEmailRead } from 'react-icons/md';

const SubscribeOffer = () => {
    const handleSubscribe = (event) => {
        event.preventDefault();
        event.target.reset();
    }
    
    return (
        <div className='md:flex justify-evenly items-center mt-24 mb-24 px-10 bg-emerald-300'>
            <div>
                <MdMarkEmailRead size={'20rem'} />
            </div>
            <div>
                <div className='text-center space-y-5 pt-10'>
                    <h2 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600'>Subscribe For Offer!</h2>
                    <p className='text-xl font-semibold'>NEWSLETTER SIGNUP</p>
                </div>
                <form onSubmit={handleSubscribe} className=' pb-10 pt-10'>
                    <div className=" mx-auto">
                        <label className="input-group">
                            <input type="text" placeholder="example@company.com" className="input input-bordered" />
                            <span><button className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600'>Subscribe</button></span>
                        </label>
                    </div>
                    <div className="flex items-center mt-5">
                        <div>
                            <input type='checkbox' />
                        </div>
                        <div>
                            <p className="label-text font-semibold ps-3"> I Accept <span className='text-blue-700'>Terms & Conditions</span> </p>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default SubscribeOffer;