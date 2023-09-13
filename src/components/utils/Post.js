import React, {useState} from "react"
import ReadyToWork from "/public/noProfilReadyToWork.png"
import {Link} from "react-router-dom";
import {Tooltip} from "@mui/material";

// Icons
import {GiEarthAfricaEurope} from "react-icons/gi";
import {AiFillLock} from "react-icons/ai";
import {Gallery} from "./Gallery";

// Icons for reactions
import Bravo from "/public/SVG/ReactionSvg/Bravo.svg"
import Drole from "/public/SVG/ReactionSvg/Drole.svg"
import Instructif from "/public/SVG/ReactionSvg/Instructif.svg"
import Jadore from "/public/SVG/ReactionSvg/Jadore.svg"
import Like from "/public/SVG/ReactionSvg/Like.svg"
import Soutien from "/public/SVG/ReactionSvg/Soutien.svg"
import {SlLike} from "react-icons/sl";
import {FaRegCommentDots} from "react-icons/fa6";
import {BiRepost} from "react-icons/bi";
import {RiSendPlaneFill} from "react-icons/ri";


export const Post = ({username, dateSpan, description, img, video}) => {
    const [isBounce, setBounce] = useState(false)
    const [reaction, setReaction] = useState({
        "name": "",
        "icon": ""
    })

    // Set Reaction To See
    const ReactionToSee = (react) => {
        const reactionMap = {
            "j'aime": {name: "J'aime", icon: <Like/>},
            "Bravo": {name: "Bravo", icon: <Bravo/>},
            "Soutien": {name: "Soutien", icon: <Soutien/>},
            "j'adore": {name: "J'adore", icon: <Jadore/>},
            "Instructif": {name: "Instructif", icon: <Instructif/>},
            "Drole": {name: "Drole", icon: <Drole/>},
        };

        setReaction((prev) => reactionMap[react] || {name: "J'aime", icon: <Like/>});
    };
    // End Set Reaction To See
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
            <div className="flex flex-col p-3">
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
            <div className=" flex flex-col w-full mb-5">
                <Gallery/>
            </div>
            {/* End Gallery section */}

            {/* Feedback and Comment */}
            <div
                className={`w-full drop-shadow-lg h-14 px-1 border-t-2 relative`}
            >
                {/* Rate */}
                <div
                    className={`w-full h-14 border-e-red-50 flex flex-row items-center justify-between gap-5`}
                >
                    <div
                        className={`text-gray-500 font-semibold flex flex-row items-center justify-center gap-2 hover:bg-gray-200 w-full h-1/2 p-5 rounded transition-colors ease-in-out delay-100 cursor-pointer`}
                        onClick={() => setBounce(!isBounce)}
                        onMouseEnter={() => {
                            setBounce(!isBounce)
                        }}
                        onMouseLeave={() => {
                            setTimeout(() => {
                                setBounce(!isBounce)
                            }, 2000)
                        }}
                    >
                        {(reaction.icon === "") ? (<SlLike size={25} className={"matrix-1"}/>) : reaction.icon}
                        {(reaction.name === "") ? "J'aime" : reaction.name}
                    </div>

                    <div
                        className={`text-gray-500 font-semibold flex flex-row items-center justify-center gap-2 hover:bg-gray-200 w-full h-1/2 p-5 rounded transition-colors ease-in-out delay-100 cursor-pointer`}
                    >
                        <FaRegCommentDots
                            size={20}
                        />
                        Commenter
                    </div>

                    <div
                        className={`text-gray-500 font-semibold flex flex-row items-center justify-center gap-2 hover:bg-gray-200 w-full h-1/2 p-5 rounded transition-colors ease-in-out delay-100 cursor-pointer`}
                    >
                        <BiRepost
                            size={25}
                        />
                        Republier
                    </div>
                    <div
                        className={`text-gray-500 font-semibold flex flex-row items-center justify-center gap-2 hover:bg-gray-200 w-full h-1/2 p-5 rounded transition-colors ease-in-out delay-100 cursor-pointer`}
                    >
                        <RiSendPlaneFill
                            size={20}
                        />
                        Envoyer
                    </div>
                    {/*===============================================================================================================*/}
                    {/* Popup */}
                    <div
                        className={`h-14  bg-white rounded-3xl px-5 ${(isBounce) ? "flex flex-row gap-5 items-center" : "hidden"} absolute -top-14 left-0 transition-all ease-in-out`}
                        id={"bounce"}
                        onMouseEnter={() => setBounce(true)}
                        onMouseLeave={() => {
                            setTimeout(() => {
                                setBounce(!isBounce)
                            }, 500)
                        }}
                    >

                        <Tooltip
                            title={"j'aime"}
                            placement={"top"}
                            enterDelay={100}
                            leaveDelay={200}

                        >
                            <div
                                className={`h-full flex flex-row items-center justify-center text-[#378FE9] gap-4 cursor-pointer ${isBounce ? "animate-fade-in-2" : ""}`}
                                onClick={() => {
                                    setTimeout(() => {
                                        setBounce(!isBounce)
                                        ReactionToSee("j'aime")

                                    }, 500)
                                }}
                            >
                                <Like
                                    className={`scale-110  z-10  hover:-translate-y-3 hover:scale-150 transition-transform ease-in-out`}/>
                            </div>
                        </Tooltip>

                        <Tooltip
                            title={"Bravo"}
                            placement={"top"}
                            enterDelay={100}
                            leaveDelay={200}
                        >
                            <div
                                className={`h-full flex flex-row items-center justify-center text-[#378FE9] gap-4 cursor-pointer ${isBounce ? "animate-fade-in-3" : ""} `}
                                onClick={() => {
                                    setTimeout(() => {
                                        setBounce(!isBounce)
                                        ReactionToSee("Bravo")

                                    }, 500)
                                }}
                            >
                                <Bravo
                                    className={`scale-110  z-10  hover:-translate-y-3 hover:scale-150 transition-transform ease-in-out `}/>
                            </div>
                        </Tooltip>

                        <Tooltip
                            title={"Soutien"}
                            placement={"top"}
                            enterDelay={100}
                            leaveDelay={200}
                        >
                            <div
                                className={`h-full flex flex-row items-center justify-center text-[#378FE9] gap-4 cursor-pointer ${isBounce ? "animate-fade-in-5" : ""}`}
                                onClick={() => {
                                    setTimeout(() => {
                                        setBounce(!isBounce)
                                        ReactionToSee("Soutien")

                                    }, 500)
                                }}
                            >
                                <Soutien
                                    className={`scale-110  z-10  hover:-translate-y-3 hover:scale-150 transition-transform ease-in-out`}/>
                            </div>
                        </Tooltip>

                        <Tooltip
                            title={"J'adore"}
                            placement={"top"}
                            enterDelay={100}
                            leaveDelay={200}
                        >
                            <div
                                className={`h-full flex flex-row items-center justify-center text-[#378FE9] gap-4 cursor-pointer ${isBounce ? "animate-fade-in-5" : ""}`}
                                onClick={() => {
                                    setTimeout(() => {
                                        setBounce(!isBounce)
                                        ReactionToSee("J'adore")

                                    }, 500)
                                }}
                            >
                                <Jadore
                                    className={`scale-110  z-10  hover:-translate-y-3 hover:scale-150 transition-transform ease-in-out`}/>
                            </div>
                        </Tooltip>
                        <Tooltip
                            title={"Instructif"}
                            placement={"top"}
                            enterDelay={100}
                            leaveDelay={200}
                        >
                            <div
                                className={`h-full flex flex-row items-center justify-center text-[#378FE9] gap-4 cursor-pointer ${isBounce ? "animate-fade-in-5" : ""}`}
                                onClick={() => {
                                    setTimeout(() => {
                                        setBounce(!isBounce)
                                        ReactionToSee("Instructif")

                                    }, 500)
                                }}
                            >
                                <Instructif
                                    className={`scale-110  z-10  hover:-translate-y-3 hover:scale-150 transition-transform ease-in-out`}/>
                            </div>
                        </Tooltip>
                        <Tooltip
                            title={"Drole"}
                            placement={"top"}
                            enterDelay={100}
                            leaveDelay={200}
                        >
                            <div
                                className={`h-full flex flex-row items-center justify-center text-[#378FE9] gap-4 cursor-pointer ${isBounce ? "animate-fade-in-5" : ""}`}
                                onClick={() => {
                                    setTimeout(() => {
                                        setBounce(!isBounce)
                                        ReactionToSee("Drole")

                                    }, 500)
                                }}
                            >
                                <Drole
                                    className={`scale-110  z-10  hover:-translate-y-3 hover:scale-150 transition-transform ease-in-out`}/>
                            </div>
                        </Tooltip>

                    </div>
                    {/* End Popup */}
                    {/*===============================================================================================================*/}
                </div>
                {/* End Rate */}


            </div>
            {/* Feedback and Comment */}

        </div>
    )
}

