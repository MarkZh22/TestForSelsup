import React, { Component } from 'react';
import { Param, ParamValue, Model } from './types';
import styled from 'styled-components';
interface Props {
  params: Param[];
  model: Model;
}

interface State {
  paramValues: ParamValue[];
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      paramValues: props.model.paramValues,
    };
  }

  handleParamValueChange = (paramId: number, value: string) => {
    const { paramValues } = this.state;
    const updatedParamValues = paramValues.map((paramValue) =>
      paramValue.paramId === paramId ? { ...paramValue, value } : paramValue
    );
    this.setState({ paramValues: updatedParamValues });
  };

  getModel = (): Model => {
    return {
      paramValues: this.state.paramValues,
    };
  };

  render() {
    const { params } = this.props;
    const { paramValues } = this.state;

    return (
      <Wrapper>
        {params.map((param) => (
          <FlexRow key={param.id}>
            <label htmlFor={`param-${param.id}`}><ParamNameStyle>{param.name}</ParamNameStyle></label>
            <input
              id={`param-${param.id}`}
              type="text"
              value={paramValues.find((p) => p.paramId === param.id)?.value || ''}
              onChange={(e) => this.handleParamValueChange(param.id, e.target.value)}
            />
          </FlexRow>
        ))}
        <button onClick={() => console.log(this.getModel())}>Вывод в консоль</button>
      </Wrapper>
    );
  }
}
const ParamNameStyle = styled.div`
  color: black;
  font-size: 25px;
  font-weight: 500;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;
const Wrapper = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 0 auto;
    width: 320px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
export default App;
