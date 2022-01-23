var year = Number(prompt('Введите год: '));

if (year % 4 == 0) {
    alert(true);
} else if (year % 100 == 0) {
    alert(false);
} else {
    alert(false);
};