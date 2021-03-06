import React, { Component } from 'react';
import {
  SocialMediaWrapper,
  SocialMediaContact,
} from '~/styles';

import linkedin from '~/resources/icons/linkedin.svg';
import github from '~/resources/icons/github.svg';

export default class SocialMedia extends Component<any, any> {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <SocialMediaWrapper>
        <SocialMediaContact>
          <img src={linkedin} width="80px" />
        </SocialMediaContact>
        <SocialMediaContact>
          <img src={github} width="80px" />
        </SocialMediaContact>

      </SocialMediaWrapper>
    );
  }
}
