/**
 * xpush cordova plugin
 * @author gg
 * @date 2015-02-27
 */
var exec = require('cordova/exec');

module.exports = new xgpush();

function xgpush() {
}

xgpush.prototype.registerPush = function (account, callback) {

  exec(function (result) {
    callback(null, result.title, result.content, result.customContent);

  }, function () {
    callback('error');

  }, 'XgPush', 'register_push', [account]);

};

xgpush.prototype.unregisterPush = function () {

  exec(function () {

  }, function () {

  }, 'XgPush', 'unregister_push', []);
}
