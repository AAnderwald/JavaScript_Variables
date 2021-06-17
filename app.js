console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = "Anna ";
let lastName = "Anderwald";
var age = 47;

console.log(firstName);
console.log(lastName);
console.log(age);

// Exercise 2
let fullName = firstName + lastName;
console.log (fullName);

fullName =`${firstName} ${lastName}`;

// Exercise 3
let city = "Burke";
let pasttime = "play with son (he is a hoot and funny as all), taking bike rides with my husband, boxing, baking, and reading. I really enjoy the new row machine we just got. [And I love the TV shows Big Bang Theory, Firefly (including the movie that followed Serenity), and Mandalorian (Star Wars the original three are pretty much the only movies I like from the series though Rogue One was good). Some of the best book series I read are Anne McCaffrey (all of them) and JD Robb In Death series. Best comic character is Gambit, I don't know why but I always like him.]";
let myStory = `Hello, my name is ${fullName}, and I live in ${city}.  Some of the things I love to do is ${pasttime}`;
console.log (myStory);

