function populate() {
  
}

var questions = [
  new Questions("Which one is not an object oriented programming language?", ["Java", "C#", "C++", "C"], "C"),
  new Questions("Which language is used for styling web pages?", ["HTML", "Jquery", "CSS", "XML"], "CSS"),
  new Questions("There are ___ main components of object oriented programming.", ["1", "6", "2", "4"], "4"),
  new Questions("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
  new Questions("MVC is a ___.", ["Language", "Library", "Framework", "All"], "Framework")
];

var quiz = new Quiz(questions);

populate();
