import React, { useEffect, useState } from 'react';
import {
  useAnimate,
  stagger,
  motion,
} from '../../../node_modules/framer-motion/dist/framer-motion';
import styled from 'styled-components';
import HistoryBox from '../../components/Mypage/HistoryBox/HistoryBox';
import Mypage from '../../components/Mypage/Mypage';
import * as S from './DashboardLogin.style';

export default function DashboardLogIn() {
  const [mypageOn, setMypageOn] = useState(false);

  const list = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.01,
        staggerChildren: 0.15,
      },
    },
  };

  const box = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'tween', ease: 'easeInOut' },
    },
  };

  const button = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        ease: 'easeInOut',
        duration: 0.8,
      },
    },
  };

  return (
    <>
      {mypageOn && <Mypage setMypageOn={setMypageOn} />}
      <S.DashboardContainer>
        <S.MypageIcon
          src={process.env.PUBLIC_URL + `/images/mypageIcon.png`}
          onClick={() => setMypageOn(prev => !prev)}
        />
        <S.TextWrapper>
          <S.MainText>Welcome Jang Su Chan</S.MainText>
          <S.SubText>
            Did you learn only node js?
            <br />
            Did you learn only functional components?
            <br />
            Welcome on then we will help.
          </S.SubText>
        </S.TextWrapper>
        <S.Bottom>
          <S.QuickmenuContainer>
            <S.SubTitleText>Quick Menu</S.SubTitleText>
            <S.QuickmenuWrapper>
              <S.QuickmenuButtonConvert
                as={motion.div}
                variants={button}
                initial="hidden"
                animate="visible"
              >
                <S.QuickmenuIcon
                  src={process.env.PUBLIC_URL + `/images/converterIcon.svg`}
                />
                <S.QuickmenuSpan>converter</S.QuickmenuSpan>
              </S.QuickmenuButtonConvert>
              <S.QuickmenuButtonConmment
                as={motion.div}
                variants={button}
                initial="hidden"
                animate="visible"
              >
                <S.QuickmenuIcon
                  src={process.env.PUBLIC_URL + `/images/commentIcon.svg`}
                />
                <S.QuickmenuSpan>comment</S.QuickmenuSpan>
              </S.QuickmenuButtonConmment>
            </S.QuickmenuWrapper>
          </S.QuickmenuContainer>
          <S.HistoryContaienr>
            <S.SubTitleText>History</S.SubTitleText>
            <S.HistoryList
              as={motion.ul}
              variants={list}
              initial="hidden"
              animate="visible"
            >
              <motion.li variants={box}>
                <HistoryBox />
              </motion.li>
              <motion.li variants={box}>
                <HistoryBox />
              </motion.li>
              <motion.li variants={box}>
                <HistoryBox />
              </motion.li>
            </S.HistoryList>
          </S.HistoryContaienr>
        </S.Bottom>
      </S.DashboardContainer>
    </>
  );
}
