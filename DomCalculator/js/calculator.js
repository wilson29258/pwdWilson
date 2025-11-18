var answer;
function init()
{
    answer = document.getElementById("ans").firstChild;
    comp("uin");
}

function comp(id)
{
    var el = document.getElementById(id);
    var res = eval(el.value);
    document.getElementById("ans").textContent = res;
}

// var answer;
// function init()
// {
//     answer = document.getElementById("ans");
//     comp("uin");
// }

// function comp(id)
// {
//     var el = document.getElementById(id);
//     var res = eval(el.value);
//     answer.textContent = res;
// }
