function CreateQuestions(question1,question2,question3) {
    this.question1=question1;
    this.question2=question2;
    this.question3=question3;
}

let questions= new CreateQuestions(" What did you today?", "What will you do tomorrow?","Are there any blockers in your way?");
localStorage.setItem("Questions",JSON.stringify(questions));