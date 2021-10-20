/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let word = "",
        right = s.length - 1,
        left = right;
    
	// start from the end of the string
    while(right >= 0) {
        
        while(s[right] === " ") {
            --right;
            --left;
        }
        
        while(left >= 0 && s[left] !== " ") {
            --left;
        }
        
        let i = left + 1;
        while(i <= right) {
            if(i == left + 1 && word !== "") {
                word += " ";    
            }
            word += s[i]
            ++i;
        }
        
        right = left;
    }
    return word;   
}