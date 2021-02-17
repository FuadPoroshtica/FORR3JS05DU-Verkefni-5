let vorur = [
    {
        "Nafn": "Vara 1",
        "Verd": 1000
    },
    {
        "Nafn": "Vara 2",
        "Verd": 3000
    },
    {
        "Nafn": "Vara 3",
        "Verd": 5000
    },
    {
        "Nafn": "Vara 4",
        "Verd": 7000
    },
    {
        "Nafn": "Vara 5",
        "Verd": 10000
    }
]

var slider = document.getElementById("myRange");
var output = document.getElementById("verd");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}
