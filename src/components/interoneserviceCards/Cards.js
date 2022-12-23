import React, { Component } from "react";
import { SCards as S } from "../../styles";

export class Card extends Component {
  render() {
    const { logo, headertext, contenttext } = this.props;
    return (
      <>
        <S.Card>
          <S.CardHeader>
            <S.Logo src={logo} alt=""></S.Logo>
            <S.HeaderText>
              <p>{headertext}</p>
            </S.HeaderText>

            <S.CardContent>
              <S.ContentText>{contenttext}</S.ContentText>
            </S.CardContent>
          </S.CardHeader>
        </S.Card>
      </>
    );
  }
}

export default Card;
