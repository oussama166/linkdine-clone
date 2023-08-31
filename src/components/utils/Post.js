import React from "react"
import ReadyToWork from "/public/noProfilReadyToWork.png"
import {Link} from "react-router-dom";
import {GiEarthAfricaEurope} from "react-icons/gi";
import {AiFillLock} from "react-icons/ai";
import {Gallery} from "./Gallery";

export const Post = () => {
    return (
        <div
            className="w-full bg-white p-3 rounded-xl shadow-xl"
        >
            {/* Title */}
            <div className="w-full p-3 flex flex-row ">
                <div className="flex flex-row items-start mr-1">
                    <img src={ReadyToWork} className={`w-[62px] h-[62px] rounded-full`} alt={"image for test"}/>
                </div>
                <div className="flex flex-col items-start gap-1 ml-1">
                    <div className={`flex flex-row text-gray-400 gap-1 leading-3`}>
                        <Link
                            to={"/"}
                            className={`text-black capitalize font-semibold hover:text-blue-500 hover:underline mr-0.5`}
                        >
                            Oussama Ouardi
                        </Link>
                        •
                        <span className={`text-base leading-3`}>2e+</span>

                    </div>
                    <span
                        className={`text-sm text-gray-400 max-w-[300px] overflow-hidden whitespace-nowrap text-ellipsis`}
                    >
                        Lorem ipsum dolor sit amet
                    </span>
                    <div className="flex flex-row gap-1 text-gray-500 font-normal text-sm">
                        <span>1 sem</span> {/* Timespan from the backEnd */}
                        •
                        <GiEarthAfricaEurope/>
                        {/*<AiFillLock />*/}
                    </div>
                </div>
            </div>
            {/* End Title */}

            {/* Descriptions */}
            <div className="flex flex-col p-3 ">
                <p className={`max-h-[100px] relative text-ellipsis overflow-y-hidden`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem doloribus fugit natus
                    officia possimus quibusdam quis. Alias aliquam architecto atque aut delectus dicta distinctio, earum
                    eligendi est iste iusto laboriosam maiores modi nulla odit officiis, porro provident quas qui
                    quibusdam ratione, repellat sunt veritatis? Ab culpa iure labore nobis, placeat quisquam
                    reprehenderit voluptatum. Accusamus ad, adipisci aliquam animi atque beatae, deleniti dolor
                    doloremque eaque eveniet ex expedita in iure laborum natus neque nesciunt obcaecati, quam quis rem
                    sint ullam vitae voluptate voluptatibus voluptatum. Cum cumque dolorum fuga harum ipsum, suscipit
                    voluptate? Fuga, id ut. Ipsa non quia soluta temporibus.
                </p>
            </div>
            {/* End Descriptions */}

            {/* Gallery section */}
            <div className="w-full">
                <Gallery/>
            </div>
            {/* End Gallery section */}

            {/* Feedback and Comment */}
            {/*
                TODO: ADD SECTION FOR FEEDBACK AND THE COMMENT
            */}
            {/* Feedback and Comment */}

        </div>
    )
}

