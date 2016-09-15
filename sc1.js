var kb1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var kb2 = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '=', '(', ')', '{', '}', '[', ']', '|', "\\", ":", ";", "\"", "\'", ",", "<", ">", ".", "?", "/", "", "", "", ""];

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