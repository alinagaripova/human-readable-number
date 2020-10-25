module.exports = function toReadable (number) {
    const ones = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tenner = ['ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number == 0) {
        result = 'zero';
    } else if (number < 10) {
        result = ones[number];
    } else if (number < 20) {
        result = teens[number-10];
    } else if (number < 100) {
        result = tenner[String(number)[0]-1] + ' ' + ones[String(number)[1]];
    } else {
        result = ones[String(number)[0]] + ' hundred ' + ((number%100 == 0) ? '' : toReadable(number%100));
    }



    return result.trim()
}
