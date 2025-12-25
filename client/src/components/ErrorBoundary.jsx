import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div
                    className="flex items-center justify-center p-8 bg-[#112240] rounded-lg"
                    role="alert"
                    aria-live="assertive"
                >
                    <div className="text-center">
                        <i className="fas fa-exclamation-triangle text-4xl text-yellow-500 mb-4"></i>
                        <h3 className="text-xl font-semibold text-white mb-2">
                            {this.props.fallbackTitle || 'Something went wrong'}
                        </h3>
                        <p className="text-gray-400">
                            {this.props.fallbackMessage || 'Unable to load this component. Please refresh the page.'}
                        </p>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
    fallbackTitle: PropTypes.string,
    fallbackMessage: PropTypes.string,
};

export default ErrorBoundary;
