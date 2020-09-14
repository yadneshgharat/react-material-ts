import React, {FunctionComponent} from 'react';
import {createStyles, fade, InputLabel, MenuItem, Select, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import theme from "../theme";
import {RouteComponentProps} from "react-router-dom";

interface IMenuOptions {
    title: string;
}

interface OwnProps extends React.HTMLAttributes<any> {
    value: string;
    padding?: number;
    menuOptions?: IMenuOptions[];
}

type Props = OwnProps;

const useStyles = makeStyles((theme: Theme) => createStyles({
    inputContainer: {
        padding: (props: Props) => props.padding ? props.padding : 15,
        marginRight: 20,
        '& .MuiButtonBase-root, .MuiListItem-root, .MuiMenuItem-root, .Mui-selected, .MuiMenuItem-gutters, .MuiListItem-gutters, .MuiListItem-button, .Mui-selected': {
            backgroundColor: '#fff',
        },
        '& .makeStyles-inputRoot-46': {
            backgroundColor: fade(theme.palette.common.white, 0.5),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.75),
            },
        }
    },
    select: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.5),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.75),
        },
        width: '200px',
        padding: '12px'
    },
    inputRoot: {
        // color: '#000',
        // backgroundColor: fade(theme.palette.common.white, 0.5),
backgroundColor: fade(theme.palette.common.white, 0.1),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.5),
        },
    },
    menuItem: {
        // backgroundColor: fade(theme.palette.common.white, 0.5),
    }
}))

const SelectInput: FunctionComponent<Props> = (props) => {
    const classes = useStyles(props)
    return (
        <div className={classes.inputContainer}>
            <div className={classes.select} {...props}>
                <InputLabel id="demo-simple-select-label" style={{
                    // padding: '0 10px',
                    position: 'absolute',
                    top: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>{props.value}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    disableUnderline
                    className={classes.inputRoot}
                    style={{
                        borderBottom: 'none',
                        // padding: '12px',
                        width: '100%'
                    }}
                    MenuProps={{
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "right"
                        },
                        transformOrigin: {
                            vertical: "top",
                            horizontal: "right"
                        },
                        getContentAnchorEl: null
                    }}
                >
                    {
                        props.menuOptions ? props.menuOptions.map(item => <MenuItem className={classes.menuItem}
                            key={item.title}>{item.title}</MenuItem>) : <MenuItem>1</MenuItem>
                    }
                </Select>
            </div>
        </div>
    );
};

export default SelectInput;
