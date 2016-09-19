/**
 * Inject HTML elements into the Infusionsoft UI to modify the design template
 */
try {
    jQuery(function ($) {
        $('title').text('Web Form');
        $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">');
        $('head').append('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />');
        $('.infusion-field-input-container').removeAttr('style');
        $(':input.infusion-field-input-container').each(function (i) {
            var self = $(this);
            var parentTR = self.closest('tr');
            var childTD = parentTR.children('td.infusion-field-label-container');
            var label = childTD.html();
            self.css({"width": "100%"});
            self.addClass('form-control').wrap('<div class="form-group" />').before(label);
            childTD.remove();
        });
        $('textarea').each(function (i) {
            var self = $(this);
            var parentTR = self.closest('tr');
            var childTD = parentTR.children('td.infusion-field-label-container');
            var label = childTD.html();
            self.addClass('form-control').wrap('<div class="form-group" />').before(label);
            childTD.remove();
        });
        $('#inf_field_FirstName').attr({
            placeholder: 'Enter your First Name'
        });
        $('#inf_field_LastName').attr({
            placeholder: 'Enter your Last Name'
        });
        $('#inf_field_Email').attr({
            type: 'email',
            placeholder: 'Enter Your Primary Email'
        });
        $('#inf_field_Phone1').attr({
            placeholder: 'Enter Your Primary Phone Number'
        });
        $('.infusion-submit > button').addClass('btn btn-lg btn-primary')
            .css({"width": "80%"});
        $('.infusion-submit').css({"width": "100%", "text-align": "center"});
        if ($('#webformErrors').children().length) {
            $('#webformErrors').addClass('alert alert-danger');
        }
    });
} catch (e) {
    console.log("Error: " + e); 
}
