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
    var headerSpace = $(".jumbotron"); // is this line needed?
    var headerDateSpace = $("#currentDay");
    dateToday = moment().format("dddd, MMMM Do YYYY");
    headerDateSpace.text(dateToday);
};

function saveDescription(saveId) {

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

    if (saveId == 'c-save-r-a') {
        localStorage.setItem(Object.keys(memory)[0], JSON.stringify(memory['9\:00 AM']));
    } else if (saveId == 'c-save-r-b') {
        localStorage.setItem(Object.keys(memory)[1], JSON.stringify(memory['10\:00 AM']));
    } else if (saveId === 'c-save-r-c') {
        localStorage.setItem(Object.keys(memory)[2], JSON.stringify(memory['11\:00 AM']));
    } else if (saveId === 'c-save-r-d') {
        localStorage.setItem(Object.keys(memory)[3], JSON.stringify(memory['12\:00 PM']));
    } else if (saveId === 'c-save-r-e') {
        localStorage.setItem(Object.keys(memory)[4], JSON.stringify(memory['01\:00 PM']));
    } else if (saveId === 'c-save-r-f') {
        localStorage.setItem(Object.keys(memory)[5], JSON.stringify(memory['02\:00 PM']));
    } else if (saveId === 'c-save-r-g') {
        localStorage.setItem(Object.keys(memory)[6], JSON.stringify(memory['03\:00 PM']));
    } else if (saveId === 'c-save-r-h') {
        localStorage.setItem(Object.keys(memory)[7], JSON.stringify(memory['04\:00 PM']));
    } else if (saveId === 'c-save-r-i') {
        localStorage.setItem(Object.keys(memory)[8], JSON.stringify(memory['05\:00 PM']));
    } else {
        return;
    }
};

function retrieveDescription() {
    console.log(`01. You're inside the retrieveDescription function`)
    console.log(`05. Attempt to get key or value or anything - 03:  ${localStorage.getItem('11:00 AM')}`)
    console.log(`06  This will be inserted into the description text row:  ${$("#tb-c").val(localStorage.getItem('11:00 AM'))}`);

    for (var i = 0; i < memory[i]; i++) {
        var memoryItem = JSON.parse(localStorage.getItem(memory[i]));
        console.log(`03. memoryItem:  ${memoryItem}`)
        // if (memory[i] !== null && memory[i] !== undefined) {
        if (memoryItem !== null) {
            idTextAreaBox[i].text(memoryItem)
        } else {
            return;
        }
    }
    
};

saveButton.on('click', function() {
    var saveId = this.id
    saveDescription(saveId);
    retrieveDescription();
});

function initializeDescriptions() {
    retrieveDescription();
}

initializeDescriptions();