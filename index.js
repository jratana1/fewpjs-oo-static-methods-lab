class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(string) {
    let split = string.split(" ")
    let result= []
    const list = new Set(["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"])
    for (let word of split){
      if (!list.has(word)) {
        result.push(Formatter.capitalize(word))
      } else {
        result.push(word)
      }
    }
    return Formatter.capitalize(result.join(" "))
  }

}