import React, { Component, Fragment } from 'react';

import {
  Header, HeadingText, ProjectInfo, Role,
  Date, Context, ProjectDescription, Chevron, ChevronWrapper,
} from '~/styles';

import chevronIcon from '~/resources/icons/chevron.svg';

import { DataHeading } from '~/components/pages/header-data-project';

interface IProps {
  id: number;
  title: string;
  role: string;
  date: string;
  context: string;
  projectdescription: string;
}

export default class WorkHeading extends Component<IProps, any> {
  constructor(props) {
    super(props);
  }

  state = {
    items: DataHeading,
  };

  render() {
    const {
      title,
      role,
      date,
      context,
      projectdescription,
    } = this.props;

    return (
      <Header
        data-qa="big-header-image">
        <HeadingText
          data-qa="heading-text">
          {title}
        </HeadingText>

        <ChevronWrapper
          data-qa="content-wrapper">
          <ProjectInfo
            data-qa="project-info-wrapper">
            <Role>
              {role}
            </Role>

            <Date
              data-qa="project-date">
              {date}
            </Date>
            <Context>
              {context}
            </Context>
          </ProjectInfo>

          <ProjectDescription
            data-qa="project-description">
            {projectdescription}
          </ProjectDescription>

        </ChevronWrapper>
        <Chevron>
          <img src={chevronIcon} />
        </Chevron>
      </Header>


    );
  }
}
