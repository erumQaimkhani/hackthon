"use strict";
// script.ts
window.onload = () => {
    console.log("Script is running!");
    const form = document.getElementById("resumeForm");
    const resumeOutput = document.getElementById("resumeOutput");
    let currentResumeData = null;
    if (form) {
        form.onsubmit = (e) => {
            e.preventDefault(); // Prevent page reload on form submission
            // Capture form data
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const mobile = document.getElementById("tel").value;
            const birthdate = document.getElementById("date").value;
            const education = document.getElementById("education").value;
            const experience = document.getElementById("experience").value;
            const skills = document.getElementById("skills").value;
            currentResumeData = { name, email, mobile, birthdate, education, experience, skills };
            // Display the form data inside the resumeOutput div
            renderResume(currentResumeData);
        };
    }
    else {
        console.log("Form not found!");
    }
    /**
     * Function to render the resume in view mode
     * @param data ResumeData object
     */
    function renderResume(data) {
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
        const editButton = resumeOutput.querySelector(".edit-button");
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
    function renderEditForm(data) {
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
        const editForm = document.getElementById("editResumeForm");
        editForm.onsubmit = (e) => {
            e.preventDefault(); // Prevent page reload on form submission
            // Capture updated form data
            const name = document.getElementById("edit-name").value;
            const email = document.getElementById("edit-email").value;
            const mobile = document.getElementById("edit-tel").value;
            const birthdate = document.getElementById("edit-date").value;
            const education = document.getElementById("edit-education").value;
            const experience = document.getElementById("edit-experience").value;
            const skills = document.getElementById("edit-skills").value;
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
    function escapeHTML(unsafe) {
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
    function escapeAttribute(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }
};
