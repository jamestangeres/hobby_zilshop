<nav class="col-sm-3 col-md-2 d-none d-sm-block bg-dark sidebar">
          <ul class="nav nav-pills flex-column" style="overflow-y:auto;">
            <li class="nav-item">
              <a class="nav-link" href="{{ url('/admin/dashboard')}}">
                <i class="fa fa-fw fa-dashboard"></i>
              <span class="nav-link-text">Dashboard</span>
               <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{ url('admin/customer')}}">
                <i class="fa fa-fw fa-user"></i>
                <span class="nav-link-text">Customers</span>
              </a>

            </li>

            <li class="nav-item">
              <a class="nav-link" href="{{ url ('admin/transaction')}}">
                <i class="fa fa-fw fa-list"></i>
                  <span class="nav-link-text">Transaction</span>
              </a>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="index.html#">
                <i class="fa fa-fw fa-gear"></i>
                    <span class="nav-link-text">Product</span>
              </a>
            </li> -->
             <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Room and Restauarant Managment">
                  <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents" data-parent="#exampleAccordion">
                    <i class="fa fa-fw fa-gear"></i>
                    <span class="nav-link-text">Product Managment</span>
                  </a>
                    <ul class="sidenav-second-level collapse" id="collapseComponents">
                      <li class="nav-item">
                        <a  class="nav-link" href="{{ url('/admin/product') }}">
                          <i class="fa fa-fw fa-edit"></i>
                          <span class="nav-link-text">Product</span>
                         </a>
                       </a>
                      </li>
                      <li>
                        <a class="nav-link" href="{{ url('/admin/product_brand') }}">
                          <i class="fa fa-fw fa-edit"></i>
                          <span class="nav-link-text">Product Brand</span>
                        </a>
                      </li >
                      <li>
                        <a class="nav-link" href="{{ url('/admin/product_type') }}">
                          <i class="fa fa-fw fa-edit"></i>
                          <span class="nav-link-text">Product Type</span>
                        </a>
                      </li>
                    </ul>
              </li>

          </ul>


        </nav>