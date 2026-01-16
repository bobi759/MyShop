

$(document).ready(() => {
    const url = new URL(window.location.href);
    const genre = url.searchParams.get("genre");

    $.ajax({
        type: "GET",
        url: "http://localhost:8000/api/book/",
        data: { genre },
        success: (data) => {
            console.log(data);
            data.forEach(renderBookCards);
        },
        error: (error) => {
            console.error("Error fetching books:", error);
        }
    });

    function renderBookCards(book) {
        if (typeof PRODUCT_DETAIL_BASE_URL === 'undefined') {
            console.error("PRODUCT_DETAIL_BASE_URL is not defined.");
            return;
        }

        const detailUrl = `${PRODUCT_DETAIL_BASE_URL}${book.id}`;

        const emptyCard = `
            <div class="col-md-3 col-sm-6 " data-aos="zoom-in-up">
                <div class="card border-0 book-card" >
                    <a href="${detailUrl}">
                        <img src="${book.image}" class="card-img-top" alt="${book.title}">
                    </a>
                    <div class="card-body text-center">
                        <h5 class="card-title">${book.title}</h5>
                        <p>${book.author}</p>
                        <p class="fw-bold">$${book.price}</p>
                    </div>
                </div>
            </div>
        `;
        $(".row").append(emptyCard);
    }
});