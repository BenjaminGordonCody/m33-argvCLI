const { Movie, movieArr } = require("./utils");

const app = (args) => {
  if (args[2] == "add" && args.length % 2 == 1) {
    for (let i = 3; i <= args.length - 1; i += 2) {
      const film = args[i];
      const actor = args[i + 1];
      const movie = new Movie(film, actor);
      movie.add();
    }
    console.log(movieArr);
  } else {
    console.log("Incorrect command.");
  }
};

app(process.argv); //
