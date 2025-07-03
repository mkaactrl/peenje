const input = document.getElementById("jsInput");
const injectBtn = document.getElementById("injectBtn");
const lvl12Btn = document.getElementById("lvl12");
const revealBtn = document.getElementById("revealBtn");
const hiddenOutput = document.getElementById("hiddenOutput");

// load from localStorage
window.addEventListener("load", () => {
  const saved = localStorage.getItem("scriptInput");
  if (saved) input.value = saved;
});

input.addEventListener("input", () => {
  localStorage.setItem("scriptInput", input.value);
});

// detect sketchy stuff like require(6942069).totallyreal
function handleHiddenReveal(script) {
  const susMatch = /require\(\d+\)\.\w+/g;
  const match = script.match(susMatch);
  if (match) {
    hiddenOutput.textContent = match.join("\n");
    revealBtn.style.display = "inline";
  } else {
    revealBtn.style.display = "none";
  }
}

function executeScript(script) {
  try {
    eval(script);
  } catch (err) {
    alert("💥 Error:\n" + err);
  }
}

injectBtn.addEventListener("click", () => {
  const code = input.value;
  handleHiddenReveal(code);
  executeScript(code);
});

lvl12Btn.addEventListener("click", () => {
  const code = input.value;
  handleHiddenReveal(code);
  alert("⚠️ Level 12 Execution Unlocked. Proceeding...");
  setTimeout(() => {
    executeScript(code);
  }, 500);
});

revealBtn.addEventListener("click", () => {
  hiddenOutput.style.display =
    hiddenOutput.style.display === "none" ? "block" : "none";
});
