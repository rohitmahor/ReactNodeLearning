import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import DropDwonlist from "./components/DropDownList";
import SearchBox from "./components/SearchBox";
import { Button } from "@material-ui/core";
import initialData from "./initial-data";

export interface AppProps {}

export interface AppState {}

export interface Column {
  id: string;
  title: string;
  taskIds: string[];
}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <Typography
            component="div"
            style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
          >
            <Grid container spacing={0}>
              <Grid
                item
                xs={4}
                style={{
                  border: "1px solid black",
                  minHeight: "100vh",
                  padding: "15px"
                }}
              >
                <DropDwonlist></DropDwonlist>
              </Grid>

              <Grid
                item
                xs={4}
                style={{
                  border: "1px solid black",
                  minHeight: "100vh",
                  padding: "15px"
                }}
              >
                <Paper>xs=3</Paper>
              </Grid>
              <Grid
                item
                xs={4}
                style={{
                  border: "1px solid black",
                  minHeight: "100vh",
                  padding: "15px"
                }}
              >
                <DropDwonlist></DropDwonlist>

                <SearchBox></SearchBox>

                <Button
                  variant="contained"
                  color="primary"
                  href="#contained-buttons"
                  style={{ top: "5px" }}
                >
                  Filter
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  href="#contained-buttons"
                  style={{ top: "5px", marginLeft: "10px" }}
                >
                  Sort By
                </Button>
              </Grid>
            </Grid>
          </Typography>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
