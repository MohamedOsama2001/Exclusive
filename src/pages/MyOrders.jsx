import React from "react";
import { Footer, Nav } from "../components";

function MyOrders() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  return (
    <>
      <Nav />
      <section>
        <div className="orders my-5">
          <div className="container">
            <h4>Orders({orders.length})</h4>
            {orders.length > 0 ? (
              <>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>Product_Name</th>
                      <th>Product_Price</th>
                      <th>Payment_Method</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/*<tr>
                  <td>John</td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                </tr>*/}
                  </tbody>
                </table>
              </>
            ) : (
              <>
                <div className="text-center fs-3">
                  <p>No Orders Placed Yet!</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default MyOrders;
