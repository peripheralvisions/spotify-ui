import React from 'react';

import { FaUserFriends } from 'react-icons/fa'
import { RiMusicFill } from 'react-icons/ri'


const AlbumAdvertisement = () => {
    return (
        <div className="flex flex-col space-y-4">
            <div className="flex flex-row space-x-4 items-center">
                <RiMusicFill />
                <span className="font-semibold">
                    New Release
                </span>
            </div>
            <div className="rounded-full">
                <div className="w-full h-52 rounded-lg" style={{
                    background: `url(https://images.unsplash.com/photo-1637317957434-16798e804fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80)`,
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%"
                }}>

                </div>
            </div>
            <div className="flex flex-row items-center justify-center space-x-8 flex-shrink-0">
                <div className="flex flex-col">
                    <span className="text-4xl font-semibold">Muse</span>
                    <span className="text-sm">In my feelings</span>
                </div>

                <div>
                    <span className="inline-block rounded-full font-bold px-5 py-2 bg-red-300 text-black whitespace-nowrap text-sm">
                        ▶ Listen Now
                    </span>
                </div>
            </div>
            <h2 className="text-xs text-center opacity-70 font-light bg-gray-900-spotify py-4 tracking-wide rounded-full">
                Premium Members Early Access
            </h2>
        </div>
    )
}

const SocialUserPost = () => {
    return (
        <>
            <div className="flex flex-col space-y-4">

                <div className="flex items-center pr-4">
                    <div className="bg-red-500 w-14 h-14 rounded-full flex-shrink-0 mr-4"
                        style={{
                            backgroundImage: 'url(https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
                            backgroundSize: 'contain',
                            backgroundPosition: '50% 50%',
                        }} />
                    <div className="flex-1 min-w-0">
                        <div>
                            <h2 className="truncate font-semibold text-xl">Mike Wazowski</h2>
                            <div className="flex flex-col">
                                <span>Pop Smoke</span>
                                <span>Dior</span>
                            </div>
                        </div>
                    </div>

                    <div className="self-start text-sm">
                        <span className="flex-shrink-0 whitespace-nowrap">23 min</span>
                    </div>
                </div>
            </div>
            <hr className="opacity-25" />
        </>
    )
}

function SocialSidebar() {
    return (
        <div className="w-96 px-6 pt-8 bg-gray-800-spotify overflow-y-scroll text-gray-300 flex flex-col  space-y-8 shadow-2xl">
            <AlbumAdvertisement />
            <div>
                <div className="flex flex-row space-x-4 items-center mb-4">
                    <FaUserFriends />
                    <span className="font-semibold block">Social Feed</span>
                </div>
                <div className="flex flex-col space-y-8 mt-5">
                    {
                        new Array(30).fill(SocialUserPost())
                    }
                </div>
            </div>
        </div>
    )
}

export default SocialSidebar