import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';


// core components
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

const optionsStyle = {
  maxWidth: 255,
  marginRight: 'auto',
};

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
        minDate: minDate,
        maxDate: maxDate,
        autoOk: false,
        disableYearSelection: false,
        chipData: [
          { key: 0, label: 'Angular' },
          { key: 1, label: 'jQuery' },
          { key: 2, label: 'Polymer' },
          { key: 3, label: 'React' },
          { key: 4, label: 'Vue.js' },
        ],
      };
   const minDate = new Date();
   const maxDate = new Date();
   minDate.setFullYear(minDate.getFullYear() - 1);
   minDate.setHours(0, 0, 0, 0);
   maxDate.setFullYear(maxDate.getFullYear() + 1);
   maxDate.setHours(0, 0, 0, 0);

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

  this.handleChangeMinDate = (event, date) => {
    this.setState({
      minDate: date,
    });
  };

  this.handleChangeMaxDate = (event, date) => {
    this.setState({
      maxDate: date,
    });
  };

  this.handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };


  this.setState(state => {
    const chipData = [...state.chipData];
    const chipToDelete = chipData.indexOf(data);
    chipData.splice(chipToDelete, 1);
    return { chipData };
  });
  };

  render() {
  const { classes } = this.props;
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
              <GridItem xs={12} sm={12} md={2}>
                <DatePicker
                  onChange={this.handleChangeMinDate}
                  autoOk={this.state.autoOk}
                  floatingLabelText="Min Date"
                  defaultDate={this.state.minDate}
                  disableYearSelection={this.state.disableYearSelection}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={2}>
                <DatePicker
                  onChange={this.handleChangeMaxDate}
                  autoOk={this.state.autoOk}
                  floatingLabelText="Max Date"
                  defaultDate={this.state.maxDate}
                  disableYearSelection={this.state.disableYearSelection}
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
              tableHead={["Order number", "Descriptipn", "Channel", "Created on", "Created by", "Status"]}
              tableData={[
                ["4992566653", "Niger predulym", "Store", "26-07-2017 00:00","JSMONS","Error"],
                ["3995561487", "Minerva Hooper", "Store", "26-07-2017 00:00","Sinaai-Waas","Error"],
                ["5678564561", "Philip Chaney", "Store", "26-07-2017 00:00","Overland Park","Error"],
                ["3245561454", "Doris Greene", "Store", "26-07-2017 00:00","Feldkirchen","Error"],
                ["6541258968", "Niger predulym", "Store", "26-07-2017 00:00","Kärnten","Error"],
                ["7845136987", "Mason Porter", "Store", "26-07-2017 00:00","Gloucester","Error"],
                ["4992566653", "Niger predulym", "Store", "26-07-2017 00:00","JSMONS","Error"],
                ["3995561487", "Minerva Hooper", "Store", "26-07-2017 00:00","Sinaai-Waas","Error"],
                ["5678564561", "Philip Chaney", "Store", "26-07-2017 00:00","Overland Park","Error"],
                ["3245561454", "Doris Greene", "Store", "26-07-2017 00:00","Feldkirchen","Error"],
                ["6541258968", "Niger predulym", "Store", "26-07-2017 00:00","Kärnten","Error"],
                ["7845136987", "Mason Porter", "Store", "26-07-2017 00:00","Gloucester","Error"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
    </div>
  );
}
}

export default withStyles(styles)(TableList);
