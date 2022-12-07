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
    icon: <RiHome5Fill fontSize="2rem" />,
    path: "/",
  },
  {
    id: 2,
    icon: <BiBorderAll fontSize="2rem" />,
    path: "/error",
  },
  {
    id: 3,
    icon: <BiBorderAll fontSize="2rem" />,
    path: "/error",
  },
  {
    id: 4,
    icon: <BiBorderAll fontSize="2rem" />,
    path: "/error",
  },
  {
    id: 5,
    icon: <BiBorderAll fontSize="2rem" />,
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
    owner: "Ape ape",
    ownerImg: boredApe,
  },
  {
    id: 2,
    title: "Meebit",
    price: 200,
    url: meebit,
    owner: "Ape ape",
    ownerImg: boredApe,
  },
  {
    id: 3,
    title: "Crypto punk",
    price: 202,
    url: cryptopunk,
    owner: "Ape ape",
    ownerImg: boredApe,
  },
  {
    id: 4,
    title: "World of WOmen",
    price: 3404,
    url: worldOfWomen,
    owner: "Ape ape",
    ownerImg: boredApe,
  },
];

export const TransactionsList = [
  {
    id: 1,
    from: "123qwe456rtz",
    to: "123qwe456rtz",
    currency: "Bitcoin",
    img: bitcoin,
    price: 21902,
    amount: "19BTC",
    amountFiat: 20000,
    buy: "buy",
    date: "12/08/2022",
  },
  {
    id: 2,
    from: "123qwe456rtz",
    to: "123qwe456rtz",
    currency: "Bitcoin",
    img: bitcoin,
    price: 21902,
    amount: "19BTC",
    amountFiat: 20000,
    buy: "buy",
    date: "12/08/2022",
  },
  {
    id: 3,
    from: "123qwe456rtz",
    to: "123qwe456rtz",
    currency: "Bitcoin",
    img: bitcoin,
    price: 21902,
    amount: "19BTC",
    amountFiat: 20000,
    buy: "buy",
    date: "12/08/2022",
  },
  {
    id: 4,
    from: "123qwe456rtz",
    to: "123qwe456rtz",
    currency: "Bitcoin",
    img: bitcoin,
    price: 21902,
    amount: "19BTC",
    amountFiat: 20000,
    buy: "buy",
    date: "12/08/2022",
  },
  {
    id: 5,
    from: "123qwe456rtz",
    to: "123qwe456rtz",
    currency: "Bitcoin",
    img: bitcoin,
    price: 21902,
    amount: "19BTC",
    amountFiat: 20000,
    buy: "buy",
    date: "12/08/2022",
  },
];

export default sidebarLinks;
