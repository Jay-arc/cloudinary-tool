// @ts-check
//global vars 
var jcrop_api;
var x_offset;
var y_offset;
var cropped_height;
var cropped_width

$('#crop').click(function () {
    var x_crop = $('#x_crop').val();
    var y_crop = $('#y_crop').val();
    x_crop = parseInt(x_crop);
    y_crop = parseInt(y_crop);

    //check if the crop is set
    if (x_crop && y_crop) {
        //enable set crop button 
        $('#set_crop').attr('disabled', false);
        $(this).attr('disabled', true);

        $('#new_image').Jcrop({
            onChange: showCoords,
            onSelect: showCoords,
            onRelease: clearCoords,
            aspectRatio: x_crop / y_crop,
            bgColor: 'black', 
            bgOpacity: 0.4,
            addClass: 'jcrop-dark'
        }, function () {
            jcrop_api = this;
        });
    }
    else {
        //set bootstap alert to tell the user to set values of the crop
        alert('booo');
    }
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
    var ratio = naturalHeight / displayHeight;
    var image_height = $('#y_crop').val();
    var image_width = $('#x_crop').val();
    cropped_height = Math.round(cropped_height * ratio);
    cropped_width = Math.round(cropped_width * ratio);


    //calculate values
    y_offset = Math.round(y_offset * ratio);
    x_offset = Math.round(x_offset * ratio);

    var rule = "x_" + x_offset + ",y_" + y_offset + ",h_" + cropped_height + ",w_" + cropped_width + ",c_crop/g_center" + ",h_" + image_height + ",w_" + image_width + ",";
    add_rules(rule);

    $('#new_image').removeAttr('style');
    // Destroy Jcrop widget, restore original state
    jcrop_api.destroy();

});

// Simple event handler, called from onChange and onSelect
// event handlers, as per the Jcrop invocation above
function showCoords(c) {
    x_offset = c.x;
    y_offset = c.y;
    cropped_height = c.h;
    cropped_width = c.w;
};

function clearCoords() {
    $('#coords input').val('');
};

function add_rules(rule) {
    var existing_rules = $('#rules').val();
    var new_rule = existing_rules + rule;
    $('#rules').val(new_rule);
    var src_url = $('#src_img').val();
    var split_url = src_url.split('upload/');
    var new_url = split_url[0] + "upload/" + new_rule + split_url[1];
    $('#complete_url').val(new_url);
    $('#new_image').attr('src', new_url);
}