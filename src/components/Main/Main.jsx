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
      image: "https://images.complex.com/complex/images/c_crop,h_1071,w_1061,x_0,y_11/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/lwg4ovpbq9xzybpktnno/pierre-bourne-tajwop?fimg-ssr-default",
    },

    {
      name: "Drake",
      followers: 354753,
      image: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQ3NTI2OTA4NzY5MjE2MTI4/drake_photo_by_prince_williams_wireimage_getty_479503454.jpg",
    },

    {
      name: "Turnover",
      followers: 354753,
      image: "https://alchetron.com/cdn/turnover-band-143fc96c-b4a7-40bb-a3d7-b4a01801969-resize-750.jpg",
    },

    {
      name: "Kanye",
      followers: 354753,
      image: "https://images0.persgroep.net/rcs/xhac8jNm-5aeE2Coga0cZvwwBLk/diocontent/205406526/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8",
    },

    {
      name: "Pi'erre Bourne",
      followers: 354753,
      image: "https://images.complex.com/complex/images/c_crop,h_1071,w_1061,x_0,y_11/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/lwg4ovpbq9xzybpktnno/pierre-bourne-tajwop?fimg-ssr-default",
    },
  ]

  //Containers
  const MainContainer = ({ children, title, caption = "Music awaits." }) => {
    return (
      <div className="container mx-auto px-16 text-white">
        <div className="bg-gradient-to-r xl:from-red-400 rounded-lg xl:px-16 py-12 mt-12 h-80 flex flex-col items-start justify-around">
          <div>
            <h1 className="text-7xl font-semibold text-white">{title}</h1>
            <h2 className="text-3xl mt-4">{caption}</h2>
          </div>
          <span className="py-2 border-white bg-white text-black font-bold px-5 border-4 rounded-3xl mt-6">
            Try it now. <span className="ml-2">▶</span>
          </span>
        </div>
        {children}
      </div>
    );
  };

  const Row = ({ children, title }) => {
    return (
      <div className="row mt-12 ">
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
        <div className="rounded-md overflow-hidden block">
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

  const ArtistCard = ({data}) => {
    return (
      <div class="artist flex flex-col items-center w-1/5 px-4 py-4 text-gray-400">
        <div className="overflow-hidden block h-44 w-44 rounded-full" style={{
            backgroundImage: `url("${data.image}")`,
            backgroundColor: 'pink',
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: 'no-repeat'
          }}>
          {/* <img src={data.image} className="w-auto h-full" alt="qweqeqw" /> */}
        </div>
        <span className="font-semibol text-xl font-semibold mt-6 text-gray-300">
          {data.name}
        </span>
        <span className="text-sm mt-2">
          Followers {data.followers}
        </span>
        <span className="text-sm px-6 py-2 mt-8 border-2 rounded-full bg-white text-black font-medium">
          + FOLLOW
        </span>
      </div>
    );
  };

  const RowArtists = () => {
    return (
      <Row>
        <div className="albums flex flex-row -mx-4">
          {
            artists.map(each => <ArtistCard data={each} />)
          }
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
        <RowArtists />
        <RowArtists />
        <RowArtists />
        <RowArtists />
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
