function showToastNow(text) {
    const toastBody = document.getElementById("customToastBody");
    const toastElement = document.getElementById("customToast");

    if (toastBody && toastElement) {
        toastBody.textContent = text;

        const toastInstance = new bootstrap.Toast(toastElement, {
            autohide: true,
            delay: 4000
        });
        toastInstance.show();
    } else {
        console.warn("Toast elements not found.");
    }
}

function showToastAfterRedirect(text) {
    localStorage.setItem("toastMessage", text);
}

function showErrorToast(text) {
    const toastBody = document.getElementById("errorToastBody");
    const toastElement = document.getElementById("errorToast");

    if (toastBody && toastElement) {
        toastBody.textContent = text;
        const toastInstance = bootstrap.Toast.getOrCreateInstance(toastElement);
        toastInstance.show();
    } else {
        console.warn("Error toast elements not found.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const message = localStorage.getItem("toastMessage");
    if (message) {
        showToastNow(message);
        localStorage.removeItem("toastMessage");
    }
});
