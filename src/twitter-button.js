"use strict";

Polymer('twitter-button', {
    text   : 'Web Components rocks!',
    href   : 'http://webcomponents.org',
    user   : 'Web_Components',
    hashtag: 'webcomponents',
    height : '25',
    width  : '115',
    type   : 'share',
    ready  : function() {
        if (this.type == 'follow') {
            var src = 'https://platform.twitter.com/widgets/follow_button.html?screen_name=' + this.user;
        } else {
            var src = 'https://platform.twitter.com/widgets/tweet_button.html?text=' + this.text;
            switch (this.type) {
                case 'share':
                    if (this.href != undefined) src += '&url=' + this.href;
                    src += '&via=' + this.user;
                    break;
                case 'hashtag':
                    src += '&button_hashtag=' + this.hashtag + '&type=hashtag';
                    break;
                case 'mention':
                    src += '&screen_name=' + this.user + '&type=mention';
                    break;
            }
        }
        this.src = src;
    }
});
