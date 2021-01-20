"use strict";

const poll = {
  question: "what is your favorite programming language?",
  answers: {
    javascript: {
      name: "javascript",
      count: 0,
    },
    python: {
      name: "python",
      count: 0,
    },
    rust: {
      name: "rust",
      count: 0,
    },
    cplusplus: {
      name: "c++",
      count: 0,
    },
  },
  registerNewAnswer: function (fn) {
    const questionString = `${this.question}\n
    0. ${this.answers.javascript.name}\n
    1. ${this.answers.python.name}\n
    2. ${this.answers.rust.name}\n
    3. ${this.answers.cplusplus.name}\n
    (write option number)`;

    const reply = Number(prompt(questionString)) ?? 100;
    let answer = null;
    if (reply >= 0 && reply <= 3) {
      if (reply === 0) {
        answer = this.answers.javascript;
      } else if (reply === 1) {
        answer = this.answers.python;
      } else if (reply === 2) {
        answer = this.answers.rust;
      } else if (reply === 3) {
        answer = this.answers.cplusplus;
      }
      answer.count++;
    } else {
      alert("please input an answer: 0, 1, 2, or 3");
    }
    fn();
  },
  displayResults: function (type) {
    if (type === "array") {
      let resultArr = [
        this.answers.javascript.count,
        this.answers.python.count,
        this.answers.rust.count,
        this.answers.cplusplus.count,
      ];
      alert(`results: ${resultArr}`);
    } else if (type === "string") {
      const resultString = `javascript: ${this.answers.javascript.count}\n
      python: ${this.answers.python.count}\n
      rust: ${this.answers.rust.count}\n
      c++: ${this.answers.cplusplus.count}`;
      alert(resultString);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener(
    "click",
    poll.registerNewAnswer.bind(poll, poll.displayResults.bind(poll, "string"))
  );
