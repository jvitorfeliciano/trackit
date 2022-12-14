import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import MyContext from "../Mycontext";
import DailyHabit from "./TodayPageComponents.js/DailyHabit";
import dayjs from "dayjs";
import Loading from "../components/Loading";

export default function TodayPage() {
 const {habitsVector, updateStatus, setUpdateStatus, percentage} = useContext(MyContext)
  function translateName() {
    switch (dayjs().format("dddd")) {
      case "Sunday":
        return "Domingo";
      case "Monday":
        return "Segunda";
      case "Tuesday":
        return "Terça";
      case "Wednesday":
        return "Quarta";
      case "Thursday":
        return "Quinta";
      case "Friday":
        return "Sexta";
      case "Saturday":
        return "Sábado";
      default:
        break;
    }
  }
  if (habitsVector === null) {
    return (
      <>
        <Header />
        <TodayPageContainer>
          <Loading />
        </TodayPageContainer>
        <Footer />
      </>
    );
  }
  return (
    <div>
      <Header />
      <TodayPageContainer>
        <DateToday changeColor={percentage !== 0}>
          <h2 data-identifier="today-infos">
            {translateName()}, {dayjs().format("DD/MM")}
          </h2>
          <p data-identifier="today-infos">
            {percentage === 0
              ? "Nenhum hábito concluido ainda"
              : percentage + "% dos hábitos concluidos hoje"}
          </p>
        </DateToday>
        {habitsVector.map((e, i) => (
          <DailyHabit
            key={i}
            name={e.name}
            done={e.done}
            currentSequence={e.currentSequence}
            highestSequence={e.highestSequence}
            id={e.id}
            updateStatus={updateStatus}
            setUpdateStatus={setUpdateStatus}
          />
        ))}
      </TodayPageContainer>
      <Footer />
    </div>
  );
}

const TodayPageContainer = styled.main`
  margin: 80px 0 150px 0;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e5e5e5;
`;
const DateToday = styled.section`
  width: 340px;
  margin-top: 28px;
  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: ${(props) => (props.changeColor === true ? "#8FC549" : "#bababa")};
    margin-bottom: 28px;
  }
`;
