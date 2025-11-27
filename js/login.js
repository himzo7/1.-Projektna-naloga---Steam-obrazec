document.addEventListener("DOMContentLoaded", function () {

     // Toggle password visibility
    const toggleButtons = document.querySelectorAll('.toggle-password');
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const input = button.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                button.textContent = 'Hide';
            } else {
                input.type = 'password';
                button.textContent = 'Show';
            }
        });
    });

    //LOGIN PODATKI

    const praviUser = "testuser";
    const praviPass = "12345";

    //ELEMENTI

    const form = document.querySelector(".okvir form");
    const inputs = document.querySelectorAll(".leva .input-box");

    if (!form || inputs.length < 2) {
        console.error("Login form ali inputi niso najdeni!");
        return;
    }

    const username = inputs[0];
    const password = inputs[1];

    //CUSTOM STEAM-LIKE POPUP

    function showLoginPopup(msg, type = "error") {

        // type = "success" ali "error"
        const colors = {
            success: "#5cff9c",
            error: "#ff5757"
        };

        const box = document.createElement("div");

        box.innerHTML = `
            <div class="login-popup-icon">${type === "success" ? "✔" : "✖"}</div>
            <div class="login-popup-text">${msg}</div>
        `;

        box.className = "login-popup";
        box.style.borderColor = colors[type];

        document.body.appendChild(box);

        requestAnimationFrame(() => {
            box.style.opacity = "1";
            box.style.transform = "scale(1)";
        });

        setTimeout(() => {
            box.style.opacity = "0";
            box.style.transform = "scale(0.9)";
            setTimeout(() => box.remove(), 300);
        }, 1800);
    }


    //LOGIN HANDLER 

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const u = username.value.trim();
        const p = password.value.trim();

        if (u === praviUser && p === praviPass) {
            showLoginPopup("Login successful!", "success");

            setTimeout(() => {
                window.location.href = "https://store.steampowered.com/";
            }, 1000);

        } else {
            showLoginPopup("Wrong username or password", "error");

            // optional: efekt tresenja
            form.classList.add("shake");
            setTimeout(() => form.classList.remove("shake"), 400);
        }
    });
});
