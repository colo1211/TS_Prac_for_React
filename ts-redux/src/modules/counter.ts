// 액션을 정의할때는 뒤에 as const 를 반드시 붙여준다.

//  뒤에 as const 를 붙여줌으로써 나중에 액션 객체를 만들게 action.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 해줍니다.
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff, //액션에 부가적으로 필요한 값을 payload 라는 이름으로 통일
});

// 액션 객체들에 대한 타입을 선언
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

type CounterState = {
  count: number;
};

const initailState: CounterState = {
  count: 0,
};

export function counter(
  state: CounterState = initailState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case INCREASE:
      return {
        count: state.count + 1,
      };
    case DECREASE:
      return {
        count: state.count - 1,
      };
    case INCREASE_BY:
      return {
        count: state.count + action.payload,
      };
    default:
      return state;
  }
}

