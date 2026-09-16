import type { HTMLAttributes } from "react";
import {
  buttonClass,
  homeIconClass,
  notFoundIconClass,
  rootClass,
  titleClass,
} from "./styles.css";
import { Icon } from "@iconify-icon/react";
import { Button } from "@capg/capg-ui-lib";
import { useNavigate } from "react-router";

type NotFoundPageProps = HTMLAttributes<HTMLDivElement>;

const NotFoundPage = ({ ...rest }: NotFoundPageProps) => {
  const navigate = useNavigate();
  return (
    <section {...rest} className={rootClass}>
      <Icon
        icon={"fluent-emoji-high-contrast:alien-monster"}
        className={notFoundIconClass}
      />
      <span className={titleClass}>{"Well, this is awkward"}</span>
      <span>
        {
          "There is nothing here. You've discovered a place that does not exist."
        }
      </span>
      <Button
        className={buttonClass}
        appearance={"Ghost"}
        label="Return to main page"
        onClick={() => navigate("/")}
        icon={
          <Icon
            icon={"fluent:person-home-16-regular"}
            className={homeIconClass}
          />
        }
      />
    </section>
  );
};

export default NotFoundPage;
