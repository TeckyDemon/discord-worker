# Discord Worker

![GitHub](https://img.shields.io/github/license/DeBos99/discord-worker.svg?color=2020cc&labelColor=5050ff&style=for-the-badge)
![GitHub followers](https://img.shields.io/github/followers/DeBos99.svg?color=2020cc&labelColor=5050ff&style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/DeBos99/discord-worker.svg?color=2020cc&labelColor=5050ff&style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/DeBos99/discord-worker.svg?color=2020cc&labelColor=5050ff&style=for-the-badge)
![GitHub watchers](https://img.shields.io/github/watchers/DeBos99/discord-worker.svg?color=2020cc&labelColor=5050ff&style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/DeBos99/discord-worker.svg?color=2020cc&labelColor=5050ff&style=for-the-badge)

![GitHub commit activity](https://img.shields.io/github/commit-activity/w/DeBos99/discord-worker.svg?color=ffaa00&labelColor=ffaa30&style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/DeBos99/discord-worker.svg?color=ffaa00&labelColor=ffaa30&style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/DeBos99/discord-worker.svg?color=ffaa00&labelColor=ffaa30&style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/DeBos99/discord-worker.svg?color=ffaa00&labelColor=ffaa30&style=for-the-badge)

![GitHub issues](https://img.shields.io/github/issues-raw/DeBos99/discord-worker.svg?color=cc2020&labelColor=ff3030&style=for-the-badge)
![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/DeBos99/discord-worker.svg?color=10aa10&labelColor=30ff30&style=for-the-badge)

[![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NH8JV53DSVDMY)

**Discord Worker** is Discord bot made for farming money using `!work` command on servers.

## Content

- [Content](#content)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Templates](#templates)
  - [config.json](#configjson)
- [Disclaimer](#disclaimer)
- [Authors](#authors)
- [Contact](#contact)
- [License](#license)

## Features

- Support for multiple workers.

## Requirements

- [node-cron](https://www.npmjs.com/package/node-cron)
- [discord.js](https://www.npmjs.com/package/discord.js)

## Installation

`npm install node-cron discord.js`

## Usage

`node . config1.json config2.json ...`

## Templates

### config.json

```json
{
	"clientToken"    : "TOKEN",
	"workServerID"  : "ID",
	"workChannelID" : "ID",
	"workCommand"   : "!work",
	"cron"          : "* * * * *"
}
```

| Key           | Description                        |
| :------------ | :--------------------------------- |
| clientToken   | Your token.                        |
| workServerID  | ID of server where bot will work.  |
| workChannelID | ID of channel where bot will work. |
| workCommand   | Work command on server.            |
| cron          | Cron expression for bot.           |

## Disclaimer

**Discord Worker** was created for educational purposes and I'm not taking responsibility for any of your actions.

## Authors

* **Michał Wróblewski** - Main Developer - [DeBos99](https://github.com/DeBos99)

## Contact

* Discord: DeBos#3292
* Reddit: [DeBos99](https://www.reddit.com/user/DeBos99)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
