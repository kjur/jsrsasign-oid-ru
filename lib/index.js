var oids = {
    "Russian Federation": "1.2.643",
    "Russian Government?": "1.2.643.100",

    "OGRN": "1.2.643.100.1", // DN attribute type, primary state registration number
    "TIN":  "1.2.643.3.131.1.1", // DN attrType, tax identification number

    "EP class KS1": "1.2.643.100.113.1", // certificate policy
    "EP class KS2": "1.2.643.100.113.2", // certificate policy
    "EP class KS3": "1.2.643.100.113.3", // certificate policy
    "EP class KV1": "1.2.643.100.113.4", // certificate policy
    "EP class KV2": "1.2.643.100.113.5", // certificate policy

    "owner eSig tool": "1.2.643.100.111", // v3 ext
    "eSig tools and publisher CA": "1.2.643.100.112",  // v3 ext
};

function addon(jsrsasign) {
    jsrsasign.KJUR.asn1.x509.OID.registerOIDs(oids);
}

exports.addon = addon;
