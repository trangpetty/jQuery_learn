function insert(num) {
    $('.calc-display').val($('.calc-display').val() + num);
}

function eql() {
    $('.calc-display').val(eval($('.calc-display').val()));
}

function c() {
    $('.calc-display').val('');
}

function del() {
    value = $('.calc-display').val();
    $('.calc-display').val(value.substring(0, value.length - 1));
}

$(document).ready(function(){
    $('.calc').hide();
    $('.list').hide();
    $('.color-preview').hide();
    $('.color-control').hide();

    //Calculator
    $(".toggle-calc").click(function(){
      $(".calc").toggle();
    });
    $(".toggle-list").click(function(){
        $(".list").toggle();
      });

    //Todo List
    $(".input-todo").keypress(function(e) {
        if(e.which === 13) {
            var todoText = $(this).val();
            $(this).val("");
            $('ul').append('<li>' + todoText + '<i class="fa fa-trash mx-3"></i></li>')
        }
    });
    $("ul").on('click',"i",function(e) {
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });
        e.stopPropagation();
    })
    $("ul").on('click',"li",function() {
        $(this).toggleClass("done");
    })

    //Dark Mode
    $('.toggle-dark').click(function() {
        $('body').toggleClass('change-background');
        $('.toggle-dark').toggleClass('change-btn');
        $(this).find("i").toggleClass("fa-moon fa-sun")
        $(".toggle-dark span").text($("span").text()=="Light Mode"?"Dark Mode":"Light Mode")
    })
    
    //Color
    $('.toggle-color').click(function() {
        $('.color-control').toggle();
        $('.color-preview').toggle();
    })

    $('.generate-btn').click(function() {
        var randomColor = "";
        var characters = "0123456789abcdef";
        for(i=0;i<6;i++) {
            randomColor = randomColor + characters[Math.floor(Math.random() * 16)]
        }

        $('.input-color').val("#" + randomColor);
        $('.input-color').css({
            "color": "#" + randomColor,
            "border-color": "#" + randomColor,
        });
        $('.color-preview, .copy-btn').css("background-color", "#" + randomColor);
    })

    $('.copy-btn').click(function() {
        $('.input-color').select();
        document.execCommand("copy");
    })

  });

  $('#show_password').click(function() {
    var password = $('#password');
    var passwordField = password.attr('type');
    if(passwordField == 'password') {
        password.attr('type', 'text');
        $(this).text('Hide');
    }
    else {
        password.attr('type', 'password');
        $(this).text('Show');
    }
})