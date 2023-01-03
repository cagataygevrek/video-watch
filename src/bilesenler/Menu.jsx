import React from "react";
import styled from "styled-components";
import videoIcon from "../foto/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

const Container = styled.div`
  flex: 1;
  background-color: black;
  height: 100vh;
  color: white;
  font-size: 15px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 25px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
`;

const Foto = styled.img`
  height: 25px;
`;

const Linkler = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 8px;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const GirisYap = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Baslik = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Foto src={videoIcon} /> Video İzle
        </Logo>

        <Linkler>
          <HomeIcon />
          Ana Sayfa
        </Linkler>
        <Linkler>
          <ExploreOutlinedIcon />
          Shorts
        </Linkler>
        <Linkler>
          <SubscriptionsOutlinedIcon />
          Abonelikler
        </Linkler>
        <Hr />
        <Linkler>
          <VideoLibraryOutlinedIcon />
          Kitaplık
        </Linkler>
        <Linkler>
          <HistoryOutlinedIcon />
          Geçmiş
        </Linkler>
        <Hr />

        <GirisYap>
          Videoları beğenmek ve yorum yapmak için kullanıcı girişi yapınız.
          <Button>
            <AccountCircleOutlinedIcon />
            Giriş
          </Button>
        </GirisYap>
        <Hr />
        <Baslik>Popüler Videolar</Baslik>
        <Linkler>
          <LibraryMusicOutlinedIcon />
          Müzik
        </Linkler>
        <Linkler>
          <SportsBasketballOutlinedIcon />
          Spor
        </Linkler>
        <Linkler>
          <SportsEsportsOutlinedIcon />
          Oyunlar
        </Linkler>
        <Linkler>
          <MovieOutlinedIcon />
          Filmler
        </Linkler>
        <Linkler>
          <ArticleOutlinedIcon />
          Haberler
        </Linkler>
        <Linkler>
          <LiveTvOutlinedIcon />
          Canlı Yayın
        </Linkler>
        <Hr />
        <Linkler>
          <SettingsOutlinedIcon />
          Ayarlar
        </Linkler>
        <Linkler>
          <FlagOutlinedIcon />
          İçerik bildir
        </Linkler>
        <Linkler>
          <HelpOutlineOutlinedIcon />
          Yardım
        </Linkler>
      </Wrapper>
    </Container>
  );
};

export default Menu;
