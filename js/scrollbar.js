window.onload = function() {
    var scrollbar = document.getElementById('scrollbar');
    
    var windowHeight = window.innerHeight; // Высота окна браузера
    var windowWidth = window.innerWidth; // Ширина окна браузера
    var documentHeight = document.documentElement.scrollHeight; // Высота документа
    var scrollRange = documentHeight - windowHeight + 1100; // Диапазон прокрутки
    
    function updateScrollbar() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Позиция прокрутки
        var scrollRatio = scrollTop / scrollRange; // Пропорциональное положение прокрутки

        var newTop = windowHeight * scrollRatio; // Новая верхняя позиция фиксированного div
        var newHeight, newWidth;

        // Определяем устройство относительно ширины экрана
        if (windowWidth <= 800) {
            // Если ширина экрана меньше или равна 800px, считаем устройство мобильным
            newWidth = windowWidth * 0.1;
            newHeight = newWidth * 1.5;
            scrollRange = documentHeight - windowHeight + 400; // Диапазон прокрутки
        } else {
            // Иначе считаем, что это не мобильное устройство
            newHeight = 150; // Новая высота фиксированного div
            newWidth = 100; // Ширина фиксированного div
        }

        // Проверяем, чтобы новый div оставался в пределах экрана
        if (newTop + newHeight > windowHeight) {
            newHeight = windowHeight - newTop;
        }

        scrollbar.style.top = newTop + 20 + 'px'; // Устанавливаем новую верхнюю позицию
        scrollbar.style.height = newHeight + 'px'; // Устанавливаем новую высоту
        scrollbar.style.width = newWidth + 'px'; // Устанавливаем новую ширину
    }

    // Функция для обновления положения и прокрутки страницы при движении скроллбара
    function moveScrollbar(event) {
        var mouseY = event.clientY; // Позиция мыши по вертикали
        var scrollRatio = (mouseY - 20) / (windowHeight - 40); // Пропорциональное положение прокрутки

        var newScrollTop = scrollRange * scrollRatio; // Новая позиция прокрутки страницы
        window.scrollTo(0, newScrollTop - 600); // Прокручиваем страницу
        updateScrollbar(); // Обновляем положение скроллбара
    }

    // Обработчик события нажатия на скроллбар
    scrollbar.addEventListener('mousedown', function(event) {
        event.preventDefault(); // Предотвращаем выделение текста при нажатии
        window.addEventListener('mousemove', moveScrollbar); // Добавляем обработчик движения мыши
        window.addEventListener('mouseup', function() {
            window.removeEventListener('mousemove', moveScrollbar); // Удаляем обработчик движения мыши после отпускания кнопки
        });
    });

    // Вызываем функцию при прокрутке страницы
    window.addEventListener('scroll', updateScrollbar);

    // Вызываем функцию при изменении размеров окна
    window.addEventListener('resize', function() {
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth; // Обновляем ширину окна
        documentHeight = document.documentElement.scrollHeight;
        scrollRange = documentHeight - windowHeight;
        updateScrollbar();
    });

    // Вызываем функцию сразу после загрузки страницы
    updateScrollbar();
};