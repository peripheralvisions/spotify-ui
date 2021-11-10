import React from "react";

import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

import { GoVerified } from "react-icons/go";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  Redirect,
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
      title: "The Life of Pi'erre 5",
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

  const artists = [
    {
      name: "Pi'erre Bourne",
      followers: 354753,
      image:
        "https://media.pitchfork.com/photos/5ea34904cfaa12000863f18b/16:9/w_1408,h_792,c_limit/pierrebourne1.jpg",
      verified: true,
    },

    {
      name: "Drake",
      followers: 354753,
      image:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQ3NTI2OTA4NzY5MjE2MTI4/drake_photo_by_prince_williams_wireimage_getty_479503454.jpg",
      verified: true,
    },

    {
      name: "Turnover",
      followers: 354753,
      image: "https://photos.bandsintown.com/thumb/9078233.jpeg",
      verified: true,
    },

    {
      name: "Kanye",
      followers: 354753,
      image:
        "https://images0.persgroep.net/rcs/xhac8jNm-5aeE2Coga0cZvwwBLk/diocontent/205406526/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8",
      verified: true,
    },

    {
      name: "Citizen",
      followers: 354753,
      image:
        "https://m.22slides.com/alexalberti/img9668-1093870.jpg?auto=format&w=800&s=08872e9737897989ac128377e6639280",
      verified: true,
    },
  ];

  //Containers
  const MainContainer = ({ children, title, caption = "Music awaits." }) => {
    return (
      <div className="container mx-auto px-16 text-white">
        <div className="bg-gradient-to-r xl:from-red-400 rounded-lg xl:px-16 py-12 mt-12 h-80 flex flex-col items-start justify-around">
          <div>
            <h1 className="text-7xl font-semibold text-white">{title}</h1>
            <h2 className="text-2xl mt-4">{caption}</h2>
          </div>
          <span className="py-2 border-white bg-white text-black font-semibold px-5 border-4 rounded-3xl mt-6">
            Try it now. <span className="ml-2">▶</span>
          </span>
        </div>
        {children}
      </div>
    );
  };

  const Row = ({ children, title = "Category" }) => {
    return (
      <div className="row mt-12">
        <h3 className="font-semibold text-xl border-b border-gray-750 pb-4 mb-12">
          {title}
        </h3>

        {children}
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
        <div className="rounded-sm overflow-hidden block">
          <img src={data.cover} className="block" alt="qweqeqw" />
        </div>
        <span className="font-semibold mb-2 mt-4 text-gray-300">
          {data.title}
        </span>
        <p className="album-desc mb-4 text-sm text-gray-300 md:hidden">
          {data.description}
        </p>
        <span className="album-followers tracking-widest text-xs">
          {data.followers} LISTENERS
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

  //Artists
  const ArtistCard = ({ data }) => {
    return (
      <div class="artist flex flex-col items-center w-1/5 px-4 py-4 text-gray-400">
        <div
          className="overflow-hidden block h-44 w-44 rounded-full"
          style={{
            backgroundImage: `url("${data.image}")`,
            backgroundColor: "pink",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <img src={data.image} className="w-auto h-full" alt="qweqeqw" /> */}
        </div>
        <span className="font-semibol text-xl font-semibold mt-6 text-white flex items-center truncate">
          {data.name}
          {data.verified ? (
            <span className="ml-2">
              <GoVerified size={16} fill="white" />
            </span>
          ) : null}
        </span>
        <span className="text-sm mt-2">Followers {data.followers}</span>
        <span className="text-xs px-6 py-2 mt-6 border-2 rounded-full bg-white text-black font-medium">
          + FOLLOW
        </span>
      </div>
    );
  };

  const RowArtists = ({ rowTitle }) => {
    return (
      <Row title={rowTitle}>
        <div className="artists px-6 flex flex-row -mx-4">
          {scrambleArray(artists).map((each) => (
            <ArtistCard data={each} />
          ))}
        </div>
      </Row>
    );
  };

  //Sub Nav

  const SubNav = () => {
    const sampleElements = [
      {
        value: "Hip Hop",
        active: false,
      },

      {
        value: "Indie",
        active: true,
      },

      {
        value: "POP",
        active: false,
      },

      {
        value: "Folk",
        active: false,
      },

      {
        value: "Indie",
        active: false,
      },

    ];

    return (
      <ul className="flex justify-center px-24 mt-12 text-xl">
        {sampleElements.map((each) => {
          return (
            <li
              className={`mr-8 break-normal font-semibold rounded-full px-6 py-3 bg-opacity-50 cursor-pointer whitespace-nowrap
              ${each.active ? "bg-red-400" : "" }`}
              >
              {each.value.toUpperCase()}
            </li>
          );
        })}
      </ul>
    );
  };

  //Routes
  const Home = () => {
    return (
      <MainContainer title="Home" caption="Everything You need.">
        <SubNav />
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
        <RowArtists rowTitle="New Artists" />
        <RowArtists rowTitle="Fresh Talent" />
        <RowArtists rowTitle="Up and coming" />
        <RowArtists rowTitle="Young Stars" />
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
    <div className="overflow-y-auto flex-1 bg-gray-800-spotify py-2">
      {/* TOP BAR  */}
      <div className="top-bar flex flex-row items-start mt-8">
        <div></div>

        <div className="container mx-auto self-center flex flex-row justify-between px-16">
          <div className="flex flex-row">
            <div className="arrows mr-4 flex items-center text-gray-300">
              <a href="" className=" fill-current">
                <VscChevronLeft size={40} />
              </a>
              <a href="" className=" fill-current">
                <VscChevronRight size={40} />
              </a>
            </div>

            <div className="searchbar relative flex items-center">
              <div className="absolute ml-2">
                <AiOutlineSearch size={18} />
              </div>
              <input
                className=" text-gray-800 placeholder-gray-800 rounded-full pl-8 py-1 w-96"
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>

          <div className="username flex items-center text-gray-300">
            <BiUserCircle size={24} />
            <span className="text-sm ml-1">USER</span>
          </div>
        </div>
      </div>

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
