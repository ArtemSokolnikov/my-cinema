import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import {useNavigate} from "react-router";
import {favourites, home} from "../../utils/constants";
import {cleanAllTickets} from "../../actions/userActions";
import {useDispatch} from "react-redux";

const pages = ["Home", "Favourites"];

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();

    const handleNavMenu = (page: string) => {
        if (page === "Favourites") {
            navigate(favourites);
        } else if (page === "Home") {
            navigate(home);
        }
    };

    const handleCleanViewedMovies = () => {
        localStorage.setItem('tickets', JSON.stringify([]));
        dispatch(cleanAllTickets());
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1, display: {xs: "flex"}}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handleNavMenu(page)}
                                sx={{my: 2, color: "white", display: "block", boxShadow: 0}}
                            >
                                {page}
                            </Button>

                        ))}
                        <Button
                            onClick={() => handleCleanViewedMovies()}
                            sx={{my: 2, color: "white", display: "block", boxShadow: 0, border: '1px solid', borderRadius:'7px'}}
                        >
                           Reset movies
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
