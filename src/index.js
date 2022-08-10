const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

    function decode(expr) {
        let arrSplit = expr.split('');
        let arr = [];
        let result = '';

    
        while (arrSplit.length > 0) {
            arr.push(arrSplit.splice(0, 10));
        }

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].includes('*')) {
                result += ' ';
                continue;
            }


        let str = '';
        for (let j = 0; j < arr[i].length; j += 2) {
            if (arr[i][j] === '1' && arr[i][j + 1] === '0') str += '.';
            else if (arr[i][j] === '1' && arr[i][j + 1] === '1') str += '-';
        }
        result += MORSE_TABLE[str];
    
        }

        return result;
    }


    module.exports = {
        decode
    }
