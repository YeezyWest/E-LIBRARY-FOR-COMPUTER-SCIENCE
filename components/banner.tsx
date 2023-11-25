// // Import Swiper styles
// import Link from 'next/link';
// import { Autoplay, Navigation, Pagination } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Swiper, SwiperSlide } from 'swiper/react';

import Link from "next/link";
import { Button } from "./ui/button";

// import {
//   Button,
//   LinkButton,
// } from '@app/components/button';

const banners = [
  {
    id: 1,
    image: '/img/katt-yukawa-K0E6E0a0R3A-unsplash.jpg',
    header:
      'Inclusive care for children with special needs',
    body: `lorem`,
    // btn: (
    //   // <LinkButton
    //     link="/auth/login"
    //     className="pointer  lg:ml-12 text-center text-white font-semibold rounded focus:outline-none bg-green border-2 border-green py-2 px-10 shadow-lg hover:bg-green hover:border-green "
    //   >
    //     Get Started
    //   // </LinkButton>
    // ),
  },

];

export function Banner() {
  return (
    <>
        {banners.map((item, index) => (
          <div key={index}>
            <div
              style={{
                backgroundImage: `url(${item.image})`,
              }}
              className="bg-cover h-[100vh] md:h-[60vh] flex items-center justify-start "
            >
              <div className="text-center max-w-7xl mx-auto px-[1rem] md:px-[5rem] text-white">
                <h1 className="uppercase text-2xl md:text-4xl font-extrabold ">
                  {item.header}
                </h1>
                <p className="my-4 text-sm md:text-lg">
                  {item.body}
                </p>
                <Link href="/auth/login">
                  <Button className="border-none mx-auto">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
   
    </>
  );
}
