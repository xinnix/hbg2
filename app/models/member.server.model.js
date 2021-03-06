'use strict';
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var MemberSchema = new Schema({
  pre_id: String, // 原来系统中的数据纪录的id
  phone_number: {
    type: String,
    required: true
  },
  baby_name: {
    type: String,
    required: true
  },
  baby_birthday: Date,
  isBoy: Boolean,  // sexual
  card_number: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  active_time: {
    type: Date,
    default: Date.now
  },
  valid_days: Number,
  level: {  	// 会员类型 0,1,2
    type: Number,
    enum: [0, 1, 2]
  },
  parent_name: String,
  address: String,
  email: {
    type: String,
    match: /.+\@.+\..+/
  } ,
  weixin: String,
  other: String,  // 备注
  max_book: {
    type: Number,
    default: 4
  },
  locked: {
    type: Boolean,
    default: false
  },
  head_photo: String // 头像
}, {
  collection: 'member'
});

MemberSchema.statics.findOneByCardNumber = function (card_number, callback) {
    this.findOne({card_number: card_number}, callback);
};

var MemeberModel = mongoose.model('Member', MemberSchema);
