/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('getting-started/prerequisites.html', this.props.language)}>
              Getting Started
            </a>
            <a href="https://app.swaggerhub.com/apis/centrifuge.io/cent-node/0.0.2"
              target="_blank"
              rel="noreferrer noopener">
              Centrifuge Node Api
            </a>
            <a href={this.docUrl('overview/code-of-conduct.html', this.props.language)}>
              ]Code of conduct
            </a>
          </div>
          <div>
            <h5>Follow us</h5>
            <a
              href="https://medium.com/centrifuge"
              target="_blank"
              rel="noreferrer noopener">
              Medium
            </a>
            <a
              href="https://twitter.com/centrifuge"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://github.com/centrifuge" target="_blank" rel="noreferrer noopener">GitHub</a>
          <!-- Place this tag where you want the button to render. -->
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="https://github.com/centrifuge/go-centrifuge"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>


        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;