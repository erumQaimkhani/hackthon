"use strict";
const toggleButton = document.getElementById(`toggle-skills`);
const skill = document.getElementById(`skill`);
toggleButton.addEventListener(`click`, () => {
    if (skill.style.display === `none`) {
        skill.style.display = `block`;
    }
    else {
        skill.style.display = `none`;
    }
});
