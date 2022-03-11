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
none

