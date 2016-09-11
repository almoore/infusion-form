/**
 * Inject HTML elements into the Infusionsoft UI to modify the design template
 */
try {
    jQuery(function ($) {
        $('title').text('Pretty Web Form');
        $('body style').remove();
        $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">');
        $('head').append('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />');
        $('form').eq(0).wrap('<div id="content" class="container" />');
        $('form').eq(0).wrap('<div class="col-xs-12 col-sm-12" />');
        $('.infusion-field-input-container').removeAttr('style');
        $(':input.infusion-field-input-container').each(function (i) {
            var self = $(this);
            console.log('input field: ' + self);
            var parentTR = self.closest('tr');
            var childTD = parentTR.children('td.infusion-field-label-container');
            var label = childTD.html();
            self.addClass('form-control').wrap('<div class="form-group" />').before(label);
            childTD.remove();
        });
        $('textarea').each(function (i) {
            var self = $(this);
            console.log('input field: ' + self);
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
            placeholder: 'Enter your primary email'
        });
        $('.infusion-submit > button').addClass('btn btn-lg btn-primary')
            .css( {"background-color": "#66125d", "text-transform": "uppercase" })
            .hover(function(){
                $(this).css({
                    "background": "#cd1f3e",
                    "box-shadow": "0 0 15px rgba(0,0,0,0.2)"
                });
            });
        if ($('#webformErrors').children().length) {
            $('#webformErrors').addClass('alert alert-danger');
        }
    });
} catch (e) {
    console.log("Error: " + e); 
}
