//массив для 1 задания
/*var arr = new Array();
arr[0] = 'dfr';
arr[1] = 'frgrgr';
arr[2] = 'gggfrgrgrgr';*/
//
//строка для 2
//let str = "affffgf";
//
//для 3
//let firstString = "bas";
//let secondString = "abs";
//

/*console.log("Задание 1, самая большая строка из массива строк: "+ arr);
console.log("[Результат] Максимальная строка: " + string(arr));
console.log("Задание 2, Часто встречаемый символ в строке: " + str);
console.log("[Результат], Часто встречаемый символ: " + maxChar(str));
console.log("Задание 4, являются ли строки " + firstString + " и " + secondString + " анаграммами?");
console.log(getAnagram(firstString, secondString));*/




//1
function string()
{
    var arr = new Array();
    arr[0] = document.getElementById("first-string").value;
    arr[1] = document.getElementById("second-string").value;
    arr[2] = document.getElementById("third-string").value;

    var buff = 0;
    buff = arr[0];
    for(i=0; i<arr.length; i++)
    {
        if(arr[i].length > buff.length)
        {
            buff = arr[i];
        }
    }
    document.getElementById("res-1").innerHTML = buff;
    return buff;
};
//2

function maxChar()
{
    let str = document.getElementById("max-char-str").value;
    let charMap = {}
    let maxCharValue = 0
    let maxChar = ''
    
    for (let char of str) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }
    
    for (let char in charMap) {
        if (charMap[char] > maxCharValue) {
            maxCharValue = charMap[char]
            maxChar = char
        }
    }

    document.getElementById("res-2").innerHTML = maxChar;
    return maxChar;
};

//3
function maxChars(str)
{
    let charMap = {}
    let maxCharValue = 0
    let maxChar = ''
    
    for (let char of str) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }
    
    for (let char in charMap) {
        if (charMap[char] > maxCharValue) {
            maxCharValue = charMap[char]
            maxChar = char
        }
    }
    return maxChar;
}
function setChar()
{
    let str = document.getElementById("getString").value;
    let inp = document.getElementById('getChar').value;
    maxchar = maxChars(str); //наиболее встречаемый символ
    maxchar = String(maxchar);
    for(let i=0; i<str.length; i++)
    {
        str = str.replace(maxchar, inp);
    }
    document.getElementById("res-3").innerHTML = str;
}

//4
function getCharObj(str)
{
    const charObj = {}
    for(let char of str.replace(/[^\w]/g).toLowerCase()) {

        charObj[char] = charObj[char] + 1 || 1
    }
    return charObj
};

function getAnagram()
{
    let firstString = document.getElementById("first-string-anagr").value;
    let secondString = document.getElementById("second-string-anagr").value;
    const charFirstString = getCharObj(firstString);
    const charSecondString = getCharObj(secondString);
    if(Object.keys(charFirstString).length !== Object.keys(charSecondString).length) {
        document.getElementById("res-4").innerHTML = false;
        return false
    }
    for(let char in charFirstString) {
        if(charFirstString[char] !== charSecondString[char]) {
            document.getElementById("res-4").innerHTML = false;
          return false
        }
    }
    document.getElementById("res-4").innerHTML = true;
    return true;
};
