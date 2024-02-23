// CSS JS functions
$(document).ready(function(){
    btnStart();
    btnPause();
    btnReset();
});

function btnStart(){
    $(".btnStart").addClass("btn btn-success btn-lg");
}

function btnPause(){
    $(".btnPause").addClass("btn btn-danger btn-lg");
}

function btnReset(){
    $(".btnReset").addClass("btn btn-warning btn-lg");
}

// Time function
function time_end_audio() {
  const audio = new Audio("assets/audio/audio_timeend.mp3");
  audio.play();
}

function time_30sec_audio() {
  const audio = new Audio("assets/audio/audio_30sec.mp3");
  audio.play();
}

function timeend_trigger(timeID, setInterval_var){
    var timeID_val = $(timeID).text();
    var time_end = "00:00";

    if (timeID_val == time_end) {
        time_end_audio();
        // Clear interval so that function will not be constantly checking for time d 
        // Which means after time end audio trigger, webpage will need to be refreshed to restart time check function
        $(timeID).text("--:--");
    }
}

function time30sec_trigger(timeID, setInterval_var){
    var timeID_val = $(timeID).text();
    var time_30sec = "00:30";
    if (timeID_val == time_30sec) {
        time_30sec_audio();
    }
}



// Huanjie 1
var huanjie1_zheng_timeend = setInterval(function(){
    timeend_trigger("#time_huanjie1_zheng", huanjie1_zheng_timeend);
}, 1000);
var huanjie1_zheng_time30sec = setInterval(function(){
    time30sec_trigger("#time_huanjie1_zheng", huanjie1_zheng_time30sec);
}, 1000);

var huanjie1_fan_timeend = setInterval(function(){
    timeend_trigger("#time_huanjie1_fan", huanjie1_fan_timeend);
}, 1000);
var huanjie1_fan_time30sec = setInterval(function(){
    time30sec_trigger("#time_huanjie1_fan", huanjie1_fan_time30sec);
}, 1000);



// Huanjie 2
var huanjie2_zheng_timeend = setInterval(function(){
    timeend_trigger("#time_huanjie2_zheng", huanjie2_zheng_timeend);
}, 1000);
var huanjie2_zheng_time30sec = setInterval(function(){
    time30sec_trigger("#time_huanjie2_zheng", huanjie2_zheng_time30sec);
}, 1000);

var huanjie2_fan_timeend = setInterval(function(){
    timeend_trigger("#time_huanjie2_fan", huanjie2_fan_timeend);
}, 1000);
var huanjie2_fan_time30sec = setInterval(function(){
    time30sec_trigger("#time_huanjie2_fan", huanjie2_fan_time30sec);
}, 1000);



// Huanjie 3
var huanjie3_zheng_timeend = setInterval(function(){
    timeend_trigger("#time_huanjie3_zheng", huanjie3_zheng_timeend);
}, 1000);
var huanjie3_zheng_time30sec = setInterval(function(){
    time30sec_trigger("#time_huanjie3_zheng", huanjie3_zheng_time30sec);
}, 1000);

var huanjie3_fan_timeend = setInterval(function(){
    timeend_trigger("#time_huanjie3_fan", huanjie3_fan_timeend);
}, 1000);
var huanjie3_fan_time30sec = setInterval(function(){
    time30sec_trigger("#time_huanjie3_fan", huanjie3_fan_time30sec);
}, 1000);



// Huanjie 4
var huanjie4_zheng_timeend = setInterval(function(){
    timeend_trigger("#time_huanjie4_zheng", huanjie4_zheng_timeend);
}, 1000);
var huanjie4_zheng_time30sec = setInterval(function(){
    time30sec_trigger("#time_huanjie4_zheng", huanjie4_zheng_time30sec);
}, 1000);

var huanjie4_fan_timeend = setInterval(function(){
    timeend_trigger("#time_huanjie4_fan", huanjie4_fan_timeend);
}, 1000);
var huanjie4_fan_time30sec = setInterval(function(){
    time30sec_trigger("#time_huanjie4_fan", huanjie4_fan_time30sec);
}, 1000);



// Huanjie 5
var huanjie5_zheng_timeend = setInterval(function(){
    timeend_trigger("#time_huanjie5_zheng", huanjie5_zheng_timeend);
}, 1000);
var huanjie5_zheng_time30sec = setInterval(function(){
    time30sec_trigger("#time_huanjie5_zheng", huanjie5_zheng_time30sec);
}, 1000);

var huanjie5_fan_timeend = setInterval(function(){
    timeend_trigger("#time_huanjie5_fan", huanjie5_fan_timeend);
}, 1000);
var huanjie5_fan_time30sec = setInterval(function(){
    time30sec_trigger("#time_huanjie5_fan", huanjie5_fan_time30sec);
}, 1000);



// Huanjie 6
var huanjie6_zheng_timeend = setInterval(function(){
    timeend_trigger("#time_huanjie6_zheng", huanjie6_zheng_timeend);
}, 1000);
var huanjie6_zheng_time30sec = setInterval(function(){
    time30sec_trigger("#time_huanjie6_zheng", huanjie6_zheng_time30sec);
}, 1000);

var huanjie6_fan_timeend = setInterval(function(){
    timeend_trigger("#time_huanjie6_fan", huanjie6_fan_timeend);
}, 1000);
var huanjie6_fan_time30sec = setInterval(function(){
    time30sec_trigger("#time_huanjie6_fan", huanjie6_fan_time30sec);
}, 1000);



// Huanjie 7
var huanjie7_zheng_timeend = setInterval(function(){
    timeend_trigger("#time_huanjie7_zheng", huanjie7_zheng_timeend);
}, 1000);
var huanjie7_zheng_time30sec = setInterval(function(){
    time30sec_trigger("#time_huanjie7_zheng", huanjie7_zheng_time30sec);
}, 1000);

var huanjie7_fan_timeend = setInterval(function(){
    timeend_trigger("#time_huanjie7_fan", huanjie7_fan_timeend);
}, 1000);
var huanjie7_fan_time30sec = setInterval(function(){
    time30sec_trigger("#time_huanjie7_fan", huanjie7_fan_time30sec);
}, 1000);




// Huanjie 9
var huanjie9_zheng_timeend = setInterval(function(){
    timeend_trigger("#time_huanjie9_zheng", huanjie9_zheng_timeend);
}, 1000);
var huanjie9_zheng_time30sec = setInterval(function(){
    time30sec_trigger("#time_huanjie9_zheng", huanjie9_zheng_time30sec);
}, 1000);

var huanjie9_fan_timeend = setInterval(function(){
    timeend_trigger("#time_huanjie9_fan", huanjie9_fan_timeend);
}, 1000);
var huanjie9_fan_time30sec = setInterval(function(){
    time30sec_trigger("#time_huanjie9_fan", huanjie9_fan_time30sec);
}, 1000);



// Huanjie 10
var huanjie10_zheng_timeend = setInterval(function(){
    timeend_trigger("#time_huanjie10_zheng", huanjie10_zheng_timeend);
}, 1000);
var huanjie10_zheng_time30sec = setInterval(function(){
    time30sec_trigger("#time_huanjie10_zheng", huanjie10_zheng_time30sec);
}, 1000);




// Huanjie 11
var huanjie11_zheng_timeend = setInterval(function(){
    timeend_trigger("#time_huanjie11_zheng", huanjie11_zheng_timeend);
}, 1000);
var huanjie11_zheng_time30sec = setInterval(function(){
    time30sec_trigger("#time_huanjie11_zheng", huanjie11_zheng_time30sec);
}, 1000);

var huanjie11_fan_timeend = setInterval(function(){
    timeend_trigger("#time_huanjie11_fan", huanjie11_fan_timeend);
}, 1000);
var huanjie11_fan_time30sec = setInterval(function(){
    time30sec_trigger("#time_huanjie11_fan", huanjie11_fan_time30sec);
}, 1000);