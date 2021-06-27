$(function(){

    $('a.btn').click(function () { 
        $(this).closest('div').find('ul').slideToggle(500,function(){
            var a=$(this).closest('div').find('a.btn').text();
            if(a=='+'){
                $(this).closest('div').find('a.btn').text('x');
            }
            else{
                $(this).closest('div').find('a.btn').text('+');
            }
        });    
    }); 

    $('span.fa-bars').click(function(){
        $(this).closest('body').find('section.hidden').slideDown(500);
    });

    $('.hidden .cross').click(function(){
        $(this).closest('section.hidden').slideUp(500);
    });

});