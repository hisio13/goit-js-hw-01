function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content); // Перетворюємо рядок на число
  const paddingWidth = parseFloat(padding) * 2; // Подвійне значення падінгу (для обох сторін)
  const borderWidth = parseFloat(border) * 2; // Подвійне значення бордера (для обох сторін)

  return contentWidth + paddingWidth + borderWidth; // Загальна ширина
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
