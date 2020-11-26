import React, { Component } from "react";
import PizarraComponent from "./Components/PizarraComponent";

const axios = require("axios").default;

class App extends Component {
  trailers = [
    {
      id: 1,
      title: " Pikilao the movie",
      year: 2001,
      previewURL: "http://i3.ytimg.com/vi/Lu44kPZXmnM/hqdefault.jpg",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.?",
      url: "https://www.youtube.com/watch?v=Lu44kPZXmnM",
    },
    {
      id: 2,
      title: "Pikilao the movie",
      year: 2001,
      previewURL: "http://i3.ytimg.com/vi/Lu44kPZXmnM/hqdefault.jpg",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.?",
      url: "https://www.youtube.com/watch?v=Lu44kPZXmnM",
    },
    {
      id: 3,
      title: "Pikilao the movie",
      year: 2001,
      previewURL: "http://i3.ytimg.com/vi/Lu44kPZXmnM/hqdefault.jpg",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.?",
      url: "https://www.youtube.com/watch?v=Lu44kPZXmnM",
    },
    {
      id: 4,
      title: "Pikilao the movie",
      year: 2001,
      previewURL: "http://i3.ytimg.com/vi/Lu44kPZXmnM/hqdefault.jpg",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.?",
      url: "https://www.youtube.com/watch?v=Lu44kPZXmnM",
    },
    {
      id: 5,
      title: "Pikilao the movie",
      year: 2001,
      previewURL: "http://i3.ytimg.com/vi/Lu44kPZXmnM/hqdefault.jpg",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.?",
      url: "https://www.youtube.com/watch?v=Lu44kPZXmnM",
    },
    {
      id: 6,
      title: "Pikilao the movie",
      year: 2001,
      previewURL: "http://i3.ytimg.com/vi/Lu44kPZXmnM/hqdefault.jpg",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.?",
      url: "https://www.youtube.com/watch?v=Lu44kPZXmnM",
    },
    {
      id: 7,
      title: "Pikilao the movie",
      year: 2001,
      previewURL: "http://i3.ytimg.com/vi/Lu44kPZXmnM/hqdefault.jpg",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.?",
      url: "https://www.youtube.com/watch?v=Lu44kPZXmnM",
    },
    {
      id: 8,
      title: "Pikilao the movie",
      year: 2001,
      previewURL: "http://i3.ytimg.com/vi/Lu44kPZXmnM/hqdefault.jpg",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.?",
      url: "https://www.youtube.com/watch?v=Lu44kPZXmnM",
    },
    {
      id: 9,
      title: "Pikilao the movie",
      year: 2001,
      previewURL: "http://i3.ytimg.com/vi/Lu44kPZXmnM/hqdefault.jpg",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.?",
      url: "https://www.youtube.com/watch?v=Lu44kPZXmnM",
    },
  ];
  render() {
    return (
      <div>
        <PizarraComponent trailer={this.trailers} />
      </div>
    );
  }
}

export default App;
