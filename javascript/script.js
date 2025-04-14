const gradeCalculator = document.getElementById('grade-calculator')

gradeCalculator.addEventListener('submit', function (event) {
    let sub1 = Number(document.getElementById('Subject-1').value);
    let sub2 = Number(document.getElementById('Subject-2').value);
    let sub3 = Number(document.getElementById('Subject-3').value);
    let sub4 = Number(document.getElementById('Subject-4').value);
    let sub5 = Number(document.getElementById('Subject-5').value);

    totalMarks = sub1 + sub2 + sub3 + sub4 + sub5
    console.log('Total Marks'+' ' + totalMarks)
    averageMarks = totalMarks / 5
    console.log('Average Marks'+' ' + averageMarks)

    if (averageMarks >= 90) {
        alert(`You Scored ${averageMarks} and Your Grade is A+`)
    }
    else if (averageMarks <= 89 && averageMarks >= 80) {
        alert(`You Scored ${averageMarks} and Your Grade is A`)
    }
    else if (averageMarks <= 79 && averageMarks >= 70) {
        alert(`You Scored ${averageMarks} and Your Grade is B`)
    }
    else if (averageMarks <= 69 && averageMarks >= 60) {
        alert(`You Scored ${averageMarks} and Your Grade is C`)
    }
    else if (averageMarks <= 59 && averageMarks >= 50) {
        alert(`You Scored ${averageMarks} and Your Grade is D`)
    }
    else {
        alert(`Your Grade is F`)
    }
})
