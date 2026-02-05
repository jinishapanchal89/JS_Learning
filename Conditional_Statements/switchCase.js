// 1. To find the day of the week

function checkDayOfTheWeek(dayNum){
    let day;
    switch (dayNum){
        case 0:
            day="Sunday";
            break;
        case 1:
            day="Monday";
            break;
        case 2:
            day="Tuesday";
            break;
        case 3:
            day="Wednesday";
            break;
        case 4:
            day="Thursday";
            break;
        case 5:
            day="Friday";
            break;
        case 6:
            day="Sunday";
            break;
        case 7:
            day="Saturday";
            break;
        default:
            console.log("Invalid Input")
            break;
    }
    return day;
}

console.log(checkDayOfTheWeek(7));
console.log(checkDayOfTheWeek(5));
console.log(checkDayOfTheWeek(2));
console.log(checkDayOfTheWeek(6));

console.log("--------------------------------------------------------");

function launchBrowser(browserName){
    let browser;
    switch (browserName){
        case "Chrome":
            browser="Launch the Chrome browser";
            break;
        case "Firefox":
            browser="Launch the Firefox browser";
            break;
        case "Safari":
            browser="Launch the Safari browser";
            break;
        case "IE":
            browser="Launch the IE browser";
            break;
        case "Edge":
            browser="Launch the Edge browser";
            break;
        default:
            browser = `Entered BrowserName is not Valid, ${browserName}, Please Pass the valid BrowserName`;
            break;
}
  return browser;
}

let browser = launchBrowser("Jk");
console.log(browser);

let browser1 = launchBrowser("Chrome");
console.log(browser1);

console.log("--------------------------------------------------------");