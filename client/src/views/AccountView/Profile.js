import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";

// const user = {
//   avatar: "/static/images/avatars/avatar_6.png",
//   city: "Los Angeles",
//   country: "USA",
//   jobTitle: "Senior Developer",
//   name: "Katarina Smith",
//   timezone: "GTM-7",
// };

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100,
  },
}));

const Profile = ({ className, ...rest }) => {
  const classes = useStyles();
  const { user } = useAuth0();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box alignItems="center" display="flex" flexDirection="column">
          <Avatar className={classes.avatar} src={user.picture} />
          <Typography color="textPrimary" gutterBottom variant="h3">
            {user.nickname}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {`${user.email}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button color="primary" fullWidth variant="text">
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;
