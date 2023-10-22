import { Carousel } from "@material-tailwind/react";

export function CarouselTransition() {
    return (
        <>
            <Carousel transition={{ duration: 2 }} className="rounded-xl">
                <img
                    src="https://i.ibb.co/ZSkHgN7/yuvraj-singh-JJpn-PI8-Hpgo-unsplash.jpg"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://i.ibb.co/FbRYsLc/eugene-chystiakov-SC2tv-Mp-VN9-U-unsplash.jpg0"
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://i.ibb.co/TT9mF4Q/justus-menke-81-Gp-Bv2-T-b-M-unsplash.jpg"
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
            </Carousel>
        </>
    );
}