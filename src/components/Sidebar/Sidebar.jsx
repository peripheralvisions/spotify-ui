import React from "react";

import {AiOutlineHome} from "react-icons/ai";
import {BsSearch} from 'react-icons/bs';
import {VscRadioTower} from 'react-icons/vsc';

console.log(AiOutlineHome);


//viewBox="0 0 24 24" width="24" height="24" class="fill-current text-white group-hover:text-white h-6 w-6"

function Sidebar() {

  const navElements = [
    {
      value: "Home",
      customSvg: AiOutlineHome,
      active: true,
    },
    {
      value: "Browse",
      customSvg: BsSearch,
      active: false,

    },
    {
      value: "Radio",
      active: false,
      customSvg: VscRadioTower,
    },
  ];

  const sidebarYourLibrary = [
    "Made For You",
    "Recently Played",
    "Liked Songs",
    "Albums",
    "Artists",
    "Podcasts",
  ];

  const sidebarUserPlaylists = [
    "Acoustic Hits",
    "Acoustic Covers",
    "Discover Weekly",
    "Hot Hits Canada",
    "90's Hip-Hop Don't Stop Long Text",
    "90s Smash Hits",
    "TGIF",
    "mint Canada",
    "Hip-Hop Central",
    "R&B Right Now",
    "I Love My '90s R&B",
    "Are & Be",
    "Today's Top Hits",
    "Get Turnt",
    "iTunes",
  ];

  const sidebarGroups = [
    {
      title: "Your Library",
      content: sidebarYourLibrary,
    },
    {
      title: "Playlists",
      content: sidebarUserPlaylists,
    },
  ];

  const NavElement = ({ value, active, customSvg }) => {
    return (
      <li
        className={`border-l-4 ${active ? "border-green-700" : "border-transparent"}`}>
        <a href="#" className="flex items-center mx-4 mt-4">
          <AiOutlineHome/> {/* <------- Make this dynamic */}
          <span className="ml-3">{value}</span>
        </a>
      </li>
    );
  };

  return (
    <div className="Sidebar w-48 flex-none overflow-y-hidden flex flex-col justify-between font-semibold bg-gray-900-spotify text-gray-400">
      <div className="py-6">
        <ul>
          {navElements.map((each, idx, self) => {
            return <NavElement key={idx} {...each} />;
          })}
        </ul>
      </div>

      <div className="overflow-hidden flex-1">
        {/* //Your Playlsist */}

        {sidebarGroups.map((each) => {
          return (
            <div className="mt-6 px-4">
              <h2 className="font-thin tracking-widest mb-2">{each.title}</h2>
              <ul>
                {each.content.map((each) => {
                  return <li className="truncate mt-2">
                      <a href="">{each}</a>
                  </li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="h-20 flex align-center justify-around items-center border-t-2 border-gray-800 ">
        <a href="" className="flex items-center">
          <svg
            className="w-8 h-8"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122.88 122.88"
          >
            <title>add</title>
            <path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.25,61.25,0,0,1,61.44,0ZM88.6,56.82v9.24a4,4,0,0,1-4,4H70V84.62a4,4,0,0,1-4,4H56.82a4,4,0,0,1-4-4V70H38.26a4,4,0,0,1-4-4V56.82a4,4,0,0,1,4-4H52.84V38.26a4,4,0,0,1,4-4h9.24a4,4,0,0,1,4,4V52.84H84.62a4,4,0,0,1,4,4Zm8.83-31.37a50.92,50.92,0,1,0,14.9,36,50.78,50.78,0,0,0-14.9-36Z"></path>
          </svg>
          <span className="ml-3">New Playlist</span>
        </a>

      </div>

    </div>
  );
}

export default Sidebar;
