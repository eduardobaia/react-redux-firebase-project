import React from 'react'

export const ProjectDetails = (props) => {
const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card-z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Project title {id}
                    </span>
                    <p>Think twice before you speak, because your words and influence will plant the seed of either success or failure in the mind of another. </p>
                </div>
                <div className="card-action-grey-lighten-4 grey-text">
                    <div>Posted by eduardo bainha</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}
