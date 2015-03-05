/**
 * xpush cordova plugin
 * @author gg
 * @date 2015-02-27
 */
var exec = require('cordova/exec');

module.exports = new XGPush();

var idGenerator = 0;

function XGPush() {
}

function getId() {
  return idGenerator++;
}

XGPush.prototype.registerPush = function (account, callback) {

  var id = getId();

  exec(function (result) {
    console.log(arguments);
    callback(null, result.title, result.content, result.customContent);

  }, function () {
    callback('error');

  }, 'XGPush', 'register_push', [account, id]);

};

XGPush.prototype.unregisterPush = function (id) {

  exec(function () {

  }, function () {

  }, 'XGPush', 'unregister_push', [id]);

}
