const darkModeBtn = document.querySelector('.dark-mode-btn');

// Проверка темной темы на уровне системных настроек (проверять какие системные (на уровне пользователя) включены и ориентироваться на них, если пользователь предпочитает в настройках темные темы, то будет включена темная тема по умолчанию)

function isDarkInMatchMedia() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        darkModeBtn.classList.add('dark-mode-btn--active');
        document.body.classList.add('dark');
    }
}

isDarkInMatchMedia();


// Проверка наличия dark в LocalStorage

function isDarkInLS() {
    if (localStorage.getItem('darkMode') === 'dark') {
        darkModeBtn.classList.add('dark-mode-btn--active');
        document.body.classList.add('dark');
    } else if (localStorage.getItem('darkMode') === 'light') {
        darkModeBtn.classList.remove('dark-mode-btn--active');
        document.body.classList.remove('dark');
    }
}

isDarkInLS();


// Изменение темы при изменении системных настроек

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    console.log(event);
    const newColorScheme = event.matches ? "dark" : "light";

    // alert('change!!!');

    if (newColorScheme == "dark") {
        darkModeBtn.classList.add('dark-mode-btn--active');
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', 'dark')
    } else {
        darkModeBtn.classList.remove('dark-mode-btn--active');
        document.body.classList.remove('dark');
        localStorage.setItem('darkMode', 'light');
    }
})

// Включение ночного режима по кнопке

darkModeBtn.onclick = function () {
    darkModeBtn.classList.toggle('dark-mode-btn--active');
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('darkMode', 'dark');
    } else {
        localStorage.setItem('darkMode', 'light');
    }
}
