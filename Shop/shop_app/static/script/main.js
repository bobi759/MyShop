    $(document).ready(function () {

        $.ajax({
            url: "http://localhost:8000/api/current-user/",
            method: "GET",
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                const username = data["email"];
                $('#username-display').text(username).css('visibility', 'visible');
                renderAccountMenu(true, data.id);
            },
            error: function () {
                $('#username-display').text("Account").css('visibility', 'visible');
                renderAccountMenu(false);
            }
        });

        $.ajax({
            type: 'GET',
            url: 'http://localhost:8000/api/genre/',
            success: function (data) {
                data.forEach(genre => {
                    AddGenreToNavbar(genre.name);
                });
            },
            error: function (xhr, textStatus, errorThrown) {
                alert('Error Msg: ' + errorThrown);
            }
        });

        function AddGenreToNavbar(genreName) {


            let listItem = $('<li class="nav-item">');
            let link = $('<a class="dropdown-item">')
                .attr('href', `${baseProductsUrl}?genre=${encodeURIComponent(genreName)}`)
                .text(genreName);
            listItem.append(link);
            $('#genre-list').append(listItem);
        }
    });

    function renderAccountMenu(isAuthenticated, userId) {



        const $menu = $('#account-menu');
        $menu.empty();

        if (isAuthenticated) {
            $menu.append(`
                <li><a class="dropdown-item" href="${urlPatterns.profileDetails}${userId}">Profile Details</a></li>
                <li><a class="dropdown-item" href="${urlPatterns.profileEdit}${userId}">Edit Profile</a></li>
                <li><a class="dropdown-item" href="${urlPatterns.logout}">Logout</a></li>
            `);
        } else {
            $menu.append(`
                <li><a class="dropdown-item" href="${urlPatterns.accountLogin}">Login</a></li>
                <li><a class="dropdown-item" href="${urlPatterns.accountRegister}">Register</a></li>
            `);
        }
    }