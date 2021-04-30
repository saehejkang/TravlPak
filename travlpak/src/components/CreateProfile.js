import "./CreateProfile.css";

import profilePictureFrame from "./resources/circle2.svg";
import uploadIcon from "./resources/uploadIcon.svg";
import bioInputBox from "./resources/bioInputBox.svg";
import arrowButton from "./resources/arrowButton.svg";
import { Component } from "react";

class CreateProfile extends Component {
  render() {
    return (
      <div className="create-profile">
        <ProfilePicture />
        <Location />
        <Bio />
        <Interests />
        <img className="arrow-button" src={arrowButton} alt="arrow button" />
      </div>
    );
  }
}
export default CreateProfile;
function ProfilePicture() {
  return (
    <div className="profile-pic">
      <div className="text-4 sfprotext-medium-stromboli-18px">
        Add a Profile Picture
      </div>
      <div className="overlap-group15">
        <img
          className="photo-frame"
          src={profilePictureFrame}
          alt="profile pic circle frame"
        />
        <img className="upload-icon" src={uploadIcon} alt="upload icon" />
      </div>
    </div>
  );
}

function Location() {
  return (
    <div className="location-1">
      <div className="text-3 sfprotext-medium-stromboli-18px">
        Where will you travel from?
      </div>
      <div className="overlap-group14 border-1px-powder-ash">
        <div className="location sfprodisplay-regular-normal-mercury-18px">
          San Luis Obispo, CA, US
        </div>
      </div>
    </div>
  );
}

function Bio() {
  return (
    <div className="about-me">
      <div className="text-2 sfprotext-medium-stromboli-18px">
        {
          <>
            What would you like other travelers to <br />
            know about you?
          </>
        }
      </div>
      <div className="overlap-group13">
        <div className="bio sfprodisplay-regular-normal-mercury-18px">
          i’m a freelance photographer trying to make it to 100 countries!
        </div>
        <img className="bio-input-box" src={bioInputBox} alt="bio input box" />
      </div>
    </div>
  );
}

function Interests() {
  return (
    <div className="interests">
      <div className="text-1 sfprotext-medium-stromboli-18px">
        Tell us about your Interests!
      </div>
      <Tags />
    </div>
  );
}

function Tags() {
  return (
    <div className="tags-unselected">
      <div className="flex-row-2">
        <div className="photography-unselected">
          <div className="overlap-group12 border-1px-powder-ash">
            <div className="photography sfprotext-regular-normal-powder-ash-14px">
              photography
            </div>
          </div>
        </div>
        <div className="viticulture-unselected">
          <div className="overlap-group11 border-1px-powder-ash">
            <div className="viticulture sfprotext-regular-normal-powder-ash-14px">
              viticulture
            </div>
          </div>
        </div>
      </div>
      <div className="flex-row-4">
        <div className="nature-unselected">
          <div className="overlap-group10 border-1px-powder-ash">
            <div className="nature sfprotext-regular-normal-powder-ash-14px">
              nature
            </div>
          </div>
        </div>
        <div className="hiking-unselected">
          <div className="overlap-group9 border-1px-powder-ash">
            <div className="hiking sfprotext-regular-normal-powder-ash-14px">
              hiking
            </div>
          </div>
        </div>
        <div className="skiing-unselected">
          <div className="overlap-group8 border-1px-powder-ash">
            <div className="skiing sfprotext-regular-normal-powder-ash-14px">
              skiing
            </div>
          </div>
        </div>
      </div>
      <div className="flex-row-3">
        <div className="mountain-biking-unselected">
          <div className="overlap-group7 border-1px-powder-ash">
            <div className="mountain-biking sfprotext-regular-normal-powder-ash-14px">
              mountain biking
            </div>
          </div>
        </div>
        <div className="beach-unselected">
          <div className="overlap-group6 border-1px-powder-ash">
            <div className="beach sfprotext-regular-normal-powder-ash-14px">
              beaches
            </div>
          </div>
        </div>
      </div>
      <div className="flex-row">
        <div className="architecture-unselected">
          <div className="overlap-group5 border-1px-powder-ash">
            <div className="architecture sfprotext-regular-normal-powder-ash-14px">
              architecture
            </div>
          </div>
        </div>
        <div className="surfing-unselected">
          <div className="overlap-group4 border-1px-powder-ash">
            <div className="surfing sfprotext-regular-normal-powder-ash-14px">
              surfing
            </div>
          </div>
        </div>
        <div className="botany-unselected">
          <div className="overlap-group3 border-1px-powder-ash">
            <div className="place sfprotext-regular-normal-powder-ash-14px">
              botany
            </div>
          </div>
        </div>
      </div>
      <div className="flex-row-1">
        <div className="history-unselected">
          <div className="overlap-group2 border-1px-powder-ash">
            <div className="history sfprotext-regular-normal-powder-ash-14px">
              history
            </div>
          </div>
        </div>
        <div className="art-unselected">
          <div className="overlap-group1 border-1px-powder-ash">
            <div className="art sfprotext-regular-normal-powder-ash-14px">
              art
            </div>
          </div>
        </div>
        <div className="urban-unselected">
          <div className="overlap-group border-1px-powder-ash">
            <div className="urban sfprotext-regular-normal-powder-ash-14px">
              urban settings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
