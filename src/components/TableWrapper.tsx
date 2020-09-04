import React, {FunctionComponent, useState} from 'react';
import {
    Button,
    createStyles, Menu, MenuItem, MenuProps,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Theme, withStyles
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {Link} from "react-router-dom";

interface IRow {
    [x: string]: string | number;
}

interface OwnProps {
    columns: string[];
    data?: IRow[];
}

type Props = OwnProps;

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props: MenuProps) => (
    <Menu
        elevation={1}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const useStyles = makeStyles((theme: Theme) => createStyles({
    header: {
        '& > *': {
            fontWeight: 600
        }
    },
    cell: {
        borderBottom: 'none'
    },
}))

const TableWrapper: FunctionComponent<Props> = (props) => {
    const classes = useStyles()

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const TableHeader = <TableHead className={classes.header}>
        {
            props.columns.map(column => (
                <TableCell key={column}>{column}</TableCell>
            ))
        }

    </TableHead>

    const body = <TableBody>
        {
            props.data.map((value, i) => (
                <TableRow key={i}>
                    {
                        Object.keys(value).map((key, i) => <TableCell key={i}>{value[key]}</TableCell>)
                    }
                    <TableCell className={classes.cell}>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <MoreHorizIcon/>
                        </Button>
                        <StyledMenu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <StyledMenuItem onClick={handleClose}>Check Out</StyledMenuItem>
                            <StyledMenuItem onClick={handleClose}>Resend Code</StyledMenuItem>
                            <StyledMenuItem onClick={handleClose}>
                                <Link to={"/visitor/" + i} style={{textDecoration: "none", color: "#192949"}}>
                                    View Details
                                </Link>
                            </StyledMenuItem>
                        </StyledMenu>
                    </TableCell>
                </TableRow>
            ))
        }
    </TableBody>

    return (
        <TableContainer>
            <Table>
                {TableHeader}
                {body}
            </Table>
        </TableContainer>
    );
};

export default TableWrapper;