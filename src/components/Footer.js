import React from 'react';
import {Card} from 'react-bootstrap';
import '../components/styles/footer.css';
import {Link} from 'react-router-dom'


function Footer() {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
    return (
        <>
<Card.Footer className="text-muted">
      <Link onClick={() => openInNewTab('https://twitter.com/the1JuanPablo')}
class="fa fa-twitter"></Link>
      <Link onClick={() => openInNewTab('https://www.linkedin.com/in/jpcastrillon/')} class="fa fa-linkedin"></Link>
      <Link onClick={() => openInNewTab('https://www.instagram.com/pedalwithjp/?hl=en')} class="fa fa-instagram"></Link>
</Card.Footer>
<h2 className="footername">JP Castrillon</h2>
      <span class="sup">&reg; All Rights Reserved</span>

        </>
    )
}

export default Footer
