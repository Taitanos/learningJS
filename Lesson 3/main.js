// 1. Проверяется наличие функции-обработчика
// 2. Генерирует объект с описанием события (event, ev, e)
// 3. Вызывает функцию-обработчик и передает ей event в качестве параметра.

const sm = document.getElementById("small")
const sdm = document.getElementById("medium")
const big = document.getElementById("big")

function onClickHandler (e) {
    e.stopPropagation() // прекращает распространение дальше вверх по дереву
    console.dir(e.currentTarget)
}

sm.onclick = onClickHandler
sdm.onclick = onClickHandler
big.onclick = onClickHandler

// e.target -> элемент, который сгенерировал событие (первый получил клик)
// e.currentTarget -> элемент, который вызвал обработчик в процессе всплытия
// часто значение e.target и e.currentTarget совпадают, но безопасней использовать e.currentTarget