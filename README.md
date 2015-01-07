# PagerDuty Developer Documentation

[![Build Status](https://travis-ci.org/PagerDuty/devdocs.png)](https://travis-ci.org/PagerDuty/devdocs)

This is the official repository for [PagerDuty's developer documentation](https://developer.pagerduty.com).

Anyone is welcome to make contributions that they feel would make PagerDuty's documentation better.

## Contributing

We'd love to hear about tools or integrations you've made. Please feel free to add it to the list by opening a pull request or an issue. If you're not sure where to showcase your project, [ask](mailto:developers@pagerduty.com).

## Development

The site is built with Jekyll

### Requirements

You should have Ruby version 2.0.0 installed and have access to install Ruby Gems. You should already have the `bundler` gem installed.

Clone the project and run `bundle install` from within the working directory.

Once the necessary gems are installed, you should be able to run `jekyll serve --watch` in order to compile the documentation and view it. Visit `http://127.0.0.1:4000` to see the site.

### Configuration

Configuration takes place in `_config.yml`. Here is where you would change build settings or make updates to meta data.

All files are located in the `source/` directory. When you compile the site, rendered files will be compiled into `public/` -- do NOT edit files in this directory because your changes will be overwritten.

## Deployment

This project is currently deployed to Heroku. You can deploy your own copy by using this button: 

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/PagerDuty/devdocs)

This project also uses a custom build pack which you will need to configure within Heroku. Provided you have the [Heroku toolbelt](https://toolbelt.heroku.com/) installed, you can use this buildpack by issuing `heroku config:set BUILDPACK_URL=https://github.com/SwiftIRC/heroku-buildpack-ruby-octopress` from within the project's directory.

Each time you make a change and push to the master Heroku branch, the site will be regenerated and your changes will appear.

Some users may find that merges fail because libssl is missing. The current fix for this is to roll back your Heroku stack version from Cedar-14 to Cedar with `heroku stack:set cedar`. When you merge again, it should complete the build.
