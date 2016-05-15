/**
 * Inject HTML elements into the Infusionsoft UI to modify the design template
 */
try {
    jQuery(function ($) {
        $('title').text('Pretty Web Form');
        $('body style').remove();
        $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">');
        $('head').append('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />');
        $('head').append('<link id="templateCSS" rel="stylesheet" href="template2.css" />');
        $('form').eq(0).wrap('<div id="content" class="container" />');
        $('form').eq(0).wrap('<div class="col-xs-12 col-sm-6 col-sm-offset-3" />');
        $('.infusion-field-input-container').removeAttr('style');
        $(':input.infusion-field-input-container').each(function (i) {
            var self = $(this);
            var parentTR = self.closest('tr')
            var childTD = parentTR.children('td.infusion-field-label-container');
            var label = childTD.html();
            self.addClass('form-control').wrap('<div class="form-group" />').before(label);
            childTD.remove();
        });
        $(':textarea.infusion-field-input-container').each(function (i) {
            var self = $(this);
            var parentTR = self.closest('tr')
            var childTD = parentTR.children('td.infusion-field-label-container');
            var label = childTD.html();
            self.addClass('form-control').wrap('<div class="form-group" />').before(label);
            childTD.remove();
        });
        $('#inf_field_FirstName').attr({
            placeholder: 'Enter your first name'
        });
        $('#inf_field_Email').attr({
            type: 'email',
            placeholder: 'Enter your primary email'
        });
        $('.infusion-submit > button').addClass('btn btn-lg btn-primary');
        if ($('#webformErrors').children().length) {
            $('#webformErrors').addClass('alert alert-danger');
        }
        $('form').append('<br />&nbsp;<br /><div class="text-center well">Change the template: <a class="changeTemplate" href="#Template1" rel="template1.css">Template 1</a> | <a class="changeTemplate" href="#template2" rel="template2.css">Template 2</a></div>');
        $(document).on('click', 'a.changeTemplate', function (e) {
            e.preventDefault();
            var self = $(this);
            $('#templateCSS').attr('href', self.attr('rel'));
        });
    });
} catch (e) {

}
