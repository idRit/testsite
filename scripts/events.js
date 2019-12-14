
setInterval(() => {

    // Function to animate Events section
    let testDiv1 = document.getElementById("eventDiv1");
    let testDiv2 = document.getElementById("eventDiv2");
    let testDiv3 = document.getElementById("eventDiv3");
    let testDiv4 = document.getElementById("eventDiv4");
    let testDiv5 = document.getElementById("eventDiv5");

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

    document.getElementById("eventDiv1").className = "blind-content in origin-top";
    document.getElementById("eventDiv2").className = "blind-content in origin-top";
    document.getElementById("eventDiv3").className = "blind-content in origin-top";
    document.getElementById("eventDiv4").className = "blind-content in origin-top";
    document.getElementById("eventDiv5").className = "blind-content in origin-top";


    console.log('here');

    let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0); //view height


    if (document.body.scrollTop > testDiv5.offsetTop - h || document.documentElement.scrollTop > testDiv4.offsetTop - h) {
        document.getElementById("eventDiv5").className = "blind-content in origin-top";
    } else {
        document.getElementById("eventDiv5").className = "";
    }

}, 10);


