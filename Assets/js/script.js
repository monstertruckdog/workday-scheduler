var textArea = $('.textarea');
var saveButton = $('.saveBtn');
var idTextArea = {
    0: $('#c-todo-r-a'),
    1: $('#c-todo-r-b'),
    2: $('#c-todo-r-c'),
    3: $('#c-todo-r-d'),
    4: $('#c-todo-r-e'),
    5: $('#c-todo-r-f'),
    6: $('#c-todo-r-g'),
    7: $('#c-todo-r-h'),
    8: $('#c-todo-r-i')
};
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var memory = [];

dateTodayHeader();
timeLabelColorEval();


function timeLabelColorEval() {
    
    for (let i = 0; i < hours.length; i++) {
        var idTextAreaObjects = idTextArea[i];
        if (moment().get('hour') < hours[i]) {
            idTextAreaObjects.addClass('future');
        } else if (moment().get('hour') > hours[i]) {
            idTextAreaObjects.addClass('past');
        } else if (moment().get('hour') === hours[i]) {
            idTextAreaObjects.addClass('present');
        }
    };
};

function dateTodayHeader() {
    var headerSpace = $(".jumbotron");
    var headerDateSpace = $("#currentDay");
    dateToday = moment().format("dddd, MMMM Do YYYY");
    headerDateSpace.text(dateToday);
};

function saveDescription() {

}

saveButton.on('click', function() {

})