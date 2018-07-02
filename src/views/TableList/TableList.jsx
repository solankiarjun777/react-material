import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

//Ant design
import { Input, Icon } from 'antd';

// core components
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const status = [
  {
    value: 'Approved',
  },
  {
    value: 'Reject',
  },
  {
    value: 'Applied',
  },
  {
    value: 'Pending'
  },
];

class TableList extends React.Component {

  constructor(props){
    super(props)
      this.state = {
        userName: '',
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        status: 'All',
        chipData: [
          { key: 0, label: 'Angular' },
          { key: 1, label: 'jQuery' },
          { key: 2, label: 'Polymer' },
          { key: 3, label: 'React' },
          { key: 4, label: 'Vue.js' },
        ],
      };
  }

  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  }

  onChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
  }

  handleDelete = data => () => {
  if (data.label === 'React') {
    alert('Why would you want to delete React?! :)'); // eslint-disable-line no-alert
    return;
  }

  this.setState(state => {
    const chipData = [...state.chipData];
    const chipToDelete = chipData.indexOf(data);
    chipData.splice(chipToDelete, 1);
    return { chipData };
  });
  };
  render() {
    const { classes } = this.props;
    const suffix = this.state.userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
  return (
    <div>
    <Grid container>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            <Grid container>
              <GridItem xs={12} sm={12} md={3}>
                <CustomInput
                  labelText="Order Number"
                  id="order_no"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="Amount"
                  id="amount"
                  inputType="number"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={2}>
                <CustomInput
                  labelText="Subscription"
                  id="subscription"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
            </Grid>
            <Grid container>
              <GridItem xs={12} sm={12} md={2}>
                <TextField
                  id="select-currency-native"
                  select
                  label="Status"
                  className={classes.textField}
                  SelectProps={{
                    native: true,
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  helperText="Please select your currency"
                  margin="normal"
                >
                  {status.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </TextField>
              </GridItem>
              <GridItem xs={12} sm={12} md={2}>
                <TextField
                  id="select-currency-native"
                  select
                  label="Channel"
                  className={classes.textField}
                  SelectProps={{
                    native: true,
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  helperText="Please select your currency"
                  margin="normal"
                >
                  {status.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </TextField>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Subscription"
                  id="subscription"
                  formControlProps={{
                    fullWidth: true
                  }}
                  type="search"
                  className={classes.textField}
                  margin="normal"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Subscription"
                  id="subscription"
                  formControlProps={{
                    fullWidth: true
                  }}
                  type="search"
                  className={classes.textField}
                  margin="normal"
                />
              </GridItem>
            </Grid>
          </CardBody>
          <CardFooter>
            <Button variant="outlined" size="medium">Clear</Button>
            <Button color="primary">Search</Button>
          </CardFooter>
        </Card>
      </GridItem>
    </Grid>
    <Grid container>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Country", "City", "Salary"]}
              tableData={[
                ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                ["Mason Porter", "Chile", "Gloucester", "$78,615"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
    <Input
       placeholder="Enter your username"
       prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
       suffix={suffix}
       value={this.state.userName}
       onChange={this.onChangeUserName}
       ref={node => this.userNameInput = node}
     />
    </div>
  );
}
}

export default withStyles(styles)(TableList);
