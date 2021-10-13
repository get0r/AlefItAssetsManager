import React from 'react';

import { Container, Button, lightColors, darkColors } from 'react-floating-action-button'

const FloatingActionButton = ({ onClick }) => {
    return (
        <Container>
            <Button
                tooltip="Create Item/Category"
                icon="fas fa-plus"
                styles={ { backgroundColor: darkColors.lighterRed, color: lightColors.white } }
                onClick={onClick}
            />
        </Container>
    );
};

export default FloatingActionButton;
