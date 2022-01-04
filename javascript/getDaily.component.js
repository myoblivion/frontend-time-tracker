function getDailyReport() {
    boxContent = "";
    document.querySelector('.active').classList.remove('active');
    document.getElementById('daily').classList.add('active');
    DATA.map( (data) => {
        boxContent += `
        <div class="panel-box ${data.title.toLowerCase()}">
        <div class="box-panel">
            <div class="header-box">
                <h3>${data.title}</h3>
                <span><img src="/images/icons/icon-ellipsis.svg" alt=""></span>
            </div>
            <div class="body-box">
                <p class="hrs">${data.timeframes.daily.current}hrs</p>
                <p class="period">Last Week - ${data.timeframes.daily.previous}hrs</p>
            </div>
        </div>
    </div>`;
    });
    content.innerHTML = boxContent;
}


