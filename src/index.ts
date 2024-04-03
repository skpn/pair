#!/usr/bin/env node
// NOTE: You can remove the first line if you don't plan to release an
// executable package. E.g. code that can be used as cli like prettier or eslint

// https://www.npmjs.com/package/simple-git ?

const main = async () => {
  const prompt = "Why is the sky blue? short, concise answer";
  const res = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    body: JSON.stringify({
      model: "mistral",
      prompt,
      stream: false,
    }),
  });
  const data = await res.json();
  console.log("prompt:", prompt);
  console.log("response:", data);
};

// This was just here to force a linting error for now to demonstrate/test the
// eslint pipeline. You can uncomment this and run "yarn check-lint" to test the
// linting.
// const x: number[] = [1, 2];
// const y: Array<number> = [3, 4];

// This was just here to force a linting error for now to demonstrate/test the
// eslint pipeline. You can uncomment this and run "yarn check-lint" to test the
// linting.
// if (x == y) {
//   console.log("equal!");
// }

main();
