// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// i-Sommelier components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "i-Sommelier",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "https://github.com/jonatasricianopresentation" },
        { name: "freebies", href: "https://github.com/jonatasricianotemplates/free" },
        { name: "premium tools", href: "https://github.com/jonatasricianotemplates/premium" },
        { name: "blog", href: "https://github.com/jonatasricianoblog" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", href: "https://iradesign.io/" },
        { name: "bits & snippets", href: "https://github.com/jonatasricianobits" },
        { name: "affiliate program", href: "https://github.com/jonatasricianoaffiliates/new" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "https://github.com/jonatasricianocontact-us" },
        { name: "knowledge center", href: "https://github.com/jonatasricianoknowledge-center" },
        { name: "custom development", href: "https://services.creative-tim.com/" },
        { name: "sponsorships", href: "https://github.com/jonatasricianosponsorships" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://github.com/jonatasricianoterms" },
        { name: "privacy policy", href: "https://github.com/jonatasricianoprivacy" },
        { name: "licenses (EULA)", href: "https://github.com/jonatasricianolicense" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Material Kit by{" "}
      <MKTypography
        component="a"
        href="https://github.com/jonatasriciano"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Jonatas Silveira
      </MKTypography>
      .
    </MKTypography>
  ),
};
