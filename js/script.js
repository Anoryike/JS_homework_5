// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind
// const student = {
//     name: "",
//     speciality: "",
//     displayInfo: function(GPA, missedClasses){
//         console.group("Info:");
//         console.log(`Name: ${this.name}`);
//         console.log(`Major: ${this.speciality}`);
//         console.log(`Speciality: ${GPA}`);
//         console.log(`Missed Classes: ${missedClasses}`);
//         console.groupEnd();
//     },
// };

// const Julia = {
//     name: "Julia",
//     speciality: "Computer Science",
// };

// student.displayInfo.bind(Julia, 4.3, 1)();

// const Philip = {
//     name: "Philip",
//     speciality: "Engineer",
// };

// student.displayInfo.call(Philip, 3.2, 6);

// const Ruslan = {
//     name: "Ruslan",
//     speciality: "Mechanic",
// };

// student.displayInfo.apply(Ruslan, [4.6, 2]);

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке
// function showHTML() {
//   alert(
//     "HTML - це мова розмітки гіпертексту, яка використовується для створення структури та вмісту веб-сторінок."
//   );
// }

// function showCSS() {
//   alert(
//     "CSS - це мова таблиць стилів, яка використовується для оформлення вигляду елементів на веб-сторінках."
//   );
// }

// document.getElementById("html").addEventListener("click", showHTML);
// document.getElementById("css").addEventListener("click", showCSS);

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89. 3,4

// function shop(productName, pricePerKg, quantity) {
//   const price = pricePerKg * quantity;
//   return `Product: ${productName}, Price: ${price}`;
// }

// console.log(shop("banana", 30, 4.5));  // Product: banana, Price: 135
// console.log(shop("cherry", 58, 1.3));  // Product: cherry, Price: 75.4
// console.log(shop("orange", 89, 3.4));  //Product: orange, Price: 302.59999999999997
