# &lt;twitter-button&gt;

Web Component wrapper for [Twitter's button](https://twitter.com/about/resources/buttons#tweet) using Polymer.

## Demo

![Twitter Button](http://zno.io/QtuS/twitter-element.png)

> [Check it live](http://zenorocha.github.io/twitter-button).

## Usage

1. Import Web Components' polyfill:

	```xml
<script src="//cdnjs.cloudflare.com/ajax/libs/polymer/0.0.20130816/polymer.min.js"></script>
	```

2. Import Custom Element:

	```xml
<link rel="import" href="src/twitter-button.html">
	```

3. Start using it!

	```xml
<twitter-button></twitter-button>
	```

## Options

Attribute | Options       | Default                    | Description
---       | ---           | ---                        | ---
`text`    | *string*      | `Custom Elements rocks!`   | The text displayed on the tweet
`type`    | `share`, `follow`, `hashtag`, `mention` | `share`              | The type of button
`href`    | *string*      | `http://customelements.io` | The URL displayed on the tweet
`user`    | *string*      | `zenorocha`                | The user displayed on the tweet and in the @mention
`hashtag` | *string*          | `customelements`           | The hashtag displayed on the tweet
`height`  | *int*         | `25`                       | The height of the button
`width`   | *int*         | `115`                      | The width of the button

> See Twitter's [official documentation](https://twitter.com/about/resources/buttons).

## Browser Support

![IE](https://raw.github.com/paulirish/browser-logos/master/ie/ie_48x48.png) | ![Chrome](https://raw.github.com/paulirish/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/paulirish/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/paulirish/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/paulirish/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
IE 10+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

Check [Release](https://github.com/zenorocha/twitter-button/releases) list.

## License

[MIT License](http://zenorocha.mit-license.org/) © Zeno Rocha
