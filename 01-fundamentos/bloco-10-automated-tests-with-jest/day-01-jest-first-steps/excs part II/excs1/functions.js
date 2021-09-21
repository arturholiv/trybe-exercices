function encode (string){
  let phrase = string;
  let encodedA = phrase.replace(/a/g, '1');
  let encodedE = encodedA.replace(/e/g, '2');
  let encodedI = encodedE.replace(/i/g, '3');
  let encodedO = encodedI.replace(/o/g, '4');
  let encoded = encodedO.replace(/u/g, '5');
  
  return encoded;
}
console.log(encode('hi there'))

function decode (codedString) {
  let phrase = codedString;
  let decodedA = phrase.replace(/1/g, 'a');
  let decodedE = decodedA.replace(/2/g, 'e');
  let decodedI = decodedE.replace(/3/g, 'i');
  let decodedO = decodedI.replace(/4/g, 'o');
  let decoded = decodedO.replace(/5/g, 'u');
  return decoded;
}

module.exports = {
  encode,
  decode,
}