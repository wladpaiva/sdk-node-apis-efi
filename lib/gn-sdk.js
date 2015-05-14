'use strict';

var GnEndpoints = require('./gn-endpoints');

function GnSdk(options) {
  this.endpoints = new GnEndpoints(options);
}

GnSdk.prototype.createCharge = function (charge) {
  return this.endpoints.run('charge', charge);
}

GnSdk.prototype.detailCharge = function (charge) {
  return this.endpoints.run('detailCharge', charge);
}

GnSdk.prototype.createCustomer = function (customer) {
  return this.endpoints.run('customer', customer);
}

GnSdk.prototype.getNotification = function (notification) {
  return this.endpoints.run('notification', notification);
}

GnSdk.prototype.updateNotification = function (notification) {
  return this.endpoints.run('updateNotification', notification);
}

GnSdk.prototype.detailSubscription = function (subscription) {
  return this.endpoints.run('detailSubscription', subscription);
}

GnSdk.prototype.cancelSubscription = function (subscription) {
  return this.endpoints.run('cancelSubscription', subscription);
}

GnSdk.prototype.createPayment = function (payment) {
  return this.endpoints.run('payment', payment);
}

GnSdk.prototype.getPaymentMethods = function (options) {
  return this.endpoints.run('paymentMethods', options);
}

module.exports = GnSdk;