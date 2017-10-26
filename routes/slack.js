var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Slack Functions' });
});

router.get('/channels', function(req, res, next) {
  var array = [{name: "testName_001", id: "testId_001"}, {name: "testName_002", id: "testId_002"}];
  res.render('list', { title: 'Slack Channels List', tabTitle: 'Slack Channels List', list: array})
});

router.get('/channels/:channel', function(req, res, next) {
  var list = [
    {
            "type": "message",
            "user": "U7QPM8B9V",
            "text": "qwerty",
            "ts": "1508938020.000625"
        },
        {
            "user": "U7QPM8B9V",
            "text": "<@U7QPM8B9V> has joined the channel",
            "type": "message",
            "subtype": "channel_join",
            "ts": "1508938012.000364"
        },
        {
            "type": "message",
            "user": "U7PJQA5UK",
            "text": ":cat:",
            "ts": "1508938007.000376"
        },
        {
            "type": "message",
            "user": "U7PJQA5UK",
            "text": ":rocket:",
            "ts": "1508938000.000400"
        },
        {
            "type": "message",
            "user": "U7PJQA5UK",
            "text": "and we are commenting on it",
            "ts": "1508937996.000525"
        },
        {
            "type": "message",
            "user": "U7PJQA5UK",
            "text": "let's pretend that this is a live event",
            "ts": "1508937993.000154"
        },
        {
            "user": "U7PNGEML4",
            "text": "<@U7PNGEML4> has joined the channel",
            "type": "message",
            "subtype": "channel_join",
            "ts": "1508937991.000377"
        },
        {
            "type": "message",
            "user": "U7PB1E3HU",
            "text": "random stuff",
            "ts": "1508937990.000501"
        },
        {
            "type": "message",
            "user": "U7PJQA5UK",
            "text": "I'm here",
            "ts": "1508937986.000420"
        },
        {
            "user": "U7PJQA5UK",
            "text": "<@U7PJQA5UK> has joined the channel",
            "type": "message",
            "subtype": "channel_join",
            "ts": "1508937984.000291"
        },
        {
            "user": "U7PB1E3HU",
            "text": "<@U7PB1E3HU> has joined the channel",
            "type": "message",
            "subtype": "channel_join",
            "ts": "1508937984.000128"
        },
        {
            "type": "message",
            "user": "U699DPX5Y",
            "text": "test",
            "ts": "1508639868.000021",
            "reactions": [
                {
                    "name": "leopard",
                    "users": [
                        "U699DPX5Y"
                    ],
                    "count": 1
                },
                {
                    "name": "rocket",
                    "users": [
                        "U699DPX5Y"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "type": "message",
            "user": "U699DPX5Y",
            "text": ":rocket:",
            "ts": "1508639853.000002"
        },
        {
            "type": "message",
            "user": "U699DPX5Y",
            "text": "now going to add some emojis, both in present and past messages",
            "ts": "1508639784.000024"
        },
        {
            "type": "message",
            "user": "U699DPX5Y",
            "text": "<https:\/\/farm5.staticflickr.com\/4389\/36737680901_00a7836682_h.jpg>",
            "attachments": [
                {
                    "fallback": "1600x900px image",
                    "image_url": "https:\/\/farm5.staticflickr.com\/4389\/36737680901_00a7836682_h.jpg",
                    "image_width": 1600,
                    "image_height": 900,
                    "image_bytes": 361516,
                    "from_url": "https:\/\/farm5.staticflickr.com\/4389\/36737680901_00a7836682_h.jpg",
                    "id": 1
                }
            ],
            "ts": "1508639766.000033"
        },
        {
            "type": "message",
            "user": "U699DPX5Y",
            "text": "posting an image now",
            "ts": "1508639672.000019"
        },
        {
            "type": "message",
            "user": "U699DPX5Y",
            "text": "",
            "bot_id": "B78MF7V63",
            "attachments": [
                {
                    "fallback": "giphy: https:\/\/giphy.com\/gifs\/reaction-applause-b9aScKLxdv0Y0",
                    "image_url": "https:\/\/media2.giphy.com\/media\/b9aScKLxdv0Y0\/giphy-downsized.gif",
                    "image_width": 480,
                    "image_height": 360,
                    "image_bytes": 805957,
                    "is_animated": true,
                    "title": "citizen kane clapping",
                    "footer": "Posted using \/giphy",
                    "id": 1,
                    "title_link": "https:\/\/giphy.com\/gifs\/reaction-applause-b9aScKLxdv0Y0"
                }
            ],
            "ts": "1508639664.000019",
            "reactions": [
                {
                    "name": "iphone",
                    "users": [
                        "U699DPX5Y"
                    ],
                    "count": 1
                }
            ]
        },
        {
            "type": "message",
            "user": "U699DPX5Y",
            "text": "should be another",
            "ts": "1508639648.000015"
        },
        {
            "type": "message",
            "user": "U699DPX5Y",
            "text": "another test",
            "ts": "1508639626.000044",
            "reactions": [
                {
                    "name": "lion_face",
                    "users": [
                        "U699DPX5Y"
                    ],
                    "count": 1
                }
            ]
        }
      ]
  var sortedList = list.sort(function(a,b){
        return (parseFloat(a.ts) - parseFloat(b.ts));
      });
  res.render('channel_history', { title: 'Channel History', tabTitle: 'Channel History', channel: req.params.channel, list: sortedList})
});

module.exports = router;
