# textlintrc-to-package-list [![Actions Status: test](https://github.com/textlint/textlintrc-to-package-list/workflows/test/badge.svg)](https://github.com/textlint/textlintrc-to-package-list/actions?query=workflow%3A"test")

Listing package name from `.textlintrc`

Main use case is installing npm package from `.textlinrc`

## Installation

    npm install textlintrc-to-package-list -g

## Usage

    $ textlintrc-to-package-list ./path/to/.textlintrc

### Exaple

Input `.textlintrc`

```json
{
  "plugins": [
    "@textlint/html"
  ],
  "filters": {
    "comments": true
  },
  "rules": {
    "@textlint/preset-ja-technical-writing": true,
    "textlint-rule-no-todo": true,
    "sentence-length": {
      "max": 100
    }
  }
}
```

Output

```
[
    "@textlint/textlint-plugin-html",
    "textlint-filter-rule-comments",
    "@textlint/textlint-rule-preset-ja-technical-writing",
    "textlint-rule-no-todo",
    "textlint-rule-sentence-length"
]
```

## UseCase

Install npm package from `.textlintrc`

```sh
npm install -g textlintrc-to-package-list
textlintrc-to-package-list .textlintrc | xargs npm install
```

or 

```shell
npx --quiet textlintrc-to-package-list .textlintrc.json | xargs npm install
```

Do Install all package from `.textlintrc`!

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT
