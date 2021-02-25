import React from 'react';
import { faHome, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const sidebarButtonData = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FontAwesomeIcon icon={faHome} />,
  },
  {
    id: 2,
    url: '/comment',
    text: 'comment',
    icon: <FontAwesomeIcon icon={faCommentAlt} />,
  },
];
