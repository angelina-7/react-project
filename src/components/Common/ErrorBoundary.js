import { Component } from 'react';
import Footer from '../Footer';
import Header from '../Header';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }

    static getDerivedStateFromError(error) {
        return { error };
    }

    componentDidCatch(error) {
        console.log(error);
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                    <div class="alert alert-danger" role="alert">
                        <strong>Error!</strong> Something went wrong. Please refresh the page. {this.state.error}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;