import Hygge from "./assets/Hygge.jpg";
import ChildLed from "./assets/Child-Led.jpg";
import Montessori from "./assets/Montessori.jpg";
import Waldorf from "./assets/Waldorf.jpg";

let items = [
  {
    id: 1,
    image: Hygge,
    inCart: true,
    title: "Test Title",
    price: "£9.99",
    description:
      "Test Description that is a little lengthy one sentence with more words to make near two lines.",
  },
  {
    id: 2,
    image: ChildLed,
    inCart: true,
    title: "Test Title 2",
    price: "£99.99",
    description:
      "Test Description that is a little lengthy one sentence with more words to make near two lines.",
  },
  {
    id: 3,
    image: Montessori,
    inCart: true,
    title: "Test Title 3",
    price: "£999.99",
    description:
      "Test Description that is a little lengthy one sentence with more words to make near two lines.",
  },
  {
    id: 4,
    image: Waldorf,
    inCart: false,
    title: "Test Title 4",
    price: "£0.99",
    description:
      "Test Description that is a little lengthy one sentence with more words to make near two lines.",
  },
  {
    id: 5,
    image: Hygge,
    inCart: false,
    title: "Test Title 5",
    price: "£5.99",
    description:
      "Test Description that is a little lengthy one sentence with more words to make near two lines.",
  },
  {
    id: 6,
    image: ChildLed,
    inCart: false,
    title: "Test Title 6",
    price: "£24.95",
    description:
      "Test Description that is a little lengthy one sentence with more words to make near two lines.",
  },
  {
    image: Montessori,
    inCart: false,
    title: "Test Title 7",
    price: "£180.00",

    description:
      "Test Description that is a little lengthy one sentence with more words to make near two lines.",
  },
  {
    id: 7,
    image: Waldorf,
    inCart: false,
    title: "Test Title 8",
    price: "£1,200.00",
    description:
      "Test Description that is a little lengthy one sentence with more words to make near two lines.",
  },
  {
    id: 8,
    image: Waldorf,
    inCart: false,
    title: "Pam's",
    price: "£1",
    description: "Pams new resource that is just being added.",
  },
];

export default items;
