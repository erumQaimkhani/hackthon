// script.ts

interface ResumeData {
    name: string;
    email: string;
    mobile: string;
    birthdate: string;
    education: string;
    experience: string;
    skills: string;
}

window.onload = () => {
    console.log("Script is running!");

    const form = document.getElementById("resumeForm") as HTMLFormElement;
    const resumeOutput = document.getElementById("resumeOutput") as HTMLElement;

    let currentResumeData: ResumeData | null = null;

    if (form) {
        form.onsubmit = (e: Event) => {
            e.preventDefault(); // Prevent page reload on form submission

            // Capture form data
            const name = (document.getElementById("name") as HTMLInputElement).value;
            const email = (document.getElementById("email") as HTMLInputElement).value;
            const mobile = (document.getElementById("tel") as HTMLInputElement).value;
            const birthdate = (document.getElementById("date") as HTMLInputElement).value;
            const education = (document.getElementById("education") as HTMLTextAreaElement).value;
            const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
            const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

            currentResumeData = { name, email, mobile, birthdate, education, experience, skills };

            // Display the form data inside the resumeOutput div
            renderResume(currentResumeData);
        };
    } else {
        console.log("Form not found!");
    }

    /**
     * Function to render the resume in view mode
     * @param data ResumeData object
     */
    function renderResume(data: ResumeData) {
        resumeOutput.innerHTML = `
            <h2>Generated Resume</h2>
            <p><strong>Name:</strong> <span id="view-name">${escapeHTML(data.name)}</span></p>
            <p><strong>Email:</strong> <span id="view-email">${escapeHTML(data.email)}</span></p>
            <p><strong>Mobile:</strong> <span id="view-mobile">${escapeHTML(data.mobile)}</span></p>
            <p><strong>Date of Birth:</strong> <span id="view-birthdate">${escapeHTML(data.birthdate)}</span></p>
            <p><strong>Education:</strong> <span id="view-education">${escapeHTML(data.education)}</span></p>
            <p><strong>Experience:</strong> <span id="view-experience">${escapeHTML(data.experience)}</span></p>
            <p><strong>Skills:</strong> <span id="view-skills">${escapeHTML(data.skills)}</span></p>
            <button class="edit-button">Edit Resume</button>
        `;

        // Attach event listener to the Edit button
        const editButton = resumeOutput.querySelector(".edit-button") as HTMLButtonElement;
        editButton.onclick = () => {
            if (currentResumeData) {
                renderEditForm(currentResumeData);
            }
        };
    }

    /**
     * Function to render the resume in edit mode
     * @param data ResumeData object
     */
    function renderEditForm(data: ResumeData) {
        resumeOutput.innerHTML = `
            <h2>Edit Your Resume</h2>
            <form id="editResumeForm">
                <p>
                    <label for="edit-name">Name:</label><br>
                    <input type="text" id="edit-name" name="name" value="${escapeAttribute(data.name)}" required>
                </p>
                <p>
                    <label for="edit-email">Email:</label><br>
                    <input type="email" id="edit-email" name="email" value="${escapeAttribute(data.email)}" required>
                </p>
                <p>
                    <label for="edit-tel">Mobile:</label><br>
                    <input type="tel" id="edit-tel" name="tel" value="${escapeAttribute(data.mobile)}" required>
                </p>
                <p>
                    <label for="edit-date">Date of Birth:</label><br>
                    <input type="date" id="edit-date" name="date" value="${data.birthdate}" required>
                </p>
                <p>
                    <label for="edit-education">Education:</label><br>
                    <textarea id="edit-education" name="education" rows="3" required>${escapeHTML(data.education)}</textarea>
                </p>
                <p>
                    <label for="edit-experience">Experience:</label><br>
                    <textarea id="edit-experience" name="experience" rows="3" required>${escapeHTML(data.experience)}</textarea>
                </p>
                <p>
                    <label for="edit-skills">Skills:</label><br>
                    <textarea id="edit-skills" name="skills" rows="3" required>${escapeHTML(data.skills)}</textarea>
                </p>
                <button type="submit" class="save-button">Save Changes</button>
            </form>
        `;

        // Attach event listener to the Save button
        const editForm = document.getElementById("editResumeForm") as HTMLFormElement;
        editForm.onsubmit = (e: Event) => {
            e.preventDefault(); // Prevent page reload on form submission

            // Capture updated form data
            const name = (document.getElementById("edit-name") as HTMLInputElement).value;
            const email = (document.getElementById("edit-email") as HTMLInputElement).value;
            const mobile = (document.getElementById("edit-tel") as HTMLInputElement).value;
            const birthdate = (document.getElementById("edit-date") as HTMLInputElement).value;
            const education = (document.getElementById("edit-education") as HTMLTextAreaElement).value;
            const experience = (document.getElementById("edit-experience") as HTMLTextAreaElement).value;
            const skills = (document.getElementById("edit-skills") as HTMLTextAreaElement).value;

            currentResumeData = { name, email, mobile, birthdate, education, experience, skills };

            // Re-render the resume in view mode with updated data
            renderResume(currentResumeData);
        };
    }

    /**
     * Function to escape HTML to prevent XSS attacks
     * @param unsafe String to escape
     * @returns Escaped string
     */
    function escapeHTML(unsafe: string): string {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    /**
     * Function to escape attribute values
     * @param unsafe String to escape
     * @returns Escaped string
     */
    function escapeAttribute(unsafe: string): string {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }
};
