const addCourseBtn = document.getElementById('add-course');
const calculateGpaBtn = document.getElementById('calculate-gpa');
const courseContainer = document.getElementById('course-container');
const gpaValue = document.getElementById('gpa-value');

// Grade to GPA mapping
const gradePoints = {
    "A": 4,
    "B": 3,
    "C": 2,
    "D": 1,
    "F": 0
};

// Add new course input
addCourseBtn.addEventListener('click', () => {
    const courseDiv = document.createElement('div');
    courseDiv.className = 'course-card';
    courseDiv.innerHTML = `
        <input type="text" placeholder="Course Name" class="course-name">
        <div class="input-row">
            <input type="text" placeholder="Grade (A, B, C, D, F)" class="grade">
            <input type="number" placeholder="Credit Hours" class="credits" min="0">
        </div>
    `;
    courseContainer.appendChild(courseDiv);
});

// Calculate GPA
calculateGpaBtn.addEventListener('click', () => {
    const courses = document.querySelectorAll('.course-card');
    let totalPoints = 0;
    let totalCredits = 0;
    let validInput = true;

    courses.forEach(course => {
        const grade = course.querySelector('.grade').value.toUpperCase();
        const credits = parseFloat(course.querySelector('.credits').value);

        if (!gradePoints.hasOwnProperty(grade) || isNaN(credits) || credits <= 0) {
            alert("Please enter valid grade and credit hours for all courses!");
            validInput = false;
            return;
        }

        totalPoints += gradePoints[grade] * credits;
        totalCredits += credits;
    });

    if (validInput && totalCredits > 0) {
        const gpa = (totalPoints / totalCredits).toFixed(2);
        gpaValue.textContent = gpa;
    }
});
