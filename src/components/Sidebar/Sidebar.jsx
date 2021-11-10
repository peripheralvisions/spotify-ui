import React from "react";

import {AiOutlineHome} from "react-icons/ai";
import {BsSearch} from 'react-icons/bs';
import {VscRadioTower} from 'react-icons/vsc';

import {IoIosAddCircleOutline} from 'react-icons/io';

import {Link, NavLink} from 'react-router-dom';

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

  const NavElement = ({ value, active, customSvg: CustomSvg }) => {

    return (
      <li className={`border-l-4 border-transparent`}>
        <a className="flex items-center mx-4 mt-4">
          <CustomSvg size={20}/>
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
            return <NavLink exact to={'/' + each.value.toLocaleLowerCase()} className={({isActive}) => {
              // console.log(isActive.isActive);
              return isActive ? "text-white" : ""
            }}>
              <NavElement key={idx} {...each} />
            </NavLink>;
          })}
        </ul>
      </div>

      <div className="overflow-hidden flex-1">
        {/* //Your Playlsist */}

        {sidebarGroups.map((each) => {
          return (
            <div className="mt-7 px-5">
              <h2 className="font-light tracking-widest text-xs uppercase mb-4">{each.title}</h2>
              <ul>
                {each.content.map((each) => {
                  return <li className="truncate text-gray-300 text-sm mt-4">
                      <a href="">{each}</a>
                  </li>;
                })}
              </ul>
            </div>
          );
        })}

      </div>

      <div className="h-16 flex align-center justify-around items-center border-t border-gray-400 ">
        <a href="" className="flex items-center">
            <IoIosAddCircleOutline size={30} />
          <span className="ml-3">New Playlist</span>
        </a>

      </div>

    </div>
  );
}

export default Sidebar;
