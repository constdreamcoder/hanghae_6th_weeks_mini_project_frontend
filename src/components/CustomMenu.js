import React from "react";
import { Button, Grid } from "../elements";
import { actionCreators as postActions } from "../redux/modules/post";
import { useSelector, useDispatch } from "react-redux";
import SearchBox from "./SearchBox";

const CustomMenu = (props) => {
    const dispatch = useDispatch();

    const [count, setCount] = React.useState(0);

    const selectCategory = () => {
        setCount(count + 1);
    };

    const myBtnText = count % 2 === 1 ? "Main" : "MY Post";

    React.useEffect(() => {
        if (count % 2 === 1) {
            dispatch(postActions.setMypostFB());
        } else {
            dispatch(postActions.getPostFB());
        }
    }, [count]);

    return (
        <React.Fragment>
            <Grid width="400px">
                <Grid margin="40px">
                    <Button
                        _onClick={selectCategory}
                        text={myBtnText}
                        is_custom
                    ></Button>
                </Grid>
                {/* <SearchBox /> */}
            </Grid>
        </React.Fragment>
    );
};

export default CustomMenu;
