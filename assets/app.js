$('#Start').on('click', function () {
    game.start();
})
$(document).on('click','#end',function(){
    game.done();
})
var questions = [{
    question: "What does HTTP stand for? ",
    answers: ['Hyper Text Protocol', 'Hypertext Transfer Protocol', 'Hyper Text Processes'],
    correctAnswer: 'Hyper Text Protocol'
}, {
    question: "What is the color of Donald Duck’s bowtie?",
    answers: ['red', 'yellow', 'blue', 'white'],
    correctAnswer: 'red'

}, {
    question: "What is the most populous city in Canada?",
    answers: ['Toronto', 'Ontario', 'Quebec', 'Vancouver'],
    correctAnswer: 'Toronto'
}, {
    question: "Which band came back together in 2019?",
    answers: ['The Naked Brothers Band', 'The Jonas Brothers', 'One Direction', 'The Beatles'],
    correctAnswer: 'The Jonas Brothers'
}, {
    question: "Which two planets in our solar system are known as ice giants?",
    answers: ['Neptune and Jupiter', 'Uranus and Pluto', 'Pluto and Jupiter', 'Neptune and Uranus'],
    correctAnswer: 'Neptune and Uranus'
}, {
    question: "How many time zones are there in the world?",
    answers: [7, 24, 23, 9],
    correctAnswer: 24
}, {
    question: "What is the rarest blood type?",
    answers: ['A negative', 'AB negative', 'O positive', 'B positive'],
    correctAnswer: 'AB negative'
}, {
    question: "Which Kpop group is Vivian's Favorite? ",
    answers: ['Got7', 'BTS', 'Super Junior', 'EXO'],
    correctAnswer: 'EXO'
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is Up!")
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').prepend('<h2>Time Remaining:<span id="counter">120</span> Seconds</h2>')
        $('#Start').remove();
        for (var i = 0; i < questions.length; i++) {
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $('#subwrapper').append("<input Type='radio'name='question-" + i + "'value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
        $('#subwrapper').append('<br><button id="end">Done</button>')
    },
    done: function () {
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"), function () {
            if ($(this).val() == questions[7].correctAnswer) {
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        this.result();
    },
    result: function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h2>All Done!</h2>");
        $('#subwrapper').append("<h3>Correct Answers:"+this.correct+"</h3>")
        $('#subwrapper').append("<h3>Incorrect Answers:"+this.incorrect+"</h3>")
        $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>")
    }


}