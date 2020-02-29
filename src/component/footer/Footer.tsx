import React from 'react';

import { blue } from '@material-ui/core/colors';
export default function Footer() {

    return (
        <div style={{ textAlign: 'right', background: blue[900], color: 'white', position: 'absolute', bottom: '0', width: '100%' }}>
            <span style={{ margin: '3px' }}>
                <i>Developed by</i> HARSH, SHANTAM, DEEPAK
            </span>
        </div>
    );
}
