function makeLatinSquare(n) {
  const matrix = Array(n).fill().map(() => Array(n));
 
   for (let i = 0; i < n; i++) {
     matrix[0][i] = i + 1;
   }
 
   for (let i = 1; i < n; i++) {
     for (let j = 0; j < n; j++) {
       matrix[i][j] = matrix[i - 1][(j + 1) % n];
     }
   }
 
   return matrix;
 }
 