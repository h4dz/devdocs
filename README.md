# PagerDuty Version 1 Developer Documentation

[![Build Status](https://travis-ci.org/PagerDuty/devdocs.png)](https://travis-ci.org/PagerDuty/devdocs)

## Version

*This is an old version.  Please use Version 2 of the PagerDuty Developer Documentation.*

This is the official repository for version 1 of [PagerDuty's developer documentation](https://v1.developer.pagerduty.com/).

Anyone is welcome to make contributions that they feel would make PagerDuty's documentation better.

## Issue Reporting

If you've found an issue with the documentation, please feel free to open an issue on GitHub. PagerDuty employees may also report issues internally through the DD project on JIRA.

## Contributing

We'd love to hear about tools or integrations you've made. Please feel free to add it to the list by opening a pull request or an issue. If you're not sure where to showcase your project, [ask](mailto:developers@pagerduty.com).

## Development

You should have Ruby version 2.0.0 installed and have access to install Ruby Gems. You should already have the `bundler` gem installed.

Clone the project and run `bundle install` from within the working directory.

Once the necessary gems are installed, you should be able to run `bundle exec jekyll serve --watch` in order to compile the documentation and view it. Visit `http://127.0.0.1:4000` to see the site.

### Configuration

Configuration takes place in `_config.yml`. Here is where you would change build settings or make updates to meta data.

All files are located in the `source/` directory. When you compile the site, rendered files will be compiled into `public/` -- do NOT edit files in this directory because your changes will be overwritten.

### Deployment

This project is currently deployed to Heroku app named pd-developer. Once you merge to master, it will automatically be deployed to pd-devoper-staging. Once you verify your changes, use the pd-developer pipeline to promote to production
