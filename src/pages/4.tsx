import { useEffect, useState } from "react";

import { Meta } from "@/layouts/Meta";
import { fetchApiData } from "@/services/api";
import { Main } from "@/templates/Main";

const Page2 = () => {
  const [votes, setVotes] = useState([]);
  console.log("-> votes", votes);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const requestDetails = {
      method: "POST",
      body: {
        image_id: "id of the image",
        sub_id: "optional unique id of your user",
        value: 2,
      },
      endpoint: "votes/2",
    };

    fetchApiData(requestDetails)
      .then((data) => {
        // @ts-ignore
        setVotes([data]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Main meta={<Meta title="2" description="Voting Data" />}>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          {votes.map(({ message, id }) => (
            <li key={id}>{message}</li>
          ))}
        </div>
      )}
    </Main>
  );
};

export default Page2;
