var asciichart = require ('asciichart')
var s0 = new Array (120)
for (var i = 0; i < s0.length; i++)
    s0[i] = 5 * Math.cos (i )
console.log (asciichart.plot (s0))
