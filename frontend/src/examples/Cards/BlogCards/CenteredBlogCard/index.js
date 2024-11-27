// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// i-Sommelier components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Import the colors from the theme
import colors from "assets/theme/base/colors";

function CenteredBlogCard({ image, title, description, action, bgColor }) {
  return (
    <Card
      sx={{
        backgroundColor: bgColor || colors.background.default
      }}
    >
      <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>
        <MKBox
          component="img"
          src={image}
          alt={title}
          borderRadius="lg"
          width="100%"
          position="relative"
          zIndex={1}
          bgColor="white"
          shadow="md"
        />

      </MKBox>
      <MKBox p={3} mt={-1} textAlign="center">
        <MKTypography display="inline" variant="h5" textTransform="capitalize" fontWeight="regular">
          {title}
        </MKTypography>
        <MKBox mt={1} mb={3}>
          <MKTypography variant="body2" component="p" color="inherit">
            {description}
          </MKTypography>
        </MKBox>
        {action.type === "external" ? (
          <MKButton
            component={MuiLink}
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="gradient"
            size="small"
            color={action.color ? action.color : "dark"}
          >
            {action.label}
          </MKButton>
        ) : (
          <MKButton
            component={Link}
            to={action.route}
            variant="gradient"
            size="small"
            color={action.color ? action.color : "dark"}
          >
            {action.label}
          </MKButton>
        )}
      </MKBox>
    </Card>
  );
}

// Typechecking props for the CenteredBlogCard
CenteredBlogCard.propTypes = {
  image: PropTypes.string.isRequired, // Image source is required
  title: PropTypes.string.isRequired, // Title is required
  description: PropTypes.string.isRequired, // Description is required
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired, // Action type must be "external" or "internal"
    route: PropTypes.string.isRequired, // Route is required
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]), // Button color must match these values
    label: PropTypes.string.isRequired, // Button label is required
  }).isRequired,
  bgColor: PropTypes.string, // Background color is optional
};

CenteredBlogCard.defaultProps = {
  bgColor: colors.background.default, // Default background color
};

export default CenteredBlogCard;