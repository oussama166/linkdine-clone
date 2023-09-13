import React, {useState} from "react"

// Import the slider
import {Splide, SplideSlide} from "@splidejs/react-splide";


// Import the  urls of imges
import img1 from "/public/Data/alex-suprun-ZHvM3XIOHoE-unsplash.jpg"
import img2 from "/public/Data/alexander-hipp-iEEBWgY_6lA-unsplash.jpg"
import img3 from "/public/Data/courtney-cook-TSZo17r3m0s-unsplash.jpg"
import img4 from "/public/Data/ed-pylypenko-7zcbtbI4E2o-unsplash.jpg"


export const Gallery = () => {
    const [Count, setCount] = useState({
        "active": "initial",
        "end": "initial"
    })
    const imgData = [img1, img2, img3, img4]
    String.prototype.hashCode = function () {
        var hash = 0,
            i, chr;
        if (this.length === 0) return hash;
        for (i = 0; i < this.length; i++) {
            chr = this.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }

    return (
        <div className={`w-full h-[555px] relative`}>
            {(Count.end !== "initial") && (<span
                className={`absolute top-4 right-4 text-black z-10 w-12 h-10 rounded-2xl bg-white flex flex-col items-center justify-center`}>
                {Count.active}/{Count.end}
            </span>)}

            <Splide
                aria-label={`persone-oussamaOuardi`}
                options={{
                    type :"loop",
                    perPage: 1,
                    autoplay: true,
                    pagination: false,

                }
                }
                lazyload={(splide) => {
                    var end = splide.Components.Controller.getEnd() + 1;
                    setCount(prev => ({
                        ...prev,
                        "active": splide.index + 1,
                        "end": end
                    }));
                }}
                onMove={(splide) => {

                    var end = splide.Components.Controller.getEnd() + 1;
                    setCount(prev => ({
                        ...prev,
                        "active": splide.index + 1,
                        "end": end
                    }));


                }}
                className={`w-full h-full`}
            >
                {
                    imgData.map((elem) => {
                        return (
                            <SplideSlide
                                key={elem.hashCode()}
                                className={`w-full h-[555px]`}
                            >
                                <img
                                    src={elem}
                                    className={`object-cover w-full h-full`}
                                    alt={String(elem)}
                                />
                            </SplideSlide>
                        )
                    })
                }
            </Splide>

        </div>
    )
}
