function toggleSolution(btn){
  const solution = btn.nextElementSibling
  solution.style.display =
    solution.style.display === "block" ? "none" : "block"
}