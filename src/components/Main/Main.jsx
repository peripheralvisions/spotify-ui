import React from "react";

import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

function Main() {
  //Demo data
  const albums = [
    {
      title: "Peripheral Vision",
      description: "Amazing Acoustic Covers updated every week.",
      followers: 658903,
      cover:
        "https://upload.wikimedia.org/wikipedia/en/2/25/Turnover_-_Peripheral_Vision.jpg",
      artist: "Turonver",
    },
    {
      title: "Certified Lover Boy",
      description: "Amazing Covers updated every week.",
      followers: 244745,
      cover:
        "https://media.pitchfork.com/photos/613214a114458bf5df99f2a9/1:1/w_320/Drake-Certified-Lover-Boy.png",
    },
    {
      title: "Altogether",
      description: "Amazing Acoustic Covers updated every week.",
      followers: 75684,
      cover:
        "https://media.pitchfork.com/photos/5db364230c9c6a0008f6ba60/1:1/w_320/Turnover_Altogether.jpg",
      artist: "Turnover",
    },
    {
      title: "Pi'erre Bourne: The Life of Pi'erre 5",
      description: "Amazing Acoustic Covers updated every week.",
      followers: 876457,
      cover:
        "https://media.pitchfork.com/photos/60c21d66b60b284a5751d220/1:1/w_600/Pi%E2%80%99erre%20Bourne:%20The%20Life%20of%20Pi%E2%80%99erre%205.jpeg ",
    },
    {
      title: "Donda",
      description: "Amazing Acoustic Covers updated every week.",
      followers: 452343,
      cover:
        "https://images0.persgroep.net/rcs/nQaYybDGjv41PxtF-TuzTa9O8HU/diocontent/206956827/_fitwidth/763?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.8",
    },
  ];

  //Containers
  const MainContainer = ({ children, title, caption = "Music awaits." }) => {
    return (
      <div className="container mx-auto px-8 text-white">
        <div className="bg-gradient-to-r xl:from-red-400 rounded-lg px-24 -mx-24 py-8 mt-12 h-72 flex flex-col items-start justify-around">
          <div>
            <h1 className="text-7xl font-semibold text-white">{title}</h1>
            <h2 className="text-3xl mt-4">{caption}</h2>
          </div>
          <span className="py-2 border-white bg-white text-black font-semibold px-5 border-4 rounded-3xl mt-6">Try it now. <span className="ml-2">▶</span></span>
        </div>

        {children}
      </div>
    );
  };

  const Row = ({ children, title }) => {
    return (
      <div className="row mt-12">
        <div className="row">
          <h3 className="font-semibold text-xl border-b border-gray-750 pb-4 mb-4">
            {title}
          </h3>

          {children}
        </div>
      </div>
    );
  };

  //Helper
  const scrambleArray = (targetArr) => {
    let len = targetArr.length;

    const cp = [...targetArr];
    const newArr = [];

    const getRandIdx = (targetArr) =>
      Math.floor(Math.random() * targetArr.length);

    while (len--) {
      const [el] = cp.splice(getRandIdx(cp), 1);
      newArr.push(el);
    }

    return newArr;
  };

  //Albums
  const DummyAlbums = () => {
    const dummyArr = scrambleArray(albums);
    console.log(dummyArr);
    // const dummyArr = albums;

    return dummyArr.map((each) => {
      return <AlbumCard data={each} />;
    });
  };

  const AlbumCard = ({ data }) => {
    return (
      <div class="album flex flex-col w-1/5 px-4 py-4 text-gray-400">
        <a href="">
          <img src={data.cover} alt="qweqeqw" />
        </a>
        <span className="font-semibold mb-2 mt-4 text-gray-300">
          {data.title}
        </span>
        <p className="album-desc mb-4 text-sm text-gray-300 md:hidden">
          {data.description}
        </p>
        <span className="album-followers tracking-widest text-xs">
          {data.followers} FOLLOWERS
        </span>
      </div>
    );
  };

  const RowAlbums = () => {
    const dummyArr = scrambleArray(albums);
    console.log(dummyArr);

    return (
      <Row title="Recently Played">
        <div className="row">
          {/* ALBUMS GO HERE */}
          <div className="albums flex flex-row -mx-4">
            <DummyAlbums />
          </div>
        </div>
      </Row>
    );
  };

  //Routes
  const Home = () => {
    return (
      <MainContainer title="Home" caption="Everything You need.">
        <RowAlbums />
        <RowAlbums />
        <RowAlbums />
        <RowAlbums />
        <RowAlbums />
      </MainContainer>
    );
  };

  const Browse = () => {
    return (
      <MainContainer title="Browse" caption="Find new music.">
        <RowAlbums />
        <RowAlbums />
        <RowAlbums />
        <RowAlbums />
      </MainContainer>
    );
  };

  const Radio = () => {
    return (
      <MainContainer title="Radio" caption="Mix and match.">
        <RowAlbums />
        <RowAlbums />
      </MainContainer>
    );
  };

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
          <BiUserCircle size={24} />
          <span className="ml-2 text-sm">b.pre</span>
        </div>
      </div>

      {/* CONTENT */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/browse" element={<Browse />} />
        <Route exact path="/radio" element={<Radio />} />
      </Routes>
    </div>
  );
}

export default Main;
