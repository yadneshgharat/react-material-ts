import React, { FunctionComponent } from 'react';
import {Box, createStyles, Grid, Paper, Theme} from "@material-ui/core";
import SearchInput from "../../components/SearchInput";
import TableWrapper from "../../components/TableWrapper";
import {makeStyles} from "@material-ui/core/styles";
import SelectInput from "../../components/SelectInput";

interface OwnProps {}

type Props = OwnProps;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            backgroundColor: '#E7ECF6',
            borderRadius: theme.shape.borderRadius - 5,
            marginRight: 30,
            paddingRight: 150
        },
    })
)

const data = {
    name: 'Pesh Infotech Ph1',
    address: '984 Sporer Highway',
    checkPoints: 'Gate 1',
}

//const columns = ['Site name', 'Address', 'CheckPoints']
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

const selectInputMenu = [{
    title: 'Add'
}, {
    title: 'Delete'
}, {
    title: 'Disable'
}]

const SitesView: FunctionComponent<Props> = (props) => {
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
        }]
    }


    return (
      <Grid item xs style={{height: "100%", marginTop: '22px'}}>
          <Paper className={classes.paper}>
              <Box display="flex" justifyContent="space-between">
                  <SearchInput placeholder="Search Employees by name, email or mobile" width={500}/>
                  <SelectInput value="Action" menuOptions={selectInputMenu} />
              </Box>

              <TableWrapper config={TableConfig}/>
          </Paper>
      </Grid>
  );
};

export default SitesView;
