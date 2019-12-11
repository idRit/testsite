// window.onscroll = function () { animateEvents() };
// document.addEventListener("scroll", animateEvents);

var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

setInterval(() => {
    let section = document.querySelector('#events');
    if (isInViewport(section)) {
        animateEvents();
    }
}, 100);

function animateEvents() {

    let testDiv1 = document.getElementById("eventDiv1");
    let testDiv2 = document.getElementById("eventDiv2");
    let testDiv3 = document.getElementById("eventDiv3");
    let testDiv4 = document.getElementById("eventDiv4");
    let testDiv5 = document.getElementById("eventDiv5");

    console.log('here');


    let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0); //view height

    if (document.body.scrollTop > testDiv1.offsetTop - h || document.documentElement.scrollTop > testDiv1.offsetTop - h) {
        document.getElementById("eventDiv1").className = "blind-content in origin-top";
    } else {
        document.getElementById("eventDiv1").className = "";
    }

    if (document.body.scrollTop > testDiv2.offsetTop - h || document.documentElement.scrollTop > testDiv2.offsetTop - h) {
        document.getElementById("eventDiv2").className = "blind-content in origin-top";
    } else {
        document.getElementById("eventDiv2").className = "";
    }


    if (document.body.scrollTop > testDiv3.offsetTop - h || document.documentElement.scrollTop > testDiv3.offsetTop - h) {
        document.getElementById("eventDiv3").className = "blind-content in origin-top";
    } else {
        document.getElementById("eventDiv3").className = "";
    }

    if (document.body.scrollTop > testDiv4.offsetTop - h || document.documentElement.scrollTop > testDiv4.offsetTop - h) {
        document.getElementById("eventDiv4").className = "blind-content in origin-top";
    } else {
        document.getElementById("eventDiv4").className = "";
    }

    if (document.body.scrollTop > testDiv4.offsetTop - h || document.documentElement.scrollTop > testDiv4.offsetTop - h) {
        document.getElementById("eventDiv5").className = "blind-content in origin-top";
    } else {
        document.getElementById("eventDiv5").className = "";
    }

}