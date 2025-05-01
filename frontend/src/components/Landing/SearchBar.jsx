import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
    return (
        <TextField
            fullWidth
            placeholder="search your dreams........"
            variant="outlined"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon sx={{ color: 'white' }} />
                    </InputAdornment>
                ),
            }}
            sx={{
                '& .MuiOutlinedInput-root': {
                    color: 'white',
                    backgroundColor: 'transparent',
                    borderRadius: '8px',
                    '& fieldset': {
                        borderColor: 'white',
                    },
                    '&:hover fieldset': {
                        borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'white',
                    },
                },
                '& .MuiInputLabel-root': {
                    color: 'white',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: 'white',
                },
            }}
        />
    );
}
