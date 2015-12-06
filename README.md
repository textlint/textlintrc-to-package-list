# textlintrc-to-pacakge-list

listing package name from `.textlintrc`

## Installation

    npm install textlintrc-to-pacakge-list

## Usage

    $ textlintrc-to-pacakge-list ./path/to/.textlintrc

### Exaple

Input `.textlintrc`

```json
{
  "plugins": [
    "jtf-style"
  ],
  "rules": {
    "max-ten": {
      "max": 3
    },
    "no-doubled-joshi": {
      "min_interval": 1
    },
    "sentence-length": {
      "max": 100
    },
    "no-start-duplicated-conjunction": {
      "interval": 2
    },
    "spellcheck-tech-word": true,
    "no-mix-dearu-desumasu": true,
    "prh": {
      "rulePaths": [
        "test/prh.yml"
      ]
    },
    "jtf-style/2.1.2.漢字": false,
    "jtf-style/2.1.5.カタカナ": false,
    "jtf-style/2.1.6.カタカナの長音": false,
    "jtf-style/4.2.2.疑問符(？)": false,
    "jtf-style/4.3.1.丸かっこ（）": false
  }
}
```

Output

```
textlint-plugin-jtf-style
textlint-rule-max-ten
textlint-rule-no-doubled-joshi
textlint-rule-sentence-length
textlint-rule-no-start-duplicated-conjunction
textlint-rule-spellcheck-tech-word
textlint-rule-no-mix-dearu-desumasu
textlint-rule-prh
```

## UseCase

Install npm package from `.textlintrc`

```sh
textlintrc-to-pacakge-list .textlintrc | xargs npm install -S
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