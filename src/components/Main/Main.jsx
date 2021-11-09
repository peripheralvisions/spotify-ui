import React from "react";

import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

function Main() {

  const dummyAlbum = {
    title: "Certified Lover Boy",
    description:
      "Amazing Acoustic Covers updated every week.",
    followers: 244745,
    cover: 'https://media.pitchfork.com/photos/613214a114458bf5df99f2a9/1:1/w_320/Drake-Certified-Lover-Boy.png'
  };

  const dummyArr = new Array(5).fill(dummyAlbum);

  const DummyRow = () => {
      return dummyArr.map(each => {
          console.log(each.cover)
        return (
            <div class="album flex flex-col w-1/5 px-4 py-4 text-gray-400">
              <a href="">
                
                <img src={each.cover} alt="qweqeqw" />
              </a>
              <span className="font-semibold mb-2 mt-4 text-gray-300">
                {each.title}
              </span>
              <p className="album-desc mb-4 text-sm text-gray-300">
                {each.description}
              </p>
              <span className="album-followers tracking-widest text-xs">
                {each.followers} FOLLOWERS
              </span>
            </div>
          );
      })
  }

  const Row = () => {
      return (
        <div className="row mt-12">
          <h3 className="font-semibold text-xl border-b border-gray-750 pb-4 mb-4">
            Recently Played
          </h3>

          <div className="row">
            {/* ALBUMS GO HERE */}
            <div className="albums flex flex-row -mx-4">
              <DummyRow />
            </div>
          </div>
        </div>
      );
  }

  return (
    <div className="overflow-y-auto flex-1 bg-gray-800-spotify">
      {/* TOP BAR  */}
      <div className="top-bar flex items-center justify-between px-4 py-2">
        <div className="arrows flex items-center text-gray-300">
          <a href="" className="p-1 fill-current">
            <VscChevronLeft size={30} />
          </a>
          <a href="" className="p-1 fill-current">
            <VscChevronRight size={30} />
          </a>

          <div className="searchbar ml-4 box-border searchbar flex relative items-center">
            <div className="absolute ml-2">
              <AiOutlineSearch size={18} />
            </div>
            <input
              className=" text-gray-800 placeholder-gray-800 rounded-full pl-8 py-1"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="username flex items-center px-8 text-gray-300">
          <BiUserCircle size={34} />
          <span className="ml-1 text-xs">b.pre</span>
        </div>
      </div>

      {/* CONTENT */}

      <div className="container mx-auto px-32 text-white">
        <h1 className="text-7xl font-semibold text-white my-16">Home</h1>
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    </div>
  );
}

export default Main;
