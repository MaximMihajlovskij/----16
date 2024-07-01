// Функция для расчета по формуле и обработки исключений
function calculateFormula() {
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);

    try {
        const result = formula(x, y);
        document.getElementById('result').innerText = `Результат: ${result}`;
    } catch (error) {
        alert(error.message);
    }
}

// Пользовательская функция для расчета по формуле
function formula(x, y) {
    const sinX = Math.sin(x);
    const cosY = Math.cos(y);
    const cosX = Math.cos(x);
    const sinY = Math.sin(y);
    const tanXY = Math.tan(x * y);

    // Проверка на деление на ноль
    if (cosX - sinY === 0) {
        throw new Error('Ошибка: деление на ноль.');
    }

    const numerator = sinX + cosY;
    const denominator = cosX - sinY;
    const result = (numerator / denominator) * tanXY;

    return result;
}


