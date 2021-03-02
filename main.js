function paragraph1()
{
var inputs = [];
for(var i = 1 ; i <=6 ; i++)
{
inputs.push(document.getElementById("para1_input_box_" + i).value);
}
document.getElementById("showparagraph1").innerHTML=inputs.join(".");
}

function paragraph2()
{
var inputs = [];
for(var i = 1 ; i <=6 ; i++)
{
inputs.push(document.getElementById("para2_input_box_" + i).value);
}
document.getElementById("showparagraph2").innerHTML=inputs.join(".");
}
