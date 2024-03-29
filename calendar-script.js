// 每月的名稱
const month_names = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

// 閏月規則
isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0);
};

// 閏月
const getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28;
};

// 抓 calendar css 
let calendar = document.querySelector('.calendar');

// 產生年月
const generateCalendar = (month, year) => {
    let calendar_days = calendar.querySelector('.calendar-day');
    let calendar_header_year = calendar.querySelector('#year');

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    calendar_days.innerHTML = '';

    // 抓現在日期
    let currDate = new Date();
    if (month < 0 || month > 11) month = currDate.getMonth();
    if (!year) year = currDate.getFullYear();

    let curr_month = month_names[month];
    month_picker.innerHTML = curr_month;
    calendar_header_year.innerHTML = year;

    let first_day = new Date(year, month, 1);

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div');
        if (i >= first_day.getDay()) {
            day.classList.add('calendar-day-hover');
            day.innerHTML = i - first_day.getDay() + 1;
            day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`;
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getDate()) {
                day.classList.add('curr-date');
            }
        }
        calendar_days.appendChild(day);
    }
};
// 秀出每個月月份
let month_list = calendar.querySelector('.month-list');

month_names.forEach((e, index) => {
    let month = document.createElement('div');
    month.innerHTML = `<div data-month="${index}">${e}</div>`;
    month.querySelector('div').onclick = () => {
        month_list.classList.remove('show');
        curr_month = month_names[index];
         generateCalendar(index, curr_year.value);
    };
    month_list.appendChild(month);
});

// 按下按鈕跳到月份

let month_picker = calendar.querySelector('#month-picker')
