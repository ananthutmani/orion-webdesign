new WOW().init();
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    const fadeEffect = setInterval(() => {
        if (!loader.style.opacity) {
            loader.style.opacity = 1;
        }
        if (loader.style.opacity > 0) {
            loader.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 50);
    setTimeout(function () {
        loader.style.visibility = "hidden";
    }, 700);
});

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("opener").style.display = "none";
    document.querySelector('html').style.overflowY = "hidden";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    setTimeout(function () {
        document.getElementById("opener").style.display = "block";
    }, 600);
    document.querySelector('html').style.overflowY = "scroll";
}

// Foriegn start
var shell = document.querySelector(".parent");
shell.addEventListener("animationend", function () {
    (function ($) {
        $.fn.countTo = function (options) {
            // merge the default plugin settings with the custom options
            options = $.extend({}, $.fn.countTo.defaults, options || {});

            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(options.speed / options.refreshInterval),
                increment = (options.to - options.from) / loops;

            return $(this).each(function () {
                var _this = this,
                    loopCount = 0,
                    value = options.from,
                    interval = setInterval(updateTimer, options.refreshInterval);

                function updateTimer() {
                    value += increment;
                    loopCount++;
                    $(_this).html(value.toFixed(options.decimals));

                    if (typeof (options.onUpdate) == 'function') {
                        options.onUpdate.call(_this, value);
                    }

                    if (loopCount >= loops) {
                        clearInterval(interval);
                        value = options.to;

                        if (typeof (options.onComplete) == 'function') {
                            options.onComplete.call(_this, value);
                        }
                    }
                }
            });
        };

        $.fn.countTo.defaults = {
            from: 0,  // the number the element should start at
            to: 100,  // the number the element should end at
            speed: 1000,  // how long it should take to count between the target numbers
            refreshInterval: 100,  // how often the element should be updated
            decimals: 0,  // the number of decimal places to show
            onUpdate: null,  // callback method for every time the element is updated,
            onComplete: null,  // callback method for when the element finishes updating
        };
    })(jQuery);

    jQuery(function ($) {
        $('.timer1').countTo({
            from: 0,
            to: 15,
            speed: 1000,
            refreshInterval: 25,
            onComplete: function (value) {
                console.debug(this);
            }
        });
        $('.timer2').countTo({
            from: 0,
            to: 25,
            speed: 1400,
            refreshInterval: 25,
            onComplete: function (value) {
                console.debug(this);
            }
        });
        $('.timer3').countTo({
            from: 0,
            to: 80,
            speed: 1600,
            refreshInterval: 25,
            onComplete: function (value) {
                console.debug(this);
            }
        });
    });
});
// Foriegn end
// gallery start
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// gallery end 

// Accordion start
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
// Accordion end