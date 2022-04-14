import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/comment";
import { Input, Button, Grid } from "../elements";

const SearchBox = (props) => {
    const dispatch = useDispatch();
    const [item, setItem] = React.useState("");

    const selectItem = (e) => {
        const items = e.target.value;
        setItem(items);
    };

    const searchItem = () => {
        if (item === "") {
            window.alert("검색할 식재료를 입력해주세요!");
            return;
        }

        dispatch(postActions.searchPostFB(item));
    };

    React.useEffect(() => {
    }, []);

    return (
        <React.Fragment>
            <Grid margin="30px" width="300px" pading="10px" is_flex>
                <Input border="none" width="150px" _onChange={selectItem} />
                <Button
                    width="100px"
                    text="검색"
                    _onClick={searchItem}
                ></Button>
            </Grid>
        </React.Fragment>
    );
};

export default SearchBox;
