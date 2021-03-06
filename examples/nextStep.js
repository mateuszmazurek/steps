require('rc-steps/assets/index.less');
require('rc-steps/assets/iconfont.less');
require('./nextStep.css');

const React = require('react');
const ReactDOM = require('react-dom');
const { Steps, Step } = require('rc-steps');

const container = document.getElementById('__react-content');

function generateRandomSteps() {
  const n = Math.floor(Math.random() * 3) + 3;
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push({
      title: `步骤${(i + 1)}`,
    });
  }
  return arr;
}
const steps = generateRandomSteps();

const MyForm = React.createClass({
  getInitialState() {
    return {
      currentStep: Math.floor(Math.random() * steps.length),
    };
  },
  nextStep() {
    let s = this.state.currentStep + 1;
    if (s === steps.length) {
      s = 0;
    }
    this.setState({
      currentStep: s,
    });
  },
  render() {
    const cs = this.state.currentStep;
    return (
      <form className="my-step-form">
        <div>这个demo随机生成3~6个步骤，初始随机进行到其中一个步骤</div>
        <div>当前正在执行第{cs + 1}步</div>
        <div className="my-step-container">
          <Steps current={cs}>
            {
              steps.map((s, i) => {
                return (
                  <Step
                    key={i}
                    title={s.title}
                  />
                );
              })
            }
          </Steps>
        </div>

        <div><button type="button" onClick={this.nextStep}>下一步</button></div>
      </form>
    );
  },
});

ReactDOM.render(<MyForm />, container);
