const init = function() {
    let form = document.getElementById("rowValue");
    let output = document.getElementById("rowValueNumber");
    form.addEventListener("input", (e) =>{
        output.value = form.value;
        let multi = document.getElementById("svg").viewBox.baseVal.width;
        let x = form.value * (multi / form.max);

        
        let urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has("val")) sliderElement.value = urlParams.get("val");
        let polygonElement = document.getElementById("rowGraph");
        polygonElement.points.clear();

        let point1 = polygonElement.parentElement.createSVGPoint();
        point1.x = 0;
        point1.y = 0;
        polygonElement.points.appendItem(point1);
    
        let point2 = polygonElement.parentElement.createSVGPoint();
        point2.x = 0;
        point2.y = 50;
        polygonElement.points.appendItem(point2);

        let point3 = polygonElement.parentElement.createSVGPoint();
        point3.x = x;
        point3.y = 50;
        polygonElement.points.appendItem(point3);

        let point4 = polygonElement.parentElement.createSVGPoint();
        point4.x = x;
        point4.y = 0;
        polygonElement.points.appendItem(point4);
    });
}
document.addEventListener("DOMContentLoaded", init);

/*while (ElementToBeCleared.firstchild) {
    ElementToBeCleared.firstchild.remove();
} může se hodit mazání elementů uvnitř elementu  */ 