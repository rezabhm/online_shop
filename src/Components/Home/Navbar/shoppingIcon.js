import * as React from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CustomizedBadges(props) {
    return (
        <IconButton aria-label="cart">
            <Badge badgeContent={props.content} color="secondary">
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
    );
}