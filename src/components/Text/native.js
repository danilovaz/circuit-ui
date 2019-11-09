/**
 * Copyright 2019, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// import styled from '@emotion/native';
import React from 'react';
import { Text as NativeText } from 'react-native';
import { isFunction } from 'lodash/fp';
import { useTheme } from 'emotion-theming';

import * as styles from './Text';

// eslint-disable-next-line react/prop-types
const Text = ({ size, bold, italic, strike, noMargin, style, ...props }) => {
  const theme = useTheme();
  return (
    <NativeText
      {...props}
      style={[
        styles.baseStyles({ theme }),
        styles.sizeStyles({ theme, size }),
        styles.boldStyles({ theme, bold }),
        styles.italicStyles({ theme, italic }),
        styles.strikeThroughStyles({ theme, strike }),
        styles.marginStyles({ theme, noMargin }),
        isFunction(style) ? style({ theme }) : style
      ]}
    />
  );
};

export default Text;
