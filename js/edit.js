// @ts-check
$('#src_img').blur(function () {
            var src_img = $('#src_img').val();
                if (src_img !== ""){
                    $('#src_img_url').attr('src', src_img);
                    $('#new_image').attr('src', src_img);
                }
                else {
                    $('#src_img_url').attr('src', 'http://via.placeholder.com/1000x600/000000/ffffff?text=picture');
                    $('#new_image').attr('src', 'http://via.placeholder.com/1000x600/ffffff/000000?text=picture');
                }
});

$('#unused_rules button').click(function () {
    console.log('clicked');
    var rule = $(this).text();
    console.log(rule);
    if (rule === "Flip Horizontal") {
        rule = "a_hflip/";
    }
    else if (rule === 'Hero') {
        rule = "ar_5:3,c_crop/w_2000,h_1200/";
    }
    else if (rule === 'Interior Hero') {
        rule = "ar_20:3,c_crop/w_2000,h_300/";
    }
    else if (rule === '1/2 Column') {
        rule = "ar_12:10,c_crop/w_1200,h_1000/";
    }
    else if (rule === '1/3rd Column') {
        rule = "ar_66:40,c_crop/w_660,h_400/";
    }
    else if (rule === '1/4th Column') {
        rule = "ar_5:3,c_crop/w_500,h_300/";
    }
    else if (rule === 'Flip Veritcal') {
        rule = "a_vflip/";
    }
    else if (rule === 'Invert colors') {
        rule = "e_negate/";
    }
    else if (rule === 'Improve') {
        rule = "e_improve/";
    }
    else if (rule === 'Make Background Transparent') {
        rule = "e_make_transparent/";
    }
    else if (rule === 'Sharpen') {
        rule = "e_sharpen/";
    }
    else if (rule === 'Make Circular') {
        rule = "ar_1:1,c_crop/r_max/";
    }
    else if (rule === 'Rounded Corner Icon') {
        rule = "ar_1:1,c_crop/r_20/";
    }
    else if (rule === 'Rotate 90 degrees clockwise') {
        rule = "a_90/";
    }
    else if (rule === 'Rotate 90 degrees counterclockwise') {
        rule = "a_-90/";
    }
    add_rules(rule);
});

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