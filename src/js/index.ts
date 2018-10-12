let inputElement: HTMLInputElement= <HTMLInputElement>document.getElementById("weightInput");

let ouncesButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("ouncesButton");
ouncesButton.addEventListener("click", ounces);

let gramsButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("gramsButton");
gramsButton.addEventListener("click", grams);

let outputElement: HTMLOutputElement = <HTMLOutputElement>document.getElementById("weightOutput");


function ounces() :void
{
    let inputWeight: string =inputElement.value;
    let conversion: number = (parseInt(inputWeight)  * 0.0352739619);
    outputElement.innerHTML = conversion.toString();

}
 
function grams() :void
{
    let inputWeight: string = inputElement.value;
    let conversion: number = (parseInt(inputWeight) * 28.3495231);
    outputElement.innerHTML = conversion.toString();

}




