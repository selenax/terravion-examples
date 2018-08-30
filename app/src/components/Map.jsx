import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import token from '../../config.js';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
});

class Map1 extends Component {
  render() {
    const { classes, epochTimes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {epochTimes.map(capture => {
              return (
                <TableRow key={capture.ncLayerId}>
                  <TableCell component="th" scope="row">
                  <img src={`https://api2.terravion.com/users/${token.UserID}/15/5290/20191.png?epochStart=${capture.layerDateEpoch}&epochEnd=${capture.layerDateEpoch}&access_token=${token.AccessToken}&product=${token.ProductCode}`} />
                    
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

Map1.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Map1);
