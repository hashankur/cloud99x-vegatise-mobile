import { Image } from "react-native-svg";

type Slides = {
  id: number;
  title: string;
  description: string;
  image: string;
};
const slides: Slides[] = [
  {
    id: 1,
    title: "Welcome to Vegatise",
    description:
      "A Platform To Earn Income Passively By Partnering With Brands",
    image: require("./assets/images/slide1.png"),
  },
  {
    id: 2,
    title: "Get Paid",
    description:
      "A Platform To Earn Income Passively By Partnering With Brands",
    image: require("./assets/images/slide2.png"),
  },
  {
    id: 3,
    title: "Explore",
    description:
      "A Platform To Earn Income Passively By Partnering With Brands",
    image: require("./assets/images/slide3.png"),
  },
];
export default slides;
