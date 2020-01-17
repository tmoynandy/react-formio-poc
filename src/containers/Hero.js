import React, {Component} from 'react';

export default class Hero extends Component {
  render() {
    return (
      <div className="jumbotron text-center" style={{'marginTop': '-40px'}}>
        <h2 className="title">
          Welcome!
          {/* <span className="text-blue">form</span>
          .
          <span className="text-green">io</span>
          &gt; application! */}
        </h2>
        <h3>
          This is an event creation application portal!
        </h3>
        <div className="row">
          <div className="col-sm-12 col-sm-offset-3 text-center">
            <p className="lead">
              You can easily create, update, delete events and view other events and sign up to attend and have fun!
              Let's Get started.
            </p>
            {/* <div>
              <pre><code>{'<Form src="https://examples.form.io/example" />'}</code></pre>
            </div> */}
            {/* <p className="lead">Need Help?</p>
            <ul className="list-inline">
              <li>
                <a className="btn btn-lg btn-success" target="_blank" rel="noopener noreferrer" href="https://github.com/formio/react-formio">Embedding</a>
              </li>
              <li>
                <a className="btn btn-lg btn-success" target="_blank" rel="noopener noreferrer" href="http://help.form.io">Documentation</a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    );
  }
}
