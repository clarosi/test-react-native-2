import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { CardSection } from '../Main';
import { objectToArray } from '../../shared/utils/helper';

const Employeelist = props => {
  const { employees } = props;
  const arrEmp = objectToArray(employees);

  return arrEmp.map(emp => {
    return (
      <TouchableWithoutFeedback
        key={emp.id}
        onPress={() => Actions.editEmployee({ employee: emp })}
      >
        <View>
          <CardSection>
            <Text>{emp.name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  });
};

export { Employeelist };
