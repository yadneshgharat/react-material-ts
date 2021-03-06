import React, {FunctionComponent} from 'react';
import TableWrapper from "../../components/TableWrapper";
import {createStyles, fade, Grid, Paper, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import SearchInput from "../../components/SearchInput";

interface OwnProps {
}

type Props = OwnProps;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            backgroundColor: '#E7ECF6',
            borderRadius: theme.shape.borderRadius - 5,
            marginRight: 30,
            paddingRight: 100
        },
    })
)


const data = {
    name: 'Vijaya Tondon',
    mobileNo: 9754821630,
    email: 'Vijaytandon@gmail.com',
    organization: 'Company Name'
}

//const columns = ['Visitor name', 'Mobile No.', 'Email', 'Organization']
const columns = [
    {
        id: "profilePicPath",
        label: '',
    },
    {
        id: "name",
        label: 'Visitor name'
    },
    {
        id: "mobile",
        label: 'Mobile No.'
    },
    {
        id: "tomeet",
        label: 'Person to meet'
    },
    {
        id: "purpose",
        label: 'Purpose'
    },
    {
        id: "intime",
        label: 'In Time'
    },
    {
        id: "outtime",
        label: 'Out Time'
    }]
const EmployeesView: FunctionComponent<Props> = (props) => {
    const classes = useStyles()


    let tableRows: any = []

    for (let i = 0; i < 10; i++) {
        let copy: any = tableRows

        tableRows = [data, ...copy]
    }


    const TableConfig = {
        columns: columns,
        data: tableRows,
        menuOptions: [{
            title: 'View Details',
            path: "/visitor/" + 2
        }, {
            title: 'Delete'
        }]
    }

    return (
        <Grid item xs style={{height: "100%", marginTop: '22px'}}>
            <Paper className={classes.paper}>
            <SearchInput placeholder="Search Employees by name, email or mobile" width={500}/>
                <TableWrapper config={TableConfig}/>
            </Paper>
        </Grid>
    );
};

export default EmployeesView;
