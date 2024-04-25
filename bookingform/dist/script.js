$(document).ready(function () {

    let cost = 0;
    let numAdults = 1;
    let numDays = 0;
  
  
    const scheduleCalculator = function () {
       var checkInDate = moment($('#checkin').val());
       var checkOutDate = moment($('#checkout').val());
       
       if (!(checkInDate && checkOutDate)) return;
       

       numDays = checkOutDate.diff(checkInDate, 'days');
       $('#days').val(numDays);
      
       numAdults = $("#adults").val();
    
       $("#Cost").val(numDays * 150 * numAdults);
      
    }
    $('#checkin, #checkout, #adults').change(scheduleCalculator);
  
    function resetForm() {
     let field = [
        { selector: "#username", name: "Username" },
        { selector: "#firstName", name: "First Name" },
        { selector: "#lastName", name: "Last Name" },
        { selector: "#phoneNumber", name: "Phone#" },
        { selector: "#faxNumber", name: "Fax#" },
        { selector: "#email", name: "E-mail" },
        {selector: '#manutd', name: "Glory Glory"}
    ]; 
     $('#username').val('');
     $('#firstName').val('');
     $('#lastName').val('');
     $('#phoneNumber').val('');
     $('#faxNumber').val('');
     $('#email').val('');
     $('#adults').val(1);
     $('#checkin').val('');
     $('#checkout').val('');
     $('#days').val('');
     $('#Cost').val('');
     $('#message').val('');
     $('#Frange').val(50); 
     $('input[name="priority"]').prop('checked', false); 
     $('#lowPriority').prop('checked', true); 
     $('.form-group').removeClass('has-error');
     $('.is-invalid').removeClass('is-invalid');
     field.forEach(function (field) {
       var $element = $(field.selector);
        $element.offsetParent().removeClass('has-error');
       if($element.attr("id")=="manutd"){
         $element.removeClass("has-error");
       }
    });
  }

  $('#reset-button').click(function () {
    resetForm();
    toastr.info("Form cleared!");
  });

  $("#submit-button").click(function (e) {
    e.preventDefault();
    
    $('.form-group').removeClass('has-error');
    $('.is-invalid').removeClass('is-invalid');
    
    
    var isValid = true;
    var fields = [
        { selector: "#username", name: "Username" },
        { selector: "#firstName", name: "First Name" },
        { selector: "#lastName", name: "Last Name" },
        { selector: "#phoneNumber", name: "Phone#" },
        { selector: "#faxNumber", name: "Fax#" },
        { selector: "#email", name: "E-mail" },
    ];
   
    

    fields.forEach(function (field) {
        var $element = $(field.selector);
        if ($element.val() === '') {
            $element.offsetParent().addClass('has-error');
            toastr.error("Please fill in the " + field.name + " field", "Error");
            isValid = false;
        }
    });
    
    // Reevaluate Cost field
    var cost = parseInt($('#Cost').val());
    if (isNaN(cost) || cost <= 0) {
        toastr.error('Please calculate a valid cost', 'Error');
        $("#manutd").addClass("has-error");
        isValid = false;
    }

    if (!isValid) {
        return;
    }
    
    toastr.success('Form successfully submitted', 'Success');
    resetForm();
});





  
    });