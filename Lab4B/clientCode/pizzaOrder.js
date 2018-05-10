$(function()
{
	$("#btnMessage").click(function()
	{
		//get values from page and set message string
		var name = $("#txtName").val();
		var phone = $("#txtPhone").val();
		var base = $("#cboBase").val() * 1;
		var size = $(":radio:checked").val() * 1;
		var validPhone = /^\d{3}-\d{3}-\d{4}$/;
	
		var message = "";

		//validation tests
		if(name.replace(/\s/g,"") == "")
			message = "--Enter a name";

		if(!validPhone.test(phone))
			message += "\n--Enter a valid phone number: 999-999-9999";

		if(base == 0)
			message += "\n--Select a base pizza";

		if(isNaN(size))	//use undefined if you didn't get the val() of the checked radio button
			message += "\n--Select a pizza size";

		//no errors found - output total
		if(message == "")
		{
			total = base + size 
			
			var pizzax = $("input[name=chkExtras]").prop("checked");
			
			if(pizzax == true)
			{
				var tops = $("input[name=chkExtras]:checked").length;
				total = base + size + tops * .50;
			}
			
			alert(name + ": your order total is $" + total);
		}
		//errors found! Output message string with prompts
		else
			alert(message);
	});


$("#cboBase").change(function()
{
	var pizzaText = $(this).find(":selected").text();		//get text from dropdown list
	$(":radio").prop("checked", false);						//default all radio buttons to unchecked

	if(pizzaText.search("Chili Dawg") != -1)				//if they selected chili dawg
	{
		$(":radio").last().prop("checked", true).siblings().prop("disabled", true);	
	}
	else
		$(":radio").last().prop("checked", false).siblings().prop("disabled", false);
});
	
	//PUT YOUR LAB 4B CODE HERE...
	//1
	$("#chkWantsMoreToppings").click(function()
	{
		
		$("#toppingsContainer").toggle();
		
		if($(this).prop("checked") == false)
			$("input[name=chkExtras]").prop("checked", false).siblings("img").removeClass("selected");
		
		
	});
	//2
	$("input[name=chkExtras]").click(function()
	{
		$(this).siblings().addClass("selected");
	
		
	});
	
	//3
	
	
	
	

});