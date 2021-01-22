# weather-cli

JS CLI to consume [Weather API](https://www.weatherapi.com).

![Demo image](./demo.png "Demo image")

## Setup
1. Copy `.env.example` file into a new one called `.env`.
```sh
# Unix
$ cp .env.example .env
```

2. Get an API key from [Weather API](https://www.weatherapi.com) and write it down in `WEATHER_API_KEY` variable in `.env` file.

3. Run CLI.
```sh
# Directly from file
$ node dist/index.js

# As CLI
# Create symbolic link. This command is just run once.
$ npm link
# After that, you can use CLI as a terminal command.
$ weather-cli
```

## Options
- -c, --city
> Set city to look for weather information. Default: Dallas.
```sh
$ node dist/index.js -c Mexico City
$ weather-cli --city Mexico City
```

- -e, --export
> Export weather information as a CSV file called `weather.csv`. Default: false.
```sh
$ node dist/index.js -e
$ weather-cli --export
```

- -f, --filename
> Name for exported file. Only available when export option is set. Default: weather.csv
```sh
$ node dist/index.js -e -f my_custom_name.csv
$ weather-cli --export --filename my_custom_name.csv
```

- -h, --help
> Show CLI help.
```sh
$ node dist/index.js -h
$ weather-cli --help
```

## Development
```sh
# Watch changes
$ npm run dev

# Test CLI
$ npx ts-node src/index.ts
```

## Production
```sh
# Transpile files
$ npm run build

# Test CLI
$ node dist/index.js
```
