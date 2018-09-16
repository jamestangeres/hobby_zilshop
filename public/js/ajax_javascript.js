$(document).ready(function(){

    var url = $('#url').val(); //san to?

    //display modal form for user EDIT ***************************
    $(document).on('click','.edit_room',function(){
        var product_brand_id = $(this).val();
        
        // Populate Data in Edit Modal Form
        $.ajax({
            type: "GET",
            url: "product_brand/get/" + product_brand_id,
            dataType: 'text',
            success: function (data) {
                var json = $.parseJSON(data);
                
                if(json == null) return false;

                if(json.status == 200) {
                    $('#pbrand_editModal').modal('show');

                    $('#e_brand_id').val(json.result['id']);
                    $('#e_name').val(json.result['brand_name']);
                    
                }
            }
        });
    });
    //CREATE NEW PRODUCT
$("#btn_e_save").click(function () {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
            }
        });

         var id = $('#e_brand_id').val();
         var brand_name = $('#e_name').val();

        $.ajax({
            type: 'GET',
            url: "product_brand/update/process/" + id + "/" + brand_name,
            dataType: 'text',
            success: function (data) {

                var json = $.parseJSON(data);
                
                if(json == null) return false;

                console.log(json);
                if(json.status == 200) {
                    alert("Update Successfuly");
                    window.location.href = url;

                }
                $('#pbrand_editModal').modal('hide');
            }
        });
    });

    // UPDATE PRORUCT
     $("#btn_save").click(function () {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
            }
        });

        var brand_name = $('#name').val();
        
       
        // console.log(formData);
        $.ajax({
            type: 'GET',
            url: "product_brand/create/process/" + brand_name,
            dataType: 'text',
            success: function (data) {

                var json = $.parseJSON(data);
                
                if(json == null) return false;

                console.log(json);

                if(json.status == 200) {
                    alert("Add Scuccess");
                    window.location.href = url;
                }
                $('#exampleModal').modal('hide');
            }
        });
    });


    //delete user and remove it from TABLE list ***************************
    // $(document).on('click','.delete_room',function(){
    $('.delete_room').on('click',function(){
        var id = $(this).val();

        console.log("hey: " + id);
        console.log(url);
        
         
        $.ajax({
            url: url + '/' + id,
            dataType: "text",
            success: function (data) {
                var json = $.parseJSON(data);
                //bagal ng net mo nag llag ako
                
                if(json == null) return false;
                if(json.status == 200) {
                    
                    confirm("Do you want to delete this item?");
                    window.location.href = url;
                }

                 //$('#deleteModal').modal('hide');
                // $("#room" + room_id).remove();
                // return confirm("Do you want to delete this item?");
            }
        });
    });

    // CREATE PRODUCT TYPE 
    // ***************************
     $("#type_btn_save").click(function () {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
            }
        });

        var name = $('#name').val();
        
       
        // console.log(formData);
        $.ajax({
            type: 'GET',
            url: "product_type/create/process/" + name,
            dataType: 'text',
            success: function (data) {

                var json = $.parseJSON(data);
                
                if(json == null) return false;

                console.log(json);

                if(json.status == 200) {
                    alert("Add Scuccess");
                    window.location.href = url;
            }
                $('#typeModal').modal('hide');
            }
        });
    });


     $(document).on('click','.edit_type',function(){
        var type_id = $(this).val();
        
        // Populate Data in Edit Modal Form
        $.ajax({
            type: "GET",
            url: "product_type/get/" + type_id,
            dataType: 'text',
            success: function (data) {
                var json = $.parseJSON(data);
                
                if(json == null) return false;

                if(json.status == 200) {
                    $('#typeEditModal').modal('show');

                    $('#e_type_id').val(json.result['id']);
                    $('#e_name').val(json.result['name']);
                    
                }
            }
        });
    });

        $("#type_btn_e_save").click(function () {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
            }
        });

         var id = $('#e_type_id').val();
         var name = $('#e_name').val();

        $.ajax({
            type: 'GET',
            url: "product_type/update/process/" + id + "/" + name,
            dataType: 'text',
            success: function (data) {

                var json = $.parseJSON(data);
                
                if(json == null) return false;

                console.log(json);
                if(json.status == 200) {
                    alert("Update Successfuly");
                    window.location.href = url;

                }
                $('#typeEditModal').modal('hide');
            }
        });
    });

        $('.delete_type').on('click',function(){
        var id = $(this).val();

        console.log("hey: " + id);
        console.log(url);
        
         
        $.ajax({
            url: url + '/' + id,
            dataType: "text",
            success: function (data) {
                var json = $.parseJSON(data);
                //bagal ng net mo nag llag ako
                
                if(json == null) return false;
                if(json.status == 200) {
                    
                  alert("Delete Succesfully");
                    window.location.href = url;
                }
            }
        });
    });

         // CREATE PRODUCT
    // ***************************
     $("#product_btn_save").click(function () {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
            }
        });

        var product_name = $('#product_name').val();
        var image = $('#image').val();
        var price = $('#price').val();
        var description = $('#description').val();
        var product_brand_uid = $('#brand_name').val();
        var product_type_uid = $('#type_name').val();

       
        $.ajax({
            type: 'GET',
            url: "product/create/process/" + product_name + "/" + image + "/" + price + "/" + description + "/" + product_brand_uid + "/" + product_type_uid,
            dataType: 'text',
            success: function (data) {

                var json = $.parseJSON(data);
                
                if(json == null) return false;

                console.log(json);
                if(json.status == 200) {
                    alert("Update Successfuly");
                    window.location.href = url;

                }
                $('#productModal').modal('hide');
            }
        });
    });


     $(document).on('click','.edit_product',function(){
        var product_id = $(this).val();
        
        // Populate Data in Edit Modal Form
        $.ajax({
            type: "GET",
            url: "product/get/" + product_id,
            dataType: 'text',
            success: function (data) {
                var json = $.parseJSON(data);
                
                if(json == null) return false;

                if(json.status == 200) {
                    $('#productEditModal').modal('show');

                    $('#product_id').val(json.result['id']);
                    $('#e_product_name').val(json.result['product_name']);
                    
                    $('#e_image').val(json.result['image']);
                    $('#e_price').val(json.result['price']);
                    $('#e_description').val(json.result['description']);
                    $('#e_brand_name').val(json.result['product_brand_uid']);
                    $('#e_type_name').val(json.result['product_type_uid']);
                    
                }
            }
        });
    });

     $("#e_product_btn_save").click(function () {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
            }
        });

        var id = $('#product_id').val();
        var product_name = $('#e_product_name').val();
        var image = $('#e_image').val();
        var price = $('#e_price').val();
        var description = $('#e_description').val();
        var product_brand_uid = $('#e_brand_name').val();
        var product_type_uid = $('#e_type_name').val();

        $.ajax({
            type: 'GET',
            url: "product/update/process/" + id +"/" + product_name + "/" + image + "/" + price + "/" + description + "/" + product_brand_uid + "/" + product_type_uid,
            dataType: 'text',
            success: function (data) {

                var json = $.parseJSON(data);
                
                if(json == null) return false;

                console.log(json);
                if(json.status == 200) {
                    alert("Update Successfuly");
                    window.location.href = url;

                }
                $('#typeEditModal').modal('hide');
            }
        });
    });

     $('.delete_product').on('click',function(){
        var id = $(this).val();

        console.log("hey: " + id);
        console.log(url);
        
         
        $.ajax({
            url: url + '/' + id,
            dataType: "text",
            success: function (data) {
                var json = $.parseJSON(data);
                //bagal ng net mo nag llag ako
                
                if(json == null) return false;
                if(json.status == 200) {
                    
                  alert("Delete Succesfully");
                    window.location.href = url;
                }

            }
        });
    });

// USER CREATE
      $("#user_btn_save").click(function () {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
            }
        });

        var name = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var role_uid = $('#role_name').val();

       
        // console.log(formData);
        $.ajax({
            type: 'GET',
            url: "customer/create/process/" + name + "/" + email + "/" + password + "/" + role_uid ,
            dataType: 'text',
            success: function (data) {

                var json = $.parseJSON(data);
                
                if(json == null) return false;

                console.log(json);

                if(json.status == 200) {
                    alert("Add Scuccess");
                    window.location.href = url;
            }
                $('#userModal').modal('hide');
            }
        });
    });

      $(document).on('click','.edit_user',function(){
        var user_id = $(this).val();
        
        // Populate Data in Edit Modal Form
        $.ajax({
            type: "GET",
            url: "customer/get/" + user_id,
            dataType: 'text',
            success: function (data) {
                var json = $.parseJSON(data);
                
                if(json == null) return false;

                if(json.status == 200) {
                    $('#updateUserModal').modal('show');

                    $('#e_user_id').val(json.result['id']);
                    $('#e_username').val(json.result['name']);
                    
                    $('#e_email').val(json.result['email']);
                    $('#e_role_name').val(json.result['role_uid']); 
                }
            }
        });
    });

      $("#e_user_btn_save").click(function () {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
            }
        });

        var id = $('#e_user_id').val();
        var name = $('#e_username').val();
        var email = $('#e_email').val();
        var role_name = $('#e_role_name').val();

        $.ajax({
            type: 'GET',
            url: "customer/update/process/" + id +"/" + name + "/" + email + "/" + role_name,
            dataType: 'text',
            success: function (data) {

                var json = $.parseJSON(data);
                
                if(json == null) return false;

                console.log(json);
                if(json.status == 200) {
                    alert("Update Successfuly");
                    window.location.href = url;

                }
                $('#updateUserModal').modal('hide');
            }
        });
    });

       $('.delete_user').on('click',function(){
        var id = $(this).val();

        console.log("hey: " + id);
        console.log(url);
        
         
        $.ajax({
            url: url + '/' + id,
            dataType: "text",
            success: function (data) {
                var json = $.parseJSON(data);
                //bagal ng net mo nag llag ako
                
                if(json == null) return false;
                if(json.status == 200) {
                    
                  alert("Delete Succesfully");
                    window.location.href = url;
                }
            }
        });
    });

   $("#james_save").click(function () {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
            }
        });

        var url = $('#url_new').val();
        // var url = action('HomeController@index');
        var product_id = $('#product_id').val();
        var product_brand_uid = $('#product_brand_uid').val();
        var product_type_uid = $('#product_type_uid').val();

        $.ajax({
            type: 'GET',
            url: "/ecommerce/shop/create/new/save/process/" + product_id + "/" + product_brand_uid  + "/" + product_type_uid,
            dataType: 'text',
            success: function (data) {

                var json = $.parseJSON(data);
                
                if(json == null) return false;

                console.log(json);

                if(json.status == 200) {
                    alert("Thank you!!! Your purchase will now be process though verification.");
                    window.location.href = url ;
                }
            }
        });
    });

   $(document).on('click','.edit_status',function(){
        var id = $(this).val();
        
        // Populate Data in Edit Modal Form
        $.ajax({
            type: "GET",
            url: "transaction/get/" + id,
            dataType: 'text',
            success: function (data) {
                var json = $.parseJSON(data);
                
                if(json == null) return false;

                if(json.status == 200) {
                    $('#statusModal').modal('show');

                    $('#trans_status_id').val(json.result['id']);
                    $('#status').val(json.result['status']);
                    
                }
            }
        });
    });

   $("#update_trans_status").click(function () {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
            }
        });

        var url = $('#url').val();
        // var url = action('HomeController@index');

        var id = $('#trans_status_id').val();
        var status = $('#update_status').val();

        $.ajax({
            type: 'GET',
            url: "transaction/update/process/" + id + "/" + status,
            dataType: 'text',
            success: function (data) {

                var json = $.parseJSON(data);
                
                if(json == null) return false;

                console.log(json);

                if(json.status == 200) {
                    alert("Successfuly Updated!");
                    window.location.href = url ;
                }
                $('#statusModal').modal('hide');
            }
        });
    });

   $('.delete_transaction').on('click',function(){
        var id = $(this).val();

        console.log("hey: " + id);
        console.log(url);
        
         
        $.ajax({
            url: url + '/' + id,
            dataType: "text",
            success: function (data) {
                var json = $.parseJSON(data);
                //bagal ng net mo nag llag ako
                
                if(json == null) return false;
                if(json.status == 200) {
                    
                  alert("Delete Succesfully");
                    window.location.href = url;
                }
            }
        });
    });

  });