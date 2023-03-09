import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";

const Page1 = () => {
  return (
    <Main meta={<Meta title="Home" description="Home page title" />}>
      <p>Page 1</p>
    </Main>
  );
};

export default Page1;
