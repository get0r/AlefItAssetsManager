import React from 'react';

import { Container, Button, lightColors, darkColors } from 'react-floating-action-button'

const FloatingActionButton = ({ onClick }) => {
    return (
        <Container>
            <Button
                tooltip="The big plus button!"
                icon="fas fa-plus"
                styles={ { backgroundColor: darkColors.lighterRed, color: lightColors.white } }
                onClick={onClick}
            />
        </Container>
    );
};

export default FloatingActionButton;
