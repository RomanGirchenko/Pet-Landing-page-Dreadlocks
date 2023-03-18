$(document).ready(function () {

    let flag = true;

    $('.menu').click(function () {
        if (flag) {
            $('.leftmenu').css(
                {
                    left: "0",
                    transition: "0.5s ease",
                }
            )
        } else {
            $('.leftmenu').css(
                {
                    left: "-999px",
                    transition: "1s ease",
                }
            )
        }

        flag = !flag;

    });
});