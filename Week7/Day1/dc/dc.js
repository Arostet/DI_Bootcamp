class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  watch() {
    return `${this.uploader} watched all ${this.time} of ${this.title}!`;
  }
}

const vid = new Video("Armaggedon", "Johnny", "2hrs");
console.log(vid.watch());

const vid2 = new Video("Lord of the Rings", "Tim", "3hrs");
console.log(vid2.watch());

const data = [
  {
    title: "Big Lebowski",
    uploader: "Mike",
    time: "2hrs30min",
  },
  {
    title: "Shawshank Redemption",
    uploader: "George",
    time: "1hr49min",
  },
  {
    title: "The Big Short",
    uploader: "Greg",
    time: "3hrs",
  },
  {
    title: "Remember the Titans",
    uploader: "Derek",
    time: "4hrs",
  },
  {
    title: "The Longest Yard",
    uploader: "Wallace",
    time: "3hrs",
  },
];

data.forEach((movie) => {
  const { title, uploader, time } = movie;
  let newMov = new Video(`${title}`, `${uploader}`, `${time}`);
  console.log(newMov.watch());
});
