/*
    Take string and encode it in utf8 binary data.
    Buffer takes raw binary data.
*/

var buf = new Buffer("Hello", "utf8");

console.log(buf);
// => <Buffer 48 65 6c 6c 6f>

console.log(buf.toString());
// => Hello

console.log(buf.toJSON());
// => { type: 'Buffer', data: [ 72, 101, 108, 108, 111 ] }
