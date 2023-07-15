import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {buyTickets} from "../../actions/userActions";
import {DetailsBuy, PropsDetails} from "../../types";
import Item from "../item/Item";
import {DetailsContainer} from "./styles/DetailsStyles";

const Details = () => {
    const genres = useSelector((state: PropsDetails) => state.genres);
    const movie = useSelector((state: PropsDetails) => state.movie);
    const image = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
    const [tickets, setTickets] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();

    const handleOpen = () => {
        if (tickets) {
            // @ts-ignore
            dispatch(buyTickets(getItem()));
            setOpen(true);
            setTimeout(() => handleClose(), 2000);
        } else {
            alert("Please, select the number of tickets");
        }
    };
    const date = new Date();
    const dateNow =
        String(date.getDate()).padStart(2, "0") +
        "/" +
        String(date.getMonth() + 1).padStart(2, "0") +
        "/" +
        date.getFullYear();

    const getItem = (): DetailsBuy => ({
        title: movie.title,
        date: dateNow,
    });

    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (event: SelectChangeEvent) => {
        setTickets(event.target.value);
    };

    const getGenres = (): Array<string> => {
        const genre = [];
        if (movie.genre_ids) {
            for (let i = 0; i < genres.length; i++) {
                if (movie.genre_ids!.includes(genres[i].id)) {
                    genre.push(genres[i].name);
                }
            }
        }
        return genre;
    };

    const style = {
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };

    return (
        <DetailsContainer>
            <Container>
                <Row>
                    <Col md={{span: 4, offset: 4}} xs={12} className="item">
                        <Item image={image} movie={movie} genres={getGenres()}/>
                    </Col>
                    <Row>
                        <Col md={{span: 4, offset: 4}} xs={12} className="item">
                            <>
                                <Button
                                    sx={{ml: 1, mt: 2, boxShadow: 0}}
                                    variant="contained"
                                    onClick={handleOpen}
                                >
                                    Buy Tickets
                                </Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <Typography
                                            id="modal-modal-title"
                                            variant="h6"
                                            component="h2"
                                        >
                                            Purchase completed!
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{mt: 2}}>
                                            Thank you for ordering from us
                                        </Typography>
                                    </Box>
                                </Modal>
                            </>
                            <FormControl
                                variant="standard"
                                sx={{ml: 3, mt: 0.5, minWidth: 120}}
                            >
                                <InputLabel id="demo-simple-select-standard-label">
                                    Quantity
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={tickets}
                                    onChange={handleChange}
                                    label="Tickets"
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                    <MenuItem value={7}>7</MenuItem>
                                    <MenuItem value={8}>8</MenuItem>
                                    <MenuItem value={9}>9</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                </Select>
                            </FormControl>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </DetailsContainer>
    );
};

export default Details;
