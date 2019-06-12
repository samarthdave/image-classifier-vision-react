import React from 'react';

const QuerySettings = (props) => {
  const {
    iterationName,
    projectId,
    trainingApiKey,
    predictionApiKey,
    onQueryChange
  } = props;

  const items = [{
    value: iterationName,
    name: 'iterationName',
    placeholder: 'iterationName',
  }, {
    value: projectId,
    name: 'projectId',
    placeholder: 'projectId',
  }, {
    value: trainingApiKey,
    name: 'trainingApiKey',
    placeholder: 'trainingApiKey',
  }, {
    value: predictionApiKey,
    name: 'predictionApiKey',
    placeholder: 'predictionApiKey',
  }];

  return (
    <div className="query-settings">
      {items.map((e, i) => (
        <input key={i} type="text" onChange={onQueryChange} {...e} />
      ))}
    </div>
  );
};

export default QuerySettings;