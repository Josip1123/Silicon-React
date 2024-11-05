function FeatureCard(props) {
    return (
        <div className="feature-card">
            <div className={`feature-icon ${props.icon}`}></div>
            <div className="feature-content">
                <h3 className="feature-name">Easy Payments</h3>
                <p className="feature-description">
                    Lorem ipsum dolor sit amet, ctetur adipisicing
                    elit.
                </p>
            </div>
        </div>
    )
}

export default FeatureCard