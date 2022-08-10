const toggleBtn = document.querySelector('#menu__button');
const insightBtn = document.querySelector('.insight__button');
const marketinfoBtn = document.querySelector('.marketinfo__button');

const menu = document.querySelector('.main__menu');
const icons = document.querySelector('.userinfoAndSetting');
const insightmenu = document.querySelector('.insight__submenu');
const marketinfomenu = document.querySelector('.marketinfo__submenu');


const scoreboardData = document.getElementById('scoreboard__data');

toggleBtn.addEventListener('click',() => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

insightBtn.addEventListener('mouseover',() =>{
    insightmenu.style.display='flex'
});
insightBtn.addEventListener('mouseout',() =>{
    insightmenu.style.display='none';
});

marketinfoBtn.addEventListener('mouseover',() =>{
    marketinfomenu.style.display='flex'
});
marketinfoBtn.addEventListener('mouseout',() =>{
    marketinfomenu.style.display='none';
});

new TradingView.widget(
    {
        "z-index": -1,
        "autosize": true,
        "symbol": "BINANCE:BTCUSDT",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "kr",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "tradingview_5547f"
    }
);

function scoreUpdate(){

}