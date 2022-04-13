import React, { useEffect } from "react";
import { Grid, Button, Input } from "../elements";

const Search = (props) => {
    const [count, setCount] = React.useState(0);
    console.log(count);
    console.log(props);

    const selectCategory = () => {
        setCount(count + 1);
    };

    React.useEffect(() => {
        if (count % 2 === 1) {
            console.log("my");
        }
    }, [count]);

    return (
        <Grid is_flex margin="20px">
            <Grid width="100px">
                <button onClick={selectCategory} name="my">
                    my
                </button>
            </Grid>
        </Grid>
    );
};

export default Search;
