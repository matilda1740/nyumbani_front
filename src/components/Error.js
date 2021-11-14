import { SentimentVeryDissatisfied } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <section className="error_page_section">
            <h3>Oooops...</h3>
            <p>We couldn't find the page you are looking for. <SentimentVeryDissatisfied /></p>
            <Link to="/">
            <button>Go Home</button>

            </Link>
        </section>
    )
}
