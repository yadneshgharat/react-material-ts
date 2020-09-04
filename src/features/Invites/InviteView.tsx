import React, {FunctionComponent, useState} from 'react';
import {
    Avatar,
    Box, Button,
    createStyles,
    fade,
    Grid,
    InputBase,
    InputLabel, Menu,
    MenuItem,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Theme
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {makeStyles} from "@material-ui/core/styles";
import TableWrapper from "../../components/TableWrapper";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            backgroundColor: '#E7ECF6',
            borderRadius: theme.shape.borderRadius - 5,
            marginRight: 30
        },
        cell: {
            borderBottom: 'none'
        },
        header: {
            '& > *': {
                fontWeight: '600 !important'
            }
        },
        inputContainer: {
            padding: 15,
            marginRight: 20,
        },
        search: {
            position: 'relative',
            width: '300px',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.5),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.75),
            },

        },
        select: {
            position: 'relative',
            width: '200px',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.5),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.75),
            },
            padding: '12px'
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: '#000',
            width: '100%'
        },
        inputInput: {
            padding: theme.spacing(2, 2, 2, 2),
            // vertical padding + font size from searchIcon
            // width: 'inherit',
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '100%',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    })
)


const data = {
    avatar: '',
    name: 'Vijaya Tondon',
    mobileNo: 9754821630,
    personToMeet: 'Ramesh Chawla',
    purpose: 'Meeting',
    inTime: '11:30 am',
    outTime: '2:30 pm',
}

const columns = ['', 'Visitor name', 'Mobile No.', 'Person to meet', 'Purpose', 'In Time', 'Out Time']

interface OwnProps {
}

type Props = OwnProps;

const InviteView: FunctionComponent<Props> = (props) => {
    const classes = useStyles()

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

     let tableRows: any = []

    for (let i = 0; i < 10; i++) {
        let copy: any = tableRows

        tableRows = [data, ...copy]
    }

    return (
        <Grid item xs style={{height: "100%", marginTop: '22px'}}>
            <Paper className={classes.paper}>
                <Box display="flex" justifyContent="start">
                    <div className={classes.inputContainer}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                placeholder="Search visitor"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{'aria-label': 'search'}}
                            />
                        </div>
                    </div>
                    <div className={classes.inputContainer}>
                        <div className={classes.select}>
                            <InputLabel id="demo-simple-select-label" style={{
                                // padding: '0 10px',
                                // height: '100%',
                                position: 'absolute',
                                top: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>In Office</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                disableUnderline
                                className={classes.inputRoot}
                                style={{
                                    borderBottom: 'none',
                                    // padding: '12px',
                                    width: '100%'
                                }}
                            >
                                <MenuItem>1</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <div className={classes.inputContainer}>
                        <div className={classes.select}>
                            <InputLabel id="demo-simple-select-label" style={{
                                // padding: '0 10px',
                                // height: '100%',
                                position: 'absolute',
                                top: '18px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>All Purpose</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                disableUnderline
                                className={classes.inputRoot}
                                style={{
                                    borderBottom: 'none',
                                    // padding: '12px',
                                    width: '100%'
                                }}
                            >
                                <MenuItem>1</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <div className={classes.inputContainer}>
                        <div className={classes.select}>
                            <InputLabel id="demo-simple-select-label" style={{
                                // padding: '0 10px',
                                // height: '100%',
                                position: 'absolute',
                                top: '18px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>All Sites</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                disableUnderline
                                className={classes.inputRoot}
                                style={{
                                    borderBottom: 'none',
                                    // padding: '12px',
                                    width: '100%'
                                }}
                            >
                                <MenuItem>1</MenuItem>
                            </Select>
                        </div>
                    </div>
                </Box>
                <TableWrapper columns={columns} data={tableRows}/>
            </Paper>
        </Grid>
    );
};

export default InviteView;
