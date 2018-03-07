import {add_rules} from './edit.js'
//global vars 
var jcrop_api;

$('#crop').click(function () {
    //enable set crop button 
    $('#set_crop').attr('disabled', false);
    $(this).attr('disabled', true);

    $('#new_image').Jcrop({
        onChange: showCoords,
        onSelect: showCoords,
        onRelease: clearCoords
    }, function () {
        jcrop_api = this;
    });

    $('#coords').on('change', 'input', function (e) {
        var x1 = $('#x1').val(),
            x2 = $('#x2').val(),
            y1 = $('#y1').val(),
            y2 = $('#y2').val();
        jcrop_api.setSelect([x1, y1, x2, y2]);
    });

});

$('#set_crop').click(function () {
    $(this).attr('disabled', true);
    $('#crop').attr('disabled', false);

    //get the natural size of the image
    var image = $('#src_img_url');
    var naturalWidth = image[0].naturalWidth;
    var naturalHeight = image[0].naturalHeight;
    var displayWidth = image[0].width;
    var displayHeight = image[0].height;
    var cropped_height = $('#h').val();
    var cropped_width = $('#w').val();
    var ratio = naturalHeight / displayHeight;
    var image_height = cropped_height;
    var image_width = cropped_width;
    cropped_height = Math.round(cropped_height * ratio);
    cropped_width = Math.round(cropped_width * ratio);


    //calculate values
    var x_offset = $('#x1').val();
    var y_offset = $('#y1').val();
    y_offset = Math.round(y_offset * ratio);
    x_offset = Math.round(x_offset * ratio);
    
    var rule = "x_"+x_offset+",y_"+y_offset+",h_"+cropped_height+",w_"+cropped_width+",c_crop/g_center"+",h_"+image_height+",w_"+image_width+",";
    add_rules(rule);

    $('#new_image').removeAttr('style');
    // Destroy Jcrop widget, restore original state
    jcrop_api.destroy();

});

// Simple event handler, called from onChange and onSelect
// event handlers, as per the Jcrop invocation above
function showCoords(c) {
    $('#x1').val(c.x);
    $('#y1').val(c.y);
    $('#x2').val(c.x2);
    $('#y2').val(c.y2);
    $('#w').val(c.w);
    $('#h').val(c.h);
};

function clearCoords() {
    $('#coords input').val('');
};