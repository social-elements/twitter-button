# &lt;twitter&gt;

Web Component wrapper for [Twitter's share button](https://twitter.com/about/resources/buttons#tweet) using Polymer.

> Maintained by [Zeno Rocha](https://github.com/zenorocha).

## Demo

![Twitter Button](http://zno.io/QtuS/twitter-element.png)

> [Check it live](http://zenorocha.github.io/twitter-element).

## Usage

1. Import Web Components' polyfill:

  ```html
  <script src="//cdnjs.cloudflare.com/ajax/libs/polymer/0.0.20130816/polymer.min.js"></script>
  ```

2. Import Custom Element:

  ```html
  <link rel="import" href="src/twitter.html">
  ```

3. Start using it!

  ```xml
  <twitter></twitter>
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

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Roadmap

* ~~Add support for [Hashtag button](https://twitter.com/about/resources/buttons#hashtag)~~
* ~~Add support for [Mention button](https://twitter.com/about/resources/buttons#mention)~~

## History

* [v0.1.3](https://github.com/zenorocha/badge-element/releases/tag/0.1.3) September 3, 2013
  * Added support for [Hashtag button](https://twitter.com/about/resources/buttons#hashtag) and [Mention button](https://twitter.com/about/resources/buttons#mention)
* [v0.1.2](https://github.com/zenorocha/badge-element/releases/tag/0.1.2) September 3, 2013
  * Use Polymer from CDN and update it to v0.0.20130816
* [v0.1.1](https://github.com/zenorocha/twitter-element/releases/tag/0.1.1) August 20, 2013
  * Added support for [Follow button](https://twitter.com/about/resources/buttons#follow)
* [v0.1.0](https://github.com/zenorocha/twitter-element/releases/tag/0.1.0) August 20, 2013
  * Initial development release
* v0.0.1 August 19, 2013
  * Started project using [boilerplate-element](https://github.com/customelements/boilerplate-element)

## License

[MIT License](http://opensource.org/licenses/MIT)