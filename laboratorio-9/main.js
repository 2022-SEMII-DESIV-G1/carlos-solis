//? Arreglo de la piramide
let A = [
  [75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20, 4, 82, 47, 65],
  [19, 01, 23, 75, 3, 34],
  [88, 2, 77, 73, 7, 63, 67],
  [99, 65, 4, 28, 6, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
];
//? Funcion que calcula la suma mayor
function calc(A, i, j) {
  if (i == A.length) {
    return 0;
  }
  let sum;
  sum = A[i][j] + Math.max(calc(A, i + 1, j), calc(A, i + 1, j + 1));
  return sum;
}
//? Llamada a la funcion calculadora
function maxSum(A) {
  return calc(A, 0, 0);
}

let cont = 0;
const div = document.getElementById("piramyd");
A.forEach((E) => {
  cont++;
  const parentDiv = document.createElement("div");
  parentDiv.id = "parent" + cont;
  div.appendChild(parentDiv);
  console.log("[");
  E.forEach((d) => {
    const divParent = document.getElementById("parent" + cont);
    const childDiv = document.createElement("div");
    childDiv.textContent = d;
    divParent.appendChild(childDiv);
    console.log(d);
  });
  console.log("]");
});

const textSum = document.getElementById("sum");
textSum.innerHTML = "La suma de la ruta mayor es de: " + maxSum(A);
