import React from 'react';
import './../Style/global.scss';

interface IBannerProps {
    title?: string,
    subtitle?: string;
}

class Banner extends React.Component<IBannerProps> {

    render() {
        return (
            <div className="page-banner">
                {this.props.title &&
                    <div className="banner-title">
                        <h1>{this.props.title}</h1>
                    </div>}
                {this.props.subtitle && 
                <div className="banner-subtitle">
                    <p>{this.props.subtitle}</p>
                </div>}
            </div>
        );
    }
}

export default Banner;

