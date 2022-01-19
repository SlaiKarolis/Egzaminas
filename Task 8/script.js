/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


function calculator (first, second, op){
    this.first = first;
    this.second = second;
    this.op = op;
    

    this.calculate = () => {
     switch (this.op) {
        case '+':
            return this.first + this.second;
        case '-':
            return this.first - this.second;
        case '*':
            return this.first * this.second;
        case '/':
            return this.first / this.second;
        }
    }
}
    const sum = new calculator (500 , 50, '+')
    console.log(sum.calculate())