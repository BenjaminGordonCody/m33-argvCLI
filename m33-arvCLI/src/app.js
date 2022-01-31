const { Movie, movieArr } = require("./utils");

const app = (args) => {
  switch (args[2]) {
    case "add":
      const movie = new Movie(args[3], args[4]);
      movie.add();
      console.log(movieArr);
      break;

    default:
      console.log("Incorrect command.");
      break;
  }
};

app(process.argv); //
