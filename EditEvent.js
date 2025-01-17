import React from 'react';
import { useParams } from 'react-router-dom';

const EditEvent = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Edit Event {id}</h1>
    </div>
  );
};

export default EditEvent;
