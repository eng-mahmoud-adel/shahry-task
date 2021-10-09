import React, { useState } from 'react';
import BaseNavbar from '../navbar/Navbar';
import  { Button } from 'react-bootstrap';
import BaseModal from '../modal/BaseModal'; 
import '../../sass/layout/_header.scss';

const Header = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <header>
            <BaseNavbar />

            <div className="header">
                <h1>what our users say about shahry ?</h1>
                <Button variant="primary" className="review_button d-block mx-auto" onClick={() => setModalShow(true)}>
                    add a review
                </Button>
                <BaseModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>


        </header>
    )
}

export default Header;
