// Функция для отображения кодировки
function showEncoding() {
    const encoding = document.characterSet;
    const infoDiv = document.getElementById('info');
    infoDiv.textContent = `Кодировка страницы: ${encoding}`;
}

// Обработчик события для кнопки
document.getElementById('showEncoding').addEventListener('click', function() {
    setTimeout(showEncoding, 4000);
});

// Перемещение элемента №1 при щелчке по нему
document.getElementById('element1').addEventListener('click', function() {
    document.body.appendChild(this);
});

// Добавление стилей при наведении на ссылку
const favoriteSiteLink = document.getElementById('favoriteSite');
favoriteSiteLink.addEventListener('mouseover', function() {
    favoriteSiteLink.style.color = 'orange';
    favoriteSiteLink.style.textDecoration = 'none';
});
favoriteSiteLink.addEventListener('mouseout', function() {
    favoriteSiteLink.style.color = '';
    favoriteSiteLink.style.textDecoration = '';
});

// Проверка подключения к Интернету
document.getElementById('checkConnection').addEventListener('click', function() {
    const isOnline = navigator.onLine ? 'Подключен к Интернету' : 'Не подключен к Интернету';
    const newWindow = window.open('', '', 'width=300,height=250');
    newWindow.document.write(`
        <html>
        <head>
            <title>Михайловский Максим</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    margin: 0;
                }
            </style>
        </head>
        <body>
            <p>${isOnline}</p>
        </body>
        </html>
    `);
});
