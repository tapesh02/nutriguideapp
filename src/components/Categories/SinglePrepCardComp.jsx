import React from "react";

import { Box, Button, Container, Paper, Card, CardActionArea, CardMedia, Typography, ListItem, ListItemText, List } from "@material-ui/core";
import ReactPlayer from "react-player/lazy";

const SinglePrepCardComp = ({ prepdetail }) => {
    const {
        strMeal,
        strCategory,
        strMealThumb,
        strArea,
        strInstructions,
        strTags,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,
        strIngredient9,
        strIngredient10,
        strIngredient11,
        strIngredient12,
        strIngredient13,
        strIngredient14,
        strIngredient15,
        strIngredient16,
        strIngredient17,
        strIngredient18,
        strIngredient19,
        strIngredient20,
        strMeasure1,
        strMeasure2,
        strMeasure3,
        strMeasure4,
        strMeasure5,
        strMeasure6,
        strMeasure7,
        strMeasure8,
        strMeasure9,
        strMeasure10,
        strMeasure11,
        strMeasure12,
        strMeasure13,
        strMeasure14,
        strMeasure15,
        strMeasure16,
        strMeasure17,
        strMeasure18,
        strMeasure19,
        strMeasure20,
        strYoutube,
    } = prepdetail;

    return (
        <>
            <Box className="main-prep">
                <Paper className="main-prep-1">
                    <Box className="main-prep-thumbnail">
                        <CardMedia component="img" className="prepCardImage" image={strMealThumb} alt="strMealThumb" title={strMeal} />
                    </Box>
                    <Box className="main-prep-details">
                        <Box className="main-prepHeaders">
                            <Box className="prepHeaders">
                                <Typography variant="h6">
                                    Meal : <span>{strMeal}</span>
                                </Typography>
                            </Box>
                            <Box className="prepHeaders">
                                <Typography variant="h6">
                                    Category : <span></span>
                                    {strCategory}
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="main-prepInstructions">
                            <Typography variant="h6">Instructions</Typography>
                            <Typography variant="body1">{strInstructions}</Typography>
                        </Box>
                    </Box>
                </Paper>
                <Paper className="main-prep-2">
                    <Box className="main-ingredientsList">
                        <Typography variant="h6" className="ingredientsListHeader">
                            Ingredients & Measurements
                        </Typography>
                        <List className="ingredientsList">
                            <ListItem>
                                <ListItemText primary={`${strIngredient1}   ${strMeasure1} `} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={`${strIngredient2}  ${strMeasure2} `} />
                            </ListItem>

                            <ListItem>
                                <ListItemText primary={`${strIngredient3}  ${strMeasure3} `} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={`${strIngredient4}  ${strMeasure4} `} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={`${strIngredient5}  ${strMeasure5} `} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={`${strIngredient6}  ${strMeasure6} `} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={`${strIngredient7}  ${strMeasure7} `} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={`${strIngredient8}  ${strMeasure8} `} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={`${strIngredient9}  ${strMeasure9} `} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={`${strIngredient10} ${strMeasure10}`} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={`${strIngredient11}  ${strMeasure11}`} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={`${strIngredient12} ${strMeasure12}`} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={`${strIngredient13} ${strMeasure13}`} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={`${strIngredient14}  ${strMeasure14}`} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={`${strIngredient15} ${strMeasure15}`} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={`${strIngredient16}  ${strMeasure16}`} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={`${strIngredient17} ${strMeasure17}`} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={`${strIngredient18} ${strMeasure18}`} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={`${strIngredient19}  ${strMeasure19}`} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={`${strIngredient20} ${strMeasure20}`} />
                            </ListItem>
                        </List>
                    </Box>
                </Paper>
                <Typography
                    variant="h6"
                    style={{
                        marginTop: "2rem",
                        marginBottom: "2rem",
                        textAlign: "left",
                        textTransform: "uppercase",
                        border: "1px solid #05e5af",
                        backgroundColor: "#dbf3ed",
                        borderRadius: "5px",
                        width: "-moz-fit-content",
                        width: "fit-content",
                        padding: "1rem",
                    }}>
                    Watch Video
                </Typography>
                <Paper>
                    <ReactPlayer url={strYoutube} style={{ padding: "1rem", marginTop: "2rem", marginBottom: "2rem" }} width="100%" height="35rem" />
                </Paper>
            </Box>
        </>
    );
};

export default SinglePrepCardComp;
