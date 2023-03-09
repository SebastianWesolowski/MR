import React from "react";

import { Button } from "@/components/Button/Button";
import { ContentBox } from "@/components/ContentBox/ContentBox";
import { GridBox } from "@/components/GridBox/GridBox";
import { GridLayout } from "@/components/GridLayout/GridLayout";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";

const Index = () => {
  return (
    <Main meta={<Meta title="Home" description="Home page title" />}>
      <GridLayout>
        <GridBox>
          <h1>Title</h1>
          <h2>Sub Title</h2>
          <p>
            Lorem 2 is a lorem ipsum generator brought to you by Manoverboard, a purpose-driven design studio based in
            beautiful Canada.
          </p>
          <p>
            Lorem 2 is a lorem ipsum generator brought to you by Manoverboard, a purpose-driven design studio based in
            beautiful Canada.
          </p>
          <Button link={"/1"}>Zobacz więcej</Button>
        </GridBox>
        <GridBox>
          <GridLayout>
            <GridBox>
              <ContentBox image={"https://picsum.photos/seed/picsu2m/1000/1000"}></ContentBox>
            </GridBox>
            <GridBox>
              <ContentBox image={"https://picsum.photos/seed/picsrum/1000/1000"}></ContentBox>
            </GridBox>
            <GridBox>
              <ContentBox image={"https://picsum.photos/seed/csum/1000/1000"}></ContentBox>
            </GridBox>
            <GridBox>
              <ContentBox image={"https://picsum.photos/seed/ss/1000/1000"}>
                <blockquote>
                  Lorem 2 is a lorem ipsum generator brought to you by Manoverboard, a purpose-driven design studio
                  based in beautiful Canada.
                </blockquote>
              </ContentBox>
            </GridBox>
          </GridLayout>
        </GridBox>
        <GridBox>
          <ContentBox image={"https://picsum.photos/seed/pics33um/1000/1000"}>
            <h3>Title 3</h3>
            <h3>Title 4</h3>
            <h3>Title 5</h3>
            <h3>Title 6</h3>
            <h3>Title 7</h3>
          </ContentBox>
        </GridBox>
        <GridBox>
          <h1>Title</h1>
          <h2>Sub Title</h2>
          <p>
            Lorem 2 is a lorem ipsum generator brought to you by Manoverboard, a purpose-driven design studio based in
            beautiful Canada.
          </p>
          <p>
            Lorem 2 is a lorem ipsum generator brought to you by Manoverboard, a purpose-driven design studio based in
            beautiful Canada.
          </p>
          <Button link={"/1"}>Zobacz więcej</Button>
        </GridBox>
      </GridLayout>
    </Main>
  );
};

export default Index;
