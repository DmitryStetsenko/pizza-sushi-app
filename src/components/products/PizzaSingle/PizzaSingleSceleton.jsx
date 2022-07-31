import React from "react"
import ContentLoader from "react-content-loader"

const PizzaSingleSceleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={485}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="132" cy="120" r="120" />
        <rect x="-3" y="308" rx="10" ry="10" width="280" height="86" />
        <rect x="-1" y="261" rx="10" ry="10" width="280" height="26" />
        <rect x="115" y="416" rx="24" ry="24" width="162" height="48" />
        <rect x="1" y="425" rx="10" ry="10" width="97" height="32" />
    </ContentLoader>
)

export default PizzaSingleSceleton;