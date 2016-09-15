var fg = 0;
var stp_temp = "declared";
var bt_row;
var bt_col;
var prv_row = 0;
var prv_col = 0;
var sel_row = 0;
var sel_col = 0;
var newid = "";

var kb1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var kb2 = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '=', '(', ')', '{', '}', '[', ']', '|', "\\", ":", ";", "\"", "\'", ",", "<", ">", ".", "?", "/", ",", ".", "?", "!"];

var stp = "";
var kb1_temp = kb1;
var kb2_temp = kb2;
var temp_val;
var swap_temp;
var i;

for (i = 0; i < 36; ++i) {
    temp_val = Math.floor((Math.random() * (35 - i + 1))) + i;
    swap_temp = kb1_temp[i];
    kb1_temp[i] = kb1[temp_val];
    kb1_temp[temp_val] = swap_temp;
    document.getElementById(i + 1).innerHTML = kb1_temp[i];
}

for (i = 0; i < 36; ++i) {
    temp_val = Math.floor((Math.random() * (35 - i + 1))) + i;
    swap_temp = kb2_temp[i];
    kb2_temp[i] = kb2_temp[temp_val];
    kb2_temp[temp_val] = swap_temp;
    document.getElementById(36 + i + 1).innerHTML = kb2_temp[i];
}

function cr(id) {
    
    "use strict";
    
    fg = 1 - fg;
    console.log("flag value is blah:  " + fg);

    stp_temp = stp;


    if (parseInt(id, 10) % 6 === 0) {
        bt_row = parseInt(parseInt(id, 10) / 6, 10);
        bt_col = 6;
    } else {
        bt_row = parseInt(parseInt(id, 10) / 6, 10) + 1;
        bt_col = parseInt(parseInt(id, 10) % 6, 10);
    }
    //console.log("row: " + bt_row + " col: " + bt_col);

    if (fg === 1) {

        prv_row = bt_row;
        prv_col = bt_col;
        //console.log("row: " + prv_row + " col: " + prv_col);
    } else if (fg === 0) {

        sel_row = prv_row;
        sel_col = bt_col;
        console.log("new row and column are" + sel_row + "  " + sel_col);
        newid = (((sel_row - 1) * 6) + sel_col);
        console.log("value of newid is " + newid);

        if (document.getElementById("chk").checked === true) {
            if (String(document.getElementById(newid).innerHTML).charCodeAt(0) >= 97 && String(document.getElementById(newid).innerHTML).charCodeAt(0) <= 122) {
                var tp = document.getElementById(newid).innerHTML.charCodeAt(0) - 32;
                stp_temp = stp_temp + String.fromCharCode(tp);
                stp = stp_temp;
//                document.getElementById("passwd").value = stp;
                console.log(stp);
            }

        } else {
            stp_temp = stp_temp + String(document.getElementById(newid).innerHTML);
            stp = stp_temp;
//            document.getElementById("passwd").value = stp;
            console.log(stp);
        }
    }

}


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("1").onclick = function(){cr("1")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("2").onclick = function(){cr("2")};
});
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("3").onclick = function(){cr("3")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("4").onclick = function(){cr("4")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("5").onclick = function(){cr("5")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("6").onclick = function(){cr("6")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("7").onclick = function(){cr("7")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("8").onclick = function(){cr("8")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("9").onclick = function(){cr("9")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("10").onclick = function(){cr("10")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("11").onclick = function(){cr("11")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("12").onclick = function(){cr("12")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("13").onclick = function(){cr("13")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("14").onclick = function(){cr("14")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("15").onclick = function(){cr("15")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("16").onclick = function(){cr("16")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("17").onclick = function(){cr("17")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("18").onclick = function(){cr("18")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("19").onclick = function(){cr("19")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("20").onclick = function(){cr("20")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("21").onclick = function(){cr("21")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("22").onclick = function(){cr("22")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("23").onclick = function(){cr("23")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("24").onclick = function(){cr("24")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("25").onclick = function(){cr("25")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("26").onclick = function(){cr("26")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("27").onclick = function(){cr("27")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("28").onclick = function(){cr("28")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("29").onclick = function(){cr("29")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("30").onclick = function(){cr("30")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("31").onclick = function(){cr("31")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("32").onclick = function(){cr("32")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("33").onclick = function(){cr("33")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("34").onclick = function(){cr("34")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("35").onclick = function(){cr("35")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("36").onclick = function(){cr("36")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("37").onclick = function(){cr("37")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("38").onclick = function(){cr("38")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("39").onclick = function(){cr("39")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("40").onclick = function(){cr("40")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("41").onclick = function(){cr("41")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("42").onclick = function(){cr("42")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("43").onclick = function(){cr("43")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("44").onclick = function(){cr("44")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("45").onclick = function(){cr("45")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("46").onclick = function(){cr("46")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("47").onclick = function(){cr("47")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("48").onclick = function(){cr("48")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("49").onclick = function(){cr("49")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("50").onclick = function(){cr("50")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("51").onclick = function() { cr("51")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("52").onclick = function() { cr("52")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("53").onclick = function() { cr("53")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("54").onclick = function() { cr("54")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("55").onclick = function() { cr("55")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("56").onclick = function() { cr("56")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("57").onclick = function() { cr("57")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("58").onclick = function() { cr("58")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("59").onclick = function() { cr("59")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("51").onclick = function() { cr("51")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("60").onclick = function() { cr("60")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("61").onclick = function() { cr("61")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("62").onclick = function() { cr("62")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("63").onclick = function() { cr("63")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("64").onclick = function() { cr("64")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("65").onclick = function() { cr("65")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("66").onclick = function() { cr("66")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("67").onclick = function() { cr("67")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("68").onclick = function() { cr("68")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("69").onclick = function() { cr("69")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("70").onclick = function() { cr("70")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("71").onclick = function() { cr("71")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("72").onclick = function() { cr("72")};
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("73").onclick = function() {bckspace()};
});


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("74").onclick = function() {toggle()};
});



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("75").onclick = function() {clipboard()};
});

var x = 0,
    y = 0;
var bk_temp = "";
var bk_temp2 = "";

function bckspace() {

    x = fg;
    //console.log("backspace code entered !");
    //console.log(x,y);
    if (x == 1) {
        fg = 0;
        console.log("1st keystroke removed. new flag value is " + fg);
    } else if (x == 0) {

        fg = 1;

        bk_temp = stp;
        bk_temp2 = bk_temp.slice(0, (bk_temp.length - 1));
        stp = bk_temp2;
//        document.getElementById('passwd').value = stp;
        console.log(stp);
    }

    console.log("backspace code exited !");
}



function clipboard() {
    "use strict";
    //Get Input Element
    var copyDiv = document.getElementById('passwd');
    copyDiv.value = stp;
    //Give the text element focus
    copyDiv.focus();

    //Select all content
    document.execCommand('SelectAll');

    //Copy Content
    document.execCommand("Copy", false, null);
    copyDiv.value="";
}

//Add Event Listeners to Button Click
document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    document.getElementById("75").onclick = clipboard;
});



function toggle() {

            if (document.getElementById("chk").checked == true) {
                document.getElementById("chk").checked = false;
                console.log("shift key is DOWN !!!!");

            } else if (document.getElementById("chk").checked == false) {
                document.getElementById("chk").checked = true;
                console.log("shift key is UP !");

            }

        }