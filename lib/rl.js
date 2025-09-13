import readline from "readline";

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const tanya = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      console.clear();
      resolve(answer);
    });
  });
};
