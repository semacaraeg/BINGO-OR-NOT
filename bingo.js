function bingo(a) {
    // your winning code here
    //input an array array of numbers, size of 10
    //output string "LOSE or WIN"
    //each number in the array represents the corresponding letter in the alphabet
    // 2=b, 7=g, 9=i, 14=n, 15=o
    //loop through the array and check if they match these numbers
    //hashmap int - char
    var pairs = {};
    pairs[2] = 'B';
    pairs[9] = 'I';
    pairs[14] = 'N';
    pairs[7] = 'G';
    pairs[15] = 'O';
    
    //save the matched values
    var matched = {};
    let counter = 0;
    
    for(let i=0; i<a.length; i++){
     
     if ((a[i] in pairs) && (!(a[i] === matched[a[i]]))) {
      //how to check if all 5 are there
      matched[a[i]] = a[i];
      counter++;
      }
    }
    console.log(matched);
    //check if the number elements in the matched object is 5
    if(counter === 5) return "WIN";
    else return "LOSE";
  }