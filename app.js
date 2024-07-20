function add(num1, num2, canprint, phrase) {
    if (printing) {
        var result = num1 + num2;
        console.log(phrase + result);
    }
}
var number1 = 10;
var number2 = 20;
var printing = true;
var phrase = "the result is : ";
add(number1, number2, printing, phrase);
