window.onload = () => {
    console.log("Script is running!");

    const form = document.getElementById("resumeForm") as HTMLFormElement;
    const resumeOutput = document.getElementById("resumeOutput");

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

            // Display the form data inside the resumeOutput div
            resumeOutput!.innerHTML = `
                <h2>Generated Resume</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mobile:</strong> ${mobile}</p>
                <p><strong>Date of Birth:</strong> ${birthdate}</p>
                <p><strong>Education:</strong> ${education}</p>
                <p><strong>Experience:</strong> ${experience}</p>
                <p><strong>Skills:</strong> ${skills}</p>
            `;
        };
    } else {
        console.log("Form not found!");
    }
};
