var textArea = $('.textarea');

// var ids = ['$(c-todo-r-a)', '$(c-todo-r-b)', '$(c-todo-r-c)', '$(c-todo-r-d)', '$(c-todo-r-e)', '$(c-todo-r-f)', '$(c-todo-r-g)', '$(c-todo-r-h)', '$(c-todo-r-i)'];
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 16, 17];
console.log(`CURRENT HOUR VALUE:  ${tempGetHour = moment().get('hour')}`);

dateTodayHeader();
timeLabelColorEval();




function timeLabelColorEval() {
    for (let i = 0; i < hours.length; i++) {
        if (moment().get('hour') < hours[i]) {
            textArea.addClass('future');
        } else if (moment().get('hour') > hours[i]) {
            textArea.addClass('past');
        } else if (moment().get('hour') === hours[i]) {
            textArea.addClass('present');
        }
    };
};

function dateTodayHeader() {
    var headerSpace = $(".jumbotron");
    var headerDateSpace = $("#currentDay");
    dateToday = moment().format("dddd, MMMM Do YYYY");
    headerDateSpace.text(dateToday);
};