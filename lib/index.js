var oids = {
    "Russian Federation": "1.2.643",
    "Russian Government": "1.2.643.100",

    "OGRN":  "1.2.643.100.1", // RFC4491bis DN, main state registration
    "SNILS": "1.2.643.100.3", // RFC4491bis DN, individual insurance account
    "INNLE": "1.2.643.100.4", // RFC4491bis DN, individual taxpayer legal entity
    "OGRNIP": "1.2.643.100.5", // RFC4491bis DN, main state registration individual enterpreneurs
    "IdKind": "1.2.643.100.114", // RFC4491bis IdentificationKind
    "TIN":  "1.2.643.3.131.1.1", // RFC4491bis DN, tax identification number

    "EP class KS1": "1.2.643.100.113.1", // certificate policy
    "EP class KS2": "1.2.643.100.113.2", // certificate policy
    "EP class KS3": "1.2.643.100.113.3", // certificate policy
    "EP class KV1": "1.2.643.100.113.4", // certificate policy
    "EP class KV2": "1.2.643.100.113.5", // certificate policy

    "owner eSig tool": "1.2.643.100.111", // v3 ext
    "eSig tools and publisher CA": "1.2.643.100.112",  // v3 ext

    "gost3411-12-256": "1.2.643.7.1.1.2.2", // RFC4491bis digest
    "gost3411-12-512": "1.2.643.7.1.1.2.3", // RFC4491bis digest
    "gost3410-12-256": "1.2.643.7.1.1.1.1", // RFC4491bis sign
    "gost3410-12-512": "1.2.643.7.1.1.1.2", // RFC4491bis sign
    "sd-gost3410-12-256": "1.2.643.7.1.1.3.2", // RFC4491bis signwithdigest
    "sd-gost3410-12-512": "1.2.643.7.1.1.3.3", // RFC4491bis signwithdigest
    "gost3410-2001-CryptoPro-XchA-ParamSet": "1.2.643.2.2.36.0", // RFC4357
    "gost3410-2001-CryptoPro-XchB-ParamSet": "1.2.643.2.2.36.1", // RFC4357
};

function addon(jsrsasign) {
    jsrsasign.KJUR.asn1.x509.OID.registerOIDs(oids);
}

exports.addon = addon;
