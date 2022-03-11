var assert = require('assert');
var rs = require("jsrsasign");
require('../lib/index.js').addon(rs);

var oids = {
    "Russian Federation": "1.2.643",
    "Russian Government?": "1.2.643.100",

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
};

function addon(jsrsasign) {
    jsrsasign.KJUR.asn1.x509.OID.registerOIDs(oids);
}

exports.addon = addon;


describe("Russian OIDs", function() {
    describe("KJUR.asn1.x509.OID", function() {
	var OID = rs.KJUR.asn1.x509.OID;
	var name2oid = OID.name2oid;
	var equal = assert.equal;

        it('existing sha256', function() {
            equal("2.16.840.1.101.3.4.2.1", name2oid("sha256"));
        });

	for (var name in oids) {
	    it("name2oid " + name,
	       function() {equal(oids[name], OID.name2oid(name));});
	}

	for (var name in oids) {
	    it("oid2name " + name,
	       function() {equal(name, OID.oid2name(oids[name]));});
	}
    });
});
