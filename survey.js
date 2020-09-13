const readline = require("readline");
// let answer1;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name?  ", (answer1) => {
  rl.question("What activities do you like?  ", (answer2) => {
    rl.question("What do you listen to while doing that?  ", (answer3) => {
      rl.question(
        "Which meal is your favorite (eg: Dinner, brunch, etc.)?  ",
        (answer4) => {
          rl.question("What sport is your absolute favorite?  ", (answer5) => {
            rl.question(
              "What is your superpower? In a few words, tell us what you are amazing at!  ",
              (answer6) => {
                console.log(
                  `Hi my name is ${answer1}, and my favorite activies are: ${answer2}. When I'm doing those activies I like to listen to ${answer3}.  My favorite meal of the day is ${answer4}!  My favorite sport is ${answer5}.  My superpower is ${answer6}`
                );
                rl.close();
              }
            );
          });
        }
      );
    });
  });
});
