$(window).on("load", function() {

    $('.searchicon').click(function(e) {
        e.stopPropagation();
        $('.showboxsearch').fadeIn('slow');
    });

    $('.cancel, body').click(function() {
        $('.showboxsearch').fadeOut('slow');
    });

    $('.showboxsearch').click(function(e) {
        e.stopPropagation();
    });

    //////////////////Search


    function setActiveClass(parentSelector, childSelector) {
        $(parentSelector).on("click", childSelector, function() {
            if (!$(this).hasClass("active")) {
                $(this).addClass("active").siblings().removeClass("active");
            }
        });
    }
    setActiveClass(".pagination", "li a");
    setActiveClass(".iframeitems", "a");
    setActiveClass(".list-letters", "a");
    setActiveClass(".gallery-item");

    // This function is specific to each element that gets the active class



    $(function() {
        const navbarMenu = $("#navbar");
        const overlayMenu = $(".overlay");

        $("#burger, .overlay").click(function() {
            navbarMenu.toggleClass("active");
            overlayMenu.toggleClass("active");
        });

        navbarMenu.on("click", "[data-toggle]", function(e) {
            if (window.innerWidth <= 999) {
                e.preventDefault();
                const $menuDropdown = $(this).parent();

                if ($menuDropdown.hasClass("active")) {
                    $menuDropdown.removeClass("active").find(".submenu").removeAttr("style");
                } else {
                    $(".menu-dropdown.active .submenu").removeAttr("style");
                    $(".menu-dropdown.active").removeClass("active");

                    $menuDropdown.addClass("active");
                    $menuDropdown.find(".submenu").css("max-height", $menuDropdown.find(".submenu")[0].scrollHeight + "px");
                }
            }
        });

        $(window).on("resize", function() {
            if (window.innerWidth > 999) {
                navbarMenu.removeClass("active");
                $(".menu-dropdown.active").removeClass("active").find(".submenu").removeAttr("style");
            }
        });
    });

    $('.burger').click(function() {
        $('.site-actions').addClass("active");
    });
    $('.cancel').click(function() {
        $('.navbar,.overlay,.site-actions').removeClass("active");
    });
    $('.overlay').click(function() {
        $('.site-actions').removeClass("active");
    });


    $(".menu-item").click(function() {
        $(this).addClass("activelink").siblings().removeClass("activelink");
    });

    $(function() {
        var $menu = $(".site-actions");
        var stickyOffset = $menu.offset().top;

        $(window).on("scroll", function() {
            if ($(window).scrollTop() > stickyOffset) {
                $menu.addClass("sticky");
            } else {
                $menu.removeClass("sticky");
            }
        });
    });


    $(function() {
        var $bar = $(".site-menu");
        var offset = $bar.offset().top;
        var isFixed = false;

        $(window).on("scroll", function() {
            if ($(window).scrollTop() > offset && !isFixed) {
                $bar.addClass("sticky");
                isFixed = true;
            } else if ($(window).scrollTop() <= offset && isFixed) {
                $bar.removeClass("sticky");
                isFixed = false;
            }
        });
    });

    ////////////////// End show Header

    const $ticker = $('.ticker-content');
    const itemHeight = $('.ticker-item').outerHeight();
    const speed = 4000;
    let pause = false;

    function scrollNews() {
        if (!pause) {
            $ticker.animate({ top: `-=${itemHeight}px` }, 800, function() {
                $ticker
                    .append($ticker.find('.ticker-item').first())
                    .css('top', 0);
            });
        }
    }
    let interval = setInterval(scrollNews, speed);
    $('.ticker-wrapper').hover(
        function() { pause = true; },
        function() { pause = false; }
    );

    ////////////////// End news ticker-item


    function initializeSlider(selector, options) {
        $(selector)
            .on('init', function() {
                $(this).removeClass('slick-loading').addClass('slick-loaded');
                $(".slider-loader").hide();
            })
            .slick(options);
    }



    initializeSlider(".slider-occasions", {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 1500, settings: { slidesToShow: 3, slidesToScroll: 1 } },
            { breakpoint: 999, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ]
    });



    $(window).scroll(function() {
        if ($(this).scrollTop() > 800) {
            $('.scrollTopBtn').addClass('show');
        } else {
            $('.scrollTopBtn').removeClass('show');
        }
    });

    $('.scrollTopBtn').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    // End Scroll Top

    var date_input = $('input[name="date"]'); //our date input has the name "date"
    var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
    date_input.datepicker({
        format: 'yyyy/dd/mm',
        container: container,
        todayHighlight: true,
        autoclose: true,
    });


    $(".custom-file-input").on("change", function() {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });

    $(function() {

        // We can attach the `fileselect` event to all file inputs on the page
        $(document).on('change', ':file', function() {
            var input = $(this),
                numFiles = input.get(0).files ? input.get(0).files.length : 1,
                label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
            input.trigger('fileselect', [numFiles, label]);
        });

        // We can watch for our custom `fileselect` event like this
        $(document).ready(function() {
            $(':file').on('fileselect', function(event, numFiles, label) {

                var input = $(this).parents('.input-group').find(':text'),
                    log = numFiles > 1 ? numFiles + ' files selected' : label;

                if (input.length) {
                    input.val(log);
                } else {
                    if (log) alert(log);
                }

            });
        });

    });



});