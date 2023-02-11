import React from "react";
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

import "@reach/combobox/styles.css";


const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

// const Search = styled('div')(({ theme }) => ({
//     backgroundColor: alpha(theme.palette.common.white, 0.6),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.white, 0.8)
//     },
//     padding:"0 10px",
//     borderRadius: theme.shape.borderRadius,
//     width: "40%",    
//   }));

const Navbar = () => {

    return (
        <AppBar position="relative">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                    Commute Calculator
                </Typography>
                <GpsFixedIcon sx={{ display: { xs: "block", sm: "none" } }} />

                {/* <Combobox onSelect={handleSelect}>
                    <ComboboxInput 
                        value={value}
                        onChange={e =>
                        setValue(e.target.value)}
                        className="combobox-input"
                        disabled= {!ready}
                        placeholder="Origin"
                        ref={originRef}
                        />
                    <ComboboxPopover>
                        <ComboboxList>
                            {status ==="OK" && data.map(({place_id, description}) => (
                                <ComboboxOption key={place_id} value={description} />
                            ))}
                        </ComboboxList>
                    </ComboboxPopover>
                </Combobox> */}
            </StyledToolbar>
        </AppBar>
    )
}



export default Navbar;