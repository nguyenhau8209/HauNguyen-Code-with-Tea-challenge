import { IconsApp } from "./assets/icons/icon-app.js";
import { ImageApp } from "./assets/images/image-app.js";

const BlogCartData = [
  {
    category: "PRODUCTIVITY",
    title: "7 Skills of Highly Effective Programmers",
    description:
      "Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic. Here are our seven skills of effective programmers...",
    user: {
      avatar: ImageApp.avatar_card1,
      name: "Glen Williams",
    },
    time: "3 days ago",
    image: IconsApp.icon_cart1,
    backgroundColor: ["#BCD1FF"],
  },
  {
    category: "MEDIA",
    title: "SMM starter pack, part 2: content promotion",
    description:
      "This is the second part of the SMM starter pack series of articles. If you made it this far, you must be willing to learn about promoting business through social media.",
    user: {
      avatar: ImageApp.avatar_card2,
      name: "Patricia Kemp",
    },
    time: "17 days ago",
    image: IconsApp.icon_card2,
    backgroundColor: ["#F395BA", "#FED182"],
  },
  {
    category: "BUSINESS",
    title: "11 Things I Wish I Knew When I Started My Business",
    description:
      "Here are 11 things I wish I knew when I started my business. I hope they will save you some time and some anguish because (experience is a good teacher here) the sodium from your tears acts as a corrosive melting agent...",
    user: {
      avatar: ImageApp.avatar_card3,
      name: "Lisa Barnes",
    },
    time: "1 month ago",
    image: IconsApp.icon_card3,
    backgroundColor: ["#D2EBF7"],
  },
];

export default BlogCartData;
