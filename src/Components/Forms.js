import React from 'react';
import ButtonAppBar from './appbarra';
import CenteredGrid from './firstForm';
// import Grid from '@material-ui/core';
// import Container from '@material-ui/core';

export default function Forms() {
    return (
        <div>
            <div>
                <ButtonAppBar />
            </div>
            <div>
                <div>
                    <CenteredGrid />
                </div>
            </div>
        </div>
    );
}