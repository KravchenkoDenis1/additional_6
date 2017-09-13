module.exports = function zeros(expression) {
    let mas = expression.split('*');
    let i = 0;
    let result = 1;
    let sum = 0;
    let number = 0;
    let check = 0;
    for (i = 0; i < mas.length; i++) {
        number = +mas[i].substring(0, mas[i].indexOf('!'));
        if (mas[i].indexOf('!!') === -1) {
            for (let j = 1; j <= number; j++){
                result = j;
                while (result%5 === 0){
                    result = result/5;
                    sum++;
                    check = 1;
                }
            }
        } else {
            if (number%2 !== 0) {
                for (let j = 1; j <= number; j++) {
                    result = j;
                    while(result%5 === 0) {
                        result = result/5;
                        sum++;
                    }
                    j++;
                }
            } else {
                for (let j = 1; j <= number; j++) {
                    j++;
                    result = j;
                    while (result%5 === 0) {
                        result = result/5;
                        sum++;
                        check = 1;
                    }
                }
            }
        }
    }
    if (check) {
        return sum;
    } else {
        return 0;
    }
}