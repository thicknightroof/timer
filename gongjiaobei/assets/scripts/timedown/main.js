define(function (require, exports, module) {
    var $ = require('jquery');//引入jquery
    require('onepage')($);
    require('timer')($);//共享给jquery
    require('jstorage')($);//共享给jquery


    $('.main').onepage_scroll({
        sectionContainer: ".container-fluid",
        easing: "ease-in",
        loop: false
    });



    // Huanjie 1
    $("#time_huanjie1_zheng").custimer({
        time_length: 240,
        begin_btn_id: "beginBtn_huanjie1_zheng",
        stop_btn_id: "stopBtn_huanjie1_zheng",
        reset_btn_id: 'resetBtn_huanjie1_zheng',
    });

    $("#time_huanjie1_fan").custimer({
        time_length: 240,
        begin_btn_id: "beginBtn_huanjie1_fan",
        stop_btn_id: "stopBtn_huanjie1_fan",
        reset_btn_id: 'resetBtn_huanjie1_fan',
    });



    // Huanjie 2
    $("#time_huanjie2_zheng").custimer({
        time_length: 150,
        begin_btn_id: "beginBtn_huanjie2_zheng",
        stop_btn_id: "stopBtn_huanjie2_zheng",
        reset_btn_id: 'resetBtn_huanjie2_zheng',
    });

    $("#time_huanjie2_fan").custimer({
        time_length: 150,
        begin_btn_id: "beginBtn_huanjie2_fan",
        stop_btn_id: "stopBtn_huanjie2_fan",
        reset_btn_id: 'resetBtn_huanjie2_fan',
    });
    


    // Huanjie 3
    $("#time_huanjie3_zheng").custimer({
        time_length: 120,
        begin_btn_id: "beginBtn_huanjie3_zheng",
        stop_btn_id: "stopBtn_huanjie3_zheng",
        reset_btn_id: 'resetBtn_huanjie3_zheng',
    });

    $("#time_huanjie3_fan").custimer({
        time_length: 120,
        begin_btn_id: "beginBtn_huanjie3_fan",
        stop_btn_id: "stopBtn_huanjie3_fan",
        reset_btn_id: 'resetBtn_huanjie3_fan',
    });



    // Huanjie 4
    $("#time_huanjie4_zheng").custimer({
        time_length: 120,
        begin_btn_id: "beginBtn_huanjie4_zheng",
        stop_btn_id: "stopBtn_huanjie4_zheng",
        reset_btn_id: 'resetBtn_huanjie4_shuangfang',
    });

    $("#time_huanjie4_fan").custimer({
        time_length: 120,
        begin_btn_id: "beginBtn_huanjie4_fan",
        stop_btn_id: "stopBtn_huanjie4_fan",
        reset_btn_id: 'resetBtn_huanjie4_shuangfang',
    });

    // Button
    var status_huanjie4 = 2;

    $("#beginBtn_huanjie4_zheng").on('click', function () {
        status_huanjie4 = 1;
    });
    $("#beginBtn_huanjie4_fan").on('click', function () {
        status_huanjie4 = 0;
    });
    $("#switchBtn_huanjie4").on('click', function () {
        if (status_huanjie4 == 1) {
            $("#stopBtn_huanjie4_zheng").click();
            $("#beginBtn_huanjie4_fan").click();
        } else if (status_huanjie4 == 0) {
            $("#stopBtn_huanjie4_fan").click();
            $("#beginBtn_huanjie4_zheng").click();
        } else {
            $("#beginBtn_huanjie4_zheng").click();
        }
    });

    $("#resetBtn_huanjie4_shuangfang").on('click', function () {
        $("#stopBtn_huanjie4_zheng").click();
        $("#stopBtn_huanjie4_fan").click();
        status_huanjie4 = 2;
    });

    $("#stopBtn_huanjie4_shuangfang").on('click', function () {
        $("#stopBtn_huanjie4_zheng").click();
        $("#stopBtn_huanjie4_fan").click();
    });



    // Huanjie 5
    $("#time_huanjie5_zheng").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn_huanjie5_zheng",
        stop_btn_id: "stopBtn_huanjie5_zheng",
        reset_btn_id: 'resetBtn_huanjie5_zheng',
    });

    $("#time_huanjie5_fan").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn_huanjie5_fan",
        stop_btn_id: "stopBtn_huanjie5_fan",
        reset_btn_id: 'resetBtn_huanjie5_fan',
    });



    // Huanjie 6
    $("#time_huanjie6_zheng").custimer({
        time_length: 240,
        begin_btn_id: "beginBtn_huanjie6_zheng",
        stop_btn_id: "stopBtn_huanjie6_zheng",
        reset_btn_id: 'resetBtn_huanjie6_shuangfang',
    });

    $("#time_huanjie6_fan").custimer({
        time_length: 240,
        begin_btn_id: "beginBtn_huanjie6_fan",
        stop_btn_id: "stopBtn_huanjie6_fan",
        reset_btn_id: 'resetBtn_huanjie6_shuangfang',
    });

    // Button
    var status_huanjie6 = 2;

    $("#beginBtn_huanjie6_zheng").on('click', function () {
        status_huanjie6 = 0;
    });
    $("#beginBtn_huanjie6_fan").on('click', function () {
        status_huanjie6 = 1;
    });
    $("#switchBtn_huanjie6").on('click', function () {
        if (status_huanjie6 == 0) {
            $("#stopBtn_huanjie6_zheng").click();
            $("#beginBtn_huanjie6_fan").click();
        } else if (status_huanjie6 == 1) {
            $("#stopBtn_huanjie6_fan").click();
            $("#beginBtn_huanjie6_zheng").click();
        } else {
            $("#beginBtn_huanjie6_zheng").click();
        }
    });

    $("#resetBtn_huanjie6_shuangfang").on('click', function () {
        $("#stopBtn_huanjie6_zheng").click();
        $("#stopBtn_huanjie6_fan").click();
        status_huanjie6 = 2;
    });

    $("#stopBtn_huanjie6_shuangfang").on('click', function () {
        $("#stopBtn_huanjie6_zheng").click();
        $("#stopBtn_huanjie6_fan").click();
    });




    // Huanjie 7
    $("#time_huanjie7_zheng").custimer({
        time_length: 240,
        begin_btn_id: "beginBtn_huanjie7_zheng",
        stop_btn_id: "stopBtn_huanjie7_zheng",
        reset_btn_id: 'resetBtn_huanjie7_zheng',
    });

    $("#time_huanjie7_fan").custimer({
        time_length: 240,
        begin_btn_id: "beginBtn_huanjie7_fan",
        stop_btn_id: "stopBtn_huanjie7_fan",
        reset_btn_id: 'resetBtn_huanjie7_fan',
    });





    // Huanjie 9
    $("#time_huanjie9_zheng").custimer({
        time_length: 300,
        begin_btn_id: "beginBtn_huanjie9_zheng",
        stop_btn_id: "stopBtn_huanjie9_zheng",
        reset_btn_id: 'resetBtn_huanjie9_zheng',
    });

    $("#time_huanjie9_fan").custimer({
        time_length: 300,
        begin_btn_id: "beginBtn_huanjie9_fan",
        stop_btn_id: "stopBtn_huanjie9_fan",
        reset_btn_id: 'resetBtn_huanjie9_fan',
    });




    // Huanjie 10
    $("#time_huanjie10_zheng").custimer({
        time_length: 600,
        begin_btn_id: "beginBtn_huanjie10_zheng",
        stop_btn_id: "stopBtn_huanjie10_zheng",
        reset_btn_id: 'resetBtn_huanjie10_zheng',
    });






    var matrix = [
        [
            {full: 0}, {full: 1, moveDirection: 'yx'}, {full: 0}
        ],
        [
            {full: 1}, {full: 1, first: true}, {full: 1}
        ],
        [
            {full: 0}, {full: 1, moveDirection: 'yx'}, {full: 0}
        ]
    ];
});

