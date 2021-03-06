import styled from "styled-components";
import { Marker, Popup } from "react-mapbox-gl";

const navbar = 80;
const mapnav = 66;

export const MapHeight = `calc(100vh - ${navbar + mapnav}px)`;
export const SidebarWidth = "450px";

export const StyledStoreLocations = styled.div`
  &.container {
    max-width: 100%;
  }

  > div {
    border: solid 1px #e6e6e6;
    margin-bottom: 12px;
    margin-top: 12px;
    position: relative;
    overflow: hidden;
  }
`;

export const StyledSidebar = styled.aside`
  box-sizing: border-box;
  float: left;
  height: ${MapHeight};
  position: relative;
  width: ${SidebarWidth};
`;

export const StyledSidebarContainer = styled.div`
  box-sizing: border-box;
  height: 100%;
  overflow: auto;
  padding: 15px 10px;
`;

export const Clearfix = styled.div`
  clear: both;
`;

export const StyledLocationCard = styled.div`
  background-color: white;
  border-radius: 2px;
  border: solid 1px #f0f0f0;
  box-shadow: 0 2px 3px rgba(250, 250, 250, 0.1);
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  margin-bottom: 12px;
  padding: 12px;

  &:hover {
    background-color: #fdfdfd;
    border: solid 1px #e1e1e1;
    box-sizing: border-box;
  }

  h3 {
    font-size: 20px;
    line-height: 1.2;
    margin-bottom: 10px;
    margin-top: 0;
  }

  address {
    margin-bottom: 6px;
  }

  .distance {
    margin-top: 6px;
    color: rgba(0, 0, 0, 0.56);
    margin: 0;
  }
`;

export const StyledLocationsSearchForm = styled.form`
  position: relative;
  background-color: #fcfcfc;
  border-bottom: solid 1px #e6e6e6;
  box-shadow: 0 10px 8px -8px rgba(200, 200, 200, 0.1);
  height: 66px;
  padding: 15px 10px;

  .searchbar {
    &__container {
      position: relative;
      display: inline-block;
    }

    &__clear-search {
      border-radius: 50%;
      box-sizing: border-box;
      height: 22px;
      margin: 0;
      padding: 0;
      position: absolute;
      right: 8px;
      top: 6px;
      visibility: visible;
      width: 22px;

      svg {
        width: 12px;
        margin: 4px;
        padding: 0;
        vertical-align: top;
      }

      &:hover {
        cursor: pointer;
      }
    }

    &__input {
      padding: 10px;
      font-size: 13px;
      line-height: 13px;
      height: 35px;
      width: 223px;
      border: solid 1px #e6e6e6;
      border-radius: 2px;
      outline: none;
      background-color: #fff;
      text-overflow: ellipsis;
      box-sizing: border-box;
      margin: 0;
      display: inline-block;
    }

    &__dropdown {
      border: solid 1px #e6e6e6;
      display: inline-block;
      border-radius: 2px;
      cursor: pointer;
      padding: 10px;
      padding-right: 35px;
      position: relative;
      margin: 0 auto;
      user-select: none;
      z-index: 1;
      font-size: 13px;
      line-height: 13px;
      margin-left: 10px;
      box-sizing: border-box;
      background: #fff;

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        position: absolute;
        margin-top: 0;
        top: 100%;
        border: inherit;
        border-bottom: none;
        border-top: none;
        left: -1px;
        right: -1px;
        opacity: 0 !important;
        pointer-events: none;
        background-color: rgba(255, 255, 255, 0.95);
        box-sizing: border-box;

        li {
          margin: 0;
          list-style: none !important;

          label {
            display: block;
            border-bottom: 1px solid #e6e6e6;
            padding: 10px;
            box-sizing: border-box;
            text-transform: capitalize;
            margin: 0;

            input {
              margin-right: 8px;
              margin-left: -20px;
              box-sizing: border-box;
            }

            &:hover {
              background-color: #fcfcfc;
              cursor: pointer;
              box-sizing: border-box;
            }

            &:active {
              background-color: #fafafa;
              cursor: pointer;
              box-sizing: border-box;
            }
          }
        }
      }
    }
  }
`;

export const StyledIconListItem = styled.a`
  padding-bottom: 0.8rem;
  display: block;
  white-space: nowrap;

  svg {
    width: 24px;
    height: 24px;
    overflow: visible;
    margin-right: 6px;
    position: relative;
    top: -2px;
    vertical-align: middle;
  }
  .hiddenVisually {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    padding: 0;
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
  }
  .whiteSpace-noWrap {
    white-space: nowrap !important;
  }
`;

export const StyledPopup = styled(Popup)`
  h3 {
    margin: 0;
  }
`;

export const StyledMarker = styled(Marker)`
  svg {
    height: ${({ iconHeight }) => `${iconHeight}px`};
    display: block;
  }
`;

// No Longer in use

export const StyledMapMarker = styled.div`
  background-color: #000;
  border-radius: 100%;
  border: 2px solid #fff;
  height: 18px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  width: 18px;
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
  &:hover {
    z-index: 1;
  }
`;
