import React from "react";
import "./App.css";
import PostWrite from "../pages/PostWrite";
import { Grid } from "../elements";

function App() {
    return (
        <React.Fragment>
            <Grid width="50vw" margin="0 auto">
                <PostWrite></PostWrite>
            </Grid>
        </React.Fragment>
    );
}

export default App;
