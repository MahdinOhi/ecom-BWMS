import React from 'react';
import { Button, Typography, Box, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import squiggle from '../../assets/squiggle.png'; // Adjust path if needed

const OuterWrapper = styled(Box)({
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const OuterContainer = styled(Box)({
    width: '1048px',
    height: '665.88px',
    padding: '65.6px 77.31px',
    gap: '35.92px',
    borderRadius: '52.32px',
    border: '3px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    background: 'rgba(255, 255, 255, 0.05)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const CartContainer = styled(Paper)({
    width: '893.38px',
    height: '534.69px',
    padding: '34.59px',
    paddingBottom: '60px',
    gap: '39.05px',
    borderRadius: '10.09px',
    border: '0.72px solid rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
});

const StyledButton = styled(Button)({
    width: '402px',
    height: '54px',
    padding: '0 40px',
    gap: '15px',
    backgroundColor: '#2e7d32',
    color: 'white',
    textTransform: 'none',
    fontSize: '16px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    '&:hover': {
        backgroundColor: '#1b5e20',
    },
});

const EmptyCart = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/shop');
    };

    return (
        <OuterWrapper>
            <OuterContainer>
                <CartContainer>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', width: '824.19px' }}>
                        My <span style={{ color: '#7E57C2' }}>Cart</span>
                    </Typography>

                    <Box mt={4} display="flex" flexDirection="column" alignItems="center">
                        <img src={squiggle} alt="squiggle" width={120} height={120} />
                    </Box>

                    <Typography variant="body2" mt={3} textAlign="center">
                        Looks like your cart’s feeling a little lonely— fill it up with something it’ll love!
                    </Typography>

                    <StyledButton variant="contained" onClick={handleNavigate}>
                        Start Shopping
                    </StyledButton>
                </CartContainer>
            </OuterContainer>
        </OuterWrapper>
    );
};

export default EmptyCart;
