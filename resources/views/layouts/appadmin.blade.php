<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="">


    <title>Dashboard Template for Bootstrap</title>

    <!-- Bootstrap core CSS -->

    <link href="{{ URL::asset('css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ URL::asset('vendor/font-awesome/css/font-awesome.min.css')}}" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template -->

    <link href="{{ URL::asset('css/dashboard.css') }}" rel="stylesheet">

     <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

  </head>

  <body>
    <header>
       @include('includes.navbar')
    </header>

    <div class="container-fluid">
       @yield('content')

    </div>
   <a class="scroll-to-top rounded" href="#page-top">
      <i class="fa fa-angle-up"></i>
    </a>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="{{ URL::asset('vendor/jquery/jquery.min.js')}}"></script>

    <!-- <script src="{{ asset('public/js/jquery-slim.min.js') }}" defer></script> -->

    <script src="{{ URL::asset('js/popper.min.js') }}" defer></script>

    <script src="{{ URL::asset('js/bootstrap.min.js') }}" defer></script>
    <script src="{{ URL::asset('vendor/jquery-easing/jquery.easing.min.js')}}"></script>
    <script src="{{ URL::asset('vendor/datatables/dataTables.bootstrap4.js')}}"></script>

    <script src="{{ URL::asset('js/ajax_javascript.js')}}"></script>

  </body>
</html>
