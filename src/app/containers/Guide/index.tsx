/**
 *
 * Guide
 *
 */

import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectGuide } from './selectors';
import { guideSaga } from './saga';
import { RouteComponentProps } from '@reach/router';
import { AuthState } from '@aws-amplify/ui-components';

interface Props extends RouteComponentProps {
  authState?: typeof AuthState;
  guideId?: string;
}

export const Guide = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: guideSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const guide = useSelector(selectGuide);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Div>{t('')}</Div>
    </>
  );
});

const Div = styled.div``;
