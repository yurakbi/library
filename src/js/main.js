import $ from './lib/lib';


$('button').on('click', function(){
    $('div').eq(2).toggleClass('active');
});

$('div').click(function(){
    console.log($(this).index());
});


//  

// console.log($('.some').closest('.findme'));

// console.log($('.more').eq(0).siblings());

$('button').fadeIn(2000);


// console.log($('button').html("hello"));