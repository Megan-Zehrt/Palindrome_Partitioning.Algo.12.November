// 131. Palindrome Partitioning



// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.









/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    
    let results = []

    function helper(index, temp){

            if (index === s.length) {
                results.push([...temp]);
                return;
            }

        for(let i = index; i < s.length; i++){

            let substring = s.slice(index, i + 1);

            let rev = substring.split('').reverse().join('')

            if(rev == substring){
                temp.push(substring)
                helper(i+1, temp);   // Recurse to explore further partitions
                temp.pop(); 
            }
        }

    }

    helper(0, [])

    return results
};