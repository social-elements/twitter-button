# &lt;twitter&gt;

TODO: Write a project description

> Maintained by [Zeno Rocha](https://github.com/zenorocha).

## Usage

1. Import Web Components' polyfill:

	```html
	<script src="lib/polymer.min.js"></script>
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

Attribute | Options  | Default                    | Description
---       | ---      | ---                        | ---
`text`    | *string* | `Custom Elements rocks!`   | The text displayed on the tweet
`href`    | *string* | `http://customelements.io` | The URL displayed on the tweet
`user`    | *string* | `zenorocha`                | The user displayed on the tweet
`height`  | *int*    | `25`                       | The height of the button
`width`   | *int*    | `115`                      | The width of the button

> See Twitter's [official documentation](https://twitter.com/about/resources/buttons).

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

* v0.0.1 August 19, 2013
	* Started project using [boilerplate-element](https://github.com/customelements/boilerplate-element)

## License

[MIT License](http://opensource.org/licenses/MIT)