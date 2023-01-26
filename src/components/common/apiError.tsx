interface IApiErrorProps {
  error: any;
}

const ApiError: React.FC<IApiErrorProps> = ({ error }) => {
  return <div>{JSON.stringify(error)}</div>;
};

export default ApiError;
