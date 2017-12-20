var fortunes = [
"Conquer you fears or they will conquer you",
"River need springs",
"Do not fear what you don't know",
"You will have a pleasant suprise"
]

exports.getFortune = function () {
  var idx = Math.floor(Math.random() * fortunes.length)
  return fortunes[idx]
}
