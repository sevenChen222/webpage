var iA = 1;
var iB = 0;
$(".A").click(function(){
    if (iA < 31){
        iA = iA + 1;
        iB = iB + 1;
        $('#A'+ iA).css('display','flex');
        $('.B'+ iB).css('display','flex');
    }
    else if (iA == 31){
        $('.A').css('display','none');
        $('#A32').css('display','flex');
        iB = iB + 1;
        $('.B'+ iB).css('display','flex');
    }
});

var counts = 0;
$(function() {
    $(".B").draggable({ containment: "#box", scroll: false, drag: function() {
        counts++;
      },});
});


function count(num){
    if(counts == 0){
        $('.shade').fadeIn(1000);
        $('#D'+num).fadeIn(1000,function(){
            $('.shade').click(function(){$('#D'+num).fadeOut(1000);$('.shade').fadeOut(1000);})
        }); 
        counts = 0;
    }
    else if(counts != 0){
        counts = 0;
    }
}

function display(){
    if (num)
    alert("display");
}