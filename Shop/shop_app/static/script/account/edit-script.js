let user_id = null;


$(document).ready(function loadElement() {
    $.ajax({
        url: `http://localhost:8000/api/current-user`,
        type: 'GET',
        success: function (user) {
            user_id = user.id;
            $('#profile-details').html(`
                <div class="container mt-5 d-flex justify-content-center">
                    <div class="card shadow-sm w-100" style="max-width: 500px;">
                        <div class="card-body">
                            <h3 class="mb-4 text-center">Edit Profile</h3>
                            <form id="edit-profile-form" enctype="multipart/form-data">
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" id="email" name="email" class="form-control" required value="${user.email}"/>
                                </div>
                                <div class="mb-3">
                                    <label for="first_name" class="form-label">First Name</label>
                                    <input type="text" id="first_name" name="first_name" class="form-control" required value="${user.profile.first_name}"/>
                                </div>
                                <div class="mb-3">
                                    <label for="last_name" class="form-label">Last Name</label>
                                    <input type="text" id="last_name" name="last_name" class="form-control" required value="${user.profile.last_name}"/>
                                </div>
                                <div class="mb-3">
                                    <label for="age" class="form-label">Age</label>
                                    <input type="number" id="age" name="age" class="form-control" min="0" value="${user.profile.age}"/>
                                </div>
                                <div class="mb-3">
                                    <label for="profile_picture" class="form-label">Profile Picture</label>
                                    <div id="current-picture" class="mb-2">
                                        <img id="profile-picture-preview" src="${user.profile.profile_picture}" alt="Current Profile Picture" class="img-thumbnail" style="max-width: 150px;">
                                    </div>
                                    <input type="file" id="profile_picture" name="profile_picture" class="form-control"/>
                                </div>
                                <button type="submit" class="btn btn-primary w-100 mt-3">Save Changes</button>
                            </form>
                        </div>
                    </div>
                </div>
            `);

            $('#edit-profile-form').submit(function (event) {
                editUser(event);
            });
        },
        error: function (xhr, status, error) {
            console.log(xhr.status);
            console.log(error);
        }
    });
});


function editUser(event) {
    event.preventDefault();
    let formData = new FormData();
    let email = $('#email').val();
    let first_name = $('#first_name').val();
    let last_name = $('#last_name').val();
    let age = $('#age').val();

    formData.append("email", email);
    formData.append("profile.first_name", first_name);
    formData.append("profile.last_name", last_name);
    formData.append("profile.age", age);

    const fileInput = $("#profile_picture")[0];
    if (fileInput.files.length > 0) {
        formData.append("profile.profile_picture", fileInput.files[0]);
    }

    $.ajax({
        url: `http://localhost:8000/api/current-user/`,
        type: 'PATCH',
        headers: {
            "X-CSRFToken": csrfToken
        },
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {
            window.location.href = details_url_template.replace(/1$/, user_id);
            showToastAfterRedirect("✅ Account edited successfully!");
        },
        error: function (xhr) {
            showErrorToast(xhr.responseText);
        }
    });
}