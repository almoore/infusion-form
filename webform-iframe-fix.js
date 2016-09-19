/**
 * Inject HTML elements into the Infusionsoft UI to modify the design template
 */
try {
    jQuery(function ($) {
        $('head').append('<base target="_blank">');
    });
} catch (e) {
    console.log("Error: " + e); 
}
