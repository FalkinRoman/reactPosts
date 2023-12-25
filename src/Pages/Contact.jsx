import React from 'react';
import FormContact from '../components/FormContact';

const Contact = () => {
    return (
        <div>
            <h1 style={{ marginTop: 25 }}>Контакты</h1>
            <div className='flex contact '>
                <h3>Moscow, Oruzheiny Lane, 41​. Tverskoy,  127006</h3>
                <div className='flex_column contact_tel' >
                    <div className='flex_column'>
                        <h3>8(999)777-77-77</h3>
                        <h3>8(999)777-88-88</h3>
                    </div>
                    <h3><span>oruzheinypost@gmail.com</span></h3>
                </div>
                <img src="img/Location1.svg" />
            </div>
            <div style={{marginTop: 50}}>
               <FormContact />
            </div>
        </div>
    );
};

export default Contact;