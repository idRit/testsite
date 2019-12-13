setInterval(() => {

    // Function to animate Events section
    let testDiv1 = document.getElementById("eventDiv1");
    let testDiv2 = document.getElementById("eventDiv2");
    let testDiv3 = document.getElementById("eventDiv3");
    let testDiv4 = document.getElementById("eventDiv4");
    let testDiv5 = document.getElementById("eventDiv5");


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

    if (document.body.scrollTop > testDiv5.offsetTop - h || document.documentElement.scrollTop > testDiv4.offsetTop - h) {
        document.getElementById("eventDiv5").className = "blind-content in origin-top";
    } else {
        document.getElementById("eventDiv5").className = "";
    }

}, 10);


