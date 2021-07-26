var textArea = $('.textarea');
var saveButton = $('.saveBtn');
var idTimeLabels = [
    $('#c-time-r-a h4'),
    $('#c-time-r-b h4'),
    $('#c-time-r-c h4'),
    $('#c-time-r-d h4'),
    $('#c-time-r-e h4'),
    $('#c-time-r-f h4'),
    $('#c-time-r-g h4'),
    $('#c-time-r-h h4'),
    $('#c-time-r-i h4'),
]
var idTextAreaDiv = [
    $('#c-todo-r-a'),
    $('#c-todo-r-b'),
    $('#c-todo-r-c'),
    $('#c-todo-r-d'),
    $('#c-todo-r-e'),
    $('#c-todo-r-f'),
    $('#c-todo-r-g'),
    $('#c-todo-r-h'),
    $('#c-todo-r-i')
];
var idTextAreaBox = [
    $('#tb-a'),
    $('#tb-b'),
    $('#tb-c'),
    $('#tb-d'),
    $('#tb-e'),
    $('#tb-f'),
    $('#tb-g'),
    $('#tb-h'),
    $('#tb-i')
];
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
let memory;

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

    memory = [
        idTextAreaBox[0].val(),
        idTextAreaBox[1].val(),
        idTextAreaBox[2].val(),
        idTextAreaBox[3].val(),
        idTextAreaBox[4].val(),
        idTextAreaBox[5].val(),
        idTextAreaBox[6].val(),
        idTextAreaBox[7].val(),
        idTextAreaBox[8].val()
    ]

    switch (saveId) {
        case 'c-save-r-a':
            localStorage.setItem('9:00 AM', memory[0]);
        case 'c-save-r-b':
            localStorage.setItem('10:00 AM', memory[1]);
        case 'c-save-r-c':
            localStorage.setItem('11:00 AM', memory[2]);
        case 'c-save-r-d':
            localStorage.setItem('12:00 PM', memory[3]);
        case 'c-save-r-e':
            localStorage.setItem('1:00 PM', memory[4]);
        case 'c-save-r-f':
            localStorage.setItem('2:00 PM', memory[5]);
        case 'c-save-r-g':
            localStorage.setItem('3:00 PM', memory[6]);
        case 'c-save-r-h':
            localStorage.setItem('4:00 PM', memory[7]);
        case 'c-save-r-i':
            localStorage.setItem('5:00 PM', memory[8]);
    }
    $('.save-toast').toast('show')
};

function retrieveDescription() {
    for (var i = 0; i < hours.length; i++) {
        switch (idTimeLabels[i].text()) {
            case '9:00 AM':
                idTextAreaBox[0].text(localStorage.getItem('9:00 AM'));
            case '10:00 AM':
                idTextAreaBox[1].text(localStorage.getItem('10:00 AM'));
            case '11:00 AM':
                idTextAreaBox[2].text(localStorage.getItem('11:00 AM'))
            case '12:00 PM':
                idTextAreaBox[3].text(localStorage.getItem('12:00 PM'))
            case '01:00 PM':
                idTextAreaBox[4].text(localStorage.getItem('1:00 PM'))
            case '02:00 PM':
                idTextAreaBox[5].text(localStorage.getItem('2:00 PM'))
            case '03:00 PM':
                idTextAreaBox[6].text(localStorage.getItem('3:00 PM'))
            case '04:00 PM':
                idTextAreaBox[7].text(localStorage.getItem('4:00 PM'))
            case '05:00 PM':
                idTextAreaBox[8].text(localStorage.getItem('5:00 PM'))
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

dateTodayHeader();
timeLabelColorEval();
initializeDescriptions();
