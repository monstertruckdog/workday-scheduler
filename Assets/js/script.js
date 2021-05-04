var textArea = $('.textarea');
var saveButton = $('.saveBtn');
var idTextAreaDiv = {
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
var idTextAreaBox = {
    0: $('#tb-a'),
    1: $('#tb-b'),
    2: $('#tb-c'),
    3: $('#tb-d'),
    4: $('#tb-e'),
    5: $('#tb-f'),
    6: $('#tb-g'),
    7: $('#tb-h'),
    8: $('#tb-i')
};
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var memory = [];

dateTodayHeader();
timeLabelColorEval();


function timeLabelColorEval() {
    for (let i = 0; i < hours.length; i++) {
        var idTextAreaObjects = idTextAreaDiv[i];
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
    console.log(`idTextAreaDiv[0]:  ${idTextAreaDiv[0]}`);
    console.log(`tb-a:  ${$('#tb-a').val()}`);
    console.log(`idTextAreaBox[0]:  ${idTextAreaBox[0].val()}`);
    console.log(`tb-b:  ${$('#tb-b').val()}`);

    var memory = {
        '9\:00 AM': idTextAreaBox[0].val(),
        '10\:00 AM': idTextAreaBox[1].val(),
        '11\:00 AM': idTextAreaBox[2].val(),
        '12\:00 PM': idTextAreaBox[3].val(),
        '01\:00 PM': idTextAreaBox[4].val(),
        '02\:00 PM': idTextAreaBox[5].val(),
        '03\:00 PM': idTextAreaBox[6].val(),
        '04\:00 PM': idTextAreaBox[7].val(),
        '05\:00 PM': idTextAreaBox[8].val()
    }

    if ($('#c-save-r-a')) {
        //console.log(`VALUE OF 9\:00:  ${descriptionA.value.trim()}`);
        localStorage.setItem('9\:00 TEST', JSON.stringify(memory['9\:00 AM']));
    } else if ($('#c-save-r-b')) {
        localStorage.setItem('10\:00 YEA', JSON.stringify(memory['10\:00 AM']));
    } else if ($('#c-save-r-c')) {
        localStorage.setItem('11\:00 OKAY', JSON.stringify(memory['11\:00 AM']));
    } // START BACK HERE
    
}


saveButton.on('click', function(event) {
    event.preventDefault();
    saveDescription()
});