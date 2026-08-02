const quotes = [
  "Consistency beats talent when talent doesn't stay consistent.",
  "Every bug you fix makes you a better developer.",
  "Don't fear errors; fear not learning from them.",
  "Small progress every day leads to big success.",
  "Code. Break. Learn. Repeat.",
  "Your future is built by what you do today.",
  "Dream big, start small, stay consistent.",
  "The best developers never stop learning.",
  "Success is the result of discipline, not luck.",
  "One solved problem is one step closer to your dream job.",
  "Every expert was once a beginner.",
  "Practice until coding becomes your habit.",
  "Hard work opens doors that talent cannot.",
  "Focus on progress, not perfection.",
  "The only impossible code is the one you never write.",
  "Be patient. Great skills take time.",
  "Your dedication today creates your opportunities tomorrow.",
  "Confidence comes from preparation.",
  "Never compare your Chapter 1 to someone else's Chapter 20.",
  "Keep coding, keep growing, keep believing."
];

const button = document.querySelector("button");
const heading = document.querySelector("h1");

button.addEventListener("click", () => {
  const index = Math.floor(Math.random() * quotes.length);
  heading.textContent = quotes[index];
});

const img = document.querySelector("#photo");

const imageBtn = document.querySelector("#imageBtn");

imageBtn.addEventListener("click", () => {
   img.src = "image/OIP (1).webp";
  
});