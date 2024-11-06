import { Hourglass } from "react-loader-spinner";

function Loader() {
    return (
        <Hourglass
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
            wrapperStyle={{margin: "0 auto"}}
        />
    )
}

export default Loader