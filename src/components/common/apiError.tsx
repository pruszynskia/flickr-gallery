interface IApiErrorProps {
  error: any;
}
// TODO:
// I could do better implementation od error message maping response from API.
// To do it i would use 2 sets of enums

const ApiError: React.FC<IApiErrorProps> = ({ error }) => {
  return <div>{JSON.stringify(error)}</div>;
};

export default ApiError;
