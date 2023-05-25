const crypto = require('crypto');

function md5 (text) {
    return crypto.createHash('md5').update(text).digest('hex');
};

text = 'ddsy.product.query.orgcode.product.list.b2cmethodddsy.product.query.orgcode.product.list.b2corderTypeId0orgcode010101,010104otcMark1,2,99pageNo1pageSize100platH5platformH5shopId-1t2022-7-25 14:3:43v1.0versionName3.2.06C57AB91A1308E26B797F4CD382AC79D'
console.log(md5(text))