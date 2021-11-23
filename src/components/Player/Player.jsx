import React from "react";

import { FaRandom } from "react-icons/fa";
import { AiFillFastBackward, AiFillFastForward } from "react-icons/ai";
import { BiPlayCircle } from "react-icons/bi";
import { IoMdRepeat } from "react-icons/io";

import { BsMusicNoteList } from "react-icons/bs";
import { MdOutlineScreenShare } from "react-icons/md";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { FaExpandAlt } from "react-icons/fa";

function Player() {
  return (
    <div className="Player h-24 bg-gray-700-spotify text-gray-200 text-xs p-3 flex flex-row justify-between">
        <div className="current-song flex flex-row h-full">
          <img
            className="rounded-l h-full w-auto"
            src="https://i.redd.it/l4ifudbhdgh51.jpg"
            alt=""
          />

          <div className="flex flex-col justify-evenly ml-4">
            <span className="current-song-title font-semibold text-base">
              Rental
            </span>
            <span className="current-song-artist">Juice WRLD</span>
          </div>
        
      </div>

      <div className="main-controls flex flex-col justify-around ">
        <div className="main-controls-buttons flex flex-row justify-center items-center">
          <div className="mr-8">
            <FaRandom size={18} />
          </div>
          <div className="mr-8">
            <AiFillFastBackward size={24} />
          </div>
          <div className="mr-8">
            <BiPlayCircle size={40} />
          </div>
          <div className="mr-8">
            <AiFillFastForward size={24} />
          </div>
          <div className="">
            <IoMdRepeat size={21} />
          </div>
        </div>
        <div className="main-controls-progress flex items-center">
          <span>1:36</span>
          <div className="line w-96 h-1 rounded-xl mx-4 bg-gray-400"></div>
          3:42
        </div>
      </div>

      <div className="other-controls flex flex-row justify-around items-center ">
        <div className="mr-4">
          <BsMusicNoteList size={20} />
        </div>
        <div className="mr-4">
          <MdOutlineScreenShare size={20} />
        </div>
        <div className="mr-4">
          <BsFillVolumeUpFill size={20} />
        </div>
        <div className="line w-24 h-1 bg-gray-200 rounded-lg mr-4"></div>
        <div className="mr-3">
          <FaExpandAlt size={17} />
        </div>
      </div>
    </div>
  );
}

export default Player;
