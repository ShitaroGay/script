
function showLoader() {
    document.querySelector('.container').style.display = 'none'; // Скрываем основной контент
    const loader = document.getElementById('loader');
    loader.style.display = 'flex'; // Показываем лоадер

    setTimeout(() => {
        loader.innerHTML = '<h2>Ссылка: <a href="https://t.me/WorkBiznesMamonts" style="color: white;">example.com</a></h2>'; // Замените URL на нужный
    }, 5000); // Ждем 5 секунд
}
