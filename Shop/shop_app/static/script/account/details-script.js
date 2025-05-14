$(document).ready(function () {
    $.ajax({
        url: `http://localhost:8000/api/current-user`,
        type: 'GET',
        success: function (user) {
            let details_url = DETAILS_URL_TEMPLATE.replace('/0/', '/' + user.id + '/');
            $('#profile-details').html(`
<section class="h-100 gradient-custom-2">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center">
      <div class="col col-lg-9 col-xl-8">
        <div class="card">
          <div class="rounded-top text-white d-flex flex-row" style="background-color: #000; height:200px;">
            <div class="mt-5 d-flex flex-column align-items-center" style="width: 180px; object-fit: cover; z-index: 1; margin-left: -10px;">
                <img src="${user.profile.profile_picture}" 
                 alt="Profile Picture" 
                 class="img-thumbnail mt-4 mb-2"
                 style="width: 120px; height: 120px; object-fit: cover;">
            </div>
            <div class="ms-3" style="margin-top: 130px;">
              <h5>${user.profile.first_name} ${user.profile.last_name}</h5>
              <p>${user.profile.age}</p>
            </div>
          </div>
          <div class="p-4 text-black bg-body-tertiary">
            <div class="d-flex justify-content-between align-items-center">
              <button onclick="window.location.href='${details_url}'" type="button" class="btn btn-outline-secondary mb-0" style="z-index: 1;">
                Edit profile
              </button>          
              </button>
              <div class="d-flex text-center text-body">
                <div class="me-3">
                  <p class="mb-1 h5" id="orders-count">0</p>
                  <p class="small text-muted mb-0">Orders</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body p-4 text-black">
            <div class="d-flex justify-content-between align-items-center mb-4 text-body">
              <p class="lead fw-normal mb-0">Latest orders</p>
            </div>
            <div id="orders-list" class="row g-2">
              <p class="text-muted">Loading orders...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`);
            loadUserOrders()
        },
        error: function (xhr, status, error) {
            console.log(xhr.status);
            console.log(error);
        }
    });
});

function loadUserOrders() {
    $.ajax({
        url: `http://localhost:8000/api/order/`,
        type: 'GET',
        success: function (orders) {
            if (!orders.length) {
                $('#orders-count').text('0');
                $('#orders-list').html('<p class="text-muted">No orders found.</p>');
                return;
            }

            $('#orders-count').text(orders.length);

            const statusMap = {
                'P': 'Pending',
                'C': 'Completed',
                'F': 'Failed',
                'S': 'Shipped'
            };
            let ordersHtml = '';

            orders.forEach(order => {
                let itemsHtml = '';

                if (order.items && order.items.length) {
                    order.items.forEach(item => {
                        itemsHtml += `
                            <li>
                                <strong>${item.product.title}</strong>
                                — $${item.product.price}
                                × ${item.quantity}
                            </li>`;
                    });
                } else {
                    itemsHtml = '<li>No items in this order</li>';
                }

                ordersHtml += `
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading-${order.id}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${order.id}" aria-expanded="false" aria-controls="collapse-${order.id}">
                      Order #${order.id} — Status: ${statusMap[order.order_status]} — Placed at: ${new Date(order.placed_at).toLocaleString()}
                    </button>
                  </h2>
                  <div id="collapse-${order.id}" class="accordion-collapse collapse" aria-labelledby="heading-${order.id}" data-bs-parent="#ordersAccordion">
                    <div class="accordion-body">
                      <ul>${itemsHtml}</ul>
                    </div>
                  </div>
                </div>
                `;
            });

            $('#orders-list').html(`<div class="accordion accordion-flush" id="ordersAccordion">${ordersHtml}</div>`);
        },
        error: function (xhr, status, error) {
            console.log(xhr.status);
            console.log(error);
            $('#orders-list').html('<p class="text-danger">Failed to load orders.</p>');
        }
    });
}

