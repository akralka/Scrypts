"use strict";

function cyfry(napis){
    napis = napis.split("");
    let res = 0;
    for(let i = 0; i < napis.length; i++){
       if(+napis[i]){
          res += +napis[i];
       };
    };
    return res;
 };

 function litery(napis){
    let res = 0;
    for (let letter of napis) {    //isNan - Not-a-Number  
        if( isNaN(Number(letter))?? 0 == Number(letter)) { 
            res +=  1   // ?? returns the first argument if  not nullish (null or undefined).
        } else {        //Otherwise it returns the second argument.
            res += 0
        }}
    return res
}


function suma(napis){
    if(typeof(suma.suma) == 'undefined'){
        suma.suma = 0
    }
    var res = ""
    for (let string of napis){
        if(!isNaN(Number(string))){
            res += string
        }else{
            break;
        }}
    suma.suma += Number(res)
    return suma.suma
}

var expect = chai.expect;

describe('All possible combinations of string', function() {
    it('Numbers', function() {
        expect(cyfry("2022")).to.equal(6);
        expect(litery("2022")).to.equal(0);
        expect(suma("2022")).to.equal(2022);
    });
    
    it('Letters', function() {
        expect(cyfry("str")).to.equal(0);
        expect(litery("str")).to.equal(3);
        expect(suma("str")).to.equal(2022);
    });

    it('Letters and numbers', function() {
        expect(cyfry("str2022")).to.equal(6);
        expect(litery("str2022")).to.equal(3);
        expect(suma("str2022")).to.equal(2022);
    });

    it('Numbers and letters', function() {
        expect(cyfry("2022str")).to.equal(6);
        expect(litery("2022str")).to.equal(3);
        expect(suma("2022str")).to.equal(4044);
    });

    it('No letters and no numbers', function() {
        expect(cyfry("")).to.equal(0);
        expect(litery("")).to.equal(0);
        expect(suma("")).to.equal(4044);
    }); 
});

var value = window.prompt()
while(value != null){
    // console.log(suma(value));
    document.write("W stringu  ", value, "  suma cyfr to:  ", cyfry(value),", liczba liter to:  ",litery(value))
    document.write("<br>");
    value = window.prompt()
}