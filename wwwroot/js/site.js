
let sendingStory = document.getElementById("sendingStory")

let healthLine = document.getElementById("health")
let houseLine = document.getElementById("house")
let educationLine = document.getElementById("education")
let productsLine = document.getElementById("products")
let taxiLine = document.getElementById("taxi")
let fastfoodLine = document.getElementById("fastfood")
let leisureLine = document.getElementById("leisure")
let cafeLine = document.getElementById("cafe")
let otherLine = document.getElementById("other")

let balance = document.getElementById("balance")
let balanceNum = 0.0
balance.innerHTML = balanceNum

let biggestExpenses = document.getElementById("biggestExpenses")

let minusHealth = 0
let minusHouse = 0
let minusEducation = 0
let minusProducts = 0
let minusTaxi = 0
let minusFastfood = 0
let minusLeisur = 0
let minusCafe = 0
let minusOther = 0

// Переменные для ежедневных расходов
var mondaySpent = 0;
var tuesdaySpent = 0;
var wednesdaySpent = 0;
var thursdaySpent = 0;
var fridaySpent = 0;
var saturdaySpent = 0;
var sundaySpent = 0;




let sendArrayOfObject = [
    
]
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
// Функция для получения кука по имени
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
// Функция для установки куков с ежедневными расходами
function saveWeeklyExpenses() {
    setCookie("mondaySpent", mondaySpent, 7);
    setCookie("tuesdaySpent", tuesdaySpent, 7);
    setCookie("wednesdaySpent", wednesdaySpent, 7);
    setCookie("thursdaySpent", thursdaySpent, 7);
    setCookie("fridaySpent", fridaySpent, 7);
    setCookie("saturdaySpent", saturdaySpent, 7);
    setCookie("sundaySpent", sundaySpent, 7);
}
function loadWeeklyExpenses() {
    mondaySpent = getCookie("mondaySpent") ? parseInt(getCookie("mondaySpent")) : 0;
    tuesdaySpent = getCookie("tuesdaySpent") ? parseInt(getCookie("tuesdaySpent")) : 0;
    wednesdaySpent = getCookie("wednesdaySpent") ? parseInt(getCookie("wednesdaySpent")) : 0;
    thursdaySpent = getCookie("thursdaySpent") ? parseInt(getCookie("thursdaySpent")) : 0;
    fridaySpent = getCookie("fridaySpent") ? parseInt(getCookie("fridaySpent")) : 0;
    saturdaySpent = getCookie("saturdaySpent") ? parseInt(getCookie("saturdaySpent")) : 0;
    sundaySpent = getCookie("sundaySpent") ? parseInt(getCookie("sundaySpent")) : 0;
}
let rendeerSendElement = (text, price, clas, type) => {
    return `<div id="send">
    <div id="readySendText">${text}</div>
    <div id="readySendPrice">${price}</div>
    <div id="readySendClass">${clas}</div>
    <div id="readyTypeOfOperation">${type}</div>
</div>`
}
let renderBiggestExpenses = (iconEmoji, nameClass, minusNumber) => {
    return `<p>Biggest expenses</p>
    <div id="biggestExpensesClass">
        <div id="iconBiggestExpenses">${iconEmoji}</div>
        <p>${nameClass} / ${minusNumber}</p>
    </div>`
}
let renderSendingList = (cssID, nameClass, minusNumber) => {
    return `<div id="${cssID}"></div>
            <p>${nameClass} / ${minusNumber}</p>`
}

let sendTextAdd = document.getElementById("sendText")
let sendPriceAdd = document.getElementById("sendPrice")
let sendClassAdd = document.getElementById("sendClass")
let sendAddBtnAdd = document.getElementById("sendAdd")






let replenishmentBtn = document.getElementById("replenishmentButton")
let spendingBtn = document.getElementById("spendingButton")
let positionOfTypeButton = 0
spendingBtn.style.backgroundColor = "#3ED1FF"
spendingBtn.style.color = "#252525"


replenishmentBtn.onclick = function() {
    positionOfTypeButton = 1    
    replenishmentBtn.style.backgroundColor = "#3ED1FF"
    replenishmentBtn.style.color = "#252525"
    spendingBtn.style.backgroundColor = "#313131"
    spendingBtn.style.color = "white"
    document.getElementById('sendClass').innerHTML = `<option value="💰 Salary" selected>💰 Salary</option>
    <option value="🎁 Gift">🎁 Gift</option>
    <option value="💲 Interest">💲 Interest</option>
    <option value="❔ Other">❔ Other</option>`
}
spendingBtn.onclick = function() {
    positionOfTypeButton = 0   
    spendingBtn.style.backgroundColor = "#3ED1FF"
    spendingBtn.style.color = "#252525"
    replenishmentBtn.style.backgroundColor = "#313131"
    replenishmentBtn.style.color = "white"
    document.getElementById('sendClass').innerHTML = `<option value="❤️ Health" selected>❤️ Health</option>
    <option value="🏠 House">🏠 House</option>
    <option value="🏫 Education">🏫 Education</option>
    <option value="🥕 Products">🥕 Products</option>
    <option value="🚕 Taxi">🚕 Taxi</option>
    <option value="🍔 Fastfood">🍔 Fastfood</option>
    <option value="🎾 Leisure">🎾 Leisure</option>
    <option value="🍣 Cafe<">🍣 Cafe</option>
    <option value="❔ Other">❔ Other</option>`
}




sendAddBtnAdd.onclick = function(){
    if(parseInt(sendPriceAdd.value) > 0) {
        document.getElementById("centerForNothingNotes").innerHTML = ""
        sendArrayOfObject.unshift({
            sendNewText: sendTextAdd.value,
            sendNewPrice: sendPriceAdd.value,
            sendNewClass: sendClassAdd.value,
            sendNewType: positionOfTypeButton ? "+" : "-"
        })
        sendingStory.insertAdjacentHTML('afterbegin', rendeerSendElement(sendTextAdd.value,sendPriceAdd.value,sendClassAdd.value,positionOfTypeButton ? "+" : "-"))   
        
        console.log(sendArrayOfObject)
        if (positionOfTypeButton == 0) {
            balanceNum -= parseInt(sendPriceAdd.value)
            if (balanceNum<0){
                balance.style.color = "red"
            }
            else{
                balance.style.color = "white"
            }
            balance.innerHTML = `${balanceNum} rub`
            
            switch (sendClassAdd.value) {
                case "❤️ Health":
                    minusHealth += parseInt(sendPriceAdd.value)
                    // document.getElementById("sendingList").innerHTML = renderSendingList("sendingListElColorHealth", "Health", minusHealth)
                    document.getElementById("sendingListElHealth").innerHTML = renderSendingList("sendingListElColorHealth", "Health", minusHealth)
                    break;
                case "🏠 House":
                    minusHouse += parseInt(sendPriceAdd.value)
                    // document.getElementById("sendingList").innerHTML = renderSendingList("sendingListElColorHouse", "House", minusHouse)
                    document.getElementById("sendingListElHouse").innerHTML = renderSendingList("sendingListElColorHouse", "House", minusHouse)
                    break;
                case "🏫 Education":
                    minusEducation += parseInt(sendPriceAdd.value)
                    // document.getElementById("sendingList").innerHTML = renderSendingList("sendingListElColorEducation", "Education", minusEducation)
                    document.getElementById("sendingListElEducation").innerHTML = renderSendingList("sendingListElColorEducation", "Education", minusEducation)
                    break;
                case "🥕 Products":
                    minusProducts += parseInt(sendPriceAdd.value)
                    // document.getElementById("sendingList").innerHTML = renderSendingList("sendingListElColorProducts", "Products", minusProducts)
                    document.getElementById("sendingListElProducts").innerHTML = renderSendingList("sendingListElColorProducts", "Products", minusProducts)
                    break;
                case "🚕 Taxi":
                    minusTaxi += parseInt(sendPriceAdd.value)
                    document.getElementById("sendingListElTaxi").innerHTML = renderSendingList("sendingListElColorTaxi", "Taxi", minusTaxi)
                    break;
                case "🍔 Fastfood":
                    minusFastfood += parseInt(sendPriceAdd.value)
                    document.getElementById("sendingListElFastfood").innerHTML = renderSendingList("sendingListElColorFastfood", "Fastfood", minusFastfood)
                    break;
                case "🎾 Leisur":
                    minusLeisur += parseInt(sendPriceAdd.value)
                    document.getElementById("sendingListElLeisure").innerHTML = renderSendingList("sendingListElColorLeisure", "Leisure", minusLeisur)
                    break;
                case "🍣 Cafe":
                    minusCafe += parseInt(sendPriceAdd.value)
                    document.getElementById("sendingListElCafe").innerHTML = renderSendingList("sendingListElColorCafe", "Cafe", minusCafe)
                    break;
                case "❔ Other":
                    minusOther += parseInt(sendPriceAdd.value)
                    document.getElementById("sendingListElOther").innerHTML = renderSendingList("sendingListElColorOther", "Other", minusOther)
                    break;
                default:
                    break;
            }
            ArraySendDay = [minusCafe , minusEducation , minusFastfood , minusHealth , minusHouse , minusLeisur , minusOther , minusProducts , minusTaxi]
            switch (new Date().getDay()){
                case 0:
                    loadWeeklyExpenses();
                    sundaySpent = sundaySpent + minusCafe + minusEducation + minusFastfood + minusHealth + minusHouse + minusLeisur + minusOther + minusProducts + minusTaxi
                    console.log("Sunday spent:", sundaySpent);
                    var maxValue = Math.max(mondaySpent + tuesdaySpent+wednesdaySpent+thursdaySpent+fridaySpent+saturdaySpent+sundaySpent);
                    var MaxArray = ArraySendDay.indexOf(maxValue);
                    var absoluteMaxValue = maxValue  /  100;
                    console.log(maxValue)
                    document.getElementById("statisticColumnSu").style.height = `${sundaySpent / absoluteMaxValue}%`;
                    saveWeeklyExpenses(); 

                    break;
                case 1:
                    loadWeeklyExpenses();
                    mondaySpent = mondaySpent + minusCafe + minusEducation + minusFastfood + minusHealth + minusHouse + minusLeisur + minusOther + minusProducts + minusTaxi
                    console.log("Monday spent:", mondaySpent);
                    var maxValue = Math.max(mondaySpent + tuesdaySpent+wednesdaySpent+thursdaySpent+fridaySpent+saturdaySpent+sundaySpent);
                    var MaxArray = ArraySendDay.indexOf(maxValue);
                    var absoluteMaxValue = maxValue  /  100;
                    console.log(maxValue)
                    document.getElementById("statisticColumnMo").style.height = `${mondaySpent / absoluteMaxValue}%`;
                    saveWeeklyExpenses(); 
                    break;
                case 2:
                    loadWeeklyExpenses();
                    tuesdaySpent = tuesdaySpent + minusCafe + minusEducation + minusFastfood + minusHealth + minusHouse + minusLeisur + minusOther + minusProducts + minusTaxi
                    console.log("Tuesday spent:", tuesdaySpent);
                    var maxValue = Math.max(mondaySpent + tuesdaySpent+wednesdaySpent+thursdaySpent+fridaySpent+saturdaySpent+sundaySpent);
                    var MaxArray = ArraySendDay.indexOf(maxValue);
                    var absoluteMaxValue = maxValue  /  100;
                    console.log(maxValue)
                    document.getElementById("statisticColumnTu").style.height = `${tuesdaySpent / absoluteMaxValue}%`;
                    saveWeeklyExpenses(); 
                    break;
                case 3:
                    loadWeeklyExpenses();
                    wednesdaySpent = wednesdaySpent + minusCafe + minusEducation + minusFastfood + minusHealth + minusHouse + minusLeisur + minusOther + minusProducts + minusTaxi
                    console.log("Wednesday spent:", wednesdaySpent);
                    var maxValue = Math.max(mondaySpent + tuesdaySpent+wednesdaySpent+thursdaySpent+fridaySpent+saturdaySpent+sundaySpent);
                    var MaxArray = ArraySendDay.indexOf(maxValue);
                    var absoluteMaxValue = maxValue  /  100;
                    console.log(maxValue)
                    document.getElementById("statisticColumnWe").style.height = `${wednesdaySpent / absoluteMaxValue}%`;
                    saveWeeklyExpenses(); 
                    break;
                case 4:
                    loadWeeklyExpenses();
                    thursdaySpent = thursdaySpent + minusCafe + minusEducation + minusFastfood + minusHealth + minusHouse + minusLeisur + minusOther + minusProducts + minusTaxi
                    console.log("Thursday spent:", thursdaySpent);
                    var maxValue = Math.max(mondaySpent + tuesdaySpent+wednesdaySpent+thursdaySpent+fridaySpent+saturdaySpent+sundaySpent);
                    var MaxArray = ArraySendDay.indexOf(maxValue);
                    var absoluteMaxValue = maxValue  /  100;
                    console.log(maxValue)
                    document.getElementById("statisticColumnTh").style.height = `${thursdaySpent / absoluteMaxValue}%`;
                    saveWeeklyExpenses(); 
                    break;
                case 5:
                    loadWeeklyExpenses();
                    fridaySpent = fridaySpent + minusCafe + minusEducation + minusFastfood + minusHealth + minusHouse + minusLeisur + minusOther + minusProducts + minusTaxi
                    console.log("Friday spent:", fridaySpent);
                    var maxValue = Math.max(mondaySpent + tuesdaySpent+wednesdaySpent+thursdaySpent+fridaySpent+saturdaySpent+sundaySpent);
                    var MaxArray = ArraySendDay.indexOf(maxValue);
                    var absoluteMaxValue = maxValue  /  100;
                    console.log(maxValue)
                    document.getElementById("statisticColumnFr").style.height = `${fridaySpent / absoluteMaxValue}%`;
                    saveWeeklyExpenses(); 
                    break;
                case 6:
                    loadWeeklyExpenses();
                    saturdaySpent = saturdaySpent + minusCafe + minusEducation + minusFastfood + minusHealth + minusHouse + minusLeisur + minusOther + minusProducts + minusTaxi
                    console.log("Saturday spent:", saturdaySpent);
                    var maxValue = Math.max(mondaySpent + tuesdaySpent+wednesdaySpent+thursdaySpent+fridaySpent+saturdaySpent+sundaySpent);
                    var MaxArray = ArraySendDay.indexOf(maxValue);
                    var absoluteMaxValue = maxValue  /  100;
                    console.log(maxValue)
                    document.getElementById("statisticColumnSa").style.height = `${saturdaySpent / absoluteMaxValue}%`;
                    saveWeeklyExpenses(); 
                    break;
            }

            let sumSend = minusHealth + minusHouse + minusEducation+minusProducts+minusTaxi+minusFastfood+minusLeisur+minusLeisur+minusCafe+minusOther
            let balanceOneProc = sumSend /100
            healthLine.style.width = `${minusHealth / balanceOneProc}%`
            houseLine.style.width = `${minusHouse/ balanceOneProc}%`
            educationLine.style.width = `${minusEducation/ balanceOneProc}%`
            productsLine.style.width = `${minusProducts/ balanceOneProc}%`
            taxiLine.style.width = `${minusTaxi/ balanceOneProc}%`
            fastfoodLine.style.width = `${minusFastfood/ balanceOneProc}%`
            leisureLine.style.width = `${minusLeisur/ balanceOneProc}%`
            cafeLine.style.width = `${minusCafe/ balanceOneProc}%`
            otherLine.style.width = `${minusOther/ balanceOneProc}%`

            let minuses = [minusHealth,minusHouse,minusEducation,minusProducts,minusTaxi,minusFastfood,minusLeisur,minusCafe,minusOther]
            let minusesMax = minuses.indexOf(Math.max(minusHealth,minusHouse,minusEducation,minusProducts,minusTaxi,minusFastfood,minusLeisur,minusCafe,minusOther))
            console.log(minusesMax)
            switch (minusesMax) {
                case 0:
                    biggestExpenses.innerHTML = renderBiggestExpenses("❤️", "Health", minusHealth)
                    document.getElementById("iconBiggestExpenses").style.backgroundColor = "#89c447"
                    break;
                case 1:
                    biggestExpenses.innerHTML = renderBiggestExpenses("🏠", "House", minusHouse)
                    document.getElementById("iconBiggestExpenses").style.backgroundColor = "#f6d564"
                    break;
                case 2:
                    biggestExpenses.innerHTML = renderBiggestExpenses("🏫", "Education", minusEducation)
                    document.getElementById("iconBiggestExpenses").style.backgroundColor = "#007bb6"
                    break;
                case 3:
                    biggestExpenses.innerHTML = renderBiggestExpenses("🥕", "Products", minusProducts)
                    document.getElementById("iconBiggestExpenses").style.backgroundColor = "#64bd31"
                    break;
                case 4:
                    biggestExpenses.innerHTML = renderBiggestExpenses("🚕", "Taxi", minusTaxi)
                    document.getElementById("iconBiggestExpenses").style.backgroundColor = "#ffea00"
                    break;
                case 5:
                    biggestExpenses.innerHTML = renderBiggestExpenses("🍔", "Fastfood", minusFastfood)
                    document.getElementById("iconBiggestExpenses").style.backgroundColor = "#f26d21"
                    break;
                case 6:
                    biggestExpenses.innerHTML = renderBiggestExpenses("🎾", "Leisur", minusLeisur)
                    document.getElementById("iconBiggestExpenses").style.backgroundColor = "#6ba0c5"
                    break;
                case 7:
                    biggestExpenses.innerHTML = renderBiggestExpenses("🍣", "Cafe", minusCafe)
                    document.getElementById("iconBiggestExpenses").style.backgroundColor = "#f19161"
                    break;
                case 8:
                    biggestExpenses.innerHTML = renderBiggestExpenses("❔", "Other", minusOther)
                    document.getElementById("iconBiggestExpenses").style.backgroundColor = "#828282"
                    break;
                default:
                    break;
            } 
        }
        else{
            balanceNum += parseInt(sendPriceAdd.value)
            if (balanceNum<0){
                balance.style.color = "red"
            }
            else{
                balance.style.color = "white"
            }
            balance.innerHTML = `${balanceNum} rub`
        }
        sendPriceAdd.placeholder = ""
        sendPriceAdd.style.border = ""
        sendTextAdd.value = ""
        sendPriceAdd.value = ""
    }  
    else{
        sendPriceAdd.placeholder = "Price"
        sendPriceAdd.style.border = "1px solid red"
    }
}

saveWeeklyExpenses(); // Сохраняем расходы в куках
loadWeeklyExpenses(); // Получаем расходы из куков

