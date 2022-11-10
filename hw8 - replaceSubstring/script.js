const userString = prompt('enter your string', 'lorem ipsum, dolor sit amet consectetur adipisicing elit. quia, aliquid!');
const find = prompt('find:', 'dolor sit');
const replace = prompt('replace with:', 'new text');

function replaceSubstring(str,find,replace) {
   return str.substring(0, str.indexOf(find))+replace+str.substring(str.indexOf(find)+find.length)
}
//str.substring() can be replaced with str.slice() ???
console.log(replaceSubstring(userString,find,replace))