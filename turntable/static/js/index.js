// var jquery = require("jquery");
// import 'turntable.css'
// import Styles from 'css-loader!../css/turntable.css';
// import $ from 'jquery/jquery-vendor.js'
// require("../css/turntable.css")
// import turntable from '../css/turntable.css';
import '../css/turntable.css';
require('jqueryplugin/awardRotate.js');
// require('jqueryplugin/jquery-mousewheel.js');
// import 'jqueryplugin/awardRotate.js'
// import 'jqueryplugin/jquery-mousewheel.js';

;

$(function() {
    var rotateTimeOut = function() {
        $('.rotate').rotate({
            angle: 0,
            animateTo: 2160,
            duration: 8000,
            callback: function() {
                alert('网络超时，请检查您的网络设置！');
            }
        });
    };
    var bRotate = false;
    var rotateFn = function(awards, angles, txt) {
        bRotate = !bRotate;
        $('.rotate').stopRotate();
        $('.rotate').rotate({
            angle: 0,
            animateTo: angles + 1800,
            duration: 8000,
            callback: function() {
                alert(txt);
                bRotate = !bRotate;
            }
        })
    };
    $('.pointer').click(function() {
        if (bRotate) return;
        var item = rnd(0, 7);
        switch (item) {
            case 0:
                rotateFn(0, 337, '未中奖');
                break;
            case 1:
                rotateFn(1, 26, '免单4999元');
                break;
            case 2:
                rotateFn(2, 88, '免单50元');
                break;
            case 3:
                rotateFn(3, 137, '免单10元');
                break;
            case 4:
                rotateFn(4, 185, '免单5元');
                break;
            case 5:
                rotateFn(5, 185, '免单5元');
                break;
            case 6:
                rotateFn(6, 235, '免分期服务费');
                break;
            case 7:
                rotateFn(7, 287, '提高白条额度');
                break;
        }
        console.log(item);
    });
});
function rnd(n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n)
}