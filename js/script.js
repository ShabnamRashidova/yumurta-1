$(document).ready(function () {
    $('.banner-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            }

        }
    })

    $('.blog-carousel').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,

        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    })

    $('.partners-carousel').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,

        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 5,
            }
        }
    })

    AOS.init();
    $(window).on("scroll", () => {
        if ($(this).scrollTop() >= 120) {
            $(".general-header").addClass("header-fixed")
            $(".general-header-1 .header-logo img").attr("src", "./images/logo2/Group 8.png")

            $(".scroll-btn").addClass("show")
            $(".scroll-btn").on("click", () => {
                $(window).scrollTop(0)
            })

        } else {
            $(".general-header").removeClass("header-fixed")
            $(".general-header-1 .header-logo img").attr("src", "./images/Group 8.png")
            $(".scroll-btn").removeClass("show")
        }
    })

    $(".nav-menu-btn").on('click', () => {
        $(".header-mobile-menu").addClass("show");
    })
    $(".close-menu").on('click', () => {
        $(".header-mobile-menu").removeClass("show");
    })
$(".nav-menu-search").on('click',()=>{
    $(".search-wrapper").toggleClass("active")
    $(".nav-menu-search i").toggleClass("fa-times")
})


    $(".gallery a").attr("data-fancybox", "mygallery");
    $(".gallery a").each(function () {
        $(this).attr("data-caption", $(this).find("img").attr("alt"));
        $(this).attr("title", $(this).find("img").attr("alt"));
    });

    $(".gallery a").fancybox();
});


let sidebar_menu = document.querySelector(".sidebar-menu");
let activeClass = document.querySelector(".active-class");
let category = document.querySelectorAll(".category");
sidebar_menu.addEventListener("click", (selectedElement) => {

    if (selectedElement.target.classList.contains("item")) {
        let active = sidebar_menu.querySelector(".active");
        active.classList.remove("active");
        selectedElement.target.classList.add("active");
        if (activeClass) activeClass.innerHTML = selectedElement.target.innerHTML
        let filterItems = selectedElement.target.getAttribute("data-name");
        category.forEach((category_item) => {
            let category_filter = category_item.getAttribute("data-name");
            if (category_filter == filterItems) {
                category_item.classList.add("show");
                category_item.classList.remove("hide");
            } else {
                category_item.classList.remove("show");
                category_item.classList.add("hide");
            }
        })
    }

})







