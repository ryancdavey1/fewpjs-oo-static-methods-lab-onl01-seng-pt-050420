class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  
  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(str) {
    let newString = [];
    let excepts = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let str2 = str.split(' ')
    for(let i = 0; i < str2.length; i++) {
      if(excepts.includes(str2[i]) && i != 0 ) {
        newString.push(str2[i]);
      } else {
        newString.push(this.capitalize(str2[i]));
      }
    }
    return newString.join(' ')
  }
}