import React from 'react'
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFound = () => {
	return (
		<>
			<Helmet>
        		<meta name="robots" content="noindex" />
                <title>Page not found - Urban Sports Hub</title>
            </Helmet>

			<h1>NotFound</h1>
		</>
	)
}

export default NotFound