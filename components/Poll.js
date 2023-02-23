import { View, Text } from 'react-native';
import React, { useState } from 'react';
import RNPoll from "react-native-poll";
import RNAnimated from "react-native-animated-component";

const choices = [
  { id: 1, choice: "Nike", votes: 12 },
  { id: 2, choice: "Adidas", votes: 1 },
];

const Poll = () => {
  const [pollsData, setpollsData] = useState(2);
  return (
    <View>
      <RNPoll
        appearFrom="left"
        style={{ marginTop: "-12%" }}
        animationDuration={500}
        totalVotes={pollsData}
        choices={choices}
        PollContainer={RNAnimated}
        PollItemContainer={RNAnimated}
        hasBeenVoted={false}
        //votedChoiceByID={choices}
        onChoicePress={(selectedChoice) =>
          console.log("SelectedChoice: ", selectedChoice)
        }
      />
    </View>
  );
};

export default Poll;