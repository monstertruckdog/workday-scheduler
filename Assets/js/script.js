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
/*
var memory = {
    'HOUR': {
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
}
*/

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
    /*
    memory = {
        'HOUR 9\:00 AM': idTextAreaBox[0].val(),
        'HOUR 10\:00 AM': idTextAreaBox[1].val(),
        'HOUR 11\:00 AM': idTextAreaBox[2].val(),
        'HOUR 12\:00 PM': idTextAreaBox[3].val(),
        'HOUR 01\:00 PM': idTextAreaBox[4].val(),
        'HOUR 02\:00 PM': idTextAreaBox[5].val(),
        'HOUR 03\:00 PM': idTextAreaBox[6].val(),
        'HOUR 04\:00 PM': idTextAreaBox[7].val(),
        'HOUR 05\:00 PM': idTextAreaBox[8].val()
    }
    */
    /*

    memory = {
        '9:00_AM': idTextAreaBox[0].val(),
        '10:00_AM': idTextAreaBox[1].val(),
        '11\:00_AM': idTextAreaBox[2].val(),
        '12\:00_PM': idTextAreaBox[3].val(),
        '01\:00_PM': idTextAreaBox[4].val(),
        '02\:00_PM': idTextAreaBox[5].val(),
        '03\:00_PM': idTextAreaBox[6].val(),
        '04\:00_PM': idTextAreaBox[7].val(),
        '05\:00_PM': idTextAreaBox[8].val()
    }
    */
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
    console.log(`--> saveDescription --> memory (raw):  `, memory);
    console.log(`--> saveDescription --> memory (raw[0]):  `, memory[0])
    // console.log(`--> saveDescription --> memory (memory.HOUR values):  `, Object.values((memory.HOUR))[0]); // --> this works
    // console.log(`--> saveDescription --> memory (memory.HOUR keys):  `, Object.keys((memory.HOUR))[0]); // --> this works
    /*
    if (saveId == 'c-save-r-a') { // TO DO:  convert to case statement?
        localStorage.setItem(Object.keys(memory.HOUR)[0], Object.values(memory.HOUR)[0]);
    } else if (saveId == 'c-save-r-b') {
        localStorage.setItem(Object.keys(memory)[1], JSON.stringify(memory['HOUR 10\:00 AM']));
    } else if (saveId === 'c-save-r-c') {
        localStorage.setItem(Object.keys(memory)[2], JSON.stringify(memory['HOUR 11\:00 AM']));
    } else if (saveId === 'c-save-r-d') {
        localStorage.setItem(Object.keys(memory)[3], JSON.stringify(memory['HOUR 12\:00 PM']));
    } else if (saveId === 'c-save-r-e') {
        localStorage.setItem(Object.keys(memory)[4], JSON.stringify(memory['HOUR 01\:00 PM']));
    } else if (saveId === 'c-save-r-f') {
        localStorage.setItem(Object.keys(memory)[5], JSON.stringify(memory['HOUR 02\:00 PM']));
    } else if (saveId === 'c-save-r-g') {
        localStorage.setItem(Object.keys(memory)[6], JSON.stringify(memory['HOUR 03\:00 PM']));
    } else if (saveId === 'c-save-r-h') {
        localStorage.setItem(Object.keys(memory)[7], JSON.stringify(memory['HOUR 04\:00 PM']));
    } else if (saveId === 'c-save-r-i') {
        localStorage.setItem(Object.keys(memory)[8], JSON.stringify(memory['HOUR 05\:00 PM']));
    } else {
        return;
    }
    */
    switch (saveId) {
        case 'c-save-r-a':
            // localStorage.setItem(Object.keys(memory.HOUR)[0], Object.values(memory.HOUR)[0]);
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

    // return;
};

function retrieveDescription() {
    // console.log(`01. You're inside the retrieveDescription function`)
    // console.log(`05. Attempt to get key or value or anything - 03:  ${localStorage.getItem('11:00 AM')}`)
    // console.log(`06  This will be inserted into the description text row:  ${$("#tb-c").val(localStorage.getItem('11:00 AM'))}`);
    // console.log(`--> retrieveDescription --> before loop --> value of 'memory':  `, memory); // <-- undefined
    // console.log(`--> retrieveDescription --> before loop --> length of 'memory':  `, memory.length) // <-- undefined
    // console.log(`--> retrieveDescription --> before loop --> value of 'localStorage':  `, localStorage)
    // console.log(`--> retrieveDescription --> before loop --> length of 'localStorage':  `, localStorage.length)
    // console.log(`--> retrieveDescription --> before loop --> value of 'memory.HOUR':  `, localStorage.getItem('9:00 AM'));
    // console.log(`--> retrieveDescription --> before loop --> value of single memoryItem using index for .key():  `, localStorage.getItem(localStorage.key([1])))
    // console.log(`--> --------------------------------------------------------------------- <--`)
    for (var i = 0; i < hours.length; i++) {
        // var memoryItem = JSON.parse(localStorage.getItem(memory.HOUR)[i]);
        // var memoryItem = localStorage.getItem(idTimeLabels[i].text());
        console.log(`--> ----------------- S T A R T -------------------------- <--`);
        
        console.log(`--> retrieveDescription --> index:  `, i)
        // console.log(`--> retrieveDescription --> memoryItem (from key):  `, localStorage.getItem('9:00 AM'));
        // console.log(`--> retrieveDescription --> inside loop --> memoryItem from methods:  `, localStorage.getItem(localStorage.key([i])))
        // if (memory[i] !== null && memory[i] !== undefined) {
        /*
        if (memoryItem) {

            //idTextAreaBox[i].text(memoryItem)
            $("#tb-c").val(localStorage.getItem(i))
        } else {
            return;
        }
        */
    
        // console.log(`--> retrieveDescription --> 01 - ROW LABEL WHERE DATA SHOULD BE ENTERED:  `, idTimeLabels[i].text())
        // console.log(`--> retrieveDescription --> 02 - TEXT VALUE THAT SHOULD BE INSERTED INTO ROW:  `, memoryItem)
        //console.log(`--> retrieveDescription --> inside loop --> BEFORE IF --> key per index: [i] --> `, localStorage.key([i]));
        // console.log(`--> retrieveDescription --> inside loop --> BEFORE IF --> idTextAreaDiv[i] --> `, idTextAreaDiv[i])
        // console.log(`--> retrieveDescription --> inside loop --> BEFORE IF --> idTextAreaDiv[i] Value - ATTEMPT 1 --> `, $(`idTextAreaBox[0] h4`).text())
        // console.log(`--> retrieveDescription --> inside loop --> BEFORE IF --> idTextAreaDiv[i] Value --> ATTEMPT 2 -->`, $('#c-todo-r-a h4').text())
        // console.log(`--> retrieveDescription --> inside loop --> BEFORE IF --> idTextAreaDiv[i] Value --> ATTEMPT 2 -->`, $('#c-time-r-a h4').text())
        
        // if (/* memoryItem && */ idTimeLabels[i].text() === '9:00 AM') {
            
            // console.log(`--> retrieveDescription --> inside loop --> inside if --> memoryItem per index:  `, memoryItem);
            // console.log(`--> retrieveDescription --> inside loop --> inside if --> other half of memoryItem per index:  `, localStorage.getItem(localStorage.value([i])))
            // idTextAreaBox[0] === memoryItem
            // idTextAreaBox[0].text() === memoryItem;
            
            switch (idTimeLabels[i].text()) {
                case '9:00 AM':
                    // idTextAreaBox[0].text() === localStorage.getItem('9:00 AM')
                    idTextAreaBox[0].text(localStorage.getItem('9:00 AM'));
                    // return;
                case '10:00 AM':
                    idTextAreaBox[1].text(localStorage.getItem('10:00 AM'));
                    // return;
                case '11:00 AM':
                    // idTextAreaBox[2].text() === memoryItem;
                    idTextAreaBox[2].text(localStorage.getItem('11:00 AM'))
                    // return;
                case '12:00 PM':
                    // idTextAreaBox[3].text() === memoryItem
                    idTextAreaBox[3].text(localStorage.getItem('12:00 PM'))
                    // return;
                case '01:00 PM':
                    // idTextAreaBox[4].text() === memoryItem;
                    idTextAreaBox[4].text(localStorage.getItem('1:00 PM'))
                    // return;
                case '02:00 PM':
                    // idTextAreaBox[5].text() === memoryItem;
                    idTextAreaBox[5].text(localStorage.getItem('2:00 PM'))
                    // return;
                case '03:00 PM':
                    // idTextAreaBox[6].text() === memoryItem;
                    idTextAreaBox[6].text(localStorage.getItem('3:00 PM'))
                    // return;
                case '04:00 PM':
                    // idTextAreaBox[7].text() === memoryItem;
                    idTextAreaBox[7].text(localStorage.getItem('4:00 PM'))
                    // return;
                case '05:00 PM':
                    // idTextAreaBox[8].text() === memoryItem;
                    idTextAreaBox[8].text(localStorage.getItem('5:00 PM'))
                    // return;
                
            }
            /*
        } else if (localStorage.key([i]) === '10:00 AM') {
            idTextAreaBox[1].val(memoryItem);
        } else if (localStorage.key([i]) === '11:00 AM') {
            idTextAreaBox[2].val(memoryItem);
        } else if (localStorage.key([i]) === '12:00 AM') {
            idTextAreaBox[3].val(memoryItem);
        } else {
            console.log('TEST OVER')
        } */
    }
    
};

saveButton.on('click', function() {
    var saveId = this.id
    console.log(`--> saveButton --> id of 'click'-ed object (raw JS | variable saveId):  `, this.id, ' | ', saveId);    
    saveDescription(saveId);
    retrieveDescription();
});

function initializeDescriptions() {
    retrieveDescription();
}

dateTodayHeader();
timeLabelColorEval();
initializeDescriptions();