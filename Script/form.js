var form = document.getElementById('resumeForm');
var resumeContainer = document.createElement('div'); // Container for generated resume
resumeContainer.className = 'generated-resume';
document.body.appendChild(resumeContainer);
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Get form input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value.split(',');
    // Generate dynamic resume
    var resumeData = {
        name: name,
        email: email,
        education: education,
        workExperience: workExperience,
        skills: skills
    };
    generateResume(resumeData);
});
// Function to generate the dynamic resume from user input
function generateResume(data) {
    resumeContainer.innerHTML = "\n        <h2>".concat(data.name, "'s Resume</h2>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n        <p><strong>Education:</strong> ").concat(data.education, "</p>\n        <p><strong>Work Experience:</strong> ").concat(data.workExperience, "</p>\n        <p><strong>Skills:</strong></p>\n        <ul>\n            ").concat(data.skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n        </ul>\n    ");
}
