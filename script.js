/* my object array for all the buttons and the info they need */

const shopItems = [
    {
        name:"click",
        icon:"➤",
        baseCost:1,
        level:0,
        baseIncome:.01,
        type:'click',
        constIncrease: 1.05,
    },
    {
        name:"worker",
        icon:"👷",
        baseCost:2.5,
        level:0,
        baseIncome:0.03,
        type:'passive',
        constIncrease: 1.05,
        
    },
    {
        name:"freelancer",
        icon:"🖥️",
        baseCost:6.25,
        level:0,
        baseIncome:0.06,
        type:'passive',
        constIncrease: 1.05,
    },
    {
        name:"janitor",
        icon:"🧹",
        baseCost:15.63,
        level:0,
        baseIncome:0.16,
        type:'passive',
        constIncrease: 1.05,
    },
    {
        name:"delivery bike",
        icon:"🚲",
        baseCost:39.06,
        level:0,
        baseIncome:0.39,
        type:'passive',
        constIncrease: 1.05,
    },
    {
        name:"scooter delivery",
        icon:"🛵",
        baseCost:97.66,
        level:0,
        baseIncome:0.98,
        type:'passive',
        constIncrease: 1.05,
    },
    {
        name:"small shop",
        icon:"🏪",
        baseCost:244,
        level:0,
        baseIncome:2.44,
        type:'passive',
        constIncrease: 1.05,
    },
    {
        name:"food stand",
        icon:"🍔",
        baseCost:610,
        level:0,
        baseIncome:6.1,
        type:'passive',
        constIncrease: 1.05,
    },
    {
        name:"delivery truck",
        icon:"🚚",
        baseCost:1530,
        level:0,
        baseIncome:15.3,
        type:'passive',
        constIncrease: 1.05,
    },
    {
        name:"supermarket",
        icon:"🏬",
        baseCost:3810,
        level:0,
        baseIncome:38.1,
        type:'passive',
        constIncrease: 1.05,
    },
    {
        name:"factory",
        icon:"🏭",
        baseCost:15260,
        level:0,
        baseIncome:50.87,
        type:'passive',
        constIncrease: 1.08,
    },
    {
        name:"construction site",
        icon:"🏗️",
        baseCost:61040,
        level:0,
        baseIncome:203,
        type:'passive',
        constIncrease: 1.08,
    },
    {
        name:"cargo ship",
        icon:"🚢",
        baseCost:244000,
        level:0,
        baseIncome:813,
        type:'passive',
        constIncrease: 1.08,
    },
    {
        name:"airplane",
        icon:"✈️",
        baseCost:977000,
        level:0,
        baseIncome:3260,
        type:'passive',
        constIncrease: 1.08,
    },
    {
        name:"office building",
        icon:"🏢",
        baseCost:3910000,
        level:0,
        baseIncome:13030,
        type:'passive',
        constIncrease: 1.08,
    },
    {
        name:"bank",
        icon:"🏦",
        baseCost:15630000,
        level:0,
        baseIncome:52100,
        type:'passive',
        constIncrease: 1.08,
    },
    {
        name:"stock market Firm",
        icon:"📊",
        baseCost:62500000,
        level:0,
        baseIncome:208000,
        type:'passive',
        constIncrease: 1.08,
    },
    {
        name:"investment firm",
        icon:"💼",
        baseCost:250000000,
        level:0,
        baseIncome:833000,
        type:'passive',
        constIncrease: 1.08,
    },
    {
        name:"tech company",
        icon:"🌐",
        baseCost:1000000000,
        level:0,
        baseIncome:3330000,
        type:'passive',
        constIncrease: 1.08,
    },
    {
        name:"satellite network",
        icon:"🛰️",
        baseCost:4000000000,
        level:0,
        baseIncome:13330000,
        type:'passive',
        constIncrease: 1.08,
    },
    {
        name:"power plant",
        icon:"⚡",
        baseCost:28000000000,
        level:0,
        baseIncome:56000000,
        type:'passive',
        constIncrease: 1.1,
    },
    {
        name:"ai system",
        icon:"🧠",
        baseCost:196000000000,
        level:0,
        baseIncome:392000000,
        type:'passive',
        constIncrease: 1.1,
    },
    {
        name:"country",
        icon:"🌍",
        baseCost:1370000000000,
        level:0,
        baseIncome:2740000000,
        type:'passive',
        constIncrease: 1.1,
    },
    {
        name:"moon mining",
        icon:"🌕",
        baseCost:206000000000000,
        level:0,
        baseIncome:375000000000,
        type:'passive',
        constIncrease: 1.12,
    },
    {
        name:"planetary industry",
        icon:"🪐",
        baseCost:71160000000000000,
        level:0,
        baseIncome:124000000000000,
        type:'passive',
        constIncrease: 1.15,
    },
    {
        name:"galactic empire",
        icon:"🌌",
        baseCost:14410000000000000000,
        level:0,
        baseIncome:25060000000000000,
        type:'passive',
        constIncrease: 1.17,
    },
    
];

/* empty arrays to push stuff into for updating purposes */

const shopElements = [];
const shopUpdaters = [];

/* all of my global variables */

let currentDays = document.getElementById('currentDays');
let currentMoney = document.getElementById('currentMoney');
const settingsPannel = document.querySelector('.setting-panel');
const statsPannel = document.querySelector('.stats-pannel');
const shopPannel = document.querySelector('.shop-pannel');
const shopContainer = document.getElementById('shopItems');

let days = 0;
let money = 0;
let html = "";
let roundedMoney = Math.round(money * 100) / 100;
const moneyPerSecond = document.getElementById('moneyPerSecond');
let totalMoneyEarned = 0;
let totalClickedMoney = 0;
let totalPassiveMoney = 0;
const totalMoneyStat = document.getElementById("totalMoneyStat");
const totalClickedStat = document.getElementById("totalClickedStat");
const totalPassiveStat = document.getElementById("totalPassiveStat"); 

//bulk cost

let bulkAmount = 1; //this is just the base one it can be 1, 10, 100

/* this is how the save is put back into numbers so it displays */

const saveData = JSON.parse(localStorage.getItem("save"));



if (saveData) {
    money = saveData.money || 0;
    days = saveData.days || 0;

    totalMoneyEarned = saveData.totalMoneyEarned || 0;
    totalClickedMoney = saveData.totalClickedMoney || 0;
    totalPassiveMoney = saveData.totalPassiveMoney || 0;

    shopItems.forEach((item, i) => {
        item.level = saveData.levels[i] || 0;
    });
}

function moneyAbbreviations(num){
    if(num < 1000) return num.toFixed(2);

    const moneyShorten = ['K','M','B','T','Qa','Qi','Sx','Sp','Oc','No','Dc','Udc','Ddc','Tdc','Qadc','Qidc','Sxdc','Spdc','Ocdc','Nmdc','Vg','Uvg','Dvg','Tvg','Qavg','Qivg','Sxvg','Spvg','Ovg','Nvg','Tg','Utg','Dtg','Ttg','QaTg','QiTg','SxTg','SpTg','OcTg','NoTg','Qd','UQa','Dqa','Tqd','QQ','Qag','Sxqag','SPQ','Oqg','Nq','Qg','UQi','Dqg','TQq','Qaqg','Qqn','Sxig','Spg','OcQg','NoQg','sg','Usg','Dsg','Tsg','Qdsg','Qnsg','Sxsg' /* this is 10 to the power of 201 if needed I will add more */];
    let i = -1;

    while (num >= 1000 && i < moneyShorten.length -1){
        num /= 1000;
        i++;
    }
    return num.toFixed(2) + moneyShorten[i];
}

shopItems.forEach((item, index) =>{

    const wrapper = document.createElement("div");
    wrapper.className = "shop-item-block";

    //hides all the buttons exept the first one
    if (index !== 0) {
        wrapper.style.display = "none";
    }

    shopElements.push(wrapper);
    shopContainer.appendChild(wrapper);

    const owned = document.createElement("p");

    const shopRow = document.createElement("div");
    shopRow.className = "shop-item";

    const btn = document.createElement("button");
    btn.textContent = item.icon;

    const costEl = document.createElement("span");
    costEl.className = "cost";

    const makes = document.createElement("p");

    function getClickPreview(item){
        if(item.type !== "click") return 0;

        const multiplier = getClickMultiplier(item.level);

        const base = 0.01;
        const scaling = item.baseIncome * item.level;

        return (base + scaling) * multiplier * getGlobalMultiplier();
    }

    function updateUI() {
        owned.textContent = `Owned: ${item.level}`;
        costEl.textContent = `Cost (${bulkAmount}): ${moneyAbbreviations(getBulkCost(item, bulkAmount))}`;
        

        if (item.level === 0) {
            makes.textContent = item.type === "click"
                ? "Per click: 0"
                : "This makes: 0 money/sec";
        } else {
            makes.textContent = item.type === "click"
                ? `Per click: +${moneyAbbreviations(getClickPreview(item))}`
                : `This makes: +${moneyAbbreviations(getPassiveIncome(item))} money/sec`;
        }
        

    }
    shopUpdaters.push(updateUI);

    btn.onclick = () => buyItem(item);

    function buyItem(item){
        const cost = getBulkCost(item, bulkAmount);
        
        if (money >= cost) {
            money -= cost;
            item.level += bulkAmount;

            saveGame();
            updateUI();
            updateMoney();
        }else{
            console.log('you dont have enough money');
        }

        unlockButtons();
        updateCPS();
    }

    shopRow.appendChild(btn);
    shopRow.appendChild(costEl);

    wrapper.appendChild(owned);
    wrapper.appendChild(shopRow);
    wrapper.appendChild(makes);

    updateUI();
});

function updateAllUI() {
    shopUpdaters.forEach(fn => fn());
}

function updateStats(){
    totalMoneyStat.textContent = moneyAbbreviations(totalMoneyEarned);

    totalClickedStat.textContent = moneyAbbreviations(totalClickedMoney);

    totalPassiveStat.textContent = moneyAbbreviations(totalPassiveMoney);
}

function unlockButtons(){
    shopItems.forEach((item, index) => {

        const el = shopElements[index];

        if (!el) return;

        const unlocked = index === 0 || money >= item.baseCost || item.level > 0;

        el.style.display = unlocked ? "block" : "none";
        /* el.style.backgroundColor =  */
    });
}

function getBulkCost(item, amount){
    const b = item.baseCost;
    const r = item.constIncrease;
    const L = item.level;

    return b * (Math.pow(r, L)*(Math.pow(r, amount)-1))/(r-1);
}

function setBulk(amount) {
    bulkAmount = amount;
    updateAllUI();
}

function getClickMultiplier(level) {

    let multiplier = 1;

    // base scaling (always runs)
    for (let i = 1; i <= level; i++) {
        multiplier *= 1.03;

        if (i % 10 === 0) {
            multiplier *= 1.1;
        }
    }

    // milestone bonuses (STACKED, not inside loop)
    if (level >= 50) multiplier *= 1.15;
    if (level >= 100) multiplier *= 1.5;
    if (level >= 1000) multiplier *= 3;

    return multiplier;
}

function getPassiveMultiplier(level){

    let multiplier = 1;

    //base scaling
    for(let i=1;i<=level;i++){
        multiplier *= 1.03;

        if(i % 10 === 0){
            multiplier *= 1.05;
        }
    }

    //milestone bonuses
    if(level >= 50) multiplier *= 1.1;
    if(level >= 100) multiplier *= 1.5;
    if(level >= 1000) multiplier *=15

    return multiplier
}

function getPassiveIncome(item){
        if (item.type !== "passive") return 0;

        const base = item.baseIncome * item.level;
        const passiveMulti = getPassiveMultiplier(item.level);
        const globalMulti = getGlobalMultiplier();

        return base * passiveMulti * globalMulti;
    }

function getClickValue() {
    const clickItem = shopItems.find(item => item.type === "click");

    if (!clickItem) return 0.01;

    const base = 0.01;

    // upgrade scaling (linear growth per level)
    const scaling = clickItem.baseIncome * clickItem.level;

    // multiplier system
    const multiplier = getClickMultiplier(clickItem.level);

    return (base + scaling) * multiplier * getGlobalMultiplier();
}

function getCPS(){
    let total = 0;

    shopItems.forEach(item => {
        total += getPassiveIncome(item);
    });
    return total;
}

function updateCPS(){
    let total = getCPS();

    moneyPerSecond.textContent = `${moneyAbbreviations(total)}/sec`
}

setInterval(() => {
    const cps = getCPS();
    const passiveIncome = cps / 10; // smoother tick (0.1 sec system)

    money += passiveIncome;

    totalMoneyEarned += passiveIncome;
    totalPassiveMoney += passiveIncome;

    updateStats();
    updateMoney();
    updateAllUI();
    updateCPS();
}, 100);

function getTier(){

}

function clicker(){
    const clickValue = getClickValue();

    console.log("Click value:", clickValue);

    money += clickValue;

    roundedMoney = Math.round(money * 100) / 100
    localStorage.setItem("money", money);

    totalMoneyEarned += clickValue;
    totalClickedMoney += clickValue;

    updateMoney();
    unlockButtons();
    saveGame();
}

function updateMoney(){
    currentMoney.innerHTML = moneyAbbreviations(money);
    unlockButtons();
} 

function clearData(){
    money = 0;
    days = 0;
    roundedMoney = 0;
    totalMoneyEarned = 0;
    totalClickedMoney = 0;
    totalPassiveMoney = 0;
    
    shopItems.forEach(item => {
        item.level = 0;
    });

    // Clear ALL saved data
    localStorage.removeItem('save');

    // Update UI everywhere
    updateMoney();
    updateDays();
    updateAllUI();
    updateCPS();
    unlockButtons();
}

const myTimer = setInterval(function() {
    days++;
    console.log(days);
    localStorage.setItem("days", days);
    updateDays();
}, 300000);

function getGlobalMultiplier() {
    return Math.pow(1.001, days);
}

function updateDays(){
    currentDays.innerHTML = days;
}

function openSettings(){
    settingsPannel.classList.add('open');
}

function closeSettings(){
    settingsPannel.classList.remove('open');
}

function statsOpen(){
    statsPannel.classList.add('open');
}

function statsClose(){
    statsPannel.classList.remove('open');
}

function openShop(){
    shopPannel.classList.add('open');
}

function closeShop(){
    shopPannel.classList.remove('open');
}

function saveGame(){
    const saveData = {
        days,
        money,
        levels: shopItems.map(i => i.level),

        totalMoneyEarned,
        totalClickedMoney,
        totalPassiveMoney
    };

    localStorage.setItem('save', JSON.stringify(saveData));
}

setInterval(() => {
    saveGame();
    console.log("Game saved");
}, 5000);

//admin commands

window.addMoney = function(amount){
    money += amount;
    updateMoney();
    updateCPS();
    unlockButtons();
    saveGame();
};

window.setMoney = function(amount){
    money = amount;
    updateMoney();
    updateCPS();
    unlockButtons();
    saveGame();
};

window.addDays = function(amount){
    days += amount;
    updateDays();
    saveGame();
};

window.setDays = function(amount){
    days = amount;
    updateDays();
    saveGame();
};

window.addLevels = function(index, amount){
    if(!shopItems[index]) return console.log("Invalid item index");

    shopItems[index].level += amount;

    updateAllUI();
    updateCPS();
    unlockButtons();
    saveGame();
};

updateDays();
updateMoney();
unlockButtons();
updateCPS();
updateStats();