// TypeScript for handling the resume form and generating a dynamic resume
interface ResumeData {
    name: string;
    email: string;
    education: string;
    workExperience: string;
    skills: string[];
}

const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeContainer = document.createElement('div'); // Container for generated resume
resumeContainer.className = 'generated-resume';
document.body.appendChild(resumeContainer);

form?.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    // Get form input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    // Generate dynamic resume
    const resumeData: ResumeData = {
        name,
        email,
        education,
        workExperience,
        skills
    };

    generateResume(resumeData);
});

// Function to generate the dynamic resume from user input
function generateResume(data: ResumeData) {
    resumeContainer.innerHTML = `
        <h2>${data.name}'s Resume</h2>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Education:</strong> ${data.education}</p>
        <p><strong>Work Experience:</strong> ${data.workExperience}</p>
        <p><strong>Skills:</strong></p>
        <ul>
            ${data.skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
        </ul>
    `;
}
