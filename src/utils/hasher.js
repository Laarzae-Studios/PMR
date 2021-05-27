//window.hashJoaat=function(b)
// {for(var a=0,c=b.length;c--;)a+=b.charCodeAt(c),a+=a<<10,a^=a>>6;a+=a<<3;a^=a>>11;return((a+(a<<15)&4294967295)>>>0).toString(16)};

// export const hash = (b) => {
//     for (let a = 0, c = b.length; c--;) a += b.charCodeAt(c), a += a << 10, a ^= a >> 6;
//     a += a << 3;
//     a ^= a >> 11;
//     return ((a + (a << 15) & 4294967295) >>> 0).toString(16);
// };

export const hashCode = function(input) {
    var hash = 0;
    if (input.length === 0) {
        return hash;
    }
    for (var i = 0; i < input.length; i++) {
        var char = input.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}
