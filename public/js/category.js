// $(document).ready(function(){

// });

function show_brand(brand_uid) {
	var caregory_area = "";
	$.ajax({
            type: "GET",
            url: "product/get/brand_category/" + brand_uid,
            dataType: 'text',
            success: function (data) {
                var json = $.parseJSON(data);

                console.log(json);

                if(json == null) return false;

                if(json.status == 200) {

                	$(json.result).each(function(i, tran){


                		caregory_area += '<div class="col-lg-4 col-md-6 mb-4 text-center">';
	                    caregory_area +=    '<div class="card h-100">';
	                    caregory_area +=        '<a href="#"><img class="rounded-circle" style="width: 160px; height: 160px; margin-top: 20px;" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"></a>';

	                    caregory_area +=        '<div class="card-body">';
	                    caregory_area +=            ' <p class="card-title">';
	                    caregory_area +=                '<a href="ecommerce/shop/'+ tran.id+'">'+ tran.product_name +'</a>';
	                    caregory_area +=            '</p>';
	                    caregory_area +=            '<h6>' + tran.price +'</h6>';
	                    // caregory_area +=            '<p class="card-text" style="text-align: justify;">'+ tran.description +'</p>';
	                    caregory_area += 		  '<span><a class="btn btn-success" href="ecommerce/shop/'+ tran.id+'" role="button">View!</a></span>';
	                    caregory_area +=        '</div>';
	                    caregory_area +=        '<div class="card-footer">';
	                    caregory_area +=            '<small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>';
	                    caregory_area +=        '</div>';
	                    caregory_area +=    '</div>';
	                    caregory_area += '</div>';


                	});


               }else {
	                  caregory_area += '<div class="col-lg-12 text-center">';
	                  caregory_area +=            '<br><br>';
	                  caregory_area += 		'<div class="card-body">';
	                  caregory_area +=            '<h5>No Result Found</h5>';
	               	  caregory_area += 		'</div>';
	               	  caregory_area += '</div>';
				}
                $('#category_area').empty().prepend(caregory_area);

            }
        });
}

function show_type(type_uid) {
	var caregory_area = "";
	$.ajax({
            type: "GET",
            url: "product/get/type_category/" + type_uid,
            dataType: 'text',
            success: function (data) {
                var json = $.parseJSON(data);

                console.log(json);

                if(json == null) return false;

                if(json.status == 200) {

                	$(json.result).each(function(i, tran){


                		caregory_area += '<div class="col-lg-4 col-md-6 mb-4 text-center">';
	                    caregory_area +=    '<div class="card h-100">';
	                    caregory_area +=        '<a href="#"><img class="rounded-circle" style="width: 160px; height: 160px; margin-top: 20px;" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"></a>';

	                    caregory_area +=        '<div class="card-body">';
	                    caregory_area +=            '<p class="card-title">';
	                    caregory_area +=                '<a href="/ecommerce/shop/'+ tran.id+'">'+ tran.product_name +'</a>';
	                    caregory_area +=            '</p>';
	                    caregory_area +=            '<h6>' + tran.price +'</h6>';
	                    // caregory_area +=            '<p class="card-text" style="text-align: justify;">'+ tran.description +'</p>';
	                    caregory_area += 		  '<span><a class="btn btn-success" href="/ecommerce/shop/'+ tran.id+'" role="button">View!</a></span>';
	                    caregory_area +=        '</div>';
	                    caregory_area +=        '<div class="card-footer">';
	                    caregory_area +=            '<small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>';
	                    caregory_area +=        '</div>';
	                    caregory_area +=    '</div>';
	                    caregory_area += '</div>';


                	});


                }else {
	                  caregory_area += '<div class="col-lg-12 text-center">';
	                  caregory_area +=            '<br><br>';
	                  caregory_area += 		'<div class="card-body">';
	                  caregory_area +=            '<h5>No Result Found</h5>';
	               	  caregory_area += 		'</div>';
	               	  caregory_area += '</div>';
				}
                $('#category_area').empty().prepend(caregory_area);

            }
        });
}

// function shop_save(){

// 		var url = $('#url_new').val();
// 		// var url = action('HomeController@index');
//         var product_id = $('#product_id').val();
//         var product_brand_uid = $('#product_brand_uid').val();
//         var product_type_uid = $('#product_type_uid').val();

//         $.ajax({
//             type: 'GET',
//             url: "/ecommerce/shop/create/new/save/process/" + product_id + "/" + product_brand_uid  + "/" + product_type_uid,
//             dataType: 'text',
//             success: function (data) {

//                 var json = $.parseJSON(data);

//                 if(json == null) return false;

//                 console.log(json);

//                 if(json.status == 200) {
//                     alert("Thank you!!! Your purchase will now be process though verification.");
//                     window.location.href = url ;
//                 }
//             }
//         });
//     }