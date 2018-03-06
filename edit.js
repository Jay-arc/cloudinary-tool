// @ts-check
$('#src_img').blur(function(){
    var src_img = $('#src_img').val();
    $('#src_img_url').attr('src',src_img);
});

$('#unused_rules button').click(function(){
    console.log('clicked');
    var rule = $(this).text();
    console.log(rule);
    if(rule === "Flip Horizontal" ){
        var existing_rules = $('#rules').val();
        var new_rules = existing_rules + "/a_hflip";
        $('#rules').val(new_rules);
        add_rules(new_rules);
    }
    else if (rule === 'Flip Veritcal'){
        var existing_rules = $('#rules').val();
        var new_rules = existing_rules + "/a_vflip";
        $('#rules').val(new_rules);
        add_rules(new_rules);
    }
});

function add_rules(new_rules){
    var src_url = $('#src_img').val();
    var split_url = src_url.split('/v');
    var new_url = split_url[0]+new_rules+"/v"+split_url[1];
    //load new image here
    $('#complete_url').val(new_url);
}