[jsrsasign](https://github.com/kjur/jsrsasign/) | [npm](https://www.npmjs.com/package/jsrsasign-oid-ru) | [OIDs](https://github.com/kjur/jsrsasign-oid-ru/blob/main/lib/index.js) | [Other AddOn](https://github.com/kjur/jsrsasign/wiki/jsrsasign-Add-On)

# jsrsasign-oid-ru
jsrsasign add-on to add object identifier definitions for Russia.

## How to use add-on
```JavaScript
var jsrsasign = require("jsrsasign");
require("jsrsasign-oid-ru").addon(jsrsasign);
```

## OID definitions
You can see them in [the source code](https://github.com/kjur/jsrsasign-oid-ru/blob/main/lib/index.js).

## Example
```JavaScript
var jsrsasign = require("jsrsasign");
require("jsrsasign-oid-ru").addon(jsrsasign);

...snip...

h = "<<<Russian certificate hexadecimal data>>>";
console.log(JSON.stringify(jsrsasign.ASN1HEX.parse(h), null, " "));
```

## Reference
- [RFC 4357 Additional Cryptographic Algorithms for Use with GOST 28147-89, GOST R 34.10-94, GOST R 34.10-2001, and GOST R 34.11-94 Algorithms](https://datatracker.ietf.org/doc/html/rfc4357)
- [I-D RFC 4491bis Using GOST R 34.10-2012 and GOST R 34.11-2012 algorithms with the Internet X.509 Public Key Infrastructure](https://datatracker.ietf.org/doc/html/draft-deremin-rfc4491-bis-01)



