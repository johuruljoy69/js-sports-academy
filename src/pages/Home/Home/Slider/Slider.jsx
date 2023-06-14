import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";


const Slider = () => {
    return (
        <>
            
            <SectionTitle subHeading={"Our Summer Camp"} heading={"Activities"}/>
            
            <div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper mx-auto text-center md:w-1/2"
                >
                    <SwiperSlide><img src="https://i.ibb.co/g9qMzqB/camp-pic-1.jpg" alt="" /> </SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/ZWQmsvV/camp-pic-2.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/GHGPqbS/camp-pic-3.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/CKTgcC4/camp-pic-4.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/0qQHPy8/camp-pic-5.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/DGwMsQc/camp-pic-6.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/KNRBSJ1/camp-pic-7.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/2WFc6Bh/camp-pic-8.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/2FkyJkF/camp-pic-9.jpg" alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default Slider;