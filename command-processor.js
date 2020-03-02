function result(){
    let text = "";

    function append(str){
        text += str;
    }

    function removeStart(n){
        text = text.substring(n);
    }

    function removeEnd(n){
        text = text.substring(0, text.length-n)
    }

    function print() {
        console.log(text)
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}

let secondZeroTest = result();

secondZeroTest.append('123');
secondZeroTest.print()
secondZeroTest.append('45');
secondZeroTest.print()
secondZeroTest.removeStart(2);
secondZeroTest.print()
secondZeroTest.removeEnd(1);
secondZeroTest.print();
