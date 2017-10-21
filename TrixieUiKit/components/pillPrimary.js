import React, {
  Component,
  PropTypes,
} from 'react';
import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import componentStyle from './style/component';

export default class PillPrimary extends Component {
  static propTypes = {
    text: PropTypes.string,
  }

  static defaultProps = {
    text: '',
  }

  render = () => {
    const { text } = this.props;
    return (
      <TouchableHighlight
        style={[componentStyle.actionButton, componentStyle.mt10]}
        underlayColor="#f1f1f1"
      >
        <View>
          <Text style={componentStyle.actionButtonText}>{text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
