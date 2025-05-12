function registerUser(event) {
    event.preventDefault();

    let formData = new FormData();

    let email = document.querySelector('input[name="email"]').value;
    let password = document.querySelector('input[name="password1"]').value;
    let passwordConfirm = document.querySelector('input[name="password2"]').value;
    let first_name = document.querySelector('input[name="first_name"]').value;
    let last_name = document.querySelector('input[name="last_name"]').value;
    let age = document.querySelector('input[name="age"]').value;

    formData.append("email", email);
    formData.append("password", password);
    formData.append("password2", passwordConfirm);
    formData.append("profile.first_name", first_name);
    formData.append("profile.last_name", last_name);
    formData.append("profile.age", age);

    let fileInput = document.querySelector('input[name="profile_picture"]');
    if (fileInput.files.length > 0) {
        formData.append("profile.profile_picture", fileInput.files[0]);
    }

    $.ajax({
        url: "http://localhost:8000/api/user/",
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function (res) {
            console.log("User registered:", res);
            $.ajax({
                url: 'http://localhost:8000/api/login/',
                type: 'POST',
                data: {
                    "email": email,
                    "password": password
                },
                success: function (data) {
                    console.log("User logged in:", data);
                    window.location.href = 'http://localhost:8000/';
                },
                error: function (xhr, status, error) {
                    console.error("Login failed:", error);
                }
            });
        },
        error: function (xhr) {
            if (xhr.responseJSON) {
                let errors = xhr.responseJSON;
                let errorMessage = "";

                for (const key in errors) {
                    if (typeof errors[key] === 'object' && errors[key] !== null) {
                        for (const subKey in errors[key]) {
                            errorMessage += `${key}.${subKey}: ${errors[key][subKey]}\n`;
                        }
                    } else {
                        errorMessage += `${key}: ${errors[key]}\n`;
                    }
                }

                alert(errorMessage);
            } else {
                alert("An unknown error occurred.");
            }
        }
    });
}