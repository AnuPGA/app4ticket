$(document).ready(function () {	
$("#LoginForm").validate({
rules: {
			username: {
				required: true
			},
					
			password:
			{
				required: true
			}
		},
		 message:{
		 },		
                          errorClass:'error help-inline',
                          validClass:'success',
                          errorElement:'span',
                          highlight: function (element, errorClass, validClass) { 
                          $(element).parents("div.control-group").addClass(errorClass).removeClass(validClass); 
						  }, 
                          unhighlight: function (element, errorClass, validClass) { 
                          $(element).parents(".error").removeClass(errorClass).addClass(validClass); 
				
				
				
                          },
						  						  
						   submitHandler: function (form) {			
						 
								var datas = new FormData($("form#LoginForm")[0]);
								var formURL = 'http://techsupport.cfnet.in/mobix/check_db/';
					
								$.ajax({ 
							
											type:'POST',
											url:formURL,
											data:datas,
											crossDomain: true,
											cache: false,
											contentType: false,
											processData: false,
											async:false,
											success:function(response){											
													
											$.session.set("username", $("#username").val());
											var a =  $.session.get('username');
											
											
											$("#LoginForm")[0].reset();											
											if(response==1){
											
											
													$("#labeltest").fadeIn(1000);
													$("#labeltest").fadeOut(3000);
											
											
											setTimeout(function(){
											 
												window.location.href ='#!/menu.html';
												window.location.reload();
												
											 
											}, 3500);								
											}
												else{
												
													$("#labellogin").fadeIn(1000);
													$("#labellogin").fadeOut(6000);
												}
												
											}

											
										});
							}
									
	});
	


});