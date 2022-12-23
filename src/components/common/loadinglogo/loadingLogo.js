import React from 'react'
import * as S from "./loadingLogo.style"
import { Loading } from "../../../assets/svgicon/svgIcons"
function LoadingLogo() {
    return (
        <S.Container>
            <S.LogoWrapper>
                <S.Logo>
                    <Loading />
                </S.Logo>
            </S.LogoWrapper>
        </S.Container>
    )
}

export default LoadingLogo
