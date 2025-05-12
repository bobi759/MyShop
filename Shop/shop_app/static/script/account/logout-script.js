function logOut() {
    $.ajax({
        url: `http://localhost:8000/api/logout/`,
        type: 'POST',
        headers: {
            'X-CSRFToken': csrfToken
        },
        success: function () {
            window.location.href = "http://localhost:8000/"
        },
        error: function (xhr, status, error) {
            console.log(xhr.status);
            console.log(error);
        }
    });
}