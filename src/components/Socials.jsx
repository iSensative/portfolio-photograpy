import React from "react";
import {
  ImFacebook,
  ImInstagram,
  ImTwitter,
  ImPinterest,
  ImYoutube,
} from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li>
          <a href="" target="_blank">
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href="" target="_blank"></a>
          <ImPinterest />
        </li>
        <li>
          <a href="" target="_blank"></a>
          <ImTwitter />
        </li>
        <li>
          <a href="" target="_blank"></a>
          <ImYoutube />
        </li>
      </ul>
    </div>
  );
};

export default Socials;
