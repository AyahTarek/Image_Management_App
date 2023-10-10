import { ROUTES } from "@/routes";
import Link from "next/link";
import styled from "styled-components";
import { Avatar } from ".";
import { mockUserProfile } from "@/mocks";
import { FaHeart, FaHome } from "react-icons/fa";

const UserProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  @media screen and (max-width: 767px) {
    margin-top: 0;
  }
`;

export const UserName = styled.h2`
  margin: 0;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  padding: 0rem;
  background-color: #74a7f2;
  gap: 1rem;

  @media screen and (max-width: 767px) {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem;
  background-color: #74a7f2;
  z-index: 5;
  @media screen and (min-width: 768px) {
    display: none; /* Hide the bottom menu on larger screens */
  }
`;

export const MenuLabel = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: #74a7f2;
  z-index: 5;
  min-height: 60px;
  max-height: 60px;
  padding: 0 16px 0 16px;

  @media screen and (max-width: 767px) {
    display: none; // Hide on mobile screens
  }
`;

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <UserProfileWrapper>
          <Link href={ROUTES.HOME}>
            <Avatar src={mockUserProfile.avatar} alt="User Avatar" />
          </Link>
          <UserName>{mockUserProfile.name}</UserName>
        </UserProfileWrapper>
        <Menu>
          <Link href={ROUTES.HOME}>
            <MenuLabel>
              <FaHome /> Home
            </MenuLabel>
          </Link>
          <Link href={ROUTES.FAVORITES}>
            <MenuLabel>
              <FaHeart /> Liked
            </MenuLabel>
          </Link>
        </Menu>
      </HeaderWrapper>
      <MobileMenu>
        <Link href={ROUTES.HOME}>
          <MenuLabel>
            <FaHome /> Home
          </MenuLabel>
        </Link>
        <Link href={ROUTES.FAVORITES}>
          <MenuLabel>
            <FaHeart /> Liked
          </MenuLabel>
        </Link>
      </MobileMenu>
    </>
  );
};
