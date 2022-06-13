$('document').ready(function() {
    $('.list-group-item').on('click', function() {
        let id = $(this).attr('id');
        $('#page').attr('class', 'page ' + id);

        if (id === 'home') {
            console.log($('#libs-page').css('display'));
            if ($('#libs-page').css('display') != 'none') {
                $('#libs-page').toggle();
            }
            if ($('#thumb-page').css('display') != 'none') {
                $('#thumb-page').toggle();
            }
            if ($('#home-page').css('display') === 'none') {
                $('#home-page').toggle();
            }
        } else if (id === 'libs') {
            if ($('#home-page').css('display') != 'none') {
                $('#home-page').toggle();
            }
            if ($('#thumb-page').css('display') != 'none') {
                $('#thumb-page').toggle();
            }
            if ($('#libs-page').css('display') === 'none') {
                $('#libs-page').toggle();
            }
            
        } else { 
            if ($('#home-page').css('display') != 'none') {
                $('#home-page').toggle();
            }
            if ($('#libs-page').css('display') != 'none') {
                $('#libs-page').toggle();
            }
            if ($('#thumb-page').css('display') === 'none') {
                $('#thumb-page').toggle();
            }
        }
    });

    $('#tellStory').on('click', function() {
        let name = $('#person-name-input').val();
        let char = $('#character-input').val();
        let adverb = $('#adverb-input').val();
        let adj = $('#adjective-input').val();
        let text = `One day, my friend ${name} was visiting New York and ran into ${char}. ${name} ran ${adverb} to meet ${char}. But ${char} turned out to be very ${adj} and ${name} did not enjoy the meeting.`
        $('#txt').text(text);
        $('.libs-ans').toggle();
        $('#person-name-input').val('');
        $('#character-input').val('');
        $('#adverb-input').val('');
        $('#adjective-input').val('');
    });

    $('#calculate').on('click', function() {
        $('.thumb-ans').empty();
        let wth = $('#width').val();
        let hth = $('#height').val();
        let noc = $('#colors').val();

        let res = (parseInt(wth) * parseInt(hth) * parseInt(noc)) / 1024;

        if (res > 15) {
            $('.thumb-ans').append(`<p style="color:red;font-weight:bold">File is ${res} KB which is NOT OKAY</p>`);
        } else {
            $('.thumb-ans').append(`<p style="color:green;font-weight:bold">File is ${res} KB which is OK</p>`);
        }
    });
})