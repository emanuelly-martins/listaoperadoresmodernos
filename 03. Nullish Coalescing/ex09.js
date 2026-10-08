// 3. Nullish Coalescing (??)
// 9. Explique por que os dois resultados são diferentes.

const quantidade = 0;

console.log(quantidade || 10); // 10
console.log(quantidade ?? 10); // 0
