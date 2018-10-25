
        $(document).ready(function (){
            $("#click").click(function (){
                $('html, body').animate({
                    scrollTop: $("#top-box").offset().top
                }, 1000);
            });
        });
