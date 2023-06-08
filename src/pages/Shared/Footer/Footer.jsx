
import { MdLocationPin, MdEmail, MdPhone } from 'react-icons/md';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>           
            <footer className="footer p-10 text-base-content mt-12 ">
                <div className='text-white'>
                    <div className='flex items-center'>

                        <Link to="/" className="btn btn-ghost normal-case text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300"> Playfit Sports Academy</Link>
                    </div>
                    {/* <p>A kids toy shop is a store that <br /> specializes in selling toys and <br /> games designed specifically for children.</p> */}
                    <p className='flex items-center'><MdLocationPin size={'1rem'} /> <span className='ps-2'>Jashore Sador, Khulna, Bangladesh</span></p>
                    <p className='flex items-center'><MdEmail size={'1rem'} /> <span className='ps-2'>contact@playfitsportsacademy.com</span></p>
                    <p className='flex items-center'><MdPhone size={'1rem'} /> <span className='ps-2'>+8801753215648</span></p>
                </div>
                <div className='text-white'>
                    <span className="footer-title">Quick Links</span>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Redeem Voucher</a>
                    <a className="link link-hover">Policies & Rules</a>
                    <a className="link link-hover">Check Offer List</a>
                    <a className="link link-hover">Contact Us</a>
                </div>
                <div className='text-white'>
                    <span className="footer-title">Information</span>
                    <a className="link link-hover">Students Support</a>
                    <a className="link link-hover">Camp Info</a>
                    <a className="link link-hover">License Policy</a>
                    <a className="link link-hover">Affiliate</a>
                    <a className="link link-hover">About Us</a>
                </div>
                <div className='text-white'>
                    <span className="footer-title"> Follow Us On</span>
                    <a className="link link-hover flex items-center"> <FaFacebook size={'1rem'} /> <span className='ps-3'>Facebook</span> </a>
                    <a className="link link-hover flex items-center"> <FaTwitter size={'1rem'} /> <span className='ps-3'>Twitter</span> </a>
                    <a className="link link-hover flex items-center"> <FaInstagram size={'1rem'} /> <span className='ps-3'>Instagram</span> </a>
                    <a className="link link-hover flex items-center"> <FaYoutube size={'1rem'} /> <span className='ps-3'>Youtube</span> </a>
                    <a className="link link-hover flex items-center"> <FaPinterest size={'1rem'} /> <span className='ps-3'>Pinterest</span> </a>

                </div>

            </footer>
            <footer className="footer footer-center p-4 text-white pb-10">
                <div>
                    <p>Copyright © 2023 - All right reserved by Playfit Sports Academy</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;