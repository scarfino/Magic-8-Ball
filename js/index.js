/*
Magic 8 Ball - Add your name, ask it a question.
@scarfino 2018
*/

//who is using the magic 8 ball?
const userName = ('Bob');
let greeting = ('')
if (userName != '') {
  greeting = 'Welcome, ' + (userName) + ('.');
} else {

  greeting = "Welcome, User.";
}


//what do you want to ask the magic 8 ball?
const userQuestion = ('how much wood can a woodchuck chuck?');

//magic 8 ball talks to user
console.log(`Hello ${userName}`);
console.log(`${userName} asked: ${userQuestion}`);

//determine result
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = ('')

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;

}
//display result
console.log(`🎱- ${eightBall}`);
