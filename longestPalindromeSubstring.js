 let longestPalindrome = function(s) {
       let max = -1, res = "", count, i, j;
       for(let index = 0; index < s.length; index++){
            if(s[index - 1] && s[index] === s[index - 1]){
                continue;
           }
           count = 1;
            i = j = index;
           while(s[j + 1] && s[j + 1] === s[index]){
               j++, count++;
           }
          while(s[i] && s[j] && s[i] === s[j]){
            count += 2;
               i--; j++;
          }
          if(count > max){
               max = count;
               res = s.substring(i + 1, j);
           }
       }  return res;
 };

let str = "dfnleelaanad";
console.log(longestPalindrome(str))
// console.log(longestPalindrome("nan noon is redder"));
