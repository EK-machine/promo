import React from 'react';
import { faHome, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const sidebarButtonData = [
  {
    id: 1,
    url: '/',
    text: 'HOME',
    icon: <FontAwesomeIcon icon={faHome} />,
  },
  {
    id: 2,
    url: '/comment',
    text: 'COMMETS',
    icon: <FontAwesomeIcon icon={faCommentAlt} />,
  },
];
