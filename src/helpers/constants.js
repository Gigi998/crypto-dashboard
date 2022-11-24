import { BiBorderAll } from "react-icons/bi";
import { RiHome5Fill } from "react-icons/ri";
import bitcoin from "../assets/images/bitcoin.jpg";
import BNB from "../assets/images/BNB.jpg";
import ether from "../assets/images/ether.avif";
import sushi from "../assets/images/sushi.jpeg";
import boredApe from "../assets/images/boredApe.jpg";
import cryptopunk from "../assets/images/cryptopunk.png";
import meebit from "../assets/images/meebit.png";
import worldOfWomen from "../assets/images/worldOfWomen.jpg";

const sidebarLinks = [
  {
    id: 1,
    icon: <RiHome5Fill />,
    path: "/",
  },
  {
    id: 2,
    icon: <BiBorderAll />,
    path: "/error",
  },
  {
    id: 3,
    icon: <BiBorderAll />,
    path: "/error",
  },
  {
    id: 4,
    icon: <BiBorderAll />,
    path: "/error",
  },
  {
    id: 5,
    icon: <BiBorderAll />,
    path: "/error",
  },
];

export const CryptoCurrenciesList = [
  {
    id: 1,
    title: "Bitcoin",
    price: 32000,
    url: bitcoin,
    gain: 2.31,
  },
  {
    id: 2,
    title: "Etherium",
    price: 1000,
    url: ether,
    gain: 4.51,
  },
  {
    id: 3,
    title: "BNB",
    price: 5000,
    url: BNB,
    gain: -2.5,
  },
  {
    id: 4,
    title: "Sushi",
    price: 500,
    url: sushi,
    gain: -3,
  },
];

export const NFTList = [
  {
    id: 1,
    title: "Bored Ape",
    price: 100,
    url: boredApe,
  },
  {
    id: 2,
    title: "Meebit",
    price: 200,
    url: meebit,
  },
  {
    id: 3,
    title: "Crypto punk",
    price: 202,
    url: cryptopunk,
  },
  {
    id: 4,
    title: "World of WOmen",
    price: 3404,
    url: worldOfWomen,
  },
];

export default sidebarLinks;
