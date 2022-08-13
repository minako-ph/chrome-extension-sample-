window.onload = function () {

    // 今日の日付
    const dt = new Date();
    const { month, date } = {
        month: ("0" + (dt.getMonth() + 1)).slice(-2),
        date: ("0" + dt.getDate()).slice(-2)
    };

    // ヘッダーの取得
    const header_of_header = document.getElementsByClassName('list-header-name');

    // 今日の日付に一致するリストにクラスを付与する
    for (let i = 0; i < header_of_header.length; i++) {
        if (header_of_header[i].innerHTML.match(month + '/' + date)) {
            header_of_header[i].closest('.list').classList.add('is-today');
        }
    }
}
