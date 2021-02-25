let vorur = [
    {
        "Vara": "Vara 1",
        "Verd": 1000
    },
    {
        "Vara": "Vara 2",
        "Verd": 3000
    },
    {
        "Vara": "Vara 3",
        "Verd": 5000
    },
    {
        "Vara": "Vara 4",
        "Verd": 7000
    },
    {
        "Vara": "Vara 5",
        "Verd": 10000
    }
]

var slider = document.getElementById("myRange");
    var output = document.getElementById("verd");
output.innerHTML = slider.value;




    /* sliderValue is the current value of the slider. Adjust as needed */
    slider.oninput = function (sliderValue) {
    var lis = document.getElementsByTagName('li');
    for (var i = 0; i < lis.length; i++) {
    var verd = lis[i].getElementsByClassName('name')[0].innerHTML;
    /* Might need to convert to numbers */
    if (verd <= sliderValue ) {
    lis[i].style.display = 'list-item';
}
    {

    else lis[i].style.display = 'none';
}
}
};
