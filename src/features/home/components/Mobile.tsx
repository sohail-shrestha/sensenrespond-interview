import { useSelector } from "react-redux";
import { EmailBox } from "../../../components";
import { RootState } from "../../../store/store";

const Mobile: React.FC = () => {
  const a = useSelector((state: RootState) => state.home.subjectA);
  const b = useSelector((state: RootState) => state.home.subjectB);

  return (
    <div>
      <EmailBox title={"The green yoga"} time={"5:45 PM"} content={a} />
      <EmailBox title={"The Green Yaga"} time={"5:45 PM"} content={b} />
      <EmailBox
        title={"Brevo Academy"}
        time={"Spetember 6"}
        content={"Free email Markeeting course"}
        body="Learn how to create an email markeeting strategy."
      />
      <EmailBox
        title={"Brevo Academy"}
        time={"Spetember 6"}
        content={"Try the new drag and drop editor"}
        body="Learn how to save time % build beautiful email in a flash"
      />
    </div>
  );
};

export { Mobile };
