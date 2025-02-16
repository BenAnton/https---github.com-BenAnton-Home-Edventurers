import Hygge from "./assets/Hygge.jpg";
import ChildLed from "./assets/Child-Led.jpg";
import Montessori from "./assets/Montessori.jpg";
import Waldorf from "./assets/Waldorf.jpg";

// categories: for kids, for adults, free resources

let items = [
  {
    id: 1,
    image: Hygge,
    inCart: true,
    title: "Test Title",
    price: "£9.99",
    description:
      "Test Description that is a little lengthy one sentence with more words to make near two lines.",
    category: "for kids",
  },
  {
    id: 2,
    image: ChildLed,
    inCart: true,
    title: "Test Title 2",
    price: "£99.99",
    description:
      "Test Description that is a little lengthy one sentence with more words to make near two lines.",
    category: "for adults",
  },
  {
    id: 3,
    image: Montessori,
    inCart: true,
    title: "Test Title 3",
    price: "Free",
    description:
      "Test Description that is a little lengthy one sentence with more words to make near two lines.",
    category: "free resources",
  },
  {
    id: 4,
    image: Waldorf,
    inCart: false,
    title: "Test Title 4",
    price: "£0.99",
    description:
      "Test Description that is a little lengthy one sentence with more words to make near two lines.",
    category: "for adults",
  },
  {
    id: 5,
    image: Hygge,
    inCart: false,
    title: "Test Title 5",
    price: "£5.99",
    description:
      "Test Description that is a little lengthy one sentence with more words to make near two lines.",
    category: "for kids",
  },
  {
    id: 6,
    image: ChildLed,
    inCart: false,
    title: "Test Title 6",
    price: "free",
    description:
      "Test Description that is a little lengthy one sentence with more words to make near two lines.",
    category: "free resources",
  },
  {
    id: 7,
    image: Waldorf,
    inCart: false,
    title: "Test Title 8",
    price: "£1,200.00",
    description:
      "Test Description that is a little lengthy one sentence with more words to make near two lines.",
    category: "for kids",
  },
  {
    id: 8,
    image: Waldorf,
    inCart: false,
    title: "Pam's",
    price: "£1",
    description: "Pams new resource that is just being added.",
    category: "for adults",
  },
  {
    id: 9,
    image: Waldorf,
    inCart: false,
    title: "Pam's",
    price: "£1",
    description: "Pams new resource that is just being added.",
    category: "free resources",
  },
  {
    id: 10,
    image: Waldorf,
    inCart: false,
    title: "Pam is watching",
    price: "£100",
    description: "Pams new resource that is just being added.",
    category: "for kids",
  },
];

export default items;
