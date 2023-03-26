const TabOrder = () => {
  return (
    <div class="ltn__myaccount-tab-content-inner">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Jun 22, 2019</td>
              <td>Pending</td>
              <td>$3000</td>
              <td>
                <a href="cart.html">View</a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Nov 22, 2019</td>
              <td>Approved</td>
              <td>$200</td>
              <td>
                <a href="cart.html">View</a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Jan 12, 2020</td>
              <td>On Hold</td>
              <td>$990</td>
              <td>
                <a href="cart.html">View</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabOrder;
