   
var report = function (kilos, pounds) {
    document.getElementById("result").innerHTML =
        parseFloat(kilos).toFixed(2) + " lbs = " + 
        parseFloat(pounds).toFixed(2) + " kg";
};


document.getElementById("lbs_to_kg").onclick = function () {
    var lbs = document.getElementById("weight").value;
    report(lbs * 2.2046, lbs);
};

document.getElementById("kg_to_lbs").onclick = function () {
    var kg = document.getElementById("weight").value;
    report(kg, kg_to_lbs(kg));
};

function kg_to_lbs (kg_temp) {
    return (kg_temp / 2.2046); //Formula for KG -> LBS Conversion
}

