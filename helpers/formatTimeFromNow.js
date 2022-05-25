import moment from "moment";

const formatTimeFromNow = (time) => {
    return moment(time).fromNow()
}

export default formatTimeFromNow