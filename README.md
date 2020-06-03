# API Ecoleta


API created with Node JS at "Next Level Week", an online event created by Rockeseat.

[![Author](https://img.shields.io/badge/author-wandersonalwes-D54F44?style=flat-square)](https://github.com/wandersonalwes)
[![Languages](https://img.shields.io/github/languages/count/wandersonalwes/api-ecoleta?color=%23D54F44&style=flat-square)](#)
[![Stars](https://img.shields.io/github/stars/wandersonalwes/api-ecoleta?color=D54F44&style=flat-square)](https://github.com/wandersonalwes/api-ecoleta/stargazers)
[![Forks](https://img.shields.io/github/forks/wandersonalwes/api-ecoleta?color=%23D54F44&style=flat-square)](https://github.com/wandersonalwes/api-ecoleta/network/members)
[![Contributors](https://img.shields.io/github/contributors/wandersonalwes/api-ecoleta?color=D54F44&style=flat-square)](https://github.com/wandersonalwes/api-ecoleta/graphs/contributors)


# :pushpin: Table of Contents

* [Features](#rocket-features)
* [Installation](#construction_worker-installation)
* [Getting Started](#runner-getting-started)
* [Found a bug? Missing a specific feature?](#bug-issues)
* [Contributing](#tada-contributing)
* [License](#closed_book-license)

# :rocket: Features

1. Create a collection point with the types of waste accepted.
2. Filter the collection points by city, state and item type.
3. Listing a specific item by ID.
4. Listing of predefined items in the application.

# :construction_worker: Installation

**You need to install [Node JS](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/) first, then in order to clone the project via HTTPS, run this command:**

`git clone https://github.com/wandersonalwes/api-ecoleta.git`

SSH URLs provide access to a Git repository via SSH, a secure protocol. If you have a SSH key registered in your Github account, clone the project using this command:

`git clone git@github.com:wandersonalwes/api-ecoleta.git`

**Install dependencies**

`yarn install`

Create your enviroment variables based on the examples of `.env.example`

`cp .env.example .env`

After copying the examples, make sure to fill the variables with new values.

# :runner: Getting Started

Execute the follow command to create tables, relationships and procedures:

`yarn knex:migrate`

To start, run the seeds provided in [Seeds](https://github.com/wandersonalwes/api-ecoleta/blob/master/src/database/seeds/create_items.ts) in order to populate the database with an initial data.

`yarn knex:seeds`

Run the following command in order to start the application in a development environment:

`yarn dev`

# :bug: Issues

Feel free to **file a new issue** with a respective title and description on the the [Api Ecoleta](https://github.com/wandersonalwes/api-ecoleta/issues) repository. If you already found a solution to your problem, **i would love to review your pull request**! Have a look at our [contribution guidelines](https://github.com/wandersonalwes/api-ecoleta/blob/master/CONTRIBUTING.md) to find out about the coding standards.

# :tada: Contributing

Check out the [contributing](https://github.com/wandersonalwes/api-ecoleta/blob/master/CONTRIBUTING.md) page to see the best places to file issues, start discussions and begin contributing.

# :closed_book: License

Released in 2020. This project is under the [MIT license](https://github.com/wandersonalwes/api-ecoleta/blob/master/LICENSE).

Made with love by [Wanderson Alves](https://github.com/wandersonalwes) 💜🚀
