// @ts-check
$('#src_img').blur(function () {
    var src_img = $('#src_img').val();
    $('#src_img_url').attr('src', src_img);
    $('#new_image').attr('src', src_img);
});

$('#unused_rules button').click(function () {
    console.log('clicked');
    var rule = $(this).text();
    console.log(rule);
    if (rule === "Flip Horizontal") {
        rule = "a_hflip/";
    }
    else if (rule === 'Flip Veritcal') {
        rule = "a_vflip/";
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