import { BiBorderAll } from "react-icons/bi";
import { RiHome5Fill } from "react-icons/ri";
import bitcoin from "../assets/images/bitcoin.jpg";
import BNB from "../assets/images/BNB.jpg";
import ether from "../assets/images/ether.avif";
import sushi from "../assets/images/sushi.jpeg";

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
  },
  {
    id: 2,
    title: "Etherium",
    price: 1000,
    url: ether,
  },
  {
    id: 3,
    title: "BNB",
    price: 5000,
    url: BNB,
  },
  {
    id: 4,
    title: "Sushi",
    price: 500,
    url: sushi,
  },
];

export default sidebarLinks;
