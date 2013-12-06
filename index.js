module.exports = function(str){
    // some input validation.
    if (null === str || undefined === str || '[object String]' !== Object.prototype.toString.call(str)) {
        return null;
    }
    // We allow alphanumeric or a few extra chars.
    var anum = /^[a-z0-9]+$/i;
    var extra = '-_. ';
    var output = '';
    var last;
    // Check for each char if it is valid.
    for (var i = 0; i < str.length; i++) {
        if (anum.test(str[i]) || extra.indexOf(str[i]) > -1) output += str[i];
    }
    // Do not end with a dot.
    if(output.length) last = output[output.length - 1];
    while('.' === last) {
        output = output.substr(0, output.length - 1);
        last = output[output.length -1];
    }
    // Trim whitespace
    return output.replace(/^\s+|\s+$/g, '');
}
