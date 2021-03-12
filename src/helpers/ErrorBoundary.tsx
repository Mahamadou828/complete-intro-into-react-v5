import { Redirect } from '@reach/router';
import React, { ErrorInfo, PureComponent } from 'react';

export default class ErrorBoundary extends PureComponent {
  state = {
    hasError: false,
    redirect: false,
  };

  public static getDerivedStateFromError() {
    return { haseError: true };
  }
  public componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary caught an error', error, info);
  }
  public componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }
  public render() {
    if (this.state.redirect) return <Redirect to="/" />;
    if (this.state.hasError) return <h1>Occurent Error Link</h1>;
    return this.props.children;
  }
}
