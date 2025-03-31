import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import { useColors } from "../hooks/useColors";
import { strings } from "../utils/strings";
import { countdownstyle } from "../styles/CountdownStyle";

const CountDownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60 + 12 * 60 + 56);
  const colors = useColors();

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return [hours, minutes, secs].map((t) => (t < 10 ? `0${t}` : t));
  };

  const [hours, minutes, seconds] = formatTime(timeLeft);

  return (
    <View style={countdownstyle.container}>
      <Text style={[countdownstyle.label, { color: colors.colors.text }]}>
        {strings.ClosingIn}
      </Text>
      <View style={countdownstyle.timerContainer}>
        <View style={countdownstyle.timeBox}>
          <Text style={countdownstyle.timeText}>{hours}</Text>
        </View>
        <Text style={[countdownstyle.separator, { color: colors.colors.text }]}>:</Text>
        <View style={countdownstyle.timeBox}>
          <Text style={countdownstyle.timeText}>{minutes}</Text>
        </View>
        <Text style={[countdownstyle.separator, { color: colors.colors.text }]}>:</Text>
        <View style={countdownstyle.timeBox}>
          <Text style={countdownstyle.timeText}>{seconds}</Text>
        </View>
      </View>
    </View>
  );
};


export default CountDownTimer;
