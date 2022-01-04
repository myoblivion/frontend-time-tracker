const URL = "https://raw.githubusercontent.com/myoblivion/Time-Tracker/main/data.json"
let DATA = [];
let content = document.querySelector('.user-panel')

function getTimeTracking() {
    fetch(URL).then( (res) => res.json() )
    .then( (data) => {
        DATA = data;
        boxContent = "";
        document.querySelector('.active').classList.remove('active');
        document.getElementById('weekly').classList.add('active');
        DATA.map( (data) => {
            boxContent += `
            <div class="panel-box ${data.title.toLowerCase()}">
            <div class="box-panel">
                <div class="header-box">
                    <h3>${data.title}</h3>
                    <span><img src="../images/icons/icon-ellipsis.svg" alt=""></span>
                </div>
                <div class="body-box">
                    <p class="hrs">${data.timeframes.weekly.current}hrs</p>
                    <p class="period">Last Week - ${data.timeframes.weekly.previous}hrs</p>
                </div>
            </div>
        </div>`;
        });
        content.innerHTML = boxContent;
    }); 
}

getTimeTracking();
