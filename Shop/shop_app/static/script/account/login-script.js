function loginFunc(event) {

            event.preventDefault()

            let email = document.querySelector("input[name='username']").value;
            let password = document.querySelector("input[name='password']").value;

            $.ajax({
                url: 'http://localhost:8000/api/login/',
                type: 'POST',
                data: {
                    "email": email,
                    "password": password
                },
                success: function (data) {
                    console.log(data);
                    window.location.href = 'http://localhost:8000/';
                },
                error: function (xhr, status, error) {
                    console.log(xhr.status);
                    console.log(error);
                }
            });
        }