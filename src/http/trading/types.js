/** Coinex Submit Limit Order Result
 * @typedef {Object} SubmitLimitOrderResult
 * @property {Number} code
 * @property {Object} data
 * @property {Number} data.id
 * @property {Number} data.create_time
 * @property {null}   data.finished_time
 * @property {String} data.amount
 * @property {String} data.price
 * @property {String} data.deal_amount
 * @property {String} data.deal_money
 * @property {String} data.deal_fee
 * @property {String} data.stock_fee
 * @property {String} data.money_fee
 * @property {String} data.asset_fee
 * @property {String} data.fee_asset
 * @property {String} data.fee_discount
 * @property {String} data.avg_price
 * @property {String} data.market
 * @property {String} data.left
 * @property {String} data.maker_fee_rate
 * @property {String} data.taker_fee_rate
 * @property {String} data.order_type
 * @property {String} data.type
 * @property {String} data.status
 * @property {String} data.client_id
 * @property {String} data.source_id
 * @property {String} message
 * @example
 * {
 *     "code": 0,
 *     "data": {
 *         "id": 35435972,
 *         "create_time": 1636019392,
 *         "finished_time": null,
 *         "amount": "0.01000000",
 *         "price": " 56000",
 *         "deal_amount": "0.01",
 *         "deal_money": "560.0000000000000000",
 *         "deal_fee": "0",
 *         "stock_fee": "0",
 *         "money_fee": "0",
 *         " asset_fee": "0.313600000000000000000000",
 *         "fee_asset": "CET",
 *         "fee_discount": "0.70",
 *         "avg_price": "56000",
 *         "market": "BTCUSDT",
 *         "left": "0.00000000 ",
 *         "maker_fee_rate": "0.0016",
 *         "taker_fee_rate": "0.0016",
 *         "order_type": "limit",
 *         "type": "buy",
 *         "status": "done",
 *         "client_id ": "abcd222",
 *         "source_id": "1234"
 *     },
 *     "message": "Success"
 * }
 */
//  module.exports.submitLimitOrder