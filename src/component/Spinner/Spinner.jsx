import { FidgetSpinner } from "react-loader-spinner";

const Spinner = () => {
    return <FidgetSpinner
    visible={true}
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
    ballColors={['blck', 'black', 'black']}
    backgroundColor="grey"
  />
};

export default Spinner;