import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../styles/Global';

const Dashboard = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Dashboard</Text>
    </View>
  );
};

export default Dashboard;
