@extends('layouts.appadmin')

@section('content')
  <div class="row">
        @include('includes.sidebar')

        <main role="main" class="col-sm-9 ml-sm-auto col-md-10 pt-3">
          <h1>Dashboard SULAT TAG STATUS 200 404 DIRE PARA DILI MAG ERROR</h1>

          <section class="row text-center placeholders">
            <div class="col-6 col-sm-3 placeholder">
              <img src="data:image/ gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" class="img-fluid rounded-circle" alt="Generic placeholder thumbnail">
              <h4>123123</h4>
              <div class="text-muted">Something else</div>
            </div>
            <div class="col-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" class="img-fluid rounded-circle" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
            <div class="col-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" class="img-fluid rounded-circle" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
            <div class="col-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" class="img-fluid rounded-circle" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
          </section>

          <!-- Example DataTables Card-->
      <div class="card mb-3">
        <div class="card-header">
          <i class="fa fa-table"></i> Data Table Example</div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th>Id</th>
                <th>Txn</th>
                <th>Customer</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Brand</th>
                <th>Type</th>
                <th style="width: 20%;">Status</th>
                <th>Created</th>
                <th style="width: 20%;">Option</th>

             </thead>
             <tbody id="brands-list" name="brands-list">
               <!-- table here -->
             </tbody>
           </table>
          </div>
        </div>
        <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
      </div>
        </main>
      </div>
@endsection