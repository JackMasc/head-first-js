let scores = [60, 50, 60, 58, 54, 54,
            58, 50, 52, 54, 48, 69,
            34, 55, 51, 52, 44, 51,
            69, 64, 66, 55, 52, 61,
            46, 31, 57, 52, 44, 18,
            41, 53, 55, 61, 51, 44];


function createReport(scores) {
    let max_score = 0;
    let best_tests = [];
    scores.forEach((value, index) => {
        console.log(index + 'score:' + value);
        if (max_score < value) {
            max_score = value;
            best_tests = [index];
        }
        else if (max_score == value) {
            best_tests.push(index);
        }

        index = index + 1;
    });

    console.log('Number of tests:' + scores.length)
    console.log('Max score:' + max_score)
    console.log('Best tests:' + best_tests.join(', '))
}

createReport(scores)