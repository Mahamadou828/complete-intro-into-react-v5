import { Redirect } from '@reach/router';
import React, { PureComponent } from 'react';

export default class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      redirect: false,
    };
  }
  static getDerivedStateFromError() {
    return { haseError: true };
  }
  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error', error, info);
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }
  render() {
    if (this.state.redirect) return <Redirect to="/" />;
    if (this.state.hasError) return <h1>Occurent Error Link</h1>;
    return this.props.children;
  }
}
