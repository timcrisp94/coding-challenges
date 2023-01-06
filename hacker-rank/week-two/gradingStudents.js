function gradingStudents(grades) {
    const result = []

    for (let grade of grades) {
        if (grade < 38) result.push(grade)
        else {
            if ((grade + 1) % 5 === 0) result.push(grade + 1)
            else if ((grade + 2) % 5 === 0) result.push(grade + 2)
            else result.push(grade)
        }
    }
    return result
}

console.log(gradingStudents([84, 29, 57]))