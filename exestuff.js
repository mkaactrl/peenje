// JS Script
const input = document.getElementById("jsInput");
const injectBtn = document.getElementById("injectBtn");
const lvl12Btn = document.getElementById("lvl12");
const revealBtn = document.getElementById("revealBtn");
const hiddenOutput = document.getElementById("hiddenOutput");

// 🌐 Load previous input
window.addEventListener("load", () => {
  const saved = localStorage.getItem("scriptInput");
  if (saved) input.value = saved;
});

// 💾 Save input on change
input.addEventListener("input", () => {
  localStorage.setItem("scriptInput", input.value);
});

// 🔍 Detect & isolate require(6942069).totallyreal
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

// ☣️ Execution button
function executeScript(script) {
  try {
    eval(script); // level 12 unlocked
  } catch (err) {
    alert("Error: " + err);
  }
}

// 🎯 Inject button (normal)
injectBtn.addEventListener("click", () => {
  const code = input.value;
  handleHiddenReveal(code);
  executeScript(code);
});

// 🔥 LEVEL 12 EXECUTION
lvl12Btn.addEventListener("click", () => {
  const code = input.value;
  handleHiddenReveal(code);

  alert("Level 12 Execution Unlocked.\nnawhimjustjokinglol");
  setTimeout(() => {
    executeScript(code);
  }, 500); // dramatic delay lol
});

// 👁 Show hidden lines
revealBtn.addEventListener("click", () => {
  hiddenOutput.style.display = hiddenOutput.style.display === "none" ? "block" : "none";
});
