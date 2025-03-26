/**
 * Created by danni on 1/25/18.
 */
$(document).ready(function(){
    var current = window.location.pathname;
    current = decodeURIComponent(current);
    current = current.substring(current.length-12,current.length);

    if(current==="research.php"){
        var id = window.location.hash;
        id = decodeURIComponent(id);
        if(id){
            $(id).closest("li").find(".details").slideToggle();
            console.log(id);
            if(id==="#research3"){
                $('body,html').animate({scrollTop: 880}, 900);
            }else{
                $('body,html').animate({scrollTop: 480}, 700);
            }
        }
    }

    $('.timeline-title').click(function(e) {
        $('.timeline').children('li').removeClass('open');
        $(this).parent().parent().addClass('open');
        $(this).next().slideToggle();
        $(this).next().next().next().slideToggle();
    });

    $(".projects-list li").on('click',function(){
        $(this).closest("li").find(".details").slideToggle();
        // .stop(true, true)
        // .animate({
        //     height:"toggle",
        //     opacity:"toggle"
        // },320);
    });

    $('#year').val('All Years');
    $('#year').change(function() {
        var picker = $(this).val();
        console.log( picker);
        if(picker==="allyear"){
            $('.pubitems>*').fadeIn();
        }else{
            $('.pubitems>.publication').hide();
            $('.pubitems>#' +picker).fadeIn();
        }
    });

    $(".pubitems>.publication>.item>.pubmain").click(function(e){
        $(this).siblings(".pubdetails").slideToggle();
    });



    $(function () {
        $('[data-toggle="popover"]').popover()
    })
});